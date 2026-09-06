import { beforeEach, describe, expect, it } from 'vitest';
import {
  checkFormRateLimit,
  RATE_LIMIT_WINDOW_MS,
  resetFormRateLimitForTests,
} from './form-rate-limit';

describe('form rate limiter', () => {
  beforeEach(() => resetFormRateLimitForTests());

  it('allows five attempts per form type and blocks the sixth', () => {
    const now = 1_000;

    for (let attempt = 0; attempt < 5; attempt += 1) {
      expect(checkFormRateLimit('203.0.113.4, proxy', 'contact', now + attempt)).toEqual({
        allowed: true,
      });
    }

    const result = checkFormRateLimit('203.0.113.4', 'contact', now + 5);
    expect(result.allowed).toBe(false);
    if (!result.allowed) expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it('keeps volunteer and contact attempts in separate buckets', () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      expect(checkFormRateLimit('203.0.113.5', 'volunteer', 2_000 + attempt).allowed).toBe(true);
    }

    expect(checkFormRateLimit('203.0.113.5', 'contact', 2_005).allowed).toBe(true);
  });

  it('expires old attempts from the sliding window', () => {
    const now = 3_000;
    for (let attempt = 0; attempt < 5; attempt += 1) {
      checkFormRateLimit('203.0.113.6', 'contact', now + attempt);
    }

    expect(checkFormRateLimit('203.0.113.6', 'contact', now + RATE_LIMIT_WINDOW_MS + 1)).toEqual({
      allowed: true,
    });
  });
});
