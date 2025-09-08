import { cn } from '@/lib/utils';
import { ComponentPropsWithRef } from 'react';

type TextareaProps = ComponentPropsWithRef<'textarea'>;

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'w-full px-4 py-3 bg-transparent border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex text-sm outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-xs',
        className
      )}
      {...props}
    />
  );
}

export { Textarea, type TextareaProps };
