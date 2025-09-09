import { SectionHeading } from '@/components/general/SectionHeading';
import { UPCOMING_INITIATIVES } from '@/lib/constants/texts';

export const UpcomingInitiatives = () => {
  return (
    <section id="upcoming-initiatives" className="section-block-padding bg-primary-soft">
      <div className="regular-container">
        {/* Header */}
        <SectionHeading
          title="Upcoming Initiatives"
          text="Exciting programs and projects we're launching to expand our impact 
          and reach more girls and young women in need."
          className="text-center space-y-4 mb-16"
        />

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_INITIATIVES.map((item, idx) => (
            <InitiativeCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface InitiativeCardProps {
  title: string;
  desc: string;
  text: string;
  suffix?: string;
}

const InitiativeCard = ({ title, desc, text, suffix }: InitiativeCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-soft shadow-primary/15 border border-border hover:shadow-elegant hover:shadow-primary/20 transition-all duration-300">
      <div className="mb-6">
        <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
          <div className="w-6 h-6 bg-white rounded"></div>
        </div>
        <h3 className="font-montserrat font-bold text-xl text-dark mb-2">{title}</h3>
        <p className="font-roboto text-sm text-primary font-medium mb-3">{desc}</p>
      </div>
      <p className="font-montserrat text-muted-foreground leading-relaxed">{text}</p>
      {suffix && (
        <p className="font-montserrat text-primary leading-relaxed mt-4 italic">{suffix}</p>
      )}
    </div>
  );
};
