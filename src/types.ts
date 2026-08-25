export type PageType = 'home' | 'services' | 'insights' | 'pricing' | 'work' | 'about' | 'contact' | 'case-study';

export type ServicePillarId = 'digital-strategy' | 'web-strategy' | 'search-strategy' | 'digital-brand';

export interface ServicePillar {
  id: ServicePillarId;
  number: string;
  title: string;
  tagline: string;
  coreMessage: string;
  description: string;
  services: string[];
  deliverables: string[];
  businessOutcomes: string[];
  deliverableFocus: string;
}

export interface CapabilityItem {
  id: string;
  name: string;
  pillar: ServicePillarId;
  description: string;
  whyItMatters: string;
  keyOutputs: string[];
}

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Digital Strategy' | 'Websites' | 'Search Strategy' | 'Digital Brand' | 'AI & Technology' | 'Business Growth';
  readTime: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string[];
  }[];
  quote?: {
    text: string;
    author?: string;
  };
}

export interface JourneyStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  questions: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  clientType: string;
  industry: string;
  location?: string;
  featured: boolean;
  isMostRecent?: boolean;
  category: 'SEO' | 'Technical SEO' | 'Digital Strategy' | 'Website Strategy' | 'Digital Positioning' | 'Content Strategy' | 'Digital Growth';
  services: string[];
  summary: string;
  challenge: string;
  opportunity: string;
  strategy: string;
  work: string[];
  result: {
    summary: string;
    metrics?: { label: string; value: string; note?: string }[];
  };
  takeaway: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  servicesNeeded: string[];
  projectDescription: string;
  budgetRange: string;
  preferredContact: 'email' | 'call' | 'whatsapp';
}

