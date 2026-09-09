# The SHE Initiative

The Solace Healing and Empowerment Initiative website is a single-page Next.js application for sharing the organization’s mission, services, initiatives, and contact routes.

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses the same-origin form endpoint at `/api/send-company-mail`.

## Environment and Resend

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. `fromEmail` defaults to `no-reply@thesolaceinitiative.org`, while `toEmail` defaults to the contact email displayed on the site (`thesheinitiative0@gmail.com`). Override both only with appropriate addresses, and use a verified sending domain for `fromEmail`. `SITE_URL` is optional and server-only; it controls canonical metadata, the sitemap, and organization structured data, and falls back to `https://thesolaceinitiative.org` when unset or invalid. Never commit `.env.local` or Resend credentials.

The contact and volunteer forms send through the Resend API. The route validates the JSON contract, rejects cross-site browser requests and honeypot submissions, limits request size and rate, and returns sanitized typed errors. User values are escaped in HTML mail and are also sent as plain text. The in-memory limiter is suitable for the single-replica deployment; use a shared Redis-backed adapter before scaling horizontally.

## Quality checks

```bash
npm run typecheck
npm run test:unit
npm run test:e2e
npm run lint
npm run format:check
npm run build
```

`npm run checks` runs the non-rewriting lint, formatting, and production-build pipeline. Automated tests mock Resend and never send real email.

The browser smoke suite starts an isolated development server on port `3100` and intercepts form delivery, so it does not send email. Install a Playwright browser with `npx playwright install chromium` for a local run; this repository’s existing Chrome installation can also be selected with `PLAYWRIGHT_CHANNEL=chrome`.

## Docker and Coolify

The Dockerfile builds Next.js in standalone mode and copies only `.next/standalone`, `.next/static`, and `public` into the runtime image. The runtime runs as the non-root `nextjs` user, listens on `0.0.0.0:3003`, and does not install packages at startup.

In Coolify, configure the application to build from this directory and expose port `3003`. Set `RESEND_API_KEY` as a runtime environment variable; `fromEmail` and `toEmail` have safe application defaults, but may be overridden when needed. `SITE_URL` may be omitted when deploying the canonical site because the app has a production fallback. Configure the health check as:

```text
/api/health
```

It returns `{ "status": "ok" }` with `200` when the Next.js process is ready.

## Security and deployment notes

Production responses include HSTS, content-type sniffing protection, same-origin framing protection, a strict referrer policy, a restrictive permissions policy, and a CSP allowing the app plus the existing static image host. HTTPS and the canonical non-`www` host are enforced by the configured redirects.

The public site intentionally retains the existing Q4 2025 initiative copy as accepted content debt. Updating those dates requires an explicit content decision.
