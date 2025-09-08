/* eslint-disable @next/next/no-img-element */
'use client';

import { RegularBtn } from '@/components/atoms/RegularBtn';
import { useInPageNav } from '@/lib/hooks/use-inpage-nav';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.thesolaceinitiative.org/images/home/hero-1.png"
          alt="Empowered young women standing together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="regular-container relative z-10 py-20">
        <div className="w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <h1 className="md:w-4/5 lg:w-full font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-6">
                Empowering her today,{' '}
                <span className="text-primary-glow">transforming tomorrow</span>
              </h1>
            </div>

            <div className="animate-slide-up">
              <p className="font-montserrat text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                The Initiative provides holistic support, protection and opportunities for girls and
                young women by responding to gender-based violence and empowering them to thrive.
              </p>
            </div>

            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 sm:gap-6">
              <VolunteerButton />
              <ContactButton />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VolunteerButton = () => {
  const { targetElRef } = useInPageNav({ href: '/#volunteer-with-us' });

  return (
    <RegularBtn
      linkProps={{ href: '#', preventdefault: 'true' }}
      onClick={() => {
        setTimeout(() => {
          if (targetElRef.current) {
            targetElRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }}
      text="Volunteer with us"
      className="hover:scale-105"
    />
  );
};

const ContactButton = () => {
  const { targetElRef } = useInPageNav({ href: '/#contact' });

  return (
    <RegularBtn
      linkProps={{ href: '#', preventdefault: 'true' }}
      onClick={() => {
        setTimeout(() => {
          if (targetElRef.current) {
            targetElRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }}
      variant="outline"
      className="border-white text-white hover:bg-white hover:text-primary hover:scale-105"
      text="Contact us"
    />
  );
};
