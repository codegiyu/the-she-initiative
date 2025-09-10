'use client';
import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SheiForm } from '@/components/forms/RequestForms';
import { SectionHeading } from '@/components/general/SectionHeading';
import { FADE_LEFT, FADE_UP, staggerParent } from '@/lib/constants/motion';
import { CONTACT_INFO_ROWS } from '@/lib/constants/texts';
import { useInPageNav } from '@/lib/hooks/use-inpage-nav';
import { IconComp, LucideIconComp } from '@/lib/types/general';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="section-block-padding bg-gradient-secondary">
      <motion.div {...staggerParent({})} className="regular-container">
        {/* Header */}
        <SectionHeading
          title="Contact Us"
          // text="Join us in our mission to empower girls and young women. Whether you need support or
          //   want to help, we're here for you."
          className="text-center mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <SheiForm slug="contact_us" />

          {/* Contact Information */}
          <motion.div {...staggerParent({})} className="space-y-8">
            {/* Contact Details */}
            <motion.div
              variants={FADE_UP}
              className="bg-white px-4 500:px-6 md:px-8 py-8 rounded-xl shadow-elegant shadow-primary/20">
              <motion.div {...staggerParent({})} className="">
                <motion.h3
                  variants={FADE_UP}
                  className="font-montserrat font-bold text-2xl text-dark mb-6">
                  Contact Information
                </motion.h3>

                <motion.div {...staggerParent({ stagger: 'sm' })} className="space-y-6">
                  {CONTACT_INFO_ROWS.filter(s => !s.showInFooterOnly).map((item, idx) => (
                    <ContactInfoRow key={idx} {...item} />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={FADE_UP}
              className="bg-gradient-primary px-4 500:px-6 md:px-8 py-8 rounded-xl text-white shadow-elegant shadow-primary/20">
              <motion.div
                {...staggerParent({ threshold: 0.75, stagger: 'sm' })}
                className="text-center space-y-4">
                <motion.div variants={FADE_UP} className="flex justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </motion.div>
                <motion.h3 variants={FADE_UP} className="font-montserrat font-bold text-2xl">
                  Make a Difference Today
                </motion.h3>
                <motion.p variants={FADE_UP} className="font-montserrat mb-6 leading-relaxed">
                  Your support can change lives. Join our community of supporters and help us build
                  a safer, more empowered future for girls and young women.
                </motion.p>
                <motion.div variants={FADE_UP} className="flex justify-center">
                  <VolunteerButton />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export interface ContactInfoRowProps {
  LucideIcon?: LucideIconComp;
  Icon?: IconComp;
  title: string;
  texts: ContactRowTextProps[];
  hideInFooter?: boolean;
  showInFooterOnly?: boolean;
}

export const ContactInfoRow = ({ LucideIcon, Icon, title, texts }: ContactInfoRowProps) => {
  return (
    <motion.div variants={FADE_LEFT} className="flex items-center">
      <div className="bg-primary-soft p-3 rounded-lg mr-4">
        {LucideIcon && <LucideIcon className="w-6 h-6 text-primary" />}
        {Icon && (
          <i className="text-2xl text-primary">
            <Icon />
          </i>
        )}
      </div>
      <div>
        <div className="font-montserrat font-semibold text-dark">{title}</div>
        <div className="font-montserrat text-muted-foreground">
          {texts.map((item, idx, arr) => (
            <ContactRowText key={idx} {...item} isLast={idx === arr.length - 1} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export interface ContactRowTextProps {
  text: string;
  link?: string;
  isLast?: boolean;
}

export const ContactRowText = ({ text, link, isLast }: ContactRowTextProps) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="no-underline text-current hover:text-primary cursor-pointer">
          <span>{text}</span>
        </a>
      ) : (
        <span>{text}</span>
      )}
      {!isLast && <br />}
    </>
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
      variant="outline"
      className="border-white text-white hover:bg-white hover:text-primary hover:scale-105"
      text="Volunteer"
    />
  );
};
