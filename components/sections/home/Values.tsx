'use client';

import { SectionHeading } from '@/components/general/SectionHeading';
import { OUR_VALUES } from '@/lib/constants/texts';
import { FADE_UP, fadeUpComplete, staggerParent, ZOOM_IN } from '@/lib/constants/motion';
import { LucideIconComp } from '@/lib/types/general';
import { pick } from 'lodash';
import { motion } from 'motion/react';

export const Values = () => {
  return (
    <section id="values" className="section-block-padding bg-white">
      <motion.div {...staggerParent({})} className="regular-container">
        <SectionHeading
          title="Our Values"
          text="These core values guide everything we do and shape how we serve our community with
          purpose and dedication."
          className="text-center mb-16"
        />

        {/* Values Grid */}
        <motion.div
          {...staggerParent({ stagger: 0.2 })}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OUR_VALUES.map((value, idx) => (
            <ValuesCard key={idx} {...value} index={idx} />
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div {...fadeUpComplete({})} className="mt-20 text-center">
          <motion.div
            {...pick(staggerParent({ stagger: 'sm', threshold: 1 }), ['variants', 'viewport'])}
            className="bg-gradient-primary p-12 rounded-2xl text-white shadow-elegant shadow-primary/20 max-w-4xl mx-auto">
            <motion.blockquote
              variants={FADE_UP}
              className="font-montserrat text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
              &quot;When we empower one girl, we empower an entire community. When we transform one
              life, we transform the future.&quot;
            </motion.blockquote>
            <motion.cite variants={FADE_UP} className="font-montserrat font-semibold text-lg">
              — The SHE Initiative Team
            </motion.cite>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export interface ValuesCardProps {
  Icon: LucideIconComp;
  title: string;
  description: string;
  index?: number;
}

export const ValuesCard = ({ Icon, title, description }: ValuesCardProps) => {
  return (
    <motion.div
      variants={ZOOM_IN}
      className="group bg-white p-8 rounded-xl shadow-soft shadow-primary/15 hover:shadow-elegant hover:shadow-primary/20 transition-all duration-300 border border-border hover:border-primary/20">
      <div className="mb-6">
        <div className="bg-primary-soft p-4 rounded-lg w-fit group-hover:bg-gradient-primary transition-all duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      <h3 className="font-montserrat font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="font-montserrat text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};
