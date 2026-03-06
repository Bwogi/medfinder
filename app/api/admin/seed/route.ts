import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST() {
  type ProductVariantCreateData = Parameters<typeof prisma.productVariant.create>[0]["data"];
  type StorageLocationCreateData = Parameters<typeof prisma.storageLocation.create>[0]["data"];

  const ensureMedication = async (genericName: string, brands: string[]) => {
    const existing = await prisma.medication.findFirst({ where: { genericName } });
    if (existing) return existing;
    return prisma.medication.create({
      data: {
        genericName,
        brandNames: JSON.stringify(brands),
      },
    });
  };

  const ensureVariant = async (data: ProductVariantCreateData) => {
    const existing = await prisma.productVariant.findFirst({
      where: {
        medicationId: data.medicationId,
        strength: data.strength,
        dosageForm: data.dosageForm,
        route: data.route,
        ndc: data.ndc,
      },
    });
    if (existing) return existing;
    return prisma.productVariant.create({ data });
  };

  const ensureStorageLocation = async (data: StorageLocationCreateData) => {
    const existing = await prisma.storageLocation.findFirst({
      where: { area: data.area, label: data.label },
    });
    if (existing) return existing;
    return prisma.storageLocation.create({ data });
  };

  const ensurePlacement = async (data: {
    productVariantId: string;
    storageLocationId: string;
    cassetteNumber?: string | null;
    isPrimary?: boolean;
  }) => {
    const existing = await prisma.variantPlacement.findFirst({
      where: {
        productVariantId: data.productVariantId,
        storageLocationId: data.storageLocationId,
      },
    });
    if (existing) return existing;
    return prisma.variantPlacement.create({
      data: {
        productVariantId: data.productVariantId,
        storageLocationId: data.storageLocationId,
        cassetteNumber: data.cassetteNumber ?? null,
        isPrimary: data.isPrimary ?? true,
      },
    });
  };

  const drawerA3 = await ensureStorageLocation({
    kind: "DRAWER",
    area: "BACK_SHELVES",
    label: "Drawer A3 (Diabetes)",
  });

  const drawerC2 = await ensureStorageLocation({
    kind: "DRAWER",
    area: "BACK_SHELVES",
    label: "Drawer C2 (Cardiac)",
  });

  const shelfB1 = await ensureStorageLocation({
    kind: "SHELF",
    area: "FRONT_SHELVES",
    label: "Shelf B1 (Respiratory)",
  });

  const otcShelf = await ensureStorageLocation({
    kind: "SHELF",
    area: "OTC",
    label: "OTC shelf (Pain & Fever)",
  });

  const narcDrawer = await ensureStorageLocation({
    kind: "DRAWER",
    area: "NARCOTICS",
    label: "Narc drawer (CII)",
  });

  const fridgeBin = await ensureStorageLocation({
    kind: "FRIDGE_BIN",
    area: "FRIDGE",
    label: "Fridge bin (Antibiotic liquids)",
  });

  const cassetteBay = await ensureStorageLocation({
    kind: "SHELF",
    area: "AUTOMATION",
    label: "Automation cassette bay",
  });

  const metformin = await ensureMedication("metformin", ["Glucophage"]);
  const amoxicillin = await ensureMedication("amoxicillin", ["Amoxil"]);
  const albuterol = await ensureMedication("albuterol", ["Ventolin", "ProAir", "Proventil"]);
  const lisinopril = await ensureMedication("lisinopril", ["Prinivil", "Zestril"]);
  const atorvastatin = await ensureMedication("atorvastatin", ["Lipitor"]);
  const levothyroxine = await ensureMedication("levothyroxine", ["Synthroid", "Levoxyl"]);
  const acetaminophen = await ensureMedication("acetaminophen", ["Tylenol"]);
  const ibuprofen = await ensureMedication("ibuprofen", ["Advil", "Motrin"]);
  const sertraline = await ensureMedication("sertraline", ["Zoloft"]);
  const hydrocodoneAcetaminophen = await ensureMedication(
    "hydrocodone/acetaminophen",
    ["Norco"],
  );

  const met500 = await ensureVariant({
    medicationId: metformin.id,
    strength: "500 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-1045-01",
  });
  const met500er = await ensureVariant({
    medicationId: metformin.id,
    strength: "500 mg",
    dosageForm: "TABLET_ER",
    route: "ORAL",
    ndc: "00093-1095-01",
  });

  const amox250 = await ensureVariant({
    medicationId: amoxicillin.id,
    strength: "250 mg/5 mL",
    dosageForm: "ORAL_SUSPENSION",
    route: "ORAL",
    ndc: "00093-4177-01",
  });
  const amox500 = await ensureVariant({
    medicationId: amoxicillin.id,
    strength: "500 mg",
    dosageForm: "CAPSULE",
    route: "ORAL",
    ndc: "00093-2267-56",
  });

  const albInh = await ensureVariant({
    medicationId: albuterol.id,
    strength: "90 mcg/actuation",
    dosageForm: "INHALER",
    route: "INHALATION",
    ndc: "00093-0292-05",
  });
  const albNeb = await ensureVariant({
    medicationId: albuterol.id,
    strength: "2.5 mg/3 mL",
    dosageForm: "NEB_SOLUTION",
    route: "INHALATION",
    ndc: "00093-0750-61",
  });

  const lis10 = await ensureVariant({
    medicationId: lisinopril.id,
    strength: "10 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-1048-06",
  });
  const lis20 = await ensureVariant({
    medicationId: lisinopril.id,
    strength: "20 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-1049-06",
  });

  const ator20 = await ensureVariant({
    medicationId: atorvastatin.id,
    strength: "20 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-7415-56",
  });

  const levo50 = await ensureVariant({
    medicationId: levothyroxine.id,
    strength: "50 mcg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-0365-01",
  });

  const apap500 = await ensureVariant({
    medicationId: acetaminophen.id,
    strength: "500 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00536-3220-01",
  });

  const ibu200 = await ensureVariant({
    medicationId: ibuprofen.id,
    strength: "200 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00536-2211-01",
  });

  const ser50 = await ensureVariant({
    medicationId: sertraline.id,
    strength: "50 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-1036-56",
  });

  const norco5 = await ensureVariant({
    medicationId: hydrocodoneAcetaminophen.id,
    strength: "5 mg-325 mg",
    dosageForm: "TABLET",
    route: "ORAL",
    ndc: "00093-5147-56",
  });

  await ensurePlacement({
    productVariantId: met500.id,
    storageLocationId: cassetteBay.id,
    cassetteNumber: "12",
  });
  await ensurePlacement({
    productVariantId: met500er.id,
    storageLocationId: drawerA3.id,
  });
  await ensurePlacement({
    productVariantId: amox250.id,
    storageLocationId: fridgeBin.id,
  });
  await ensurePlacement({
    productVariantId: amox500.id,
    storageLocationId: drawerC2.id,
  });
  await ensurePlacement({
    productVariantId: albInh.id,
    storageLocationId: shelfB1.id,
  });
  await ensurePlacement({
    productVariantId: albNeb.id,
    storageLocationId: fridgeBin.id,
  });
  await ensurePlacement({
    productVariantId: lis10.id,
    storageLocationId: drawerC2.id,
  });
  await ensurePlacement({
    productVariantId: lis20.id,
    storageLocationId: drawerC2.id,
  });
  await ensurePlacement({
    productVariantId: ator20.id,
    storageLocationId: drawerC2.id,
  });
  await ensurePlacement({
    productVariantId: levo50.id,
    storageLocationId: drawerA3.id,
  });
  await ensurePlacement({
    productVariantId: apap500.id,
    storageLocationId: otcShelf.id,
  });
  await ensurePlacement({
    productVariantId: ibu200.id,
    storageLocationId: otcShelf.id,
  });
  await ensurePlacement({
    productVariantId: ser50.id,
    storageLocationId: drawerC2.id,
  });
  await ensurePlacement({
    productVariantId: norco5.id,
    storageLocationId: narcDrawer.id,
  });

  return NextResponse.json({ ok: true, message: "Seeded sample medications (idempotent)." });
}
