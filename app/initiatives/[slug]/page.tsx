import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { InitiativeDetailPage } from '@/components/sections/initiatives/InitiativeDetailPage';
import { getInitiativeBySlug, INITIATIVES } from '@/lib/constants/texts';
import { ORGANIZATION_INFORMATION } from '@/lib/constants/organization';
import { SITE_URL } from '@/lib/server/site-config';

interface InitiativePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INITIATIVES.filter(initiative => initiative.detail).map(initiative => ({
    slug: initiative.slug,
  }));
}

export async function generateMetadata({ params }: InitiativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);

  if (!initiative?.detail) return {};

  const initiativeUrl = new URL(`/initiatives/${initiative.slug}`, SITE_URL).toString();
  const imageUrl = new URL(initiative.bannerImage, SITE_URL).toString();

  return {
    title: initiative.title,
    description: initiative.text,
    keywords: initiative.seoKeywords,
    alternates: {
      canonical: initiativeUrl,
    },
    openGraph: {
      title: initiative.title,
      description: initiative.text,
      type: 'article',
      url: initiativeUrl,
      siteName: ORGANIZATION_INFORMATION.name,
      images: [
        {
          url: imageUrl,
          alt: initiative.bannerAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: initiative.title,
      description: initiative.text,
      images: [imageUrl],
    },
  };
}

export default async function InitiativePage({ params }: InitiativePageProps) {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);

  if (!initiative?.detail) notFound();

  return (
    <MainLayout>
      <InitiativeDetailPage initiative={initiative} />
    </MainLayout>
  );
}
