import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { prisma } from "@/lib/prisma";

export default async function VariantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const variant = await prisma.productVariant.findUnique({
    where: { id },
    include: {
      medication: true,
      placements: {
        include: { storageLocation: true },
        orderBy: [{ isPrimary: "desc" }, { updatedAt: "desc" }],
      },
    },
  });

  if (!variant) notFound();

  return (
    <Section className="py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {variant.medication.genericName}
          </h1>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="muted">{variant.dosageForm}</Badge>
            {variant.strength ? <Badge variant="muted">{variant.strength}</Badge> : null}
            {variant.ndc ? <Badge variant="muted">NDC {variant.ndc}</Badge> : null}
            <Badge variant="muted">{variant.route}</Badge>
          </div>
        </div>
        <Link
          href={`/medications/${variant.medicationId}`}
          className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
        >
          Back to medication
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Locations</CardTitle>
        </CardHeader>
        <CardContent>
          {variant.placements.length ? (
            <div className="grid gap-3">
              {variant.placements.map((p) => (
                <div key={p.id} className="flex flex-col gap-1">
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {p.storageLocation.area} · {p.storageLocation.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.cassetteNumber ? (
                      <Badge variant="muted">Cassette {p.cassetteNumber}</Badge>
                    ) : null}
                    <Badge variant="muted">Updated {p.updatedAt.toLocaleString()}</Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              No locations mapped yet.
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
}
