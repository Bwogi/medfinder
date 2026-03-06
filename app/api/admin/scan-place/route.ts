import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { ndcCandidatesFromScan, normalizeNdcForStorage } from "@/lib/ndc";

const ROUTES = [
  "ORAL",
  "TOPICAL",
  "OPHTHALMIC",
  "OTIC",
  "NASAL",
  "INHALATION",
  "INJECTION",
  "RECTAL",
  "VAGINAL",
  "SUBLINGUAL",
  "TRANSDERMAL",
  "OTHER",
] as const;

type OpenFdaNdcResult = {
  product_ndc?: string;
  package_ndc?: string;
  generic_name?: string;
  brand_name?: string;
  dosage_form?: string;
  route?: string;
  labeler_name?: string;
  active_ingredients?: Array<{ name?: string; strength?: string }>;
};

type OpenFdaSuggestion = {
  ndc: string;
  genericName: string;
  brandName: string;
  strength: string | null;
  dosageForm: (typeof DOSAGE_FORMS)[number] | "OTHER";
  route: (typeof ROUTES)[number] | "OTHER";
  manufacturer: string | null;
};

const OPENFDA_ROUTE_MAP: Record<string, (typeof ROUTES)[number]> = {
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

const OPENFDA_DOSAGE_FORM_MAP: Record<string, (typeof DOSAGE_FORMS)[number]> = {
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

function dashCandidatesFromDigits(digits: string) {
  const out = new Set<string>();
  if (digits.length === 10) {
    out.add(`${digits.slice(0, 5)}-${digits.slice(5, 8)}-${digits.slice(8)}`);
    out.add(`${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8)}`);
  }
  if (digits.length === 11) {
    out.add(`${digits.slice(0, 5)}-${digits.slice(5, 9)}-${digits.slice(9)}`);
    out.add(`${digits.slice(0, 4)}-${digits.slice(4, 8)}-${digits.slice(8)}`);
  }
  return [...out];
}

async function openFdaLookupByScan(scan: string): Promise<OpenFdaSuggestion[]> {
  const candidates = ndcCandidatesFromScan(scan);
  const searches: string[] = [];

  for (const cand of candidates) {
    for (const dashed of dashCandidatesFromDigits(cand)) {
      searches.push(`package_ndc:\"${dashed}\"`);
      searches.push(`product_ndc:\"${dashed}\"`);
    }
    searches.push(`package_ndc:${cand}`);
    searches.push(`product_ndc:${cand}`);
  }

  for (const search of searches) {
    const url = `https://api.fda.gov/drug/ndc.json?search=${encodeURIComponent(search)}&limit=10`;
    const res = await fetch(url, { headers: { accept: "application/json" }, cache: "no-store" });
    if (!res.ok) continue;
    const json = (await res.json()) as { results?: OpenFdaNdcResult[] };
    const results = (json.results ?? [])
      .map((r): OpenFdaSuggestion | null => {
        const ndc = r.package_ndc || r.product_ndc;
        if (!ndc) return null;

        const routeUp = (r.route ?? "").toUpperCase().trim();
        const formUp = (r.dosage_form ?? "").toUpperCase().trim();

        return {
          ndc,
          genericName: (r.generic_name ?? "").trim(),
          brandName: (r.brand_name ?? "").trim(),
          strength: r.active_ingredients?.[0]?.strength?.trim() ?? null,
          route: OPENFDA_ROUTE_MAP[routeUp] ?? "OTHER",
          dosageForm: OPENFDA_DOSAGE_FORM_MAP[formUp] ?? "OTHER",
          manufacturer: r.labeler_name?.trim() ?? null,
        };
      })
      .filter(Boolean) as OpenFdaSuggestion[];

    if (results.length) return results;
  }

  return [];
}

const DOSAGE_FORMS = [
  "TABLET",
  "TABLET_ER",
  "TABLET_DR",
  "CAPSULE",
  "CAPSULE_ER",
  "ODT",
  "ORAL_SOLUTION",
  "ORAL_SUSPENSION",
  "SYRUP",
  "POWDER",
  "GRANULES",
  "CREAM",
  "OINTMENT",
  "GEL",
  "LOTION",
  "PATCH",
  "EYE_DROPS",
  "EAR_DROPS",
  "NASAL_SPRAY",
  "INHALER",
  "NEB_SOLUTION",
  "INJECTION",
  "SUPPOSITORY",
  "OTHER",
] as const;

export async function POST(req: Request) {
  type ProductVariantCreateData = Parameters<typeof prisma.productVariant.create>[0]["data"];

  const body = (await req.json()) as {
    scan?: string;
    storageLocationId?: string;
    cassetteNumber?: string | null;
    isPrimary?: boolean;
    notes?: string | null;

    quickAdd?: {
      genericName?: string;
      brandNames?: string;
      strength?: string | null;
      route?: string;
      dosageForm?: string;
    };
  };

  if (!body.scan || !body.storageLocationId) {
    return NextResponse.json(
      { ok: false, message: "scan and storageLocationId are required" },
      { status: 400 },
    );
  }

  const candidates = ndcCandidatesFromScan(body.scan);
  if (candidates.length === 0) {
    return NextResponse.json(
      { ok: false, message: "Scan did not contain digits" },
      { status: 400 },
    );
  }

  // Try direct DB lookup by a handful of patterns.
  const variant = await prisma.productVariant.findFirst({
    where: {
      OR: candidates.flatMap((c) => [
        { ndc: c },
        { ndc: { contains: c } },
      ]),
    },
    include: {
      medication: true,
      placements: {
        include: { storageLocation: true },
        orderBy: [{ isPrimary: "desc" }, { updatedAt: "desc" }],
      },
    },
  });

  const storageLocation = await prisma.storageLocation.findUnique({
    where: { id: body.storageLocationId },
  });

  if (!storageLocation) {
    return NextResponse.json(
      { ok: false, message: "Storage location not found" },
      { status: 404 },
    );
  }

  let ensuredVariant = variant;

  if (!ensuredVariant) {
    const qa = body.quickAdd;
    if (!qa?.genericName) {
      const suggestions = await openFdaLookupByScan(body.scan);
      return NextResponse.json(
        {
          ok: false,
          code: "VARIANT_NOT_FOUND",
          message: "Variant not found for scan. Provide quickAdd.genericName to create it.",
          scan: body.scan,
          ndcCandidates: candidates,
          suggestions,
        },
        { status: 404 },
      );
    }

    const genericName = qa.genericName.trim();
    const brandNames = qa.brandNames?.trim() ? qa.brandNames.split(",").map((s) => s.trim()).filter(Boolean) : [];

    const route = ROUTES.includes(qa.route as (typeof ROUTES)[number])
      ? (qa.route as ProductVariantCreateData["route"])
      : ("ORAL" as ProductVariantCreateData["route"]);

    const dosageForm = DOSAGE_FORMS.includes(qa.dosageForm as (typeof DOSAGE_FORMS)[number])
      ? (qa.dosageForm as ProductVariantCreateData["dosageForm"])
      : ("OTHER" as ProductVariantCreateData["dosageForm"]);

    const ndc = normalizeNdcForStorage(body.scan);

    const existingMedication = await prisma.medication.findFirst({ where: { genericName } });
    const medication = existingMedication
      ? await prisma.medication.update({
          where: { id: existingMedication.id },
          data: {
            brandNames: brandNames.length ? JSON.stringify(brandNames) : existingMedication.brandNames,
          },
        })
      : await prisma.medication.create({
          data: {
            genericName,
            brandNames: JSON.stringify(brandNames),
          },
        });

    ensuredVariant = await prisma.productVariant.create({
      data: {
        medicationId: medication.id,
        strength: qa.strength?.trim() ? qa.strength.trim() : null,
        route,
        dosageForm,
        ndc,
      },
      include: {
        medication: true,
        placements: {
          include: { storageLocation: true },
          orderBy: [{ isPrimary: "desc" }, { updatedAt: "desc" }],
        },
      },
    });
  }

  // If making primary, demote other placements.
  if (body.isPrimary) {
    await prisma.variantPlacement.updateMany({
      where: {
        productVariantId: ensuredVariant.id,
        NOT: { storageLocationId: storageLocation.id },
      },
      data: { isPrimary: false },
    });
  }

  const existingPlacement = await prisma.variantPlacement.findFirst({
    where: {
      productVariantId: ensuredVariant.id,
      storageLocationId: storageLocation.id,
    },
  });

  const placement = existingPlacement
    ? await prisma.variantPlacement.update({
        where: { id: existingPlacement.id },
        data: {
          cassetteNumber: body.cassetteNumber ?? existingPlacement.cassetteNumber,
          isPrimary: body.isPrimary ?? existingPlacement.isPrimary,
          notes: body.notes ?? existingPlacement.notes,
        },
        include: { storageLocation: true },
      })
    : await prisma.variantPlacement.create({
        data: {
          productVariantId: ensuredVariant.id,
          storageLocationId: storageLocation.id,
          cassetteNumber: body.cassetteNumber ?? null,
          isPrimary: body.isPrimary ?? true,
          notes: body.notes ?? null,
        },
        include: { storageLocation: true },
      });

  return NextResponse.json({
    ok: true,
    variant: ensuredVariant,
    placement,
    storageLocation,
  });
}
