// src/hooks/useInsights.ts
import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { Insight, ServiceCategory } from "../types/insight";

// The Form-linked published CSV.
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwqNxyLeHbnD0sSvPgH1SlioMibYo0S5rEillup4eOtd4oCU0xB2oQKj__L8yvt4HgV9tgX1HEWw3n/pub?gid=877398146&single=true&output=csv";

const SERVICE_CATEGORIES: ServiceCategory[] = ["Business", "Tech", "ESG", "Risk"];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// Read a column tolerant of header case / stray spaces / BOM, and trim the value.
const pick = (row: Record<string, string>, name: string): string => {
  const target = name.trim().toLowerCase();
  for (const key of Object.keys(row)) {
    if (key.replace(/^\uFEFF/, "").trim().toLowerCase() === target) {
      return (row[key] ?? "").trim();
    }
  }
  return "";
};

export function useInsights() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    // Cache-bust so the browser never serves a stale copy on refresh.
    const url = `${CSV_URL}&_cb=${Date.now()}`;

    Papa.parse<Record<string, string>>(url, {
      download: true,
      header: true,
      skipEmptyLines: "greedy",
      transformHeader: (h) => h.replace(/^\uFEFF/, "").trim(),
      complete: (res) => {
        if (cancelled) return;

        const rows: Insight[] = (res.data as Record<string, string>[])
          .map((row) => {
            const title = pick(row, "Title");
            const status = pick(row, "Status").toLowerCase();
            const rawService = pick(row, "Service Category");
            const serviceCategory = (SERVICE_CATEGORIES.find(
              (c) => c.toLowerCase() === rawService.toLowerCase(),
            ) ?? "") as ServiceCategory | "";
            const featured = ["yes", "true", "1"].includes(
              pick(row, "Featured?").toLowerCase(),
            );

            return {
              insight: {
                title,
                date: pick(row, "Date"),
                image: pick(row, "Cover Image URL"),
                description: pick(row, "Description"),
                category: (pick(row, "Category") || "Blog") as Insight["category"],
                slug: slugify(title),
                contentFile: slugify(title),
                content: pick(row, "Content (Markdown)"),
                featured,
                serviceCategory,
              } as Insight,
              status,
            };
          })
          // Keep only real, published rows (ignores blank trailing rows / drafts).
          .filter((r) => r.insight.title !== "" && r.status === "published")
          .map((r) => r.insight);

        setInsights(rows);
        setLoading(false);
      },
      error: (err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      },
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return { insights, loading, error };
}

export default useInsights;