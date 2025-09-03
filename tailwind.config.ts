import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,html}',
    './components/**/*.{ts,tsx,html}',
    './lib/**/*.{ts,tsx,html}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-primary': 'var(--gradient-primary)',
        // 'gradient-hero': 'var(--gradient-hero)',
        // 'gradient-secondary': 'var(--gradient-secondary)',
      },
      keyframes: {
        'filter-accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'filter-accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-up-once': {
          from: { transform: 'translateY(0%)', opacity: 1 },
          to: { transform: 'translateY(-100%)', opacity: 0 },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'filter-accordion-down': 'filter-accordion-down 0.7s ease-in-out',
        'filter-accordion-up': 'filter-accordion-up 0.7s ease-in-out',
        'slide-up-once': 'slide-up-once 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
