import type { Metadata } from 'next';
import { z } from 'zod';
import { ORGANIZATION_INFORMATION } from '@/lib/constants/organization';

export const PRODUCTION_SITE_URL = 'https://thesolaceinitiative.org';

export function resolveSiteUrl(value: unknown): string {
  const configuredSiteUrl = z.string().trim().url().safeParse(value);

  return (configuredSiteUrl.success ? configuredSiteUrl.data : PRODUCTION_SITE_URL).replace(
    /\/+$/,
    ''
  );
}

export const SITE_URL = resolveSiteUrl(process.env.SITE_URL);
export const SITE_ORIGIN = new URL(SITE_URL).origin;

export const SEO_DETAILS: Metadata = {
  title: {
    default: ORGANIZATION_INFORMATION.name,
    template: '%s | The SHE Initiative',
  },
  description:
    'The Solace Healing and Empowerment Initiative provides holistic support, protection and opportunities for girls and young women by providing a response team for victims of gender-based violence, educating and empowering them to thrive.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: ORGANIZATION_INFORMATION.name,
    description:
      'The Solace Healing and Empowerment Initiative provides holistic support, protection and opportunities for girls and young women by providing a response team for victims of gender-based violence, educating and empowering them to thrive.',
    type: 'website',
    url: SITE_URL,
    siteName: ORGANIZATION_INFORMATION.name,
    images: [
      {
        url: '/images/site-preview.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/site-preview.webp'],
  },
  icons: '/favicon.png',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: ORGANIZATION_INFORMATION.name }],
  creator: ORGANIZATION_INFORMATION.name,
  publisher: ORGANIZATION_INFORMATION.name,
  keywords: [
    'solace healing and empowerment initiative',
    'the she initiative',
    'shei',
    'women',
    'empowerment',
    'gender-based violence',
    'financial literacy',
    'girl child',
    'education',
    'support',
    'Maryam A. Gimba, Esq',
  ],
  category: 'Nonprofit Organization',
  classification: 'Non-governmental organization',
};

export const NGO_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${SITE_URL}#organization`,
  name: ORGANIZATION_INFORMATION.name,
  url: SITE_URL,
  logo: new URL(ORGANIZATION_INFORMATION.logoPath, SITE_URL).toString(),
  email: ORGANIZATION_INFORMATION.email,
  telephone: ORGANIZATION_INFORMATION.telephone,
  sameAs: [ORGANIZATION_INFORMATION.instagramUrl],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'emergency',
      telephone: ORGANIZATION_INFORMATION.telephone,
      availableLanguage: ['English'],
    },
  ],
} as const;
