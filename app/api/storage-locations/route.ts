import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

const STORAGE_AREAS = [
  "FRONT_SHELVES",
  "BACK_SHELVES",
  "FRIDGE",
  "FREEZER",
  "NARCOTICS",
  "OTC",
  "WILL_CALL",
  "AUTOMATION",
  "COMPOUNDING",
  "OTHER",
] as const;

const STORAGE_LOCATION_KINDS = ["DRAWER", "SHELF", "BIN", "FRIDGE_BIN", "OTHER"] as const;

export async function GET() {
  const locations = await prisma.storageLocation.findMany({
    orderBy: [{ area: "asc" }, { label: "asc" }],
  });

  return NextResponse.json({ locations });
}

export async function POST(req: Request) {
  type StorageLocationCreateData = Parameters<typeof prisma.storageLocation.create>[0]["data"];

  const body = (await req.json()) as {
    kind?: string;
    area?: string;
    label?: string;
    notes?: string;
  };

  if (!body.area || !body.label) {
    return NextResponse.json(
      { ok: false, message: "area and label are required" },
      { status: 400 },
    );
  }

  const areaStr = STORAGE_AREAS.includes(body.area as (typeof STORAGE_AREAS)[number])
    ? body.area
    : null;
  const kindStr = body.kind && STORAGE_LOCATION_KINDS.includes(body.kind as (typeof STORAGE_LOCATION_KINDS)[number])
    ? body.kind
    : "OTHER";

  if (!areaStr) {
    return NextResponse.json(
      { ok: false, message: "Invalid area" },
      { status: 400 },
    );
  }

  const area = areaStr as StorageLocationCreateData["area"];
  const kind = kindStr as StorageLocationCreateData["kind"];

  const location = await prisma.storageLocation.create({
    data: {
      kind,
      area,
      label: body.label,
      notes: body.notes ?? null,
    },
  });

  return NextResponse.json({ ok: true, location });
}
