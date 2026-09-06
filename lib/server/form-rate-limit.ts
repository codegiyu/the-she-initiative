import type { FormType } from '@/lib/forms/contracts';

export const RATE_LIMIT_MAX_ATTEMPTS = 5;
export const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
export const RATE_LIMIT_MAX_ENTRIES = 10_000;

type RateLimitEntry = {
  timestamps: number[];
};

const entries = new Map<string, RateLimitEntry>();

export type RateLimitResult = { allowed: true } | { allowed: false; retryAfterSeconds: number };

export function normalizeClientIp(value: string | null): string {
  const candidate = value?.split(',')[0]?.trim().toLowerCase() || 'unknown';
  return candidate.replace(/^"|"$/g, '').slice(0, 64) || 'unknown';
}

function pruneExpired(now: number) {
  for (const [key, entry] of entries) {
    const activeTimestamps = entry.timestamps.filter(
      timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS
    );

    if (activeTimestamps.length === 0) entries.delete(key);
    else entry.timestamps = activeTimestamps;
  }
}

function enforceEntryCap() {
  while (entries.size >= RATE_LIMIT_MAX_ENTRIES) {
    const oldestKey = entries.keys().next().value as string | undefined;
    if (!oldestKey) return;
    entries.delete(oldestKey);
  }
}

export function checkFormRateLimit(
  clientIp: string,
  formType: FormType,
  now = Date.now()
): RateLimitResult {
  pruneExpired(now);

  const key = `${normalizeClientIp(clientIp)}:${formType}`;
  let entry = entries.get(key);

  if (!entry) {
    enforceEntryCap();
    entry = { timestamps: [] };
    entries.set(key, entry);
  }

  if (entry.timestamps.length >= RATE_LIMIT_MAX_ATTEMPTS) {
    const oldestTimestamp = entry.timestamps[0] ?? now;
    return {
      allowed: false,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((oldestTimestamp + RATE_LIMIT_WINDOW_MS - now) / 1_000)
      ),
    };
  }

  entry.timestamps.push(now);
  return { allowed: true };
}

export function resetFormRateLimitForTests() {
  entries.clear();
}
