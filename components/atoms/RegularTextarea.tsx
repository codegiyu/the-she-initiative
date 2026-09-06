import { cn } from '@/lib/utils';
import { Textarea, type TextareaProps } from '../ui/textarea';
import { FocusEvent } from 'react';
import { InputWrapper } from '../general/InputWrapper';

export interface RegularTextareaProps extends TextareaProps {
  label?: string;
  subtext?: string;
  labelClassName?: string;
  wrapClassName?: string;
  errors?: string[];
}

export const RegularTextarea = ({
  className,
  label,
  subtext,
  labelClassName,
  wrapClassName,
  placeholder,
  ref,
  id,
  name,
  required,
  onFocus,
  onBlur,
  errors = [],
  ...props
}: RegularTextareaProps) => {
  const inputId = id || name;
  const errorId = inputId ? `${inputId}-error` : undefined;

  return (
    <InputWrapper
      wrapClassName={wrapClassName}
      label={label}
      subtext={subtext}
      labelTextClassName={labelClassName}
      required={required}
      errors={errors}
      inputId={inputId}
      errorId={errorId}>
      <Textarea
        id={inputId}
        name={name}
        placeholder={placeholder}
        className={cn('', className)}
        ref={ref}
        {...props}
        aria-invalid={errors.length > 0 ? true : undefined}
        aria-describedby={errors.length > 0 ? errorId : undefined}
        onFocus={(e: FocusEvent<HTMLTextAreaElement>) => {
          if (onFocus) onFocus(e);
        }}
        onBlur={(e: FocusEvent<HTMLTextAreaElement>) => {
          if (onBlur) onBlur(e);
        }}
      />
    </InputWrapper>
  );
};
