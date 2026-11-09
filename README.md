# The SHE Initiative

The Solace Healing and Empowerment Initiative website is a Next.js application for sharing the organization’s mission, services, initiatives, launch-event details, team, and contact routes. The homepage is supported by statically generated initiative detail pages under `/initiatives/[slug]`.

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses the same-origin form endpoint at `/api/send-company-mail`.

## Environment and Resend

Copy `.env.example` to `.env.local` and set the required values. The variable names `fromEmail` and `toEmail` are intentionally lowercase and must be entered exactly as shown.

```dotenv
SITE_URL=https://thesolaceinitiative.org
RESEND_API_KEY=re_xxxxxxxxx
fromEmail=no-reply@thesolaceinitiative.org
toEmail=thesheinitiative0@gmail.com
```

- `SITE_URL` is optional and server-only. It controls canonical metadata, the sitemap, and organization structured data. It falls back to `https://thesolaceinitiative.org` when unset or invalid.
- `RESEND_API_KEY` is required for the contact and volunteer forms to send mail.
- `fromEmail` defaults to `no-reply@thesolaceinitiative.org` and must use a verified Resend sending domain.
- `toEmail` defaults to the contact email displayed on the site: `thesheinitiative0@gmail.com`.

Never commit `.env.local`, production environment files, Resend credentials, or any other secret values.

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

## Deployment setup

The production release flow is:

1. Configure and verify Resend for `thesolaceinitiative.org`.
2. Add the production environment variables to the hosting provider.
3. Test the changes on `staging`.
4. Merge `staging` into `main`.
5. Deploy from `main` and verify the live site and mail forms.

### 1. Configure Resend for `thesolaceinitiative.org`

