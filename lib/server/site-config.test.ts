import { describe, expect, it } from 'vitest';
import { PRODUCTION_SITE_URL, resolveSiteUrl, SEO_DETAILS } from './site-config';

describe('resolveSiteUrl', () => {
  it('falls back to the canonical production URL when unset', () => {
    expect(resolveSiteUrl(undefined)).toBe(PRODUCTION_SITE_URL);
  });

  it('falls back when the configured value is invalid', () => {
    expect(resolveSiteUrl('not-a-url')).toBe(PRODUCTION_SITE_URL);
  });

  it('trims a valid configured URL and removes trailing slashes', () => {
    expect(resolveSiteUrl('  https://example.org///  ')).toBe('https://example.org');
  });
});

describe('site preview metadata', () => {
  it('uses the public PNG for Open Graph and Twitter previews', () => {
    expect(SEO_DETAILS.openGraph?.images).toEqual([{ url: '/images/site-preview.png' }]);
    expect(SEO_DETAILS.twitter?.images).toEqual(['/images/site-preview.png']);
  });
});
