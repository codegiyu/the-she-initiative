import { AnimatedCounter } from '@/components/general/AnimatedCounter';
import { SectionHeading } from '@/components/general/SectionHeading';
import { OUR_STATS } from '@/lib/constants/texts';
import { cn } from '@/lib/utils';

export const About = () => {
  return (
    <section id="about" className="section-block-padding bg-white">
      <div className="regular-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <SectionHeading title="About Us" className="" />

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-soft shadow-primary/15 border-l-4 border-primary">
                <h3 className="font-montserrat font-semibold text-xl text-dark mb-3">
                  Our Mission
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  To provide holistic support, protection and opportunities for girls and young
                  women by responding to gender-based violence, offering access to education, and
                  equipping them with financial and life skills that empower them to thrive.
                </p>
              </div>

              <div className="bg-primary-soft p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-montserrat font-semibold text-xl text-dark mb-3">Our Vision</h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  A safe and inclusive society where every girl and young woman is free from
                  violence, educated, financially independent, and empowered to reach her full
                  potential.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {OUR_STATS.map((item, idx) => (
              <StatsCard key={idx} {...item} />
            ))}
          </div>
        </div>
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
