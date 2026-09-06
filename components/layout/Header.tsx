'use client';

import { ComponentProps, useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoFull } from '../icons';
import { RegularBtn } from '../atoms/RegularBtn';
import { GhostBtn } from '../atoms/GhostBtn';
import { useInPageNav } from '@/lib/hooks/use-inpage-nav';
import { NAV_LINKS } from '@/lib/constants/texts';

export type HeaderProps = ComponentProps<'header'> & {
  solidBackground?: boolean;
};

export const Header = ({ className, solidBackground, ...props }: HeaderProps) => {
  const [hasSolidBg, setHasSolidBg] = useState(!!solidBackground);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMenu, menuOpen]);

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
    <header
      className={`fixed top-0 w-full z-50 bg-white/95 
      backdrop-blur-sm border-b border-border transition-colors duration-200 ease-in
      ${className ?? ''}`}
      {...props}>
      <div className="regular-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <GhostBtn
              Icon={LogoFull}
              iconClass={`${hasSolidBg ? 'text-[3rem]' : 'text-[4rem]'} transition-all duration-300 ease-in`}
              linkProps={{ href: '/' }}
              aria-label="The SHE Initiative home"
              onClick={() => menuOpen && closeMenu()}
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
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden p-2 rounded-md text-dark hover:text-primary transition-colors"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-white border-t border-border py-6">
          <ul className="list-none grid px-6 pb-6 space-y-0">
            {NAV_LINKS.map((item, idx) => (
              <HeaderLink key={idx} {...item} afterClick={closeMenu} />
            ))}
          </ul>
          <div className="w-full px-6">
            <CTAButton closeMenu={closeMenu} />
          </div>
        </nav>
      )}
    </header>
  );
};

export interface HeaderLinkProps {
  text: string;
  href: string;
  footerOnlySuffix?: string;
  afterClick?: () => void;
}

const HeaderLink = ({ text, href, afterClick }: HeaderLinkProps) => {
  const { inHomePage, isActive } = useInPageNav({
    href,
    trackElement: true,
  });

  return (
    <li className={`${href === '/' && inHomePage ? 'hidden' : ''}`}>
      <GhostBtn
        className={`w-full lg:w-fit py-3 lg:py-0 ${isActive ? 'bg-primary-soft lg:bg-transparent' : 'hover:bg-primary-soft lg:hover:bg-transparent'}`}
        wrapClassName={`w-full lg:w-fit`}
        linkProps={{ href }}
        onClick={() => afterClick?.()}>
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

const CTAButton = ({ closeMenu }: { closeMenu?: () => void }) => {
  return (
    <>
      <div className="w-full lg:hidden">
        <RegularBtn
          linkProps={{ href: '/#volunteer-with-us' }}
          onClick={() => closeMenu?.()}
          size="full"
          text="Get Involved"
        />
      </div>
      <div className="w-fit hidden lg:block">
        <RegularBtn linkProps={{ href: '/#volunteer-with-us' }} text="Get Involved" />
      </div>
    </>
  );
};
