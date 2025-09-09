/* eslint-disable @next/next/no-img-element */
'use client';

import { GhostBtn } from '@/components/atoms/GhostBtn';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { useInPageNav } from '@/lib/hooks/use-inpage-nav';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.thesolaceinitiative.org/images/home/hero-1.webp"
          alt="Empowered young women standing together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="regular-container relative z-10 py-20">
        <div className="w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3, // delay between consecutive children
                },
              },
            }}
            className="max-w-3xl">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}>
              <h1 className="md:w-4/5 lg:w-full font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-6">
                Empowering her today,{' '}
                <span className="text-primary-glow">transforming tomorrow</span>
              </h1>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}>
              <p className="font-montserrat text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                The SHE Initiative provides holistic support, protection and opportunities for girls
                and young women by providing a response team for victims of gender-based violence
                and empowering them to thrive.
              </p>
            </motion.div>

            {/* Buttons container */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}>
              <VolunteerButton />

              {/* Contact button zoom-in AFTER buttons appear */}
              <motion.div
                className="w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}>
                <ContactButton />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ScrollIndicatorButton />
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

const ScrollIndicatorButton = () => {
  const { targetElRef } = useInPageNav({ href: '/#about' });

  return (
    <GhostBtn
      linkProps={{ href: '#', preventdefault: 'true' }}
      onClick={() => {
        setTimeout(() => {
          if (targetElRef.current) {
            targetElRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }}>
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
      </div>
    </GhostBtn>
  );
};
