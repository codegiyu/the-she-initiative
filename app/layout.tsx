import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { SEO_DETAILS } from '@/lib/constants/texts';
import { Providers } from '@/components/Providers';
import { ScrollRestorationHandler } from '@/components/general/ScrollRestorationHandler';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  ...SEO_DETAILS,
  openGraph: {
    title: SEO_DETAILS.title,
    description: SEO_DETAILS.description,
    type: 'website',
    url: SEO_DETAILS.metadataBase.toString(),
    siteName: 'Pinpoint Global',
    images: [{ url: SEO_DETAILS.image }],
  },
  twitter: {
    card: 'summary_large_image',
    // site: '@site',
    creator: '@TheLonerider20',
    images: SEO_DETAILS.image,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'only light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ScrollRestorationHandler />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
