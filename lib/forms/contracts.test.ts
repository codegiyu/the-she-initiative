import { describe, expect, it } from 'vitest';
import {
  contactFormSchema,
  formSubmissionSchema,
  phoneNumberSchema,
  volunteerFormSchema,
} from './contracts';

const validVolunteerFields = {
  fullName: 'Ada Lovelace',
  email: 'ada@example.com',
  phoneNumber: '+234 703 246 4928',
  areasOfInterest: 'Mentoring & Counseling',
  availability: 'A few hours per week',
  relevantExperience: '',
  additionalMessage: '',
};

const validContactFields = {
  fullName: 'Grace Hopper',
  email: 'grace@example.com',
  phoneNumber: '+1 (555) 123-4567',
  subject: 'Partnership enquiry',
  message: 'I would like to discuss a community partnership.',
};

describe('volunteerFormSchema', () => {
  it('accepts and trims a valid volunteer form', () => {
    const result = volunteerFormSchema.parse({
      ...validVolunteerFields,
      fullName: '  Ada Lovelace  ',
    });

    expect(result.fullName).toBe('Ada Lovelace');
  });

  it.each(['areasOfInterest', 'availability'] as const)(
    'rejects an empty required %s selection',
    field => {
      const result = volunteerFormSchema.safeParse({
        ...validVolunteerFields,
        [field]: '',
      });

      expect(result.success).toBe(false);
    }
  );

  it('rejects fields outside the contract', () => {
    const result = volunteerFormSchema.safeParse({
      ...validVolunteerFields,
      unexpected: 'not allowed',
    });

    expect(result.success).toBe(false);
  });
});

describe('contactFormSchema', () => {
  it('accepts a valid contact form', () => {
    expect(contactFormSchema.safeParse(validContactFields).success).toBe(true);
  });

  it('rejects oversized user-controlled text', () => {
    const result = contactFormSchema.safeParse({
      ...validContactFields,
      message: 'a'.repeat(3_001),
    });

    expect(result.success).toBe(false);
  });
});

describe('phoneNumberSchema', () => {
  it.each(['+234 703 246 4928', '+1 (555) 123-4567', '07032464928'])(
    'accepts supported phone syntax: %s',
    phoneNumber => {
      expect(phoneNumberSchema.safeParse(phoneNumber).success).toBe(true);
    }
  );

  it.each(['123', '+234-HELLO', '0703.246.4928'])(
    'rejects unsupported phone syntax: %s',
    phoneNumber => {
      expect(phoneNumberSchema.safeParse(phoneNumber).success).toBe(false);
    }
  );
});

describe('formSubmissionSchema', () => {
  it('accepts the discriminated volunteer request contract', () => {
    const result = formSubmissionSchema.safeParse({
      formType: 'volunteer',
      fields: validVolunteerFields,
      website: '',
    });

    expect(result.success).toBe(true);
  });

  it('accepts the discriminated contact request contract', () => {
    const result = formSubmissionSchema.safeParse({
      formType: 'contact',
      fields: validContactFields,
      website: '',
    });

    expect(result.success).toBe(true);
  });

  it('rejects a form type whose fields do not match', () => {
    const result = formSubmissionSchema.safeParse({
      formType: 'contact',
      fields: validVolunteerFields,
      website: '',
    });

    expect(result.success).toBe(false);
  });

  it('rejects a filled honeypot', () => {
    const result = formSubmissionSchema.safeParse({
      formType: 'contact',
      fields: validContactFields,
      website: 'https://spam.example',
    });

    expect(result.success).toBe(false);
  });
});
