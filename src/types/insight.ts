export type InsightCategory =
  | 'Blog'
  | 'Newsletter'
  | 'Case Study'
  | 'Podcast'
  | 'Survey Report'

export type ServiceCategory = 'Business' | 'Tech' | 'ESG' | 'Risk' | 'Compliance';

export interface Insight {
  title: string;
  date: string;
  image: string;
  description: string;
  category: InsightCategory;
  slug: string;
  content: string;
  featured: boolean;
  serviceCategory: ServiceCategory | '';
}