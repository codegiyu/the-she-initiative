'use client';
import { EXPAND_HORIZONTAL, FADE_UP, staggerParent } from '@/lib/constants/motion';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export interface SectionHeadingProps {
  title: string;
  text?: string;
  className?: string;
}

export const SectionHeading = ({ title, text, className }: SectionHeadingProps) => {
  return (
    <motion.div {...staggerParent({})} className={cn('space-y-4', className)}>
      <motion.h2
        variants={FADE_UP}
        className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-dark">
        {title}
      </motion.h2>
      <motion.div
        variants={EXPAND_HORIZONTAL}
        className={`w-20 h-1 bg-gradient-primary rounded-full ${className?.includes('text-center') ? 'mx-auto' : ''}`}
      />
      {text && (
        <motion.p
          variants={FADE_UP}
          className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-2">
          {text}
        </motion.p>
      )}
    </motion.div>
  );
};
