import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { resetFormRateLimitForTests } from '@/lib/server/form-rate-limit';

const { Resend, send } = vi.hoisted(() => ({
  Resend: vi.fn(),
  send: vi.fn(),
}));

vi.mock('resend', () => ({ Resend }));

import { POST } from './route';

const validContact = {
  formType: 'contact',
  fields: {
    fullName: 'Ada Lovelace',
    email: 'ada@example.com',
    phoneNumber: '+234 800 000 0000',
    subject: 'Support request',
    message: 'I would like to learn more about the initiative.',
  },
  website: '',
};

const validVolunteer = {
  formType: 'volunteer',
  fields: {
    fullName: 'Grace Hopper',
    email: 'grace@example.com',
    phoneNumber: '+234 801 111 2222',
    areasOfInterest: 'Mentoring & Counseling',
    availability: 'Weekends only',
    relevantExperience: 'Community mentoring',
    additionalMessage: 'I would love to support the program.',
  },
  website: '',
};

function requestFor(payload: unknown, headers: Record<string, string> = {}) {
  return new NextRequest('http://localhost:3000/api/send-company-mail', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: 'http://localhost:3000',
      'x-forwarded-for': '203.0.113.20',
      ...headers,
    },
    body: JSON.stringify(payload),
  });
}

async function jsonResponse(response: Response) {
  return { status: response.status, body: await response.json() };
}

beforeEach(() => {
  process.env.RESEND_API_KEY = 're_test_key';
  process.env.fromEmail = 'no-reply@thesolaceinitiative.org';
  process.env.toEmail = 'recipient@example.com';
  process.env.SITE_URL = 'https://thesolaceinitiative.org';
  resetFormRateLimitForTests();
  send.mockReset().mockResolvedValue({ data: { id: 'private-message-id' }, error: null });
  Resend.mockReset().mockImplementation(() => ({ emails: { send } }));
});

afterEach(() => vi.restoreAllMocks());

describe('POST /api/send-company-mail', () => {
  it('sends valid submissions with a text alternative and sanitized response', async () => {
    const logSpy = vi.spyOn(console, 'info').mockImplementation(() => undefined);
    const result = await jsonResponse(await POST(requestFor(validContact)));

    expect(result).toEqual({
      status: 200,
      body: { success: true, message: 'Mail sent successfully' },
    });
    expect(Resend).toHaveBeenCalledWith('re_test_key');
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'The SHE Initiative Website <no-reply@thesolaceinitiative.org>',
        to: ['The SHE Initiative <recipient@example.com>'],
        replyTo: 'Ada Lovelace <ada@example.com>',
        text: expect.stringContaining('Ada Lovelace'),
      })
    );
    expect(logSpy.mock.calls.join(' ')).not.toContain('Ada Lovelace');
    expect(logSpy.mock.calls.join(' ')).not.toContain('ada@example.com');
  });

  it('sends valid volunteer submissions using the same JSON contract', async () => {
    const result = await jsonResponse(
      await POST(requestFor(validVolunteer, { 'x-forwarded-for': '203.0.113.22' }))
    );

    expect(result.status).toBe(200);
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: 'Volunteer Form Submission',
        replyTo: 'Grace Hopper <grace@example.com>',
      })
    );
  });

  it('returns a generic validation error for malformed JSON', async () => {
    const request = new NextRequest('http://localhost:3000/api/send-company-mail', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000', 'content-type': 'application/json' },
      body: '{not-json',
    });

    expect(await jsonResponse(await POST(request))).toEqual({
      status: 400,
      body: {
        success: false,
        code: 'VALIDATION_ERROR',
        message: 'Please check the form and try again.',
      },
    });
  });

  it('rejects cross-site, honeypot, and unknown-field submissions', async () => {
    const crossSite = await jsonResponse(
      await POST(
        requestFor(validContact, {
          origin: 'https://attacker.example',
          'sec-fetch-site': 'cross-site',
        })
      )
    );
    const honeypot = await jsonResponse(
      await POST(requestFor({ ...validContact, website: 'bot value' }))
    );
    const unknownField = await jsonResponse(
      await POST(requestFor({ ...validContact, fields: { ...validContact.fields, extra: 'nope' } }))
    );

    expect(crossSite.status).toBe(403);
    expect(honeypot.status).toBe(400);
    expect(unknownField.status).toBe(400);
    expect(unknownField.body).not.toHaveProperty('extra');
    expect(send).not.toHaveBeenCalled();
  });

  it('rejects payloads over 32 KiB before parsing', async () => {
    const oversized = {
      ...validContact,
      fields: { ...validContact.fields, message: 'x'.repeat(33_000) },
    };
    expect(await jsonResponse(await POST(requestFor(oversized)))).toEqual({
      status: 413,
      body: {
        success: false,
        code: 'PAYLOAD_TOO_LARGE',
        message: 'This submission is too large. Please shorten your message and try again.',
      },
    });
  });

  it('returns 429 with Retry-After after five attempts', async () => {
    const responses = [];
    for (let attempt = 0; attempt < 6; attempt += 1) {
      responses.push(await jsonResponse(await POST(requestFor(validContact))));
    }

    expect(responses.slice(0, 5).every(item => item.status === 200)).toBe(true);
    expect(responses[5]).toEqual({
      status: 429,
      body: {
        success: false,
        code: 'RATE_LIMITED',
        message: 'Too many attempts. Please try again later.',
      },
    });
  });

  it('hides Resend misconfiguration and delivery failures', async () => {
    process.env.RESEND_API_KEY = '';
    const unavailable = await jsonResponse(await POST(requestFor(validContact)));

    process.env.RESEND_API_KEY = 're_test_key';
    send.mockResolvedValueOnce({
      data: null,
      error: { name: 'api_error', message: 'private Resend failure' },
    });
    const failed = await jsonResponse(
      await POST(requestFor(validContact, { 'x-forwarded-for': '203.0.113.21' }))
    );

    expect(unavailable.status).toBe(503);
    expect(unavailable.body).toEqual(
      expect.objectContaining({ success: false, code: 'MAIL_UNAVAILABLE' })
    );
    expect(failed.status).toBe(502);
    expect(failed.body).toEqual(
      expect.objectContaining({ success: false, code: 'MAIL_DELIVERY_FAILED' })
    );
    expect(JSON.stringify(failed.body)).not.toContain('private Resend failure');
  });
});
