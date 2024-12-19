export function parseMeasure(measure: string): { quantity: number; unit: string } {
  if (!measure) return { quantity: 0, unit: '' };

  const parsed = measure.match(/([\d.]+)\s*([a-zA-Z]*)/);

  if (parsed) {
    return {
      quantity: parseFloat(parsed[1]),
      unit: parsed[2] || '',
    };
  }
  return { quantity: 1, unit: measure };
}
