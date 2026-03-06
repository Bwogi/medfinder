import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { parseBrandNames } from "@/lib/brands";
import { prisma } from "@/lib/prisma";

export default async function MedicationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const medication = await prisma.medication.findUnique({
    where: { id },
    include: {
      variants: {
        include: {
          placements: {
            include: { storageLocation: true },
            orderBy: [{ isPrimary: "desc" }, { updatedAt: "desc" }],
          },
        },
        orderBy: [{ dosageForm: "asc" }, { strength: "asc" }],
      },
    },
  });

  if (!medication) notFound();

  const brands = parseBrandNames(medication.brandNames);

  return (
    <Section className="py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {medication.genericName}
          </h1>
          {brands.length ? (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Brands: {brands.join(", ")}
            </p>
          ) : null}
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
        >
          Back to search
        </Link>
      </div>

      <div className="grid gap-4">
        {medication.variants.map((v) => (
          <Card key={v.id}>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center gap-2">
                <Link href={`/variants/${v.id}`} className="hover:underline">
                  {v.dosageForm}
                </Link>
                {v.strength ? <Badge variant="muted">{v.strength}</Badge> : null}
                <Badge variant="muted">{v.route}</Badge>
              </CardTitle>
              <CardDescription>
                {v.placements.length
                  ? `${v.placements.length} location(s) mapped`
                  : "No location mapped yet"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {v.placements.length ? (
                <div className="grid gap-2">
                  {v.placements.map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-wrap items-center justify-between gap-2 text-sm"
                    >
                      <div className="text-zinc-900 dark:text-zinc-50">
                        {p.storageLocation.area} · {p.storageLocation.label}
                      </div>
                      {p.cassetteNumber ? (
                        <Badge variant="muted">Cassette {p.cassetteNumber}</Badge>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Add a drawer/shelf location in Admin.
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
