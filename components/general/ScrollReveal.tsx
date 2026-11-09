'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type ScrollRevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface ScrollRevealProps extends PropsWithChildren {
  className?: string;
  direction?: ScrollRevealDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  amount?: number;
}

const getOffset = (direction: ScrollRevealDirection, distance: number) => {
  switch (direction) {
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    case 'none':
      return { x: 0, y: 0 };
    case 'up':
    default:
      return { x: 0, y: distance };
  }
};

export const ScrollReveal = ({
  children,
  className,
  direction = 'up',
  distance = 32,
  delay = 0,
  duration = 0.65,
  amount = 0.2,
}: ScrollRevealProps) => {
  const revealRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { x, y } = getOffset(direction, distance);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(element);
      },
      { threshold: amount, rootMargin: '-64px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <div
      ref={revealRef}
      className={cn('motion-reveal', className)}
      data-reveal-visible={isVisible ? 'true' : undefined}
      style={
        {
          '--reveal-x': `${x}px`,
          '--reveal-y': `${y}px`,
          '--reveal-delay': `${delay}s`,
          '--reveal-duration': `${duration}s`,
        } as React.CSSProperties
      }>
      {children}
    </div>
  );
};
