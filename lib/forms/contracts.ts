import { z } from 'zod';

const requiredText = (label: string, minimum: number, maximum: number) =>
  z
    .string({ error: `Please enter ${label.toLowerCase()}` })
    .trim()
    .min(minimum, {
      error:
        minimum === 1
          ? `Please enter ${label.toLowerCase()}`
          : `${label} must be at least ${minimum} characters`,
    })
    .max(maximum, { error: `${label} must be ${maximum} characters or fewer` });

const optionalText = (label: string, maximum: number) =>
  z
    .string({ error: `${label} must be text` })
    .trim()
    .max(maximum, { error: `${label} must be ${maximum} characters or fewer` });

export const fullNameSchema = requiredText('Full name', 3, 100);

export const emailSchema = z
  .string({ error: 'Please enter an email address' })
  .trim()
  .max(254, { error: 'Email address is too long' })
  .email({ error: 'Please enter a valid email' });

export const phoneNumberSchema = z
  .string({ error: 'Please enter a phone number' })
  .trim()
  .min(7, { error: 'Please enter a valid phone number' })
  .max(20, { error: 'Phone number is too long' })
  .regex(/^\+?[0-9 ()-]+$/, {
    error: 'Phone number may only contain numbers, spaces, parentheses, +, and -',
  });

export const volunteerFormSchema = z
  .object({
    fullName: fullNameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
    areasOfInterest: requiredText('Area of interest', 1, 100),
    availability: requiredText('Availability', 1, 100),
    relevantExperience: optionalText('Relevant experience', 2_000),
    additionalMessage: optionalText('Additional message', 2_000),
  })
  .strict();

export const contactFormSchema = z
  .object({
    fullName: fullNameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
    subject: requiredText('Subject', 2, 150),
    message: requiredText('Message', 10, 3_000),
  })
  .strict();

const honeypotSchema = z.literal('', {
  error: 'Automated submission rejected',
});

export const volunteerSubmissionSchema = z
  .object({
    formType: z.literal('volunteer'),
    fields: volunteerFormSchema,
    website: honeypotSchema,
  })
  .strict();

export const contactSubmissionSchema = z
  .object({
    formType: z.literal('contact'),
    fields: contactFormSchema,
    website: honeypotSchema,
  })
  .strict();

export const formSubmissionSchema = z.discriminatedUnion('formType', [
  volunteerSubmissionSchema,
  contactSubmissionSchema,
]);

export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type FormSubmission = z.infer<typeof formSubmissionSchema>;
export type FormType = FormSubmission['formType'];

export const FORM_SUBMISSION_ERROR_CODES = [
  'VALIDATION_ERROR',
  'PAYLOAD_TOO_LARGE',
  'RATE_LIMITED',
  'MAIL_UNAVAILABLE',
  'MAIL_DELIVERY_FAILED',
] as const;

export type FormSubmissionErrorCode = (typeof FORM_SUBMISSION_ERROR_CODES)[number];
export type FormSubmissionFieldErrors = Record<string, string[] | undefined>;

export type FormSubmissionResponse =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      code: FormSubmissionErrorCode;
      message: string;
      fieldErrors?: FormSubmissionFieldErrors;
    };

export const MAX_FORM_PAYLOAD_BYTES = 32 * 1_024;
