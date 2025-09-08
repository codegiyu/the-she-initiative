import { Heart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIconComp } from '@/lib/types/general';
import { SERVICES } from '@/lib/constants/texts';
import { SectionHeading } from '@/components/general/SectionHeading';

export const Services = () => {
  return (
    <section id="what-we-do" className="section-block-padding bg-gradient-secondary">
      <div className="regular-container">
        {/* Header */}
        <SectionHeading
          title="What We Do"
          text="Our comprehensive approach addresses immediate safety needs while building long-term
          empowerment and independence for girls and young women."
          className="text-center mb-16"
        />

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-dark p-8 rounded-xl text-center text-white shadow-elegant">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-primary-glow" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">Need Immediate Help?</h3>
            <p className="font-montserrat text-lg mb-6">
              Our response team is available 24/7 for emergency situations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button className="font-montserrat font-semibold bg-primary hover:bg-primary-glow text-primary-foreground">
                Call Emergency Line
              </Button>
              <Button
                variant="outline"
                className="font-montserrat font-semibold border-white text-white hover:bg-white hover:text-dark">
                Online Support Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export interface ServiceCardProps {
  Icon: LucideIconComp;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-elegant shadow-primary/20 hover:shadow-soft hover:primary/15 transition-all duration-300 border border-border">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-primary p-3 rounded-lg mr-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-montserrat font-bold text-2xl text-dark">{title}</h3>
      </div>

      <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <Heart className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
            <span className="font-montserrat text-dark">{feature}</span>
          </li>
        ))}
      </ul>

      {/* <RegularBtn size="full" text="Learn More" /> */}
    </div>
  );
};
