import { randomUUID } from 'crypto';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { formSubmissionSchema, MAX_FORM_PAYLOAD_BYTES, type FormType } from '@/lib/forms/contracts';
import { checkFormRateLimit, normalizeClientIp } from '@/lib/server/form-rate-limit';
import { getMailConfig } from '@/lib/server/mail-config';
import { getClientIp, isAllowedFormRequest } from '@/lib/server/request-security';
import { formatCamelCaseName } from '@/lib/utils/general';
import { mailTemplate, type MailTemplateData } from '../utils/mailTemplate';
import { mailText } from '../utils/mailText';

export const runtime = 'nodejs';

const formLabels: Record<FormType, string> = {
  volunteer: 'Volunteer',
  contact: 'Contact',
};

const failureMessages = {
  validation: 'Please check the form and try again.',
  tooLarge: 'This submission is too large. Please shorten your message and try again.',
  rateLimited: 'Too many attempts. Please try again later.',
  unavailable: 'This form is temporarily unavailable. Please try again later.',
  deliveryFailed: 'We could not send your message. Please try again later.',
} as const;

function logEvent({
  requestId,
  formType,
  status,
  failureCode,
}: {
  requestId: string;
  formType: FormType | 'unknown';
  status: 'success' | 'failure';
  failureCode?: string;
}) {
  console.info(
    JSON.stringify({
      event: 'form_submission',
      requestId,
      formType,
      status,
      ...(failureCode ? { failureCode } : {}),
    })
  );
}

function failureResponse(
  body: {
    success: false;
    code:
      | 'VALIDATION_ERROR'
      | 'PAYLOAD_TOO_LARGE'
      | 'RATE_LIMITED'
      | 'MAIL_UNAVAILABLE'
      | 'MAIL_DELIVERY_FAILED';
    message: string;
    fieldErrors?: Record<string, string[] | undefined>;
  },
  status: number,
  headers?: HeadersInit
) {
  return NextResponse.json(body, { status, headers });
}

function getFieldErrors(error: { issues: Array<{ path: PropertyKey[]; message: string }> }) {
  const fields = new Set([
    'fullName',
    'email',
    'phoneNumber',
    'areasOfInterest',
    'availability',
    'relevantExperience',
    'additionalMessage',
    'subject',
    'message',
  ]);
  const fieldErrors: Record<string, string[]> = {};

  for (const issue of error.issues) {
    const field = issue.path[0] === 'fields' ? issue.path[1] : issue.path[0];
    if (typeof field !== 'string' || !fields.has(field)) continue;
    fieldErrors[field] ??= [];
    if (!fieldErrors[field].includes(issue.message)) fieldErrors[field].push(issue.message);
  }

  return Object.keys(fieldErrors).length ? fieldErrors : undefined;
}

export async function POST(request: NextRequest) {
  const requestId = randomUUID();
  let formType: FormType | 'unknown' = 'unknown';

  if (!isAllowedFormRequest(request)) {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'VALIDATION_ERROR' });
    return failureResponse(
      { success: false, code: 'VALIDATION_ERROR', message: failureMessages.validation },
      403
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'VALIDATION_ERROR' });
    return failureResponse(
      { success: false, code: 'VALIDATION_ERROR', message: failureMessages.validation },
      400
    );
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_FORM_PAYLOAD_BYTES) {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'PAYLOAD_TOO_LARGE' });
    return failureResponse(
      { success: false, code: 'PAYLOAD_TOO_LARGE', message: failureMessages.tooLarge },
      413
    );
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'VALIDATION_ERROR' });
    return failureResponse(
      { success: false, code: 'VALIDATION_ERROR', message: failureMessages.validation },
      400
    );
  }

  if (typeof payload === 'object' && payload !== null && 'formType' in payload) {
    const requestedFormType = payload.formType;
    if (requestedFormType === 'volunteer' || requestedFormType === 'contact') {
      formType = requestedFormType;
    }
  }

  const parsed = formSubmissionSchema.safeParse(payload);
  if (!parsed.success) {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'VALIDATION_ERROR' });
    return failureResponse(
      {
        success: false,
        code: 'VALIDATION_ERROR',
        message: failureMessages.validation,
        fieldErrors: getFieldErrors(parsed.error),
      },
      400
    );
  }

  formType = parsed.data.formType;
  const rateLimit = checkFormRateLimit(normalizeClientIp(getClientIp(request)), formType);
  if (!rateLimit.allowed) {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'RATE_LIMITED' });
    return failureResponse(
      { success: false, code: 'RATE_LIMITED', message: failureMessages.rateLimited },
      429,
      { 'Retry-After': String(rateLimit.retryAfterSeconds) }
    );
  }

  const config = getMailConfig();
  if (!config) {
    logEvent({ requestId, formType, status: 'failure', failureCode: 'MAIL_UNAVAILABLE' });
    return failureResponse(
      { success: false, code: 'MAIL_UNAVAILABLE', message: failureMessages.unavailable },
      503
    );
  }

  const label = formLabels[formType];
  const data: MailTemplateData[] = Object.entries(parsed.data.fields).map(([property, value]) => ({
    property: formatCamelCaseName(property),
    value: Array.isArray(value) ? value.join(', ') : value,
  }));
  const title = `${label} Form Submission`;
  const top = [
    `You've received a new submission through the website ${label.toLowerCase()} form.`,
    'The details provided by the sender are included below for your review.',
  ];
  const end = 'Please follow up with the sender if further information is needed.';
  const html = mailTemplate({ title, top: [top], data, end });
  const text = mailText({ title, top, data, end });

  try {
    const transporter = nodemailer.createTransport({
      port: config.emailPort,
      host: config.emailHost,
      auth: { user: config.fromEmail, pass: config.password },
      secure: config.secureMail,
    });

    await transporter.sendMail({
      from: `The SHE Initiative Website <${config.fromEmail}>`,
      to: `The SHE Initiative <${config.toEmail}>`,
      replyTo: `${parsed.data.fields.fullName} <${parsed.data.fields.email}>`,
      subject: title,
      html,
      text,
    });
  } catch (error) {
    void error;
    logEvent({ requestId, formType, status: 'failure', failureCode: 'MAIL_DELIVERY_FAILED' });
    return failureResponse(
      { success: false, code: 'MAIL_DELIVERY_FAILED', message: failureMessages.deliveryFailed },
      502
    );
  }

  logEvent({ requestId, formType, status: 'success' });
  return NextResponse.json({ success: true, message: 'Mail sent successfully' }, { status: 200 });
}
