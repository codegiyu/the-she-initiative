import { z } from 'zod';

const booleanEnvironmentValue = z.preprocess(value => {
  if (value === undefined) return undefined;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}, z.boolean());

const mailConfigSchema = z
  .object({
    fromEmail: z.string().trim().email(),
    password: z.string().min(1),
    emailHost: z.string().trim().min(1),
    emailPort: z.preprocess(value => {
      if (typeof value === 'string' && value.trim() !== '') return Number(value);
      return value;
    }, z.number().int().min(1).max(65_535)),
    toEmail: z.string().trim().email(),
    secureMail: booleanEnvironmentValue.default(true),
  })
  .strict();

export type MailConfig = z.infer<typeof mailConfigSchema>;

export function getMailConfig(): MailConfig | null {
  const result = mailConfigSchema.safeParse({
    fromEmail: process.env.fromEmail,
    password: process.env.password,
    emailHost: process.env.emailHost,
    emailPort: process.env.emailPort,
    toEmail: process.env.toEmail,
    secureMail: process.env.secureMail,
  });

  return result.success ? result.data : null;
}

export function getSiteOrigin(): string {
  const configuredSiteUrl = process.env.SITE_URL?.trim() || 'https://thesolaceinitiative.org';

  try {
    return new URL(configuredSiteUrl).origin;
  } catch {
    return 'https://thesolaceinitiative.org';
  }
}
