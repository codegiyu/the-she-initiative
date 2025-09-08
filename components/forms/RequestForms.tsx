'use client';
import { volunteerFormData, contactFormData } from '@/lib/constants/forms';
import { RequestForm, RequestFormFileProps } from './FormTemplate';
import { JSX, useMemo, useState } from 'react';

export const VolunteerForm = (props: RequestFormFileProps) => {
  return <RequestForm {...volunteerFormData} {...props} />;
};

export const ContactForm = (props: RequestFormFileProps) => {
  return <RequestForm {...contactFormData} {...props} />;
};

export const REQUEST_FORMS: Record<string, (props: RequestFormFileProps) => JSX.Element> = {
  volunteer_with_us: VolunteerForm,
  contact_us: ContactForm,
};

export const SheiForm = ({ slug }: { slug: string }) => {
  const [files, setFiles] = useState<File[]>([]);

  const FormComp = useMemo(() => {
    return slug ? REQUEST_FORMS[slug] : null;
  }, [slug]);

  if (!FormComp)
    return (
      <div className="bg-card p-8 rounded-xl shadow-soft shadow-primary/15 border border-border" />
    );

  return <FormComp files={files} setFiles={setFiles} />;
};
