import { useState, useEffect } from 'react';
import type { Insight } from '../types/insight';

const GOOGLE_SHEETS_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJz9QKNP238g471r8-ZEBAHbtu3CdK5RKrLMKxfC52v4dszroe5oeylwXedjJQOUXnShWaNTcinUaW/pub?output=csv';

const fallbackImages = [
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
];

const parseCSVRow = (row: string): string[] => {
  const columns: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      columns.push(current.trim().replace(/^"|"$/g, ''));
      current = '';
    } else {
      current += char;
    }
  }
  columns.push(current.trim().replace(/^"|"$/g, ''));
  return columns;
};

// Cache so repeated navigations don't re-fetch the sheet
let cache: Insight[] | null = null;

export function useInsights() {
  const [insights, setInsights] = useState<Insight[]>(cache ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(cache === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If already cached, skip fetch
    if (cache !== null) {
      setInsights(cache);
      setIsLoading(false);
      return;
    }

    const fetchInsights = async () => {
      try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const csvText = await response.text();
        const rows = csvText.split('\n').slice(1);

        const fetched: Insight[] = rows
          .filter((row) => row.trim())
          .map((row, index) => {
            const cols = parseCSVRow(row);
            const image =
              cols[2] && cols[2].trim() !== ''
                ? cols[2].trim()
                : fallbackImages[index % fallbackImages.length];
            return {
              title:       cols[0] || '',
              date:        cols[1] || '',
              image,
              description: cols[3] || '',
              category:    (cols[4] as Insight['category']) || 'Insight',
              slug:        cols[5] || '',
              contentFile: cols[6] || '',
              featured:    cols[7]?.trim().toUpperCase() === 'TRUE',
            };
          })
          .filter((insight) => insight.title && insight.date && insight.slug);

        cache = fetched;
        setInsights(fetched);
      } catch (err) {
        console.error('Error fetching insights:', err);
        setError('Failed to load insights');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return { insights, isLoading, error };
}