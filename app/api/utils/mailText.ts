import type { MailTemplateData } from './mailTemplate';

export function mailText({
  title,
  top,
  data,
  end,
}: {
  title: string;
  top: string[];
  data: MailTemplateData[];
  end: string;
}) {
  return [
    title,
    '',
    ...top,
    '',
    ...data.flatMap(({ property, value }) => [`${property}:`, value, '']),
    end,
  ].join('\n');
}
