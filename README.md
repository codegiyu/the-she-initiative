# The SHE Initiative

The Solace Healing and Empowerment Initiative website is a single-page Next.js application for sharing the organization’s mission, services, initiatives, and contact routes.

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses the same-origin form endpoint at `/api/send-company-mail`.

## Environment and SMTP

Copy `.env.example` to `.env.local` and replace every placeholder. `SITE_URL` is server-only and controls canonical metadata, the sitemap, and organization structured data. Never commit `.env.local` or SMTP credentials.

The contact and volunteer forms send through SMTP. The route validates the JSON contract, rejects cross-site browser requests and honeypot submissions, limits request size and rate, and returns sanitized typed errors. User values are escaped in HTML mail and are also sent as plain text. The in-memory limiter is suitable for the single-replica deployment; use a shared Redis-backed adapter before scaling horizontally.

## Quality checks

```bash
npm run typecheck
npm run test:unit
npm run lint
npm run format:check
npm run build
```

`npm run checks` runs the non-rewriting lint, formatting, and production-build pipeline. Automated tests use a test SMTP transport and never send real email.

## Docker and Coolify

The Dockerfile builds Next.js in standalone mode and copies only `.next/standalone`, `.next/static`, and `public` into the runtime image. The runtime runs as the non-root `nextjs` user, listens on `0.0.0.0:3003`, and does not install packages at startup.

In Coolify, configure the application to build from this directory, expose port `3003`, and set the SMTP variables plus `SITE_URL` as runtime environment variables. Configure the health check as:

```text
/api/health
```

It returns `{ "status": "ok" }` with `200` when the Next.js process is ready.

## Security and deployment notes

Production responses include HSTS, content-type sniffing protection, same-origin framing protection, a strict referrer policy, a restrictive permissions policy, and a CSP allowing the app plus the existing static image host. HTTPS and the canonical non-`www` host are enforced by the configured redirects.

The public site intentionally retains the existing Q4 2025 initiative copy as accepted content debt. Updating those dates requires an explicit content decision.
