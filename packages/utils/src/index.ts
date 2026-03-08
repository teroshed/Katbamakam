export function toEtaMinutes(distanceKm: number, speedKmh: number): number {
  if (speedKmh <= 0) throw new Error("speedKmh must be > 0");
  return (distanceKm / speedKmh) * 60;
}

export function toEtaRangeMinutes(
  distanceKm: number,
  speedMinKmh: number,
  speedMaxKmh: number
): { minMinutes: number; maxMinutes: number } {
  if (speedMinKmh <= 0 || speedMaxKmh <= 0) {
    throw new Error("speed values must be > 0");
  }

  const minMinutes = toEtaMinutes(distanceKm, speedMaxKmh);
  const maxMinutes = toEtaMinutes(distanceKm, speedMinKmh);

  return { minMinutes, maxMinutes };
}
