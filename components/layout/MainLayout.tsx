import { cn } from '@/lib/utils';
import { Header } from './Header';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { ScrollToTop } from '../general/ScrollToTop';

export interface MainLayoutProps {
  children?: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-dark focus:shadow-lg">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className={cn('min-h-screen', className)}>
        {/* <LoadAnimationScreen name={pageName} /> */}
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};
