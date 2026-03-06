"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AREAS = [
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

const KINDS = ["DRAWER", "SHELF", "BIN", "FRIDGE_BIN", "OTHER"] as const;

export function NewLocationForm() {
  const [area, setArea] = useState<(typeof AREAS)[number]>("BACK_SHELVES");
  const [kind, setKind] = useState<(typeof KINDS)[number]>("DRAWER");
  const [label, setLabel] = useState("");
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="grid gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
          const res = await fetch("/api/storage-locations", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ area, kind, label }),
          });

          const json = (await res.json()) as { ok?: boolean; message?: string };
          if (!res.ok || !json.ok) {
            setStatus(json.message ?? "Failed to create location");
            return;
          }

          setLabel("");
          setStatus("Created.");
          window.location.reload();
        } catch {
          setStatus("Failed to create location");
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <div className="font-medium">Area</div>
          <select
            className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"
            value={area}
            onChange={(e) => setArea(e.target.value as (typeof AREAS)[number])}
          >
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-sm">
          <div className="font-medium">Kind</div>
          <select
            className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"
            value={kind}
            onChange={(e) => setKind(e.target.value as (typeof KINDS)[number])}
          >
            {KINDS.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-1 text-sm">
        <div className="font-medium">Label</div>
        <Input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder='e.g. "Drawer A3 (Diabetes)" or "Shelf B1 (Respiratory)"'
          required
        />
      </label>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create location"}
        </Button>
        {status ? (
          <div className="text-sm text-zinc-600 dark:text-zinc-400">{status}</div>
        ) : null}
      </div>
    </form>
  );
}
