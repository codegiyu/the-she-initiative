'use client';

import { ComponentProps, useEffect, useState } from 'react';
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
      className={`fixed top-0 w-full z-50 
      ${hasSolidBg ? 'bg-white/95' : 'bg-gradient-to-b from-white/80 to-white/95'} 
      backdrop-blur-sm border-b border-border transition-colors duration-200 ease-in
      ${className}`}
      {...props}>
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
              <RegularBtn text="Get Involved" />
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
        <nav className="lg:hidden bg-white border-t border-border">
          <ul className="list-none grid px-6 py-4 space-y-4">
            {NAV_LINKS.map((item, idx) => (
              <HeaderLink key={idx} {...item} afterClick={() => setMenuOpen(false)} />
            ))}
            <RegularBtn size="full" text="Get Involved" />
          </ul>
        </nav>
      )}
    </header>
  );
};

export interface HeaderLinkProps {
  text: string;
  href: string;
  afterClick?: () => void;
}

const HeaderLink = ({ text, href, afterClick }: HeaderLinkProps) => {
  const { elementExists, targetElRef, inHomePage } = useInPageNav({ href });

  return (
    <li className={`${href === '/' && inHomePage ? 'hidden' : ''}`}>
      <GhostBtn
        className={``}
        linkProps={{ href: elementExists ? '#' : href, preventdefault: 'true' }}
        onClick={() => {
          setTimeout(() => {
            if (targetElRef.current) {
              targetElRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200);

          afterClick?.();
        }}>
        <div className="w-fit px-0 relative">
          <p className="font-roboto group-hover:font-medium text-dark hover:text-primary text-[0.875rem] transition-colors duration-200">
            {text}
          </p>
          <div className="w-full max-w-0 group-hover:max-w-full h-[2px] bg-gradient-primary absolute -bottom-1 left-0 transition-all duration-500 ease-in" />
        </div>
      </GhostBtn>
    </li>
  );
};