1. Create or access the organization’s account at [Resend](https://resend.com/).
2. Open **Domains**, choose **Add Domain**, and add `thesolaceinitiative.org`.
3. Resend will display the DNS records required for verification. Add those records at the DNS provider that controls `thesolaceinitiative.org`—usually SPF and DKIM, and any MX, return-path, or CAA records Resend specifically displays.
4. Copy each record exactly. If an SPF record already exists, merge the permitted sender entries instead of creating conflicting SPF records. Do not add records at a registrar or DNS service that is not authoritative for the domain.
5. Return to Resend and select **Verify**. DNS propagation can take longer than the initial change; use Resend’s domain details and verification restart controls if necessary. See [Resend domain management](https://resend.com/docs/dashboard/domains/introduction) and [domain verification troubleshooting](https://resend.com/docs/knowledge-base/what-if-my-domain-is-not-verifying).
6. Create a production API key with the least privilege needed for this app: sending access. Store the resulting `re_...` value in the hosting provider’s secret store; do not put it in Git. See [Resend API keys](https://resend.com/docs/api-reference/api-keys/create-api-key).
7. Set `fromEmail` to a sender on the verified domain, for example `no-reply@thesolaceinitiative.org`. Resend verifies the sending identity; it does not create a mailbox inbox. Create a real mailbox separately if the address must receive ordinary mail.

The application sets the visitor’s submitted address as `replyTo`, so form notifications can be answered directly without allowing visitors to spoof the `fromEmail` value.

### 2. Set production environment variables

Set these values in the **Production** environment of the chosen host:

| Variable | Production value |
| --- | --- |
| `SITE_URL` | `https://thesolaceinitiative.org` |
| `RESEND_API_KEY` | The Resend production sending key; never commit this value |
| `fromEmail` | A verified sender such as `no-reply@thesolaceinitiative.org` |
| `toEmail` | `thesheinitiative0@gmail.com`, or the approved operational inbox |

`fromEmail` and `toEmail` are case-sensitive variable names in the application. Environment-variable changes require a new build/deployment before the running site uses them.

#### Vercel

1. Import or open the project connected to `pinpoint-global/the-she-initiative`.
2. In **Project Settings → Environment Variables**, add the four variables above and select **Production**. Add equivalent **Preview** values if `staging` will be deployed for QA.
3. Set the project’s **Production Branch** to `main`.
4. Use the repository root as the project root, keep the Next.js framework preset, and use `npm run build` as the build command if Vercel does not detect it automatically.
5. After saving or changing variables, trigger a new deployment. A push or merge to `main` normally creates the production deployment; `vercel --prod` can be used for a manual deployment. See [Vercel environment variables](https://vercel.com/docs/environment-variables).

#### Netlify

1. Connect the site to `pinpoint-global/the-she-initiative`.
2. In **Project configuration → Environment variables**, add the four variables above for the **Production** deploy context. Ensure `RESEND_API_KEY` is available to Builds and runtime/server functions as required by the site.
3. Set the repository’s **Production branch** to `main` under **Build & deploy → Continuous Deployment → Branches and deploy contexts**.
4. Set the base directory to the repository root and the build command to `npm run build` if it is not detected automatically.
5. Save the variables and trigger a new production deploy. Netlify generally publishes a production deploy whenever new commits arrive on the configured production branch. See [Netlify environment variables](https://docs.netlify.com/build/environment-variables/get-started/) and [Netlify production deploys](https://docs.netlify.com/deploy/deploy-types/production-deploy/).

#### VPS, Docker, or Coolify

Keep production values in the VPS secret store, systemd environment file, Docker/Compose secret configuration, or Coolify environment settings. Do not copy `.env` files into the repository or bake secrets into the Docker image.

For a Node.js process on a VPS:

```bash
git switch main
git pull --ff-only <remote> main
npm ci
npm run build
NODE_ENV=production PORT=3003 npm start
```

For the included standalone Docker image:

```bash
docker build -t shei:latest .
docker run -d --name shei \
  --env-file /path/to/production.env \
  -p 3003:3003 \
  shei:latest
```

The container listens on `0.0.0.0:3003` and exposes `/api/health`. Put the app behind an HTTPS reverse proxy for `thesolaceinitiative.org`, forward requests to port `3003`, and configure the proxy or platform health check to use `/api/health`.

### 3. Release `staging` into `main`

Run the checks before merging. Replace `<remote>` with the remote that points to `git@github.com:pinpoint-global/the-she-initiative.git` (the remote is named `downstream` in the original deployment workspace).

```bash
git remote -v
git fetch <remote>
git switch staging
git pull --ff-only <remote> staging
npm run test:phase
npm run checks
git switch main
git pull --ff-only <remote> main
git merge --no-ff staging
git push <remote> main
```

Resolve and test any merge conflicts before pushing. Keep `main` as the only production branch; use `staging` for integration and pre-production review.

### 4. Deploy and verify from `main`

After `main` is updated:

- Vercel or Netlify should create the production deployment from the configured `main` branch.
- On a VPS or Coolify, pull `main`, rebuild, and restart the service or container.
- Confirm `https://thesolaceinitiative.org` loads over HTTPS and that `https://thesolaceinitiative.org/api/health` returns a healthy response.
- Open `/initiatives/launch-event` and verify the gallery loads.
- Submit controlled contact and volunteer test messages and confirm they arrive at `toEmail` with a verified-domain `fromEmail`.
- Check the hosting logs and Resend logs if delivery fails. Do not expose API keys or submitted form contents in public logs.

## Docker and Coolify

The Dockerfile builds Next.js in standalone mode and copies only `.next/standalone`, `.next/static`, and `public` into the runtime image. The runtime runs as the non-root `nextjs` user, listens on `0.0.0.0:3003`, and does not install packages at startup.

In Coolify, configure the application to build from this directory and expose port `3003`. Set the production variables listed in the deployment table as runtime environment variables. `SITE_URL` may be omitted when deploying the canonical site because the app has a production fallback. Configure the health check as:

```text
/api/health
```

It returns `{ "status": "ok" }` with `200` when the Next.js process is ready.

## Security and deployment notes

Production responses include HSTS, content-type sniffing protection, same-origin framing protection, a strict referrer policy, a restrictive permissions policy, and a same-origin CSP. Website images are served from the repository’s `public/images` directory. HTTPS and the canonical non-`www` host are enforced by the configured redirects.

Initiative and launch-event content is maintained in `lib/constants/texts.ts`; update dates, programme status, and copy there when an approved content change is available.
