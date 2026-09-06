import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from '@/components/Providers';
import { NGO_JSON_LD, SEO_DETAILS } from '@/lib/server/site-config';

const montserrat = localFont({
  src: [
    { path: '../public/fonts/montserrat/Montserrat-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/montserrat/Montserrat-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/montserrat/Montserrat-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/montserrat/Montserrat-Medium.woff2', weight: '500', style: 'normal' },
    {
      path: '../public/fonts/montserrat/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    { path: '../public/fonts/montserrat/Montserrat-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = localFont({
  src: [
    { path: '../public/fonts/roboto/Roboto-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/roboto/Roboto-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/roboto/Roboto-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/roboto/Roboto-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/roboto/Roboto-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  ...SEO_DETAILS,
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
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(NGO_JSON_LD) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
