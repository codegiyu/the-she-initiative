import { cn } from '@/lib/utils';
import { Input, type InputProps } from '../ui/input';
import { FocusEvent, ReactNode } from 'react';
import { InputWrapper } from '../general/InputWrapper';

export interface RegularInputProps extends InputProps {
  label?: string;
  subtext?: string;
  labelClassName?: string;
  wrapClassName?: string;
  errors?: string[];
  bottomText?: ReactNode;
}

export const RegularInput = ({
  className,
  type,
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
}: RegularInputProps) => {
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
      <Input
        id={inputId}
        name={name}
        placeholder={placeholder}
        type={type}
        className={cn('', className)}
        ref={ref}
        {...props}
        aria-invalid={errors.length > 0 ? true : undefined}
        aria-describedby={errors.length > 0 ? errorId : undefined}
        onFocus={(e: FocusEvent<HTMLInputElement>) => {
          if (onFocus) onFocus(e);
        }}
        onBlur={(e: FocusEvent<HTMLInputElement>) => {
          if (onBlur) onBlur(e);
        }}
      />
    </InputWrapper>
  );
};
