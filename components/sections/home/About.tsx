import { AnimatedCounter } from '@/components/general/AnimatedCounter';
import { SectionHeading } from '@/components/general/SectionHeading';
import { cn } from '@/lib/utils';

export const About = () => {
  return (
    <section id="about" className="section-block-padding bg-white">
      <div className="regular-container">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="h-full flex flex-col justify-between space-y-12">
            <SectionHeading title="About Us" className="" />

            <div className="w-full h-fit grid sm:grid-cols-[14.5rem_1fr] lg:grid-cols-1 xl:grid-cols-[14.5rem_1fr] gap-10 items-center rounded-2xl border border-border">
              <div className="w-full h-full min-h-[16.875rem] flex-none bg-[url('https://static.thesolaceinitiative.org/images/founder-lady.webp')] bg-cover bg-center rounded-2xl overflow-hidden"></div>
              <div className="w-full grid gap-4 px-5 sm:px-0 lg:px-5 xl:px-0 sm:pr-10 xl:pr-10 pb-5 pt-0 sm:pt-5 lg:pt-0 xl:pt-5">
                <h3 className="text-2xl font-semibold">Founder&apos;s Note</h3>
                <blockquote className="font-montserrat text-sm leading-relaxed mb-4">
                  &quot;Starting The SHE Initiative was born from a deep conviction that every girl
                  deserves the chance to dream, grow, and thrive without fear. We may be young as an
                  organization, but our commitment to creating lasting change is unwavering.&quot;
                </blockquote>
                <cite className="font-roboto font-semibold text-end">— Sarah Johnson, Founder</cite>
              </div>
            </div>
          </div>

          <div className="h-full flex items-end">
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
          {/* <div className="grid grid-cols-2 gap-6">
            {OUR_STATS.map((item, idx) => (
              <StatsCard key={idx} {...item} />
            ))}
          </div> */}
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
