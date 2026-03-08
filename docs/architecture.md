# Architecture Overview

## Current phase

MVP uses two running apps:

- `apps/backend`: Node.js + TypeScript + GramJS + WebSocket
- `apps/web`: React + Vite + TypeScript

Future:

- `apps/mobile`: React Native consuming same socket contract.

## Data flow

1. Telegram listener receives official alert text.
2. Parser extracts event type, regions, and status.
3. Geocoder resolves region names to coordinates.
4. Backend emits normalized messages over WebSocket.
5. Web (and later mobile) render trajectory + ETA range.

## Design principles

- Contract-first shared package
- Vendor-neutral realtime transport
- Safety-oriented wording (estimated and non-authoritative)
