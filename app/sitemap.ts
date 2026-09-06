import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/server/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL }];
}
