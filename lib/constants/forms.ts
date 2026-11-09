import { RequestFormProps } from '@/components/forms/FormTemplate';
import { default as pick } from 'lodash/pick';
import { generateOptionsFromArray } from '../utils/general';
import { contactFormSchema, volunteerFormSchema } from '../forms/contracts';
// import { generateOptionsFromArray } from '../utils/general';

export const ALL_FIELDS_DEFAULT = {
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
} satisfies Record<string, string | string[]>;

export const volunteerFormData: RequestFormProps<typeof volunteerFormSchema> = {
  formName: 'Volunteer',
  formType: 'volunteer',
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
  formType: 'contact',
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
