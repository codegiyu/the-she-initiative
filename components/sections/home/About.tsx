'use client';

import { AnimatedCounter } from '@/components/general/AnimatedCounter';
import { SectionHeading } from '@/components/general/SectionHeading';
import {
  FADE_RIGHT,
  FADE_UP,
  STAGGER_PARENT,
  staggerParent,
  zoomInNum,
} from '@/lib/constants/motion';
import { cn } from '@/lib/utils';
import { pick } from 'lodash';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="section-block-padding bg-white">
      <div className="regular-container">
        <motion.div
          {...STAGGER_PARENT}
          className="grid lg:grid-cols-[1fr] gap-12 lg:gap-16 items-center">
          <SectionHeading title="About Us" className="" />

          <motion.div
            variants={FADE_UP}
            className="w-full h-fit grid md:grid-cols-[20rem_1fr] gap-10 items-center rounded-2xl border border-border">
            <div
              className="w-full aspect-auto md:h-full min-h-[30rem] xs:min-h-[32rem] 600:min-h-[40rem] 
              md:min-h-[30rem] lg:min-h-[20rem] flex-none bg-cover bg-[top_center] rounded-2xl overflow-hidden
              bg-[url('https://static.thesolaceinitiative.org/images/founder-maryam-a-gimba-esq.webp')] 
              "
            />
            <motion.div
              {...pick(STAGGER_PARENT, 'variants')}
              className="w-full grid gap-4 px-5 md:pl-0 md:pr-10 pb-5 pt-0 md:pt-5">
              <motion.h3 variants={FADE_UP} className="text-2xl font-semibold">
                Founder&apos;s Note
              </motion.h3>
              <motion.blockquote
                {...pick(staggerParent({ stagger: 'sm' }), 'variants')}
                className="font-montserrat text-sm leading-relaxed mb-4 grid gap-5">
                <motion.span variants={FADE_UP}>
                  &quot;When I founded this initiative, I did so with the unwavering belief: that
                  every girl and young woman deserves the chance to see her worth, to know her voice
                  matters, and to have the opportunity to shape her future — boldly and without
                  apology.
                </motion.span>
                <motion.span variants={FADE_UP}>
                  Our mission is rooted in more than charity — it&apos;s about healing, justice, and
                  transformation. We work beside girls and young women who have survived
                  gender-based violence, those who have been silenced, dismissed or hurt. We help
                  them reclaim their power, their voice, and their future. Whether it&apos;s through
                  education, mentorship, skill-building, or advocacy, we are committed to building a
                  world where girls don&apos;t just survive — they thrive.
                </motion.span>
                <motion.span variants={FADE_UP}>
                  This is not just my mission. It&apos;s a movement. And it belongs to all of us who
                  believe that empowering girls and young women is not an option — it&apos;s a
                  necessity. &quot;
                </motion.span>
              </motion.blockquote>
              <motion.cite variants={FADE_RIGHT} className="font-roboto font-semibold text-end">
                — Maryam A. Gimba, Esq, Founder
              </motion.cite>
            </motion.div>
          </motion.div>

          <div className="h-full flex justify-center items-end">
            <motion.div
              variants={FADE_UP}
              className="xl:w-4/5 grid lg:grid-cols-2 justify-center gap-x-10 gap-y-6">
              <motion.div
                variants={zoomInNum(1)}
                className="flex-shrink-0 bg-card p-6 rounded-lg shadow-soft shadow-primary/15 border-l-4 border-primary">
                <h3 className="font-montserrat font-semibold text-xl text-dark mb-3">
                  Our Mission
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  To provide holistic support, protection and opportunities for girls and young
                  women by providing a response team for victims of gender-based violence, offering
                  access to education, and equipping them with financial and life skills that
                  empower them to thrive.
                </p>
              </motion.div>

              <motion.div
                variants={zoomInNum(2)}
                className="flex-shrink-0 bg-primary-soft p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-montserrat font-semibold text-xl text-dark mb-3">Our Vision</h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  A safe and inclusive society where every girl and young woman is free from
                  violence, educated, financially independent, and empowered to reach her full
                  potential.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 gap-6">
            {OUR_STATS.map((item, idx) => (
              <StatsCard key={idx} {...item} />
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export interface StatsCardProps {
  num: number;
  numSuffix: string;
  desc: string;
  className?: string;
}

export const StatsCard = ({ num, numSuffix, desc, className }: StatsCardProps) => {
  return (
    <div className={cn('p-6 rounded-lg text-center', className)}>
      <div className="font-montserrat font-bold text-3xl lg:text-4xl mb-2">
        <AnimatedCounter to={num} />
        {numSuffix}
      </div>
      <div className="font-montserrat font-medium">{desc}</div>
    </div>
  );
};
