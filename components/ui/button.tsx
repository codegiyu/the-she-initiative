import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] transition-all cursor-pointer transition-all duration-500 ease-linear disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive blur-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white shadow-xs hover:bg-primary/90',
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
        full: 'w-full ',
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

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, typo, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, typo, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
