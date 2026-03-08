# Katbamakam

Katbamakam is a monorepo for a UAV situational-awareness product composed of:

- **Web app** (`apps/web`) for map-based visualization
- **Backend** (`apps/backend`) for Telegram ingestion, parsing, and realtime broadcast
- **Mobile app placeholder** (`apps/mobile`) for future React Native support
- **Shared packages** (`packages/*`) for contracts, geo data, and utilities

> This project is informational-only and not an official warning system.

## Monorepo layout

```text
apps/
  backend/
  web/
  mobile/
packages/
  shared-types/
  geo-data/
  utils/
docs/
```

## Quick start

1. Install Node 20+ and pnpm 9+
2. Install dependencies:
   - `pnpm install`
3. Run backend and web:
   - `pnpm dev:backend`
   - `pnpm dev:web`

## Who should read what

- **New contributors:** `docs/CONTRIBUTING.md`
- **AI-assisted contributors:** `docs/CONTRIBUTING_FOR_AI.md`
- **Architecture summary:** `docs/architecture.md`
- **API and socket contracts:** `docs/api-contract.md`
- **Operational notes:** `docs/runbook.md`
