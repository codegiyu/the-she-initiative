import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/general/ScrollReveal';
import { InitiativeGallery } from './InitiativeGallery';
import type { Initiative } from '@/lib/types/initiatives';

interface InitiativeDetailPageProps {
  initiative: Initiative;
}

const FACT_ICONS = [CalendarDays, MapPin, Users] as const;

export const InitiativeDetailPage = ({ initiative }: InitiativeDetailPageProps) => {
  if (!initiative.detail) return null;

  const articleParagraphs = [
    ...initiative.detail.overview,
    ...initiative.detail.sections.flatMap(section => section.paragraphs),
  ];

  return (
    <section className="section-block-padding bg-gradient-to-b from-primary-soft via-white to-white">
      <div className="regular-container">
        <ScrollReveal>
          <Link
            href="/#upcoming-initiatives"
            className="mb-8 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-primary transition-colors hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
            <span aria-hidden>←</span>
            Back to initiatives
          </Link>

          <div className="max-w-6xl">
            <span className="mb-5 inline-flex rounded-full border border-primary/10 bg-primary-soft px-3 py-1 font-roboto text-xs font-bold uppercase tracking-[0.08em] text-primary">
              {initiative.status}
            </span>
            <h1 className="font-montserrat text-3xl font-bold leading-tight text-dark sm:text-4xl lg:text-5xl">
              {initiative.title}
            </h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-primary" />
            <p className="mt-6 max-w-5xl font-montserrat text-lg leading-relaxed text-dark/75">
              {initiative.text}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12" direction="none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-soft shadow-elegant shadow-primary/15 sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src={initiative.bannerImage}
              alt={initiative.bannerAlt}
              fill
              priority
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 6rem), 1400px"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.42fr)] lg:items-start lg:gap-16">
          <div className="space-y-12">
            <ScrollReveal>
              <article
                aria-label={`${initiative.title} overview`}
                className="space-y-4 font-montserrat text-sm leading-relaxed text-dark/75 sm:text-base">
                {articleParagraphs.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.1}>
            <dl className="rounded-2xl border border-border bg-white p-6 shadow-soft shadow-primary/10 sm:p-8 lg:sticky lg:top-28">
              {initiative.detail.facts.map((fact, index) => {
                const Icon = FACT_ICONS[index % FACT_ICONS.length];

                return (
                  <div
                    key={fact.label}
                    className="flex gap-4 border-b border-border py-4 first:pt-0 last:border-b-0 last:pb-0">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <dt className="font-roboto text-xs font-bold uppercase tracking-[0.08em] text-primary">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 font-montserrat text-sm leading-relaxed text-dark">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </ScrollReveal>
        </div>

        <section className="mt-16" aria-labelledby="initiative-gallery-heading">
          <ScrollReveal>
            <h2
              id="initiative-gallery-heading"
              className="mb-8 font-montserrat text-2xl font-bold text-dark sm:text-3xl">
              Gallery highlights
            </h2>
          </ScrollReveal>
          <InitiativeGallery title={initiative.title} images={initiative.detail.gallery} />
        </section>
      </div>
    </section>
  );
};
