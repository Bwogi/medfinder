import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SeedButton } from "@/app/admin/SeedButton";

export default function AdminPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Load sample data and manage the local database.
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
        >
          Back to search
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sample dataset</CardTitle>
          <CardDescription>
            Adds a few common medications with multiple dosage forms and locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SeedButton />
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Storage locations</CardTitle>
            <CardDescription>Create drawer/shelf labels.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/admin/locations"
              className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              Manage locations
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scan to place</CardTitle>
            <CardDescription>Scan a bottle, pick a shelf, save.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/admin/scan"
              className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              Open scan workflow
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
