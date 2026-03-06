export function digitsOnly(input: string) {
  return input.replace(/\D+/g, "");
}

export function ndcCandidatesFromScan(raw: string): string[] {
  const digits = digitsOnly(raw);
  const candidates = new Set<string>();

  if (!digits) return [];

  if (digits.length === 10) {
    candidates.add(`0${digits}`);
    candidates.add(digits);
  }

  if (digits.length === 11) {
    candidates.add(digits);
  }

  if (digits.length > 11) {
    candidates.add(digits.slice(-11));
    candidates.add(digits.slice(0, 11));
  }

  candidates.add(digits);

  return [...candidates].filter(Boolean);
}

export function normalizeNdcForStorage(raw: string): string | null {
  const candidates = ndcCandidatesFromScan(raw);
  if (!candidates.length) return null;

  // Prefer 11-digit.
  const eleven = candidates.find((c) => c.length === 11);
  return eleven ?? candidates[0] ?? null;
}
