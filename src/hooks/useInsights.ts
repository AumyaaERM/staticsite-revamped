import { useState, useEffect } from 'react';
import type { Insight } from '../types/insight';

const GOOGLE_SHEETS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJz9QKNP238g471r8-ZEBAHbtu3CdK5RKrLMKxfC52v4dszroe5oeylwXedjJQOUXnShWaNTcinUaW/pub?output=csv';

const fallbackImages = [
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
];

function parseCSVRow(row: string): string[] {
  const cols: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      cols.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  cols.push(current);
  return cols;
}

let cache: Insight[] | null = null;

export function useInsights() {
  const [insights, setInsights] = useState<Insight[]>(cache ?? []);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache) {
      setInsights(cache);
      setLoading(false);
      return; 
    }

    fetch(GOOGLE_SHEETS_CSV_URL)  
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split('\n').slice(1); // skip header row
        const fetched = rows
          .filter((row) => row.trim())
          .map((row, index) => {
            const cols = parseCSVRow(row);
            const image =
              cols[2] && cols[2].trim() !== ''
                ? cols[2].trim()
                : fallbackImages[index % fallbackImages.length];
            return {
              title:           cols[0] || '',
              date:            cols[1] || '',
              image,
              description:     cols[3] || '',
              category:        (cols[4]?.trim() as Insight['category']) || 'Insight',
              slug:            cols[5]?.trim() || '',
              contentFile:     cols[6]?.trim() || '',
              featured:        cols[7]?.trim().toUpperCase() === 'TRUE',
              serviceCategory: (cols[8]?.trim() as Insight['serviceCategory']) || '',
            };
          })
          .filter((insight) => insight.title && insight.date && insight.slug) as Insight[];

        cache = fetched;
        setInsights(fetched);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { insights, loading, error };
}