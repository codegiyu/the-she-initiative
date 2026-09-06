'use client';

import { RegularBtn } from '@/components/atoms/RegularBtn';
import { RegularInput, RegularInputProps } from '@/components/atoms/RegularInput';
import { RegularTextarea, RegularTextareaProps } from '@/components/atoms/RegularTextarea';
import { toast } from '@/components/atoms/Toast';
import { RegularSelect, RegularSelectProps } from '@/components/atoms/RegularSelect';
import { useForm } from '@/lib/hooks/use-form';
import type { FormType } from '@/lib/forms/contracts';
import { cn } from '@/lib/utils';
import { ChangeEvent, memo, useState } from 'react';
import { z, ZodArray, ZodEmail, ZodObject, ZodString } from 'zod';
import { CheckCheck } from 'lucide-react';

export type StringOrStringArraySchema = ZodString | ZodEmail | ZodArray<ZodString>;

export interface RequestFormProps<
  TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>,
> {
  formName: string;
  formType: FormType;
  formTitle: string;
  btnText?: string;
  formSchema: TSchema;
  defaultFormValues: z.infer<TSchema>;
  inputsArr: (FormArrayItem<TSchema> | [FormArrayItem<TSchema>, FormArrayItem<TSchema>])[];
}

interface BaseFormArrayItem<TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>> {
  name?: keyof z.TypeOf<TSchema>;
  kind: 'input' | 'textarea' | 'select';
  inputProps?: Omit<RegularInputProps, 'name' | 'value' | 'onChange' | 'errors'>;
  textareaProps?: Omit<RegularTextareaProps, 'name' | 'value' | 'onChange' | 'errors'>;
  selectProps?: Omit<RegularSelectProps, 'name' | 'value' | 'onSelectChange' | 'errors'>;
}

interface FormInputItem<TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>>
  extends BaseFormArrayItem<TSchema> {
  name: keyof z.TypeOf<TSchema>;
  kind: 'input';
  inputProps: Omit<RegularInputProps, 'name' | 'value' | 'onChange' | 'errors'>;
  textareaProps?: never;
  selectProps?: never;
}

interface FormTextareaItem<TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>>
  extends BaseFormArrayItem<TSchema> {
  name: keyof z.TypeOf<TSchema>;
  kind: 'textarea';
  textareaProps: Omit<RegularTextareaProps, 'name' | 'value' | 'onChange' | 'errors'>;
  inputProps?: never;
  selectProps?: never;
}

interface FormSelectItem<TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>>
  extends BaseFormArrayItem<TSchema> {
  name: keyof z.TypeOf<TSchema>;
  kind: 'select';
  selectProps: Omit<RegularSelectProps, 'name' | 'value' | 'onSelectChange' | 'errors'>;
  inputProps?: never;
  textareaProps?: never;
}

export type FormArrayItem<TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>> =
  | FormInputItem<TSchema>
  | FormTextareaItem<TSchema>
  | FormSelectItem<TSchema>;

