import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import type { Insight } from '../types/insight';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwqNxyLeHbnD0sSvPgH1SlioMibYo0S5rEillup4eOtd4oCU0xB2oQKj__L8yvt4HgV9tgX1HEWw3n/pub?gid=877398146&single=true&output=csv';

function slugify(text: string) {
  return (text || '').toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function useInsights() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data as Record<string, string>[];
        const data: Insight[] = rows
          .filter(r => (r['Status'] || '').toLowerCase() === 'published')
          .map(r => {
            const slug = slugify(r['Title'] || '');
            return {
              title: r['Title'] || '',
              date: r['Date'] || '',
              category: (r['Category'] || 'Insight') as Insight['category'],
              serviceCategory: (r['Service Category'] || '') as Insight['serviceCategory'],
              description: r['Description'] || '',
              image: r['Cover Image URL'] || '',
              featured: ['yes', 'true'].includes((r['Featured?'] || '').toLowerCase()),
              slug,
              content: r['Content (Markdown)'] || '',
            };
          });
        setInsights(data);
        setLoading(false);
      },
      error: (err) => { setError(err.message); setLoading(false); },
    });
  }, []);

  return { insights, loading, error };
}