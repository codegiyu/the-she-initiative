import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/general/SectionHeading';
import { ScrollReveal } from '@/components/general/ScrollReveal';
import { INITIATIVES } from '@/lib/constants/texts';
import type { Initiative } from '@/lib/types/initiatives';

export const UpcomingInitiatives = () => {
  return (
    <section
      id="upcoming-initiatives"
      className="section-block-padding bg-gradient-to-b from-primary-soft via-white to-primary-soft/40">
      <div className="regular-container">
        {/* Header */}
        <SectionHeading
          title="Our Initiatives"
          text="Exciting programs and projects we're launching to expand our impact 
          and reach more girls and young women in need."
          className="text-center space-y-4 mb-16"
        />

        {/* Initiatives Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INITIATIVES.map((initiative, index) => (
            <InitiativeCard key={initiative.slug} initiative={initiative} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export interface InitiativeCardProps extends Initiative {
  index?: number;
}

const InitiativeCard = ({ initiative, index = 0 }: { initiative: Initiative; index?: number }) => {
  const card = (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-soft shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:shadow-primary/20">
      <div className="relative aspect-[5/4] shrink-0 overflow-hidden bg-primary-soft">
        <Image
          src={initiative.bannerImage}
          alt={initiative.bannerAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 3rem), 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 z-10 w-fit rounded-full border border-white/70 bg-white/90 px-2.5 py-1 font-roboto text-[0.65rem] font-bold uppercase tracking-[0.08em] text-primary shadow-sm">
          {initiative.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="mb-2 font-montserrat text-xl font-bold leading-tight text-dark">
          {initiative.title}
        </h3>
        <p className="mb-3 font-roboto text-sm font-medium text-primary">{initiative.desc}</p>
        <p className="leading-relaxed text-muted-foreground">{initiative.text}</p>

        {initiative.suffix && (
          <p className="mt-4 font-montserrat italic leading-relaxed text-primary">
            {initiative.suffix}
          </p>
        )}

        {initiative.detail && (
          <span className="mt-6 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-primary">
            View project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        )}
      </div>
    </article>
  );

  return (
    <ScrollReveal className="h-full" delay={index * 0.1}>
      {initiative.detail ? (
        <Link
          href={`/initiatives/${initiative.slug}`}
          aria-label={`View ${initiative.title} project`}
          className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
          {card}
        </Link>
      ) : (
        card
      )}
    </ScrollReveal>
  );
};
