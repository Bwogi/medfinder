"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function SeedButton() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={async () => {
          setLoading(true);
          setStatus("");
          try {
            const res = await fetch("/api/admin/seed", { method: "POST" });
            const json = (await res.json()) as { message?: string };
            setStatus(json.message ?? "Done.");
          } catch {
            setStatus("Failed to seed.");
          } finally {
            setLoading(false);
          }
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load sample data"}
      </Button>
      {status ? (
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{status}</div>
      ) : null}
    </div>
  );
}
