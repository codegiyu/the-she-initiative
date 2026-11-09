import { afterEach, describe, expect, it } from 'vitest';
import { DEFAULT_FROM_EMAIL, DEFAULT_TO_EMAIL, getMailConfig } from './mail-config';

const originalEnvironment = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnvironment };
});

describe('mail configuration', () => {
  it('parses a valid Resend configuration', () => {
    process.env.RESEND_API_KEY = 're_test_key';
    process.env.fromEmail = 'sender@example.com';
    process.env.toEmail = 'recipient@example.com';

    expect(getMailConfig()).toMatchObject({
      resendApiKey: 're_test_key',
      fromEmail: 'sender@example.com',
      toEmail: 'recipient@example.com',
    });
  });

  it('uses the site sender and contact email when address overrides are omitted', () => {
    process.env.RESEND_API_KEY = 're_test_key';
    delete process.env.fromEmail;
    delete process.env.toEmail;

    expect(getMailConfig()).toMatchObject({
      resendApiKey: 're_test_key',
      fromEmail: DEFAULT_FROM_EMAIL,
      toEmail: DEFAULT_TO_EMAIL,
    });
  });

  it('rejects incomplete or invalid Resend configuration', () => {
    process.env.RESEND_API_KEY = '';
    process.env.fromEmail = 'sender@example.com';
    process.env.toEmail = 'recipient@example.com';

    expect(getMailConfig()).toBeNull();

    process.env.RESEND_API_KEY = 're_test_key';
    process.env.fromEmail = 'not-an-email';
    process.env.toEmail = 'recipient@example.com';

    expect(getMailConfig()).toBeNull();
  });
});
