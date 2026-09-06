import { describe, expect, it } from 'vitest';
import { escapeHtml, mailTemplate } from './mailTemplate';

describe('mail template escaping', () => {
  it('escapes HTML control characters', () => {
    expect(escapeHtml(`<script>alert('x')</script>`)).toBe(
      '&lt;script&gt;alert(&#39;x&#39;)&lt;/script&gt;'
    );
  });

  it('does not render user values as markup', () => {
    const html = mailTemplate({
      title: 'Contact Form Submission',
      top: [["<img src=x onerror=alert('x')>"]],
      data: [{ property: 'Message', value: '<b>unsafe</b>' }],
      end: 'Thanks',
    });

    expect(html).not.toContain('<b>unsafe</b>');
    expect(html).toContain('&lt;b&gt;unsafe&lt;/b&gt;');
    expect(html).not.toContain('<img src=x onerror=');
  });
});
