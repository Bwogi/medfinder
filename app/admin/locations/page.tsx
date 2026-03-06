import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { prisma } from "@/lib/prisma";

import { NewLocationForm } from "@/app/admin/locations/NewLocationForm";

export default async function LocationsAdminPage() {
  const locations = await prisma.storageLocation.findMany({
    orderBy: [{ area: "asc" }, { label: "asc" }],
    include: {
      placements: true,
    },
  });

  return (
    <Section className="py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Storage locations</h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Create drawers/shelves/bins and assign medications to them.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          >
            Admin
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          >
            Search
          </Link>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>New location</CardTitle>
          <CardDescription>
            Use the same labels you see in the pharmacy (drawer stickers, shelf tags).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewLocationForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing locations</CardTitle>
          <CardDescription>{locations.length} total</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {locations.map((loc) => (
              <div key={loc.id} className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {loc.label}
                  </div>
                  <Badge variant="muted">{loc.kind}</Badge>
                  <Badge variant="muted">{loc.area}</Badge>
                  <Badge variant="muted">{loc.placements.length} meds</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
