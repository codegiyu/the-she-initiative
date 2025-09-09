import { RequestFormProps, StringOrStringArraySchema } from '@/components/forms/FormTemplate';
import { z } from 'zod';
import { default as pick } from 'lodash/pick';
import { generateOptionsFromArray } from '../utils/general';
// import { generateOptionsFromArray } from '../utils/general';

const ALL_FIELDS_SCHEMA: Record<string, StringOrStringArraySchema> = {
  fullName: z.string().min(3, { error: 'Please enter at least 3 characters' }),
  firstName: z.string({ error: 'Please enter your first name' }),
  lastName: z.string({ error: 'Please enter your last name' }),
  email: z.email({ error: 'Please enter a valid email' }),
  phoneNumber: z
    .string()
    .min(11, { error: 'Please enter at least 11 characters' })
    .max(14, { error: 'Phone number is too long' }),
  areasOfInterest: z.string({ error: 'Please enter a value' }),
  availability: z.string({ error: 'Please enter a value' }),
  subject: z.string({ error: 'Please enter a value' }),
  message: z.string().min(10, { error: 'Message is not long enough' }),
  relevantExperience: z.string(),
  additionalMessage: z.string(),
};

export const ALL_FIELDS_DEFAULT: Record<string, string | string[]> = {
  fullName: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  areasOfInterest: '',
  availability: '',
  subject: '',
  message: '',
  relevantExperience: '',
  additionalMessage: '',
};

export const volunteerFormSchema = z.object({
  fullName: ALL_FIELDS_SCHEMA.fullName,
  email: ALL_FIELDS_SCHEMA.email,
  phoneNumber: ALL_FIELDS_SCHEMA.phoneNumber,
  areasOfInterest: ALL_FIELDS_SCHEMA.areasOfInterest,
  availability: ALL_FIELDS_SCHEMA.availability,
  relevantExperience: ALL_FIELDS_SCHEMA.relevantExperience,
  additionalMessage: ALL_FIELDS_SCHEMA.additionalMessage,
});

export const contactFormSchema = z.object({
  fullName: ALL_FIELDS_SCHEMA.fullName,
  email: ALL_FIELDS_SCHEMA.email,
  phoneNumber: ALL_FIELDS_SCHEMA.phoneNumber,
  subject: ALL_FIELDS_SCHEMA.subject,
  message: ALL_FIELDS_SCHEMA.message,
});

export const volunteerFormData: RequestFormProps<typeof volunteerFormSchema> = {
  formName: 'Volunteer',
  formTitle: 'Get Involved Today',
  btnText: 'Submit Application',
  formSchema: volunteerFormSchema,
  defaultFormValues: pick(ALL_FIELDS_DEFAULT, [
    'fullName',
    'email',
    'phoneNumber',
    'areasOfInterest',
    'availability',
    'relevantExperience',
    'additionalMessage',
  ]),
  inputsArr: [
    [
      {
        name: 'fullName',
        kind: 'input',
        inputProps: {
          label: 'Full Name',
          placeholder: 'Your full name',
          required: true,
        },
      },
      {
        name: 'phoneNumber',
        kind: 'input',
        inputProps: {
          type: 'tel',
          label: 'Phone Number',
          placeholder: 'Your phone number',
          required: true,
        },
      },
    ],
    {
      name: 'email',
      kind: 'input',
      inputProps: {
        label: 'Email Address',
        type: 'email',
        placeholder: 'your.email@example.com',
        required: true,
      },
    },
    {
      name: 'areasOfInterest',
      kind: 'select',
      selectProps: {
        label: 'Areas of Interest',
        placeholder: 'Select an area of interest',
        options: generateOptionsFromArray({
          arr: [
            'Mentoring & Counseling',
            'Event Planning',
            'Skills Training',
            'Administrative Support',
            'Fundraising',
            'Community Outreach',
            'Other',
          ],
        }),
        required: true,
      },
    },
    {
      name: 'availability',
      kind: 'select',
      selectProps: {
        placeholder: 'Select your availability',
        label: 'Availability',
        options: generateOptionsFromArray({
          arr: [
            'A few hours per week',
            'A few hours per month',
            'Weekends only',
            'Evenings only',
            'Flexible schedule',
            'Events and special occasions only',
          ],
        }),
        required: true,
      },
    },
    {
      name: 'relevantExperience',
      kind: 'textarea',
      textareaProps: {
        label: 'Relevant Experience',
        placeholder: 'Tell us about any relevant experience or skills you have',
        rows: 3,
        required: false,
      },
    },
    {
      name: 'additionalMessage',
      kind: 'textarea',
      textareaProps: {
        label: 'Additional Message',
        placeholder:
          'Tell us why you want to volunteer with The SHE Initiative and any questions you might have',
        rows: 4,
        required: false,
      },
    },
  ],
};

export const contactFormData: RequestFormProps<typeof contactFormSchema> = {
  formName: 'Contact',
  formTitle: 'Send Us a Message',
  btnText: 'Send Message',
  formSchema: contactFormSchema,
  defaultFormValues: pick(ALL_FIELDS_DEFAULT, [
    'fullName',
    'email',
    'phoneNumber',
    'subject',
    'message',
  ]),
  inputsArr: [
    [
      {
        name: 'fullName',
        kind: 'input',
        inputProps: {
          label: 'Full Name',
          placeholder: 'Your full name',
          required: true,
        },
      },
      {
        name: 'phoneNumber',
        kind: 'input',
        inputProps: {
          type: 'tel',
          label: 'Phone Number',
          placeholder: 'Your phone number',
          required: true,
        },
      },
    ],
    {
      name: 'email',
      kind: 'input',
      inputProps: {
        label: 'Email Address',
        type: 'email',
        placeholder: 'your.email@example.com',
        required: true,
      },
    },
    {
      name: 'subject',
      kind: 'input',
      inputProps: {
        label: 'Subject',
        placeholder: 'What is this about?',
        required: true,
      },
    },
    {
      name: 'message',
      kind: 'textarea',
      textareaProps: {
        label: 'Message',
        placeholder: 'Tell us how we can help',
        rows: 4,
        required: true,
      },
    },
  ],
};
