import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { parseBrandNames } from "@/lib/brands";
import { prisma } from "@/lib/prisma";

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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();

  type DosageFormType = Parameters<typeof prisma.productVariant.create>[0]["data"]["dosageForm"];

  const dosageFormGuess = query
    ? query
        .toUpperCase()
        .replace(/\s+/g, "_")
        .replace(/[^A-Z0-9_]/g, "")
    : "";

  const dosageFormFilter = DOSAGE_FORMS.includes(dosageFormGuess as (typeof DOSAGE_FORMS)[number])
    ? (dosageFormGuess as DosageFormType)
    : null;

  const meds = query
    ? await prisma.medication.findMany({
        where: {
          OR: [
            { genericName: { contains: query } },
            { brandNames: { contains: query } },
            {
              variants: {
                some: {
                  OR: [
                    { strength: { contains: query } },
                    { ndc: { contains: query } },
                    ...(dosageFormFilter ? [{ dosageForm: dosageFormFilter }] : []),
                  ],
                },
              },
            },
          ],
        },
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
        orderBy: { genericName: "asc" },
        take: 25,
      })
    : await prisma.medication.findMany({
        orderBy: { updatedAt: "desc" },
        take: 10,
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

  type MedicationResult = (typeof meds)[number];
  type VariantResult = MedicationResult["variants"][number];

  return (
    <Section className="py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Medication search</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Search by generic name, brand name, strength, or dosage form.
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Find it fast</CardTitle>
          <CardDescription>
            Tip: load sample data in Admin if your database is empty.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/" className="flex flex-col gap-3 sm:flex-row">
            <Input
              name="q"
              defaultValue={query}
              placeholder='e.g. "metformin", "Ventolin", "tablet ER", "250"'
            />
            <Button type="submit" className="sm:w-32">
              Search
            </Button>
          </form>
          <div className="mt-3 text-sm">
            <Link
              href="/admin"
              className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              Go to Admin
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {meds.length === 0 ? (
          <Card>
            <CardContent className="text-sm text-zinc-600 dark:text-zinc-400">
              No matches. Try a different search or load sample data in Admin.
            </CardContent>
          </Card>
        ) : (
          meds.map((m: MedicationResult) => {
            const brands = parseBrandNames(m.brandNames);
            const variants = m.variants;

            return (
              <Card key={m.id}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/medications/${m.id}`} className="hover:underline">
                      {m.genericName}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {brands.length ? `Brands: ${brands.join(", ")}` : ""}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {variants.slice(0, 6).map((v: VariantResult) => {
                      const primary = v.placements[0] ?? null;
                      const hasLoc = Boolean(primary);
                      return (
                        <div key={v.id} className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <Link
                              href={`/variants/${v.id}`}
                              className="text-sm font-semibold text-zinc-900 hover:underline dark:text-zinc-50"
                            >
                              {v.dosageForm}
                            </Link>
                            {v.strength ? (
                              <Badge variant="muted">{v.strength}</Badge>
                            ) : null}
                            {v.ndc ? <Badge variant="muted">NDC {v.ndc}</Badge> : null}
                            <Badge variant="muted">{v.route}</Badge>
                            <Badge variant={hasLoc ? "default" : "muted"}>
                              {hasLoc ? "Located" : "No location"}
                            </Badge>
                          </div>
                          {hasLoc ? (
                            <div className="text-sm text-zinc-600 dark:text-zinc-400">
                              {primary?.storageLocation.area} · {primary?.storageLocation.label}
                              {primary?.cassetteNumber
                                ? ` · Cassette ${primary.cassetteNumber}`
                                : ""}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                    {variants.length > 6 ? (
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        +{variants.length - 6} more variants
                      </div>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </Section>
  );
}
