# ---- Base Stage ----
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Install dependencies for the build stage.
RUN npm ci

# ---- Build Stage ----
FROM base AS builder
COPY . .
# Build Next.js app
RUN npm run build
# Next may copy project environment files into the standalone trace. Keep all
# runtime secrets supplied by the container environment instead.
RUN rm -f /app/.next/standalone/.env /app/.next/standalone/.env.*

# ---- Production Stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3003
ENV HOSTNAME=0.0.0.0

# Run the application without root privileges.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3003

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3003/api/health || exit 1

CMD ["node", "server.js"]
