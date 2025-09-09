'use client';
import { Phone, Heart } from 'lucide-react';
import { LogoFull } from '../icons';
import { ContactInfoRowProps, ContactRowText } from '../sections/home/Contact';
import { CONTACT_INFO_ROWS, CONTACT_INFORMATION, NAV_LINKS } from '@/lib/constants/texts';
import { GhostBtn } from '../atoms/GhostBtn';
import { HeaderLinkProps } from './Header';
import { useInPageNav } from '@/lib/hooks/use-inpage-nav';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <GhostBtn Icon={LogoFull} iconClass="text-[4rem] text-white" />
            </div>
            <p className="font-montserrat text-white/90 leading-relaxed mb-6 max-w-md">
              Empowering her today, transforming tomorrow. We provide holistic support, protection
              and opportunities for girls and young women.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-montserrat font-semibold">Emergency Support</div>
                <div className="font-montserrat text-white/80">
                  <a
                    href={`tel:${CONTACT_INFORMATION.tel[0].replaceAll(' ', '')}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="no-underline text-current hover:text-primary cursor-pointer">
                    <span>{CONTACT_INFORMATION.tel[0]}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((item, idx) => (
                <FooterLink key={idx} {...item} />
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              {CONTACT_INFO_ROWS.filter(s => !s.hideInFooter).map((item, idx) => (
                <FooterContactRow key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-secondary/70">
            <div className="w-fit flex items-center gap-2">
              <p className="font-montserrat mb-4 md:mb-0">
                © {currentYear} The SHE Initiative. All rights reserved.
              </p>
              <div className="hidden xl:block w-[1px] h-3 bg-muted-foreground -mt-1" />
              <a
                href="https://pinpoint.ng"
                target="_blank"
                rel="noreferrer noopener"
                className="hidden xl:block cursor-pointer text-muted-foreground">
                <div className="group flex gap-1 justify-center">
                  <span className="">Created by</span>
                  <div className="relative">
                    <p className="">Pinpoint Global</p>
                    <div className="w-full max-w-0 group-hover:max-w-full h-[1px] bg-current absolute -bottom-1 left-0 transition-all duration-500 ease-in" />
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="size-4 text-primary -mt-[2px]" />
              <p className="">Made with love for a brighter future</p>
            </div>
          </div>
          <div className="w-full flex xl:hidden justify-center mt-8 md:mt-16">
            <a
              href="https://pinpoint.ng"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer text-muted-foreground">
              <div className="group flex gap-1 justify-center">
                <span className="">Created by</span>
                <div className="relative">
                  <p className="">Pinpoint Global</p>
                  <div className="w-full max-w-0 group-hover:max-w-full h-[1px] bg-current absolute -bottom-1 left-0 transition-all duration-500 ease-in" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterContactRow = ({ LucideIcon, Icon, texts }: Omit<ContactInfoRowProps, 'title'>) => {
  return (
    <div className="flex items-center">
      {LucideIcon && <LucideIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />}
      {Icon && (
        <i className="text-xl text-primary mr-3 flex-none mt-0.5">
          <Icon />
        </i>
      )}
      <div className="font-montserrat text-white/80">
        {texts.map((item, idx, arr) => (
          <ContactRowText key={idx} {...item} isLast={idx === arr.length - 1} />
        ))}
      </div>
    </div>
  );
};

const FooterLink = ({ text, footerOnlySuffix, href, afterClick }: HeaderLinkProps) => {
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
          <p className="font-montserrat text-white/80 hover:text-primary transition-colors duration-200">
            {text}
            {footerOnlySuffix || ''}
          </p>
          {/* <div className="w-full max-w-0 group-hover:max-w-full h-[2px] bg-gradient-primary absolute -bottom-1 left-0 transition-all duration-500 ease-in" /> */}
        </div>
      </GhostBtn>
    </li>
  );
};
