import { afterEach, describe, expect, it } from 'vitest';
import { getMailConfig } from './mail-config';

const originalEnvironment = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnvironment };
});

describe('mail configuration', () => {
  it('parses secureMail false as false', () => {
    process.env.fromEmail = 'sender@example.com';
    process.env.password = 'password';
    process.env.emailHost = 'smtp.example.com';
    process.env.emailPort = '587';
    process.env.toEmail = 'recipient@example.com';
    process.env.secureMail = 'false';

    expect(getMailConfig()).toMatchObject({ emailPort: 587, secureMail: false });
  });

  it('rejects incomplete or invalid SMTP configuration', () => {
    process.env.fromEmail = 'not-an-email';
    process.env.password = '';
    process.env.emailHost = 'smtp.example.com';
    process.env.emailPort = 'not-a-port';
    process.env.toEmail = 'recipient@example.com';
    process.env.secureMail = 'not-a-boolean';

    expect(getMailConfig()).toBeNull();
  });
});
