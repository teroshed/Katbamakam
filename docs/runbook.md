# Runbook

## Local development

- Start backend: `pnpm dev:backend`
- Start web: `pnpm dev:web`

## Deployment strategy (initial)

- Backend on Render/Fly/VPS
- Web on Vercel/Netlify

## Incident notes

- Treat parser mismatches as expected; log unknown patterns for review.
- Always keep informational disclaimer visible in clients.
