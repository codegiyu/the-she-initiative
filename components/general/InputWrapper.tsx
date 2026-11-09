import { cn } from '@/lib/utils';
import { ComponentPropsWithRef, PropsWithChildren } from 'react';

export type InputWrapperProps = PropsWithChildren<{
  wrapClassName?: string;
  label?: string;
  subtext?: string;
  labelTextClassName?: string;
  required?: boolean;
  errors?: string[];
  inputId?: string;
  errorId?: string;
  otherLabelProps?: Omit<ComponentPropsWithRef<'label'>, 'className' | 'htmlFor'>;
}>;

export const InputWrapper = ({
  children,
  wrapClassName,
  label,
  subtext,
  labelTextClassName,
  otherLabelProps,
  required,
  errors = [],
  inputId,
  errorId,
}: InputWrapperProps) => {
  return (
    <div className={cn('w-full', wrapClassName)}>
      <div className="flex flex-col justify-center gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-[0.75rem] leading-[1.2] font-medium text-dark font-montserrat',
              labelTextClassName
            )}
            {...otherLabelProps}>
            {label}
            {required ? ' *' : ''}
            {subtext ? ` ${subtext}` : ''}
          </label>
        )}
        <div className="relative w-full">{children}</div>
      </div>
      {errors.length > 0 && (
        <p id={errorId} role="alert" className={cn('text-xs md:text-sm text-red-500 mt-1')}>
          {errors[0]}
        </p>
      )}
    </div>
  );
};
