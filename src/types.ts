export type PageType = 'home' | 'services' | 'pricing' | 'work' | 'about' | 'contact' | 'case-study';

export type ServicePillarId = 'digital-strategy' | 'seo-visibility' | 'digital-positioning' | 'digital-execution';

export interface ServicePillar {
  id: ServicePillarId;
  number: string;
  title: string;
  tagline: string;
  description: string;
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
