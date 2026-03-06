import { NextResponse } from "next/server";

import { digitsOnly, ndcCandidatesFromScan } from "@/lib/ndc";

type OpenFdaNdcResult = {
  product_ndc?: string;
  package_ndc?: string;
  generic_name?: string;
  brand_name?: string;
  dosage_form?: string | string[];
  route?: string | string[];
  labeler_name?: string;
  active_ingredients?: Array<{ name?: string; strength?: string }>;
};

type NormalizedDrug = {
  ndc: string;
  genericName: string;
  brandName: string;
  strength: string | null;
  dosageForm: string;
  route: string;
  manufacturer: string | null;
  raw: OpenFdaNdcResult;
};

const ROUTE_MAP: Record<string, string> = {
  ORAL: "ORAL",
  TOPICAL: "TOPICAL",
  OPHTHALMIC: "OPHTHALMIC",
  OTIC: "OTIC",
  NASAL: "NASAL",
  INHALATION: "INHALATION",
  INJECTION: "INJECTION",
  RECTAL: "RECTAL",
  VAGINAL: "VAGINAL",
  SUBLINGUAL: "SUBLINGUAL",
  TRANSDERMAL: "TRANSDERMAL",
};

const DOSAGE_FORM_MAP: Record<string, string> = {
  TABLET: "TABLET",
  "TABLET, EXTENDED RELEASE": "TABLET_ER",
  "TABLET, DELAYED RELEASE": "TABLET_DR",
  CAPSULE: "CAPSULE",
  "CAPSULE, EXTENDED RELEASE": "CAPSULE_ER",
  "ORALLY DISINTEGRATING TABLET": "ODT",
  SOLUTION: "ORAL_SOLUTION",
  "ORAL SOLUTION": "ORAL_SOLUTION",
  SUSPENSION: "ORAL_SUSPENSION",
  "ORAL SUSPENSION": "ORAL_SUSPENSION",
  SYRUP: "SYRUP",
  POWDER: "POWDER",
  GRANULE: "GRANULES",
  GRANULES: "GRANULES",
  CREAM: "CREAM",
  OINTMENT: "OINTMENT",
  GEL: "GEL",
  LOTION: "LOTION",
  PATCH: "PATCH",
  "EYE DROPS": "EYE_DROPS",
  "EAR DROPS": "EAR_DROPS",
  "NASAL SPRAY": "NASAL_SPRAY",
  INHALER: "INHALER",
  "NEBULIZER SOLUTION": "NEB_SOLUTION",
  INJECTION: "INJECTION",
  SUPPOSITORY: "SUPPOSITORY",
};

function firstString(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    const first = value.find((v) => typeof v === "string");
    return typeof first === "string" ? first : undefined;
  }
  return undefined;
}

function toEnumRoute(value: unknown) {
  const s = firstString(value);
  if (!s) return "OTHER";
  const up = s.toUpperCase().trim();
  return ROUTE_MAP[up] ?? "OTHER";
}

function toEnumDosageForm(value: unknown) {
  const s = firstString(value);
  if (!s) return "OTHER";
  const up = s.toUpperCase().trim();
  return DOSAGE_FORM_MAP[up] ?? "OTHER";
}

function normalizeResult(r: OpenFdaNdcResult): NormalizedDrug | null {
  const ndc = r.package_ndc || r.product_ndc;
  if (!ndc) return null;

  const genericName = (r.generic_name ?? "").trim();
  const brandName = (r.brand_name ?? "").trim();
  const strength = r.active_ingredients?.[0]?.strength?.trim() ?? null;

  return {
    ndc,
    genericName,
    brandName,
    strength,
    dosageForm: toEnumDosageForm(r.dosage_form),
    route: toEnumRoute(r.route),
    manufacturer: r.labeler_name?.trim() ?? null,
    raw: r,
  };
}

function dashCandidatesFromDigits(digits: string) {
  const out = new Set<string>();
  if (digits.length === 10) {
    // 5-3-2
    out.add(`${digits.slice(0, 5)}-${digits.slice(5, 8)}-${digits.slice(8)}`);
    // 4-4-2
    out.add(`${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8)}`);
    // 5-4-1
    out.add(`${digits.slice(0, 5)}-${digits.slice(5, 9)}-${digits.slice(9)}`);
  }

  if (digits.length === 11) {
    // 5-4-2
    out.add(`${digits.slice(0, 5)}-${digits.slice(5, 9)}-${digits.slice(9)}`);
    // 4-4-3
    out.add(`${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8)}`);
  }

  return [...out];
}

async function openFdaSearch(search: string) {
  const url = `https://api.fda.gov/drug/ndc.json?search=${encodeURIComponent(search)}&limit=10`;
  const res = await fetch(url, {
    headers: { accept: "application/json" },
    cache: "no-store",
  });

  const contentType = res.headers.get("content-type") ?? "";
  const isJson = contentType.includes("application/json");
  const json = (isJson ? await res.json() : null) as { results?: OpenFdaNdcResult[]; error?: unknown } | null;

  return {
    ok: res.ok as boolean,
    status: res.status,
    json,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") ?? "").trim();

  if (!q) {
    return NextResponse.json({ ok: false, message: "q is required" }, { status: 400 });
  }

  const rawDigits = digitsOnly(q);
  const ndcCandidates = ndcCandidatesFromScan(q);
  const ndcLike = rawDigits.length >= 9;

  const searches: string[] = [];

  if (ndcLike) {
    if (q.includes("-")) {
      searches.push(`package_ndc:\"${q}\"`);
      searches.push(`product_ndc:\"${q}\"`);
    }

    for (const cand of ndcCandidates) {
      for (const dashed of dashCandidatesFromDigits(cand)) {
        searches.push(`package_ndc:\"${dashed}\"`);
        searches.push(`product_ndc:\"${dashed}\"`);
      }
    }

    for (const cand of ndcCandidates) {
      searches.push(`package_ndc:${cand}`);
      searches.push(`product_ndc:${cand}`);
    }
  }
  const escaped = q.replace(/\"/g, "");
  searches.push(`generic_name:\"${escaped}\"`);
  searches.push(`brand_name:\"${escaped}\"`);

  let lastError: { status: number; json: unknown } | null = null;

  for (const search of searches) {
    const r = await openFdaSearch(search);
    if (!r.ok) {
      // openFDA returns 404 for no matches; treat as empty and keep trying other searches.
      if (r.status !== 404) {
        lastError = { status: r.status, json: r.json };
      }
      continue;
    }

    const normalized = ((r.json?.results ?? []) as OpenFdaNdcResult[])
      .map(normalizeResult)
      .filter(Boolean) as NormalizedDrug[];

    if (normalized.length) {
      return NextResponse.json({ ok: true, source: "openfda", results: normalized });
    }
  }

  if (lastError) {
    return NextResponse.json(
      {
        ok: false,
        message: `openFDA error (${lastError.status})`,
        details: lastError.json,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, source: "openfda", results: [] });
}
