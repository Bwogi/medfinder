"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";

type StorageLocation = {
  id: string;
  area: string;
  label: string;
  kind: string;
};

type ScanResultOk = {
  ok: true;
  variant: {
    id: string;
    strength: string | null;
    dosageForm: string;
    route: string;
    ndc: string | null;
    medication: { id: string; genericName: string; brandNames: string };
  };
  placement: {
    id: string;
    cassetteNumber: string | null;
    isPrimary: boolean;
    storageLocation: StorageLocation;
  };
};

type OpenFdaSuggestion = {
  ndc: string;
  genericName: string;
  brandName: string;
  strength: string | null;
  dosageForm: string;
  route: string;
  manufacturer: string | null;
};

type ScanResultMissing = {
  ok: false;
  code: "VARIANT_NOT_FOUND";
  message: string;
  scan: string;
  ndcCandidates: string[];
  suggestions?: OpenFdaSuggestion[];
};

type ScanResultError = {
  ok: false;
  message: string;
};

type ScanPlacePayload = {
  scan: string;
  storageLocationId: string;
  cassetteNumber: string | null;
  isPrimary: boolean;
  quickAdd?: {
    genericName: string;
    brandNames: string;
    strength: string | null;
    route: (typeof ROUTES)[number];
    dosageForm: (typeof DOSAGE_FORMS)[number];
  };
};

const ROUTES = [
  "ORAL",
  "TOPICAL",
  "OPHTHALMIC",
  "OTIC",
  "NASAL",
  "INHALATION",
  "INJECTION",
  "RECTAL",
  "VAGINAL",
  "SUBLINGUAL",
  "TRANSDERMAL",
  "OTHER",
] as const;

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

