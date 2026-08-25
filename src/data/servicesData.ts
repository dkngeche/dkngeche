import { ServicePillar, JourneyStage, CapabilityItem } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'digital-strategy',
    number: '01',
    title: 'Digital Strategy & Growth',
    tagline: 'Help businesses understand where they are digitally, where they need to go and how to get there.',
    coreMessage: 'High-level consulting to build durable digital foundations and compound commercial outcomes.',
    description: 'Before jumping into tactical execution, we define how your digital presence supports your commercial objectives. We identify who you are targeting, how they make decisions, and where your digital investments will have the highest compounding return.',
    services: [
      'Digital strategy development',
      'Digital presence audits',
      'Digital growth planning',
      'Digital transformation roadmaps',
      'Digital marketing strategy',
      'Digital customer journey optimisation',
      'Digital performance analysis',
      'Competitor and market analysis',
      'Technology and platform recommendations',
      'Digital roadmap development'
    ],
    deliverables: [
      'Comprehensive Digital Audit & Baseline Diagnostic',
      'Multi-Quarter Digital Strategic Roadmap',
      'Commercial Audience & Buyer Journey Architecture',
      'Channel Selection & Resource Allocation Model',
      'Competitive & Market Landscape Analysis',
      'Technology Stack & Digital Tooling Blueprints'
    ],
    businessOutcomes: [
      'Zero wasted spend on disjointed marketing channels',
      'Clear, quantified commercial priorities for all digital initiatives',
      'Unified strategic direction across executive leadership, sales, and operations'
    ],
    deliverableFocus: 'Highest-Level Strategic Advisory'
  },
  {
    id: 'web-strategy',
    number: '02',
    title: 'Web Strategy & Digital Experience',
    tagline: 'Your website should be more than a digital brochure. It should work as part of your business.',
    coreMessage: 'Building digital experiences that serve explicit business objectives and convert attention into qualified pipeline.',
    description: 'A website should not simply look attractive—it must function as a high-performing business instrument. We design and architect web experiences that clarify your value, remove friction from user journeys, and actively advance commercial conversions.',
    services: [
      'Website strategy',
      'Website architecture & sitemaps',
      'UX/UI design & wireframing',
      'Corporate & enterprise websites',
      'High-impact business websites',
      'High-conversion landing pages',
      'Website development & modern implementation',
      'Website redesign & modernisation',
      'Website performance optimisation',
      'Conversion rate optimisation (CRO)',
      'Digital platform strategy',
      'User experience improvements'
    ],
    deliverables: [
      'Information Architecture & Navigation Flow Blueprints',
      'Conversion-Focused Wireframes & Interactive Prototypes',
      'Bespoke High-Performance Website Builds',
      'Core Web Vitals & Speed Optimization Packages',
      'Friction Removal & Funnel Optimization Reports',
      'Design System & Component Guidelines'
    ],
    businessOutcomes: [
      'Immediate visitor comprehension of your core proposition within seconds',
      'Higher inquiry and lead conversion rates from qualified decision-makers',
      'A resilient, scalable digital asset that elevates brand stature and commercial credibility'
    ],
    deliverableFocus: 'Operational Web Assets'
  },
  {
    id: 'search-strategy',
    number: '03',
    title: 'Search Strategy & Organic Growth',
    tagline: 'Helping businesses become more visible, discoverable and competitive in search.',
    coreMessage: 'Positioning SEO as a strategic growth discipline rather than a superficial technical checklist.',
    description: 'Visibility is not just having an online presence—it is ensuring that when high-intent prospects search for what you do, your business is the one they discover, understand, and trust. We build search architectures that capture demand at every stage of consideration.',
    services: [
      'Technical SEO & site architecture audits',
      'On-page SEO & semantic structure refinement',
      'Keyword research & search intent mapping',
      'Topical authority & content strategy',
      'Local SEO & regional discovery',
      'E-commerce SEO architecture',
      'Competitor SEO analysis & benchmarking',
      'Search visibility strategy & indexation health',
      'Organic traffic growth modeling',
      'Search performance measurement & telemetry'
    ],
    deliverables: [
      'Exhaustive Technical SEO & Indexation Health Audits',
      'High-Intent Keyword & Search Opportunity Matrix',
      'Topical Authority Pillar & Cluster Architecture',
      'Structured Data & Schema.org Semantic Markup',
      'Local & Regional Search Footprint Optimization',
      'Executive Search Telemetry & Attribution Reporting'
    ],
    businessOutcomes: [
      'Compounding, high-intent inbound organic discovery that reduces ad dependency',
      'Sustainable dominance on high-commercial-value industry search queries',
      'Clear, defensible search market share across key business offerings'
    ],
    deliverableFocus: 'Strategic Organic Visibility'
  },
  {
    id: 'digital-brand',
    number: '04',
    title: 'Digital Brand & Online Presence',
    tagline: 'Your digital presence should reflect the quality of the business behind it.',
    coreMessage: 'Helping businesses and leadership establish credible, authoritative digital identities.',
    description: 'Many capable businesses lose opportunities simply because their online presence fails to articulate what they do clearly. We build cohesive digital identities, messaging hierarchies, and reputation frameworks that earn instant trust from clients and partners.',
    services: [
      'Digital brand positioning',
      'Online brand strategy',
      'Brand messaging & value proposition frameworks',
      'Digital presence development',
      'Social media presence strategy',
      'Content direction & editorial standards',
      'Digital reputation management',
      'Google Business Profile optimisation',
      'Executive & personal branding for founders/leaders',
      'Business profile & directory optimisation',
      'Digital communication strategy',
      'Brand consistency across digital platforms'
    ],
    deliverables: [
      'Core Value Proposition & Messaging Framework',
      'Digital Brand Identity & Platform Style Guides',
      'Executive Thought Leadership & Content Direction',
      'Verified Google Business Profile & Directory Optimization',
      'Multi-Platform Channel Cohesion Protocols',
      'Digital Reputation & Trust Signal Architecture'
    ],
    businessOutcomes: [
      'Instant brand authority and credibility with prospective enterprise clients',
      'Consistent, unmistakable brand voice across every digital touchpoint',
      'A commanding digital footprint that matches the true caliber of your organization'
    ],
    deliverableFocus: 'Credible Digital Authority'
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand the business, market, audience and opportunity.',
    description: 'We conduct a deep examination of your commercial model, historical performance, competitors, and target buyer psychology before touching any tactical tools.',
    questions: [
      'What are the core revenue drivers of the business?',
      'Who are the exact economic decision-makers and what triggers their search?',
      'Where are the current digital leaks and blind spots?'
    ],
    deliverables: [
      'Commercial Discovery Audit',
      'Competitive Search & Position Analysis',
      'Buyer Intent & Question Matrix'
    ]
  },
  {
    step: '02',
    title: 'Define',
    tagline: 'Clarify the value proposition, positioning and digital objectives.',
    description: 'We strip away ambiguity to define exactly what you offer, why you are uniquely qualified, and what measurable objectives your digital presence must achieve.',
    questions: [
      'What is the single sentence that makes your value undeniable?',
      'What digital channels legitimately match your audience’s habits?',
      'What specific conversion milestones constitute business growth?'
    ],
    deliverables: [
      'Digital Value Proposition Document',
      'Channel Allocation Matrix',
      'Commercial KPIs & Measurement Model'
    ]
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Develop the digital presence, content architecture and channel strategy.',
    description: 'We structure the digital assets—website architecture, semantic content clusters, and technical foundation—so they communicate value and satisfy search algorithms.',
    questions: [
      'Is the website structured around the visitor’s logical decision stages?',
      'Does each key page answer the exact intent of prospective buyers?',
      'Is the technical infrastructure fast, accessible, and indexable?'
    ],
    deliverables: [
      'Website Information Architecture',
      'Topical Authority Content Blueprint',
      'Technical SEO & Core Web Vitals Specifications'
    ]
  },
  {
    step: '04',
    title: 'Optimise',
    tagline: 'Use SEO, analytics and performance data to improve visibility and effectiveness.',
    description: 'We systematically optimize search discovery, user journey friction points, and crawl equity to ensure your digital ecosystem climbs search rankings and converts.',
    questions: [
      'Where is high-intent search traffic dropping out of the funnel?',
      'Which pages need on-page schema, internal linking, or semantic enrichment?',
      'How are search algorithms interpreting the site’s topical depth?'
    ],
    deliverables: [
      'On-Page & Technical Search Refinements',
      'Conversion Journey Friction Reports',
      'Structured Data & Schema Deployments'
    ]
  },
  {
    step: '05',
    title: 'Grow',
    tagline: 'Continuously refine the strategy based on real-world performance.',
    description: 'Digital strategy is not a static one-off deliverable. We review telemetry, search trend shifts, and commercial conversion data to scale what works.',
    questions: [
      'Which content clusters are delivering the highest-quality leads?',
      'What emerging market queries can we proactively capture next?',
      'How can we expand authority across adjacent service categories?'
    ],
    deliverables: [
      'Quarterly Strategic Growth Reviews',
      'Iterative Content & Search Expansion Maps',
      'Executive Board & Leadership Telemetry'
    ]
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  // 01 — Digital Strategy & Growth
  {
    id: 'digital-strategy-development',
    name: 'Digital Strategy Development',
    pillar: 'digital-strategy',
    description: 'Crafting practical, phased digital roadmaps that translate ambitious commercial goals into structured online initiatives.',
    whyItMatters: 'Without a coherent strategy, businesses burn budget on disjointed tactics that generate activity without revenue.',
    keyOutputs: ['Multi-phase Digital Roadmap', 'Audience Segmentation Model', 'Resource & Channel Allocation Matrix']
  },
  {
    id: 'digital-presence-audits',
    name: 'Digital Presence & Asset Audits',
    pillar: 'digital-strategy',
    description: 'Comprehensive diagnostic evaluation of your website, search footprint, content ecosystem, and digital customer journeys.',
    whyItMatters: 'Uncovers hidden bottlenecks, broken conversion pathways, and untapped market opportunities.',
    keyOutputs: ['Holistic Digital Audit Report', 'Friction Point Catalog', 'Prioritized Remediation Matrix']
  },
  {
    id: 'digital-growth-planning',
    name: 'Digital Growth Planning',
    pillar: 'digital-strategy',
    description: 'Building sustainable, compounding customer acquisition frameworks across organic, owned, and referral channels.',
    whyItMatters: 'Growth should be predictable and resilient against algorithm fluctuations or volatile advertising costs.',
    keyOutputs: ['Growth Velocity Playbook', 'Acquisition Channel Modeling', 'Milestone Forecasts']
  },
  {
    id: 'digital-transformation-roadmaps',
    name: 'Digital Transformation Roadmaps',
    pillar: 'digital-strategy',
    description: 'Guiding established businesses through the modernization of legacy customer touchpoints and online workflows.',
    whyItMatters: 'Ensures technological investments directly serve business agility, customer satisfaction, and operational efficiency.',
    keyOutputs: ['Transformation Blueprint', 'Technology Stack Recommendations', 'Phased Implementation Timelines']
  },

  // 02 — Web Strategy & Digital Experience
  {
    id: 'website-strategy',
    name: 'Website Strategy & Architecture',
    pillar: 'web-strategy',
    description: 'Structuring your website as an intelligent commercial instrument rather than a passive brochure.',
    whyItMatters: 'A website should guide visitors smoothly from initial curiosity to qualified inquiry with minimal friction.',
    keyOutputs: ['Information Architecture (IA)', 'Sitemap Hierarchy', 'Decision-Stage User Pathways']
  },
  {
    id: 'ux-ui-design',
    name: 'UX/UI & Digital Experience Design',
    pillar: 'web-strategy',
    description: 'Crafting purposeful, visually commanding interfaces tailored to decision-maker psychology and effortless navigation.',
    whyItMatters: 'Poor user experience repels premium buyers. Refined design commands confidence and elevates perceived value.',
    keyOutputs: ['Interactive Prototypes', 'Responsive Layout System', 'Component Design System']
  },
  {
    id: 'corporate-business-websites',
    name: 'Corporate & Business Website Development',
    pillar: 'web-strategy',
    description: 'Engineering fast, secure, accessible web platforms built with modern technology and spotless code standards.',
    whyItMatters: 'Technical reliability and blistering speed form the foundation of both user satisfaction and search ranking success.',
    keyOutputs: ['Production Web Build', 'CMS Integration', 'Responsive Cross-Device Deployment']
  },
  {
    id: 'conversion-optimisation',
    name: 'Conversion Rate Optimisation (CRO)',
    pillar: 'web-strategy',
    description: 'Removing cognitive load, unclear copy, and navigation roadblocks to maximize the percentage of visitors who become qualified inquiries.',
    whyItMatters: 'Doubling your conversion rate yields the same business outcome as doubling your traffic, at a fraction of the acquisition cost.',
    keyOutputs: ['Conversion Friction Audit', 'CTA & Form Optimisation Plan', 'UX Clarity Recommendations']
  },

  // 03 — Search Strategy & Organic Growth
  {
    id: 'technical-seo',
    name: 'Technical SEO & Crawl Architecture',
    pillar: 'search-strategy',
    description: 'Architecting site structure, crawl pathways, Core Web Vitals, and semantic schema markup for flawless search engine indexation.',
    whyItMatters: 'Even the most compelling content will fail if search engine spiders cannot crawl, parse, and render your website effortlessly.',
    keyOutputs: ['Technical Health Audit', 'Site Architecture & Internal Link Graph', 'Schema.org JSON-LD Implementation']
  },
  {
    id: 'search-intent-analysis',
    name: 'Search Intent & Keyword Strategy',
    pillar: 'search-strategy',
    description: 'Identifying the exact high-commercial-value search queries prospects use when looking for your specific solutions.',
    whyItMatters: 'Ranking for vanity keywords yields zero revenue. Ranking for commercial intent transforms search into a direct pipeline.',
    keyOutputs: ['Commercial Intent Keyword Matrix', 'Search Volume & Difficulty Benchmarks', 'Content Mapping Blueprint']
  },
  {
    id: 'content-strategy-seo',
    name: 'Topical Authority & Content Strategy',
    pillar: 'search-strategy',
    description: 'Building comprehensive content clusters that establish undeniable subject-matter authority in the eyes of search algorithms.',
    whyItMatters: 'Modern search engines reward exhaustive, coherent topical coverage over disconnected single articles.',
    keyOutputs: ['Pillar & Cluster Content Plan', 'Editorial Briefs', 'Internal Linking Strategy']
  },
  {
    id: 'local-seo-discovery',
    name: 'Local SEO & Regional Discovery',
    pillar: 'search-strategy',
    description: 'Optimizing local search signals, maps, citations, and geo-targeted landing pages for dominant regional visibility.',
    whyItMatters: 'Ensures local and regional buyers discover your business immediately when searching with geographic intent.',
    keyOutputs: ['Local Search Optimization Blueprint', 'Citation Consistency Verification', 'Geo-Targeted Content Structure']
  },

  // 04 — Digital Brand & Online Presence
  {
    id: 'digital-brand-positioning',
    name: 'Digital Brand Positioning',
    pillar: 'digital-brand',
    description: 'Distilling complex offerings into a sharp, memorable value proposition that cleanly separates you from competitors.',
    whyItMatters: 'When prospects land on your profile or website, you have seconds to communicate what you do and why you matter.',
    keyOutputs: ['Digital Proposition Framework', 'Core Messaging Matrix', 'Differentiation Blueprint']
  },
  {
    id: 'executive-personal-branding',
    name: 'Executive & Personal Branding',
    pillar: 'digital-brand',
    description: 'Positioning founders, consultants, and executives as authoritative industry thought leaders across digital channels.',
    whyItMatters: 'People buy from people. A strong executive presence accelerates commercial trust and opens institutional doors.',
    keyOutputs: ['Executive Profile Strategy', 'Content Angle Guidelines', 'Authority Footprint Plan']
  },
  {
    id: 'google-business-reputation',
    name: 'Google Business Profile & Reputation',
    pillar: 'digital-brand',
    description: 'Configuring and refining authoritative search profile assets and digital trust signals to build unmatched credibility.',
    whyItMatters: 'First impressions frequently happen right on Google’s knowledge panel before a prospect ever clicks your website link.',
    keyOutputs: ['Optimized Google Business Profile', 'Trust Signal Checklist', 'Review & Social Proof Strategy']
  },
  {
    id: 'digital-communication-strategy',
    name: 'Digital Communications Strategy',
    pillar: 'digital-brand',
    description: 'Structuring unified, articulate messaging across digital PR, social channels, email communications, and investor touchpoints.',
    whyItMatters: 'Inconsistent tone or fragmented messaging erodes credibility and confuses potential high-value clients.',
    keyOutputs: ['Digital Tone of Voice Guide', 'Channel Messaging Hierarchy', 'Campaign Narrative Playbook']
  }
];

export const PHILOSOPHY_QUESTIONS = [
  {
    number: '01',
    question: 'What are we trying to achieve?',
    explanation: 'Clarifying the commercial outcome: customer acquisition, market entry, authority establishment, or pipeline generation.'
  },
  {
    number: '02',
    question: 'Who are we trying to reach?',
    explanation: 'Pinpointing the exact decision-maker persona, their organizational pressures, and their decision-making criteria.'
  },
  {
    number: '03',
    question: 'What do they need?',
    explanation: 'Uncovering the underlying problem, information gap, or strategic relief they are actively seeking.'
  },
  {
    number: '04',
    question: 'What should they understand?',
    explanation: 'Distilling the distinct value proposition, proof of capability, and reason to trust your organization.'
  },
  {
    number: '05',
    question: 'Where are they looking?',
    explanation: 'Identifying the high-intent search queries, industry channels, and evaluation spaces where they look for answers.'
  },
  {
    number: '06',
    question: 'What should they do next?',
    explanation: 'Designing the lowest-friction, highest-clarity pathway from their initial visit to a meaningful commercial conversation.'
  }
];

