import { useEffect, useState } from 'react';
import Papa from 'papaparse';

export type DownloadCategory = 'Newsletter' | 'Firm Profile' | 'Survey Reports';

export interface DownloadDoc {
  title: string;
  category: DownloadCategory;
  description: string;
  date: string;
  pdfUrl: string;
  featured: boolean;
  status: string;
}

/* Published-to-web CSV of the Downloads responses sheet. */
const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRd3FQmdpkdE9PQafw06_tSwiczsWIg8Xe9_cAJDd2cMT8XgRLZQhCmoQgGOMpIriADd8w-ybh9LcWV/pub?output=csv';

/* Reads the first non-empty value among the given column names. */
const pick = (row: Record<string, string>, ...keys: string[]): string => {
  for (const k of keys) {
    const v = row[k];
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return '';
};

export function useDownloads() {
  const [downloads, setDownloads] = useState<DownloadDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const rows = results.data as Record<string, string>[];
          const parsed = rows
            .map((row) => ({
              title: pick(row, 'Title'),
              category: pick(row, 'Category') as DownloadCategory,
              description: pick(row, 'Description'),
              date: pick(row, 'Date'),
              pdfUrl: pick(row, 'PDF URL', 'PDF', 'Pdf Url'),
              featured: pick(row, 'Featured?', 'Featured').toLowerCase() === 'yes',
              status: pick(row, 'Status').toLowerCase(),
            }))
            .filter((d) => d.title && d.pdfUrl && d.status === 'published') as DownloadDoc[];

          setDownloads(parsed.reverse()); // newest first
        } catch {
          setError('Failed to parse downloads.');
        } finally {
          setLoading(false);
        }
      },
      error: () => {
        setError('Failed to load downloads.');
        setLoading(false);
      },
    });
  }, []);

  return { downloads, loading, error };
}