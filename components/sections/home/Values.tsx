import { SectionHeading } from '@/components/general/SectionHeading';
import { OUR_VALUES } from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';

export const Values = () => {
  return (
    <section id="values" className="section-block-padding bg-white">
      <div className="regular-container">
        {/* Header */}
        <SectionHeading
          title="Our Values"
          text="These core values guide everything we do and shape how we serve our community with
          purpose and dedication."
          className="text-center mb-16"
        />

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OUR_VALUES.map((value, idx) => (
            <ValuesCard key={idx} {...value} />
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary p-12 rounded-2xl text-white shadow-elegant shadow-primary/20 max-w-4xl mx-auto">
            <blockquote className="font-montserrat text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
              &quot;When we empower one girl, we empower an entire community. When we transform one
              life, we transform the future.&quot;
            </blockquote>
            <cite className="font-montserrat font-semibold text-lg">— The SHE Initiative Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export interface ValuesCardProps {
  Icon: LucideIconComp;
  title: string;
  description: string;
}

export const ValuesCard = ({ Icon, title, description }: ValuesCardProps) => {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-soft shadow-primary/15 hover:shadow-elegant hover:shadow-primary/20 transition-all duration-300 border border-border hover:border-primary/20">
      <div className="mb-6">
        <div className="bg-primary-soft p-4 rounded-lg w-fit group-hover:bg-gradient-primary transition-all duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      <h3 className="font-montserrat font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="font-montserrat text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
