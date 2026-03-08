# Backend (`apps/backend`)

Node.js + TypeScript service for:

- Telegram ingestion (GramJS, to be added)
- Alert parsing
- Geocoding via `packages/geo-data`
- Real-time WebSocket broadcast

## Current status

Scaffolded with a heartbeat websocket server.

## Next implementation tasks

1. Add GramJS client module
2. Add Hebrew parser module
3. Add in-memory active event store
4. Broadcast `event:update` and `event:clear`
