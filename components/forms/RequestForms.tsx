'use client';
import { volunteerFormData, contactFormData } from '@/lib/constants/forms';
import { RequestForm } from './FormTemplate';
import { JSX, useMemo } from 'react';

export const VolunteerForm = () => {
  return <RequestForm {...volunteerFormData} />;
};

export const ContactForm = () => {
  return <RequestForm {...contactFormData} />;
};

export const REQUEST_FORMS: Record<string, () => JSX.Element> = {
  volunteer_with_us: VolunteerForm,
  contact_us: ContactForm,
};

export const SheiForm = ({ slug }: { slug: string }) => {
  const FormComp = useMemo(() => {
    return slug ? REQUEST_FORMS[slug] : null;
  }, [slug]);

  if (!FormComp)
    return (
      <div className="bg-card px-4 500:px-6 md:px-8 py-8 rounded-xl shadow-soft shadow-primary/15 border border-border" />
    );

  return <FormComp />;
};