function safeJsonParse(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export default function ScanToPlacePage() {
  const scanRef = useRef<HTMLInputElement | null>(null);

  const [locations, setLocations] = useState<StorageLocation[]>([]);
  const [locationId, setLocationId] = useState<string>("");
  const [scan, setScan] = useState("");
  const [cassetteNumber, setCassetteNumber] = useState<string>("");
  const [isPrimary, setIsPrimary] = useState<boolean>(true);

  const [status, setStatus] = useState<{ kind: "idle" | "ok" | "error"; message: string }>(
    { kind: "idle", message: "" },
  );

  const [missing, setMissing] = useState<ScanResultMissing | null>(null);
  const [quickAddOpen, setQuickAddOpen] = useState(false);

  const [recentLocations, setRecentLocations] = useState<string[]>([]);

  const [qaGeneric, setQaGeneric] = useState("");
  const [qaBrands, setQaBrands] = useState("");
  const [qaStrength, setQaStrength] = useState("");
  const [qaRoute, setQaRoute] = useState<(typeof ROUTES)[number]>("ORAL");
  const [qaDosageForm, setQaDosageForm] = useState<(typeof DOSAGE_FORMS)[number]>("OTHER");

  const [quickAddNdc, setQuickAddNdc] = useState("");

  const [apiQuery, setApiQuery] = useState("");
  const [apiResults, setApiResults] = useState<OpenFdaSuggestion[]>([]);
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      const res = await fetch("/api/storage-locations", { cache: "no-store" });
      const json = (await res.json()) as { locations?: StorageLocation[] };
      const list = json.locations ?? [];
      setLocations(list);

      const rawRecent = window.localStorage.getItem("scan_recent_locations");
      const parsedRecent = rawRecent ? safeJsonParse(rawRecent) : null;
      const recent = Array.isArray(parsedRecent)
        ? (parsedRecent.filter((x) => typeof x === "string") as string[])
        : [];
      setRecentLocations(recent);

      const last = typeof window !== "undefined" ? window.localStorage.getItem("scan_last_location") : null;
      const preferred = last && list.some((l) => l.id === last) ? last : list[0]?.id ?? "";
      setLocationId(preferred);

      setTimeout(() => scanRef.current?.focus(), 50);
    };

    void run();
  }, []);

  const selectedLocation = useMemo(
    () => locations.find((l) => l.id === locationId) ?? null,
    [locations, locationId],
  );

  const rememberLocation = (id: string) => {
    window.localStorage.setItem("scan_last_location", id);

    const raw = window.localStorage.getItem("scan_recent_locations");
    const parsed = raw ? safeJsonParse(raw) : null;
    const prev = Array.isArray(parsed) ? (parsed.filter((x) => typeof x === "string") as string[]) : [];
    const next = [id, ...prev.filter((x) => x !== id)].slice(0, 6);
    window.localStorage.setItem("scan_recent_locations", JSON.stringify(next));
    setRecentLocations(next);
  };

  const applySuggestion = (s: OpenFdaSuggestion) => {
    setQuickAddOpen(true);
    setQuickAddNdc(s.ndc || "");
    setQaGeneric(s.genericName || "");
    setQaBrands(s.brandName || "");
    setQaStrength(s.strength ?? "");

    const r = s.route?.toUpperCase().trim();
    const d = s.dosageForm?.toUpperCase().trim();

    setQaRoute(ROUTES.includes(r as (typeof ROUTES)[number]) ? (r as (typeof ROUTES)[number]) : "ORAL");
    setQaDosageForm(
      DOSAGE_FORMS.includes(d as (typeof DOSAGE_FORMS)[number])
        ? (d as (typeof DOSAGE_FORMS)[number])
        : "OTHER",
    );

    setTimeout(() => {
      const el = document.getElementById("qa-generic") as HTMLInputElement | null;
      el?.focus();
    }, 50);
  };

  const searchApi = async () => {
    const q = apiQuery.trim();
    if (!q) return;

    setApiLoading(true);
    setApiResults([]);
    setStatus({ kind: "idle", message: "" });

    try {
      const res = await fetch(`/api/drug-lookup?q=${encodeURIComponent(q)}`, { cache: "no-store" });
      const json = (await res.json()) as { ok?: boolean; results?: OpenFdaSuggestion[]; message?: string };
      if (!res.ok || !json.ok) {
        setStatus({ kind: "error", message: json.message ?? "Lookup failed" });
        return;
      }

      setApiResults(json.results ?? []);
      if ((json.results ?? []).length === 0) {
        setStatus({ kind: "error", message: "No openFDA results" });
        setQuickAddOpen(true);
        const looksLikeNdc = q.replace(/\D+/g, "").length >= 9;
        setQuickAddNdc(looksLikeNdc ? q : "");
        setTimeout(() => {
          const el = document.getElementById("qa-generic") as HTMLInputElement | null;
          el?.focus();
        }, 50);
      }
    } catch {
      setStatus({ kind: "error", message: "Lookup failed" });
    } finally {
      setApiLoading(false);
    }
  };

  const submitScan = async (opts?: { quickAdd?: boolean }) => {
    const scanValue = scan.trim() || quickAddNdc.trim();
    if (!scanValue) {
      setStatus({ kind: "error", message: "Scan (or select an NDC) first." });
      return;
    }
    if (!locationId) {
      setStatus({ kind: "error", message: "Pick a storage location first." });
      return;
    }

    setStatus({ kind: "idle", message: "" });
    setMissing(null);

    const payload: ScanPlacePayload = {
      scan: scanValue,
      storageLocationId: locationId,
      cassetteNumber: cassetteNumber.trim() ? cassetteNumber.trim() : null,
      isPrimary,
    };

    if (opts?.quickAdd) {
      payload.quickAdd = {
        genericName: qaGeneric.trim(),
        brandNames: qaBrands.trim(),
        strength: qaStrength.trim() ? qaStrength.trim() : null,
        route: qaRoute,
        dosageForm: qaDosageForm,
      };
    }

    const res = await fetch("/api/admin/scan-place", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as ScanResultOk | ScanResultMissing | ScanResultError;

    if (!res.ok || !json.ok) {
      if ((json as ScanResultMissing).code === "VARIANT_NOT_FOUND") {
        const m = json as ScanResultMissing;
        setMissing(m);
        setQuickAddOpen(true);
        setQuickAddNdc(m.scan);
        setStatus({ kind: "error", message: m.message });
        setQaGeneric(qaGeneric || "");
        setTimeout(() => {
          const el = document.getElementById("qa-generic") as HTMLInputElement | null;
          el?.focus();
        }, 50);
        return;
      }

      setStatus({ kind: "error", message: (json as ScanResultError).message ?? "Failed" });
      return;
    }

    rememberLocation(locationId);

    setStatus({ kind: "ok", message: `Saved to ${json.placement.storageLocation.label}` });
    setScan("");
    setMissing(null);
    setQuickAddOpen(false);
    setQuickAddNdc("");

    setTimeout(() => scanRef.current?.focus(), 50);
  };

  return (
    <Section className="py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Scan to place</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Scan a bottle, choose the shelf/drawer label, save the placement.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Scan</CardTitle>
            <CardDescription>Most scanners type the barcode then send Enter.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                void submitScan();
              }}
            >
              <label className="grid gap-1 text-sm">
                <div className="font-medium">Current location</div>
                <select
                  className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"
                  value={locationId}
                  onChange={(e) => setLocationId(e.target.value)}
                >
                  <option value="" disabled>
                    Select a location
                  </option>
                  {locations.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.label} ({l.area})
                    </option>
                  ))}
                </select>
              </label>

              {recentLocations.length ? (
                <div className="flex flex-wrap gap-2">
                  {recentLocations
                    .map((id) => locations.find((l) => l.id === id))
                    .filter(Boolean)
                    .map((l) => (
                      <button
                        key={l!.id}
                        type="button"
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                        onClick={() => {
                          setLocationId(l!.id);
                          rememberLocation(l!.id);
                          setTimeout(() => scanRef.current?.focus(), 50);
                        }}
                      >
                        {l!.label}
                      </button>
                    ))}
                </div>
              ) : null}

              <label className="grid gap-1 text-sm">
                <div className="font-medium">Scan input</div>
                <Input
                  ref={scanRef}
                  value={scan}
                  onChange={(e) => setScan(e.target.value)}
                  placeholder="Scan barcode (NDC/UPC)"
                  autoCapitalize="none"
                  autoCorrect="off"
                  inputMode="numeric"
                />
              </label>

              <div className="grid gap-2 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <div className="font-medium">Cassette # (optional)</div>
                  <Input
                    value={cassetteNumber}
                    onChange={(e) => setCassetteNumber(e.target.value)}
                    placeholder="e.g. 12"
                  />
                </label>

                <label className="grid gap-1 text-sm">
                  <div className="font-medium">Primary location</div>
                  <select
                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"
                    value={isPrimary ? "yes" : "no"}
                    onChange={(e) => setIsPrimary(e.target.value === "yes")}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" disabled={!scan.trim() || !locationId}>
                  Save placement
                </Button>
                {selectedLocation ? (
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    Target: {selectedLocation.area} · {selectedLocation.label}
                  </div>
                ) : null}
              </div>

              {status.message ? (
                <div
                  className={
                    status.kind === "ok"
                      ? "text-sm text-emerald-700 dark:text-emerald-400"
                      : status.kind === "error"
                        ? "text-sm text-red-700 dark:text-red-400"
                        : "text-sm text-zinc-600 dark:text-zinc-400"
                  }
                >
                  {status.message}
                </div>
              ) : null}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick add (only if not found)</CardTitle>
            <CardDescription>
              If a scan doesn’t match anything in your database, fill this out and save again.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {missing || quickAddOpen ? (
              <div className="grid gap-3">
                {missing ? (
                  <>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="muted">Not found</Badge>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">Scan: {missing.scan}</div>
                    </div>

                    <div className="text-xs text-zinc-600 dark:text-zinc-400">
                      Candidates: {missing.ndcCandidates.slice(0, 5).join(", ")}
                    </div>

                    {(missing.suggestions?.length ?? 0) > 0 ? (
                      <div className="grid gap-2">
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                          openFDA suggestions
                        </div>
                        <div className="grid gap-2">
                          {missing.suggestions!.slice(0, 5).map((s) => (
                            <button
                              key={`${s.ndc}-${s.genericName}-${s.brandName}`}
                              type="button"
                              className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-left text-sm shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                              onClick={() => applySuggestion(s)}
                            >
                              <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                                {s.genericName || s.brandName || "Unknown"}
                              </div>
                              <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                                NDC {s.ndc}
                                {s.strength ? ` · ${s.strength}` : ""}
                                {s.dosageForm ? ` · ${s.dosageForm}` : ""}
                                {s.route ? ` · ${s.route}` : ""}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="muted">Manual</Badge>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400">
                      Fill in details, then Quick add + place.
                    </div>
                  </div>
                )}

                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  Placing into: {selectedLocation ? `${selectedLocation.area} · ${selectedLocation.label}` : "(pick a location on the left)"}
                </div>

                <label className="grid gap-1 text-sm">
                  <div className="font-medium">NDC / scan</div>
                  <Input
                    value={quickAddNdc}
                    onChange={(e) => setQuickAddNdc(e.target.value)}
                    placeholder='e.g. "55710-019-60"'
                    autoCapitalize="none"
                    autoCorrect="off"
                  />
                </label>

                <label className="grid gap-1 text-sm">
                  <div className="font-medium">Generic name</div>
                  <Input
                    id="qa-generic"
                    value={qaGeneric}
                    onChange={(e) => setQaGeneric(e.target.value)}
                    placeholder='e.g. "metformin"'
                    required
                  />
                </label>

                <label className="grid gap-1 text-sm">
                  <div className="font-medium">Brand names (optional, comma separated)</div>
                  <Input
                    value={qaBrands}
                    onChange={(e) => setQaBrands(e.target.value)}
                    placeholder='e.g. "Glucophage"'
                  />
                </label>

                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm">
                    <div className="font-medium">Strength</div>
                    <Input
                      value={qaStrength}
                      onChange={(e) => setQaStrength(e.target.value)}
                      placeholder='e.g. "500 mg"'
                    />
                  </label>

                  <label className="grid gap-1 text-sm">
                    <div className="font-medium">Route</div>
                    <select
                      className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"
                      value={qaRoute}
                      onChange={(e) => setQaRoute(e.target.value as (typeof ROUTES)[number])}
                    >
                      {ROUTES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="grid gap-1 text-sm">
                  <div className="font-medium">Dosage form</div>
                  <select
                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"
                    value={qaDosageForm}
                    onChange={(e) => setQaDosageForm(e.target.value as (typeof DOSAGE_FORMS)[number])}
                  >
                    {DOSAGE_FORMS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    disabled={!qaGeneric.trim()}
                    onClick={() => {
                      void submitScan({ quickAdd: true });
                    }}
                  >
                    Quick add + place
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setMissing(null);
                      setQuickAddOpen(false);
                      setQuickAddNdc("");
                      setTimeout(() => scanRef.current?.focus(), 50);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid gap-3">
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Scan a barcode on the left. If it’s not found, this panel will open so you can add it.
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Search openFDA</div>
                  <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    Search by NDC or drug name, then click a result to auto-fill Quick Add.
                  </div>

                  <form
                    className="mt-3 flex flex-col gap-2 sm:flex-row"
                    onSubmit={(e) => {
                      e.preventDefault();
                      void searchApi();
                    }}
                  >
                    <Input
                      value={apiQuery}
                      onChange={(e) => setApiQuery(e.target.value)}
                      placeholder='e.g. "55700-019-60" or "metformin"'
                    />
                    <Button type="submit" disabled={apiLoading || !apiQuery.trim()} className="sm:w-32">
                      {apiLoading ? "Searching..." : "Search"}
                    </Button>
                  </form>

                  {apiResults.length ? (
                    <div className="mt-3 grid gap-2">
                      {apiResults.slice(0, 5).map((s) => (
                        <button
                          key={`${s.ndc}-${s.genericName}-${s.brandName}`}
                          type="button"
                          className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-left text-sm shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                          onClick={() => applySuggestion(s)}
                        >
                          <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                            {s.genericName || s.brandName || "Unknown"}
                          </div>
                          <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                            NDC {s.ndc}
                            {s.strength ? ` · ${s.strength}` : ""}
                            {s.dosageForm ? ` · ${s.dosageForm}` : ""}
                            {s.route ? ` · ${s.route}` : ""}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
