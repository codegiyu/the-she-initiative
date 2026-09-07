import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/server/site-config';
import { INITIATIVES } from '@/lib/constants/texts';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    ...INITIATIVES.filter(initiative => initiative.detail).map(initiative => ({
      url: `${SITE_URL}/initiatives/${initiative.slug}`,
    })),
  ];
}
