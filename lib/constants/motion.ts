import { EasingDefinition } from 'motion/react';

export const X_LENGTH = 60;
export const Y_LENGTH = 40;
export const EASE: EasingDefinition = 'easeOut';
export const EASE_SMOOTH: EasingDefinition = 'easeIn';
export const DURATION = 0.6;
export const DELAY = 0.8;
export const THRESHOLD = 0.3;
export const STAGGER = 0.6;
export const STAGGER_SM = 0.1;
export const STAGGER_LG = 1;
export const ZOOM_IN_START = 0;

export const FADE_RIGHT = {
  hidden: { opacity: 0, x: -1 * X_LENGTH },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
};
export const FADE_LEFT = {
  hidden: { opacity: 0, x: X_LENGTH },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
};
export const FADE_UP = {
  hidden: { opacity: 0, y: Y_LENGTH },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};
export const fadeUpComplete = ({ delay }: { delay?: number }) => {
  return {
    initial: { opacity: 0, y: Y_LENGTH },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: delay ?? 0, duration: DURATION, ease: EASE },
  };
};
export const FADE_DOWN = {
  hidden: { opacity: 0, y: -1 * Y_LENGTH },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};
export const EXPAND_HORIZONTAL = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: DURATION, ease: EASE },
  },
};
export const ZOOM_IN = {
  hidden: { opacity: 0, scale: ZOOM_IN_START },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION, ease: EASE_SMOOTH } },
};
export const zoomInNum = (num: number, smooth?: boolean) => {
  return {
    ...ZOOM_IN,
    visible: {
      ...ZOOM_IN.visible,
      transition: {
        ...ZOOM_IN.visible.transition,
        delay: num * DELAY,
        ease: smooth ? EASE_SMOOTH : EASE,
      },
    },
  };
};
export const zoomInComplete = (num?: number) => {
  return {
    initial: { opacity: 0, scale: ZOOM_IN_START },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { delay: (num ?? 0) * DELAY, duration: DURATION, ease: EASE },
  };
};

export const STAGGER_PARENT = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: THRESHOLD },
  variants: {
    visible: {
      transition: {
        staggerChildren: STAGGER, // delay between consecutive children
      },
    },
  },
};
export const staggerParent = ({
  stagger = 'default',
  threshold = THRESHOLD,
  delay = 0,
}: {
  stagger?: 'sm' | 'lg' | 'default' | number;
  threshold?: number;
  delay?: number;
}) => {
  const staggerRecord: Record<string | number, number> = {
    sm: STAGGER_SM,
    lg: STAGGER_LG,
    default: STAGGER,
  };

  return {
    ...STAGGER_PARENT,
    viewport: { ...STAGGER_PARENT.viewport, amount: threshold },
    variants: {
      visible: {
        transition: {
          delay,
          staggerChildren: staggerRecord[stagger] ?? stagger,
        },
      },
    },
  };
};
