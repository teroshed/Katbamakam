# API / WebSocket Contract (Draft)

## Message envelope

```ts
{
  type: "event:update" | "event:clear" | "system:heartbeat";
  payload: unknown;
  sentAt: string; // ISO timestamp
}
```

## Threat event shape

```ts
{
  eventId: string;
  kind: "UAV";
  status: "active" | "cleared";
  confidence: "low" | "medium" | "high";
  speedEstimate: { minKmh: number; maxKmh: number; };
  locations: Array<{ name: string; lat: number; lng: number; time: string }>;
  source: "tzofar";
}
```
