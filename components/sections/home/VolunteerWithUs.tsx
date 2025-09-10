'use client';
import { SheiForm } from '@/components/forms/RequestForms';
import { SectionHeading } from '@/components/general/SectionHeading';
import { FADE_LEFT, FADE_UP, staggerParent } from '@/lib/constants/motion';
import { WAYS_TO_HELP } from '@/lib/constants/texts';
import { motion } from 'motion/react';

export const VolunteerWithUs = () => {
  return (
    <section id="volunteer-with-us" className="section-block-padding bg-white">
      <div className="regular-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <motion.div {...staggerParent({})} className="space-y-8">
            <SectionHeading title="Volunteer With Us" className="mb-16" />

            <motion.p
              variants={FADE_UP}
              className="font-montserrat text-lg text-muted-foreground leading-relaxed">
              Join our passionate team of volunteers and make a direct impact in the lives of girls
              and young women in our community. Whether you have an hour a week or can commit to
              regular involvement, there&apos;s a place for you.
            </motion.p>

            <motion.div {...staggerParent({})} className="space-y-4">
              <motion.h3 variants={FADE_UP} className="font-montserrat font-bold text-xl text-dark">
                How You Can Help:
              </motion.h3>
              <motion.div {...staggerParent({ stagger: 0.5 })} className="space-y-3">
                {WAYS_TO_HELP.map((text, idx) => (
                  <WaysToHelpRow key={idx} text={text} />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <SheiForm slug="volunteer_with_us" />
        </div>
      </div>
    </section>
  );
};

const WaysToHelpRow = ({ text }: { text: string }) => {
  return (
    <motion.div variants={FADE_LEFT} className="flex items-center">
      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
      <span className="font-montserrat text-muted-foreground">{text}</span>
    </motion.div>
  );
};
