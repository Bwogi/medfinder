import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = (await req.json()) as {
    productVariantId?: string;
    storageLocationId?: string;
    cassetteNumber?: string;
    isPrimary?: boolean;
    notes?: string;
  };

  if (!body.productVariantId || !body.storageLocationId) {
    return NextResponse.json(
      { ok: false, message: "productVariantId and storageLocationId are required" },
      { status: 400 },
    );
  }

  const placement = await prisma.variantPlacement.create({
    data: {
      productVariantId: body.productVariantId,
      storageLocationId: body.storageLocationId,
      cassetteNumber: body.cassetteNumber ? body.cassetteNumber : null,
      isPrimary: body.isPrimary ?? true,
      notes: body.notes ?? null,
    },
    include: {
      storageLocation: true,
    },
  });

  return NextResponse.json({ ok: true, placement });
}
