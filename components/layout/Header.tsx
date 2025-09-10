'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoFull } from '../icons';
import { RegularBtn } from '../atoms/RegularBtn';
import { GhostBtn } from '../atoms/GhostBtn';
import { useInPageNav } from '@/lib/hooks/use-inpage-nav';
import { NAV_LINKS } from '@/lib/constants/texts';
import { motion } from 'motion/react';

export type HeaderProps = {
  className?: string;
  solidBackground?: boolean;
};

export const Header = ({ className, solidBackground }: HeaderProps) => {
  const [hasSolidBg, setHasSolidBg] = useState(!!solidBackground);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePageOffset = () => {
      const { scrollY } = window;
      setHasSolidBg(scrollY > 0 ? true : !!solidBackground);
    };

    handlePageOffset();
    window.addEventListener('scroll', handlePageOffset);

    return () => window.removeEventListener('scroll', handlePageOffset);
  }, [solidBackground]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 bg-white/95 
      backdrop-blur-sm border-b border-border transition-colors duration-200 ease-in
      ${className ?? ''}`}>
      <div className="regular-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <GhostBtn
              Icon={LogoFull}
              iconClass={`${hasSolidBg ? 'text-[3rem]' : 'text-[4rem]'} transition-all duration-300 ease-in`}
              linkProps={{ href: '/' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="">
            <ul className="list-none hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((item, idx) => (
                <HeaderLink key={idx} {...item} />
              ))}
              <CTAButton />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-dark hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-border py-6">
          <ul className="list-none grid px-6 pb-6 space-y-0">
            {NAV_LINKS.map((item, idx) => (
              <HeaderLink key={idx} {...item} afterClick={() => setMenuOpen(false)} />
            ))}
          </ul>
          <div className="w-full px-6">
            <CTAButton setMenuOpen={setMenuOpen} />
          </div>
        </nav>
      )}
    </motion.header>
  );
};

export interface HeaderLinkProps {
  text: string;
  href: string;
  footerOnlySuffix?: string;
  afterClick?: () => void;
}

const HeaderLink = ({ text, href, afterClick }: HeaderLinkProps) => {
  const { elementExists, targetElRef, inHomePage, isActive } = useInPageNav({
    href,
    trackElement: true,
  });

  return (
    <li className={`${href === '/' && inHomePage ? 'hidden' : ''}`}>
      <GhostBtn
        className={`w-full lg:w-fit py-3 lg:py-0 ${isActive ? 'bg-primary-soft lg:bg-transparent' : 'hover:bg-primary-soft lg:hover:bg-transparent'}`}
        wrapClassName={`w-full lg:w-fit`}
        linkProps={{ href: elementExists ? '#' : href, preventdefault: 'true' }}
        onClick={() => {
          setTimeout(() => {
            if (targetElRef.current) {
              targetElRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200);

          afterClick?.();
        }}>
        <div className="w-full lg:w-fit px-0 relative">
          <p
            className={`font-roboto text-[0.875rem] transition-colors duration-200 
            ${isActive ? 'text-primary font-medium' : 'text-dark hover:text-primary'}`}>
            {text}
          </p>
          <div className="hidden lg:block w-full max-w-0 group-hover:max-w-full h-[2px] bg-gradient-primary absolute -bottom-1 left-0 transition-all duration-500 ease-in" />
        </div>
      </GhostBtn>
    </li>
  );
};

const CTAButton = ({ setMenuOpen }: { setMenuOpen?: (val: boolean) => void }) => {
  const { targetElRef } = useInPageNav({ href: '/#volunteer-with-us' });

  return (
    <>
      <div className="w-full lg:hidden">
        <RegularBtn
          linkProps={{ href: '#', preventdefault: 'true' }}
          onClick={() => {
            setTimeout(() => {
              if (targetElRef.current) {
                targetElRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }, 200);

            setMenuOpen?.(false);
          }}
          size="full"
          text="Get Involved"
        />
      </div>
      <div className="w-fit hidden lg:block">
        <RegularBtn
          linkProps={{ href: '#', preventdefault: 'true' }}
          onClick={() => {
            setTimeout(() => {
              if (targetElRef.current) {
                targetElRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }, 200);
          }}
          text="Get Involved"
        />
      </div>
    </>
  );
};