export const RequestForm = memo(
  <TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>>({
    formName,
    formType,
    formTitle,
    btnText,
    formSchema,
    defaultFormValues,
    inputsArr,
  }: RequestFormProps<TSchema>) => {
    const {
      formValues,
      formErrors,
      loading,
      errorsVisible,
      submitted,
      resetForm,
      handleInputChange,
      onChange,
      setFormErrors,
      handleSubmit,
      validateForm,
    } = useForm({
      formSchema,
      defaultFormValues,
      onSubmit,
      validateOnChange: true,
    });

    const [submissionStatus, setSubmissionStatus] = useState('');

    const generalValidation = () => validateForm();

    async function onSubmit(values: z.infer<TSchema>): Promise<boolean> {
      if (!generalValidation()) return false;
      setSubmissionStatus('');

      try {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 15_000);

        let res: Response;
        try {
          res = await fetch('/api/send-company-mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formType, fields: values, website: '' }),
            signal: controller.signal,
          });
        } finally {
          window.clearTimeout(timeout);
        }

        const parsedRes: {
          success: boolean;
          message?: string;
          fieldErrors?: Record<string, string[] | undefined>;
        } = await res.json();

        if (parsedRes.fieldErrors) {
          setFormErrors({
            ...parsedRes.fieldErrors,
            root: [parsedRes.message || 'Please check the form and try again.'],
          } as Partial<Record<keyof z.infer<TSchema> | 'root', string[] | undefined>>);
          window.setTimeout(() => {
            document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
          }, 0);
        } else if (!parsedRes.success) {
          setFormErrors({
            root: [parsedRes.message || 'We could not send your message. Please try again.'],
          } as Partial<Record<keyof z.infer<TSchema> | 'root', string[] | undefined>>);
        }

        toast({
          title: parsedRes.message || 'We could not send your message. Please try again.',
          variant: parsedRes.success ? 'success' : 'error',
        });
        setSubmissionStatus(parsedRes.message || 'Your submission could not be sent.');

        if (parsedRes.success) {
          resetForm();
          return true;
        }

        return false;
      } catch (error) {
        const message =
          error instanceof DOMException && error.name === 'AbortError'
            ? 'The request timed out. Please try again.'
            : 'We could not send your message. Please check your connection and try again.';
        setFormErrors({ root: [message] } as Partial<
          Record<keyof z.infer<TSchema> | 'root', string[] | undefined>
        >);
        toast({ title: message, variant: 'error' });
        setSubmissionStatus(message);
        return false;
      }
    }

    return (
      <section className="bg-card px-4 500:px-6 md:px-8 py-8 rounded-xl shadow-soft shadow-primary/15 border border-border">
        <h3 className="font-montserrat font-bold text-2xl text-dark mb-6">{formTitle}</h3>

        <form onSubmit={handleSubmit} aria-label={`${formName} form`} className="grid gap-6">
          <div className="inputs-wrap grid gap-6">
            {inputsArr.map((item, idx) => (
              <div key={idx} className="w-full">
                {Array.isArray(item) ? (
                  <div className="w-full grid items-end gap-x-4 gap-y-6 md:grid-cols-2">
                    {item.map((input, index) => (
                      <FormInputItem
                        key={index}
                        {...input}
                        {...{
                          formValues,
                          formErrors,
                          handleInputChange,
                          onChange,
                          errorsVisible,
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <FormInputItem
                    key={idx}
                    {...item}
                    {...{
                      formValues,
                      formErrors,
                      handleInputChange,
                      onChange,
                      errorsVisible,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-xs md:text-sm text-muted-foreground">
            Please avoid sharing highly sensitive or graphic details here. If you need immediate
            help, use the emergency phone or WhatsApp options.
          </p>

          <p className="sr-only" role="status" aria-live="polite">
            {submissionStatus}
          </p>

          {formErrors.root && (
            <p className={cn('text-xs md:text-sm text-red-500 mt-1')}>{formErrors.root[0]}</p>
          )}

          <div className="w-full flex items-center">
            <RegularBtn
              size="full"
              text={btnText || 'Submit'}
              loading={loading}
              disabled={loading}
              RightIcon={submitted ? CheckCheck : undefined}
              rightIconProps={{ className: 'size-4 text-white' }}
            />
          </div>
        </form>
      </section>
    );
  }
);
RequestForm.displayName = 'RequestForm';

interface BaseInputItemProps<TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>>
  extends BaseFormArrayItem<TSchema> {
  formValues: z.TypeOf<TSchema>;
  formErrors: Partial<Record<keyof z.TypeOf<TSchema>, string[] | undefined>>;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    options?: { clearFields?: (keyof z.TypeOf<TSchema>)[] }
  ) => void;
  onChange: (
    name: keyof z.TypeOf<TSchema>,
    value: string | string[] | number | boolean,
    options?: { clearFields?: (keyof z.TypeOf<TSchema>)[] }
  ) => void;
  errorsVisible?: boolean;
}

const FormInputItem = <TSchema extends ZodObject<Record<string, StringOrStringArraySchema>>>({
  name,
  kind,
  inputProps,
  textareaProps,
  selectProps,
  formValues,
  formErrors,
  handleInputChange,
  onChange,
  errorsVisible,
}: BaseInputItemProps<TSchema>) => {
  if (kind === 'input' && name) {
    return (
      <RegularInput
        name={name as string}
        value={formValues[name]}
        onChange={handleInputChange}
        errors={errorsVisible ? formErrors[name] : undefined}
        {...inputProps}
      />
    );
  }

  if (kind === 'textarea' && name) {
    return (
      <RegularTextarea
        name={name as string}
        value={formValues[name]}
        onChange={handleInputChange}
        errors={errorsVisible ? formErrors[name] : undefined}
        {...textareaProps}
      />
    );
  }

  if (kind === 'select' && name && selectProps) {
    return (
      <RegularSelect
        value={formValues[name] as string}
        id={name as string}
        onSelectChange={value => onChange(name, value)}
        errors={errorsVisible ? formErrors[name] : undefined}
        {...selectProps}
      />
    );
  }

  return null;
};
