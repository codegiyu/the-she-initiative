import { SITE_ORIGIN } from './site-config';

const localhostOriginPattern = /^http:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i;

export function isAllowedFormRequest(request: Request): boolean {
  const fetchSite = request.headers.get('sec-fetch-site')?.trim().toLowerCase();
  if (fetchSite && !['same-origin', 'same-site', 'none'].includes(fetchSite)) return false;

  const origin = request.headers.get('origin')?.trim();
  if (!origin) return true;

  let normalizedOrigin: string;
  try {
    normalizedOrigin = new URL(origin).origin;
  } catch {
    return false;
  }

  if (normalizedOrigin === SITE_ORIGIN) return true;
  return process.env.NODE_ENV !== 'production' && localhostOriginPattern.test(normalizedOrigin);
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}
