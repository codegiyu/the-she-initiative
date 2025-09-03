import { cn } from '@/lib/utils';
import { Header } from './Header';
import { ReactNode } from 'react';
import { Footer } from './Footer';

export interface MainLayoutProps {
  children?: ReactNode;
  className?: string;
}

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={cn('min-h-screen', className)}>
        {/* <LoadAnimationScreen name={pageName} /> */}
        {children}
      </main>
      <Footer />
    </>
  );
};
