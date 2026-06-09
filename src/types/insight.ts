// src/types/insight.ts

export type InsightCategory =
  | 'Blog'
  | 'Newsletter'
  | 'Case Study'
  | 'Podcast'
  | 'Survey Report'
  | 'Insight';

export interface Insight {
  title: string;
  date: string;
  image: string;
  description: string;
  category: InsightCategory;
  slug: string;
  contentFile: string;
  featured: boolean;
}