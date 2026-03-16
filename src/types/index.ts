export interface Testimonial {
  id: string;
  name: string;
  area: string;
  systemSize: string;
  review: string;
  rating: number;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  area: string;
  systemSize: string;
  systemType: 'on-grid' | 'off-grid' | 'hybrid';
  date: string;
  images: string[];
  description?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  propertyType: 'residential' | 'commercial';
  location: string;
  message?: string;
}

export interface CalculatorInput {
  monthlyUnits: number;
  propertyType: 'residential' | 'commercial';
  area: 'south-delhi' | 'faridabad' | 'gurgaon';
}

export interface CalculatorResult {
  systemSizeKW: number;
  estimatedCostMin: number;
  estimatedCostMax: number;
  centralSubsidy: number;
  stateSubsidy: number;
  totalSubsidy: number;
  netCostMin: number;
  netCostMax: number;
  monthlyGeneration: number;
  monthlySavings: number;
  annualGBI: number;
  paybackYearsMin: number;
  paybackYearsMax: number;
  totalSavings25Years: number;
  showContactForQuote: boolean;
}
