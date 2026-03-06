import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { prisma } from "@/lib/prisma";

export default async function CassettesPage() {
  const placements = await prisma.variantPlacement.findMany({
    where: {
      cassetteNumber: { not: null },
    },
    include: {
      productVariant: { include: { medication: true } },
      storageLocation: true,
    },
    orderBy: [{ cassetteNumber: "asc" }, { updatedAt: "desc" }],
  });

  const groups = new Map<string, typeof placements>();
  for (const p of placements) {
    const key = p.cassetteNumber ?? "";
    const bucket = groups.get(key) ?? [];
    bucket.push(p);
    groups.set(key, bucket);
  }

  return (
    <Section className="py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Cassettes</h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Quick view of items mapped to cassette numbers.
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
        >
          Back to search
        </Link>
      </div>

      {groups.size === 0 ? (
        <Card>
          <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">
            No cassette locations found. Add some in Admin or load sample data.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {Array.from(groups.entries()).map(([cassette, items]) => (
            <Card key={cassette}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Cassette {cassette}</span>
                  <Badge variant="muted">{items.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {items.map((loc) => (
                    <div key={loc.id} className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={`/variants/${loc.productVariantId}`}
                          className="text-sm font-semibold text-zinc-900 hover:underline dark:text-zinc-50"
                        >
                          {loc.productVariant.medication.genericName}
                        </Link>
                        <Badge variant="muted">{loc.productVariant.dosageForm}</Badge>
                        {loc.productVariant.strength ? (
                          <Badge variant="muted">{loc.productVariant.strength}</Badge>
                        ) : null}
                      </div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {loc.storageLocation.area} · {loc.storageLocation.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
