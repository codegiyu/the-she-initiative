import { z } from 'zod';
import { ORGANIZATION_INFORMATION } from '@/lib/constants/organization';

export const DEFAULT_FROM_EMAIL = 'no-reply@thesolaceinitiative.org';
export const DEFAULT_TO_EMAIL = ORGANIZATION_INFORMATION.email;

const mailConfigSchema = z
  .object({
    resendApiKey: z.string().trim().min(1),
    fromEmail: z.string().trim().email(),
    toEmail: z.string().trim().email(),
  })
  .strict();

export type MailConfig = z.infer<typeof mailConfigSchema>;

export function getMailConfig(): MailConfig | null {
  const result = mailConfigSchema.safeParse({
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.fromEmail?.trim() || DEFAULT_FROM_EMAIL,
    toEmail: process.env.toEmail?.trim() || DEFAULT_TO_EMAIL,
  });

  return result.success ? result.data : null;
}
