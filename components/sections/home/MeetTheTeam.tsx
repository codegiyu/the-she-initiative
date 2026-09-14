import Image from 'next/image';
import { SectionHeading } from '@/components/general/SectionHeading';
import { ScrollReveal } from '@/components/general/ScrollReveal';
import { TEAM_MEMBERS, type TeamMember } from '@/lib/constants/team';

export const MeetTheTeam = () => {
  return (
    <section
      id="team"
      className="section-block-padding bg-gradient-to-b from-primary-soft via-white to-primary-soft/40">
      <div className="regular-container">
        <SectionHeading title="Meet The Team" className="text-center mb-16" />

        <div className="grid justify-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <ScrollReveal delay={index * 0.1} className="h-full">
      <article className="group relative aspect-[3/4] h-full overflow-hidden rounded-xl border border-border bg-dark shadow-soft shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:shadow-primary/20">
        <Image
          src={member.image}
          alt={member.alt}
          fill
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 3rem), 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-6">
          <div className="h-14 w-1 shrink-0 rounded-full bg-gradient-primary" aria-hidden="true" />
          <div>
            <h3 className="font-montserrat text-xl font-bold leading-tight text-white">
              {member.name}
            </h3>
            <p className="mt-1 font-roboto text-base font-medium text-primary-glow">
              {member.title}
            </p>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
};
