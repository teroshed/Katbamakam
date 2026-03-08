export type ThreatStatus = "active" | "cleared";
export type ThreatKind = "UAV";
export type ConfidenceLevel = "low" | "medium" | "high";

export interface ThreatLocationPoint {
  name: string;
  lat: number;
  lng: number;
  time: string;
}

export interface ThreatEvent {
  eventId: string;
  kind: ThreatKind;
  status: ThreatStatus;
  confidence: ConfidenceLevel;
  speedEstimate: {
    minKmh: number;
    maxKmh: number;
  };
  locations: ThreatLocationPoint[];
  source: "tzofar";
}

export type RealtimeMessageType = "event:update" | "event:clear" | "system:heartbeat";

export interface RealtimeMessage<TPayload = unknown> {
  type: RealtimeMessageType;
  payload: TPayload;
  sentAt: string;
}
