'use client';

import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type MouseEventHandler,
  type SVGProps,
  type Ref,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import { Loader } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIconComp } from '@/lib/types/general';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] transition-all cursor-pointer transition-all duration-300 ease-in disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive blur-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow-xs hover:bg-primary-glow',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border border-primary bg-transparent text-primary shadow-xs hover:bg-primary hover:text-white',
        secondary: 'bg-secondary text-dark shadow-xs hover:bg-secondary/80',
        ghost: '',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'w-fit px-6 py-3.5',
        sm: 'w-fit py-2 px-4',
        icon: '',
        full: 'w-full py-3.5',
      },
      typo: {
        default: 'font-montserrat text-sm font-medium',
        small: 'font-montserrat text-xs font-medium',
        custom: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      typo: 'default',
    },
  }
);

export interface RegularBtnProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children' | 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  LeftIcon?: LucideIconComp;
  RightIcon?: LucideIconComp;
  leftIconProps?: SVGProps<SVGSVGElement>;
  rightIconProps?: SVGProps<SVGSVGElement>;
  text?: string;
  textClassName?: string;
  children?: ReactNode;
  loading?: boolean;
  loadingIconBesideText?: boolean;
  loadingIconClassName?: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void;
  wrapClassName?: string;
  ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
  linkProps?: Omit<ComponentPropsWithoutRef<'a'>, 'onClick' | 'className' | 'children' | 'href'> & {
    href: string;
  };
}

export const RegularBtn = ({
  LeftIcon,
  RightIcon,
  leftIconProps = {},
  rightIconProps = {},
  className = '',
  text = '',
  textClassName = '',
  children,
  variant = 'default',
  size = 'default',
  typo = 'default',
  loading = false,
  loadingIconBesideText = false,
  loadingIconClassName,
  disabled = false,
  wrapClassName = '',
  onMouseEnter,
  onClick,
  linkProps,
  ref,
  'aria-label': ariaLabel,
  ...props
}: RegularBtnProps) => {
  const elementClassName = cn(
    'inline-block leading-none focus:outline-none focus-visible:outline-white/60 focus-visible:outline-2 outline-offset-2',
    size === 'full' || className.includes('w-full') ? 'w-full' : 'w-fit',
    wrapClassName,
    buttonVariants({ size, variant, typo, className }),
    'group'
  );
  const accessibleName = ariaLabel || text || undefined;

  const content =
    loading && children ? (
      <Loader className={cn('size-4 text-white animate-pulse', loadingIconClassName)} />
    ) : !loading && children ? (
      children
    ) : loading && !loadingIconBesideText ? (
      <Loader className={cn('size-4 text-white animate-pulse', loadingIconClassName)} />
    ) : (
      <>
        {LeftIcon && <LeftIcon {...leftIconProps} />}
        <span className="gap-3 grid place-items-center transition-colors relative overflow-hidden">
          <span className={cn('font-montserrat', textClassName)}>{text}</span>
          {loading && (
            <Loader className={cn('size-4 text-white animate-pulse', loadingIconClassName)} />
          )}
        </span>
        {RightIcon && <RightIcon {...rightIconProps} />}
      </>
    );

  if (linkProps && !disabled) {
    return (
      <Link
        {...linkProps}
        ref={ref as Ref<HTMLAnchorElement>}
        className={elementClassName}
        aria-label={accessibleName}
        onClick={event => onClick?.(event)}
        onMouseEnter={onMouseEnter as unknown as MouseEventHandler<HTMLAnchorElement>}
        {...(props as ComponentPropsWithoutRef<'a'>)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      {...props}
      ref={ref as Ref<HTMLButtonElement>}
      className={elementClassName}
      disabled={loading || disabled}
      aria-label={accessibleName}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      onMouseEnter={onMouseEnter}
      type={props.type ?? 'button'}>
      {content}
    </button>
  );
};
