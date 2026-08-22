import { ServicePillar, JourneyStage, CapabilityItem } from '../types';

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'digital-strategy',
    number: '01',
    title: 'Digital Strategy',
    tagline: 'Turn business objectives into a practical digital roadmap.',
    description: 'Before jumping into tactical execution, we define how your digital presence supports your commercial objectives. We identify who you are targeting, how they make decisions, and where your digital investments will have the highest compounding return.',
    deliverables: [
      'Digital strategy & multi-quarter roadmaps',
      'Audience & target market analysis',
      'Digital positioning & competitive differentiation',
      'Customer journey & decision-stage mapping',
      'Channel selection & acquisition strategy',
      'Digital growth planning & metric models'
    ],
    businessOutcomes: [
      'Zero wasted spend on misaligned marketing channels',
      'Clear, quantified commercial priorities for all digital initiatives',
      'Unified direction across leadership, sales, and product teams'
    ],
    deliverableFocus: 'Strategic Clarity'
  },
  {
    id: 'seo-visibility',
    number: '02',
    title: 'SEO & Organic Visibility',
    tagline: 'Become discoverable when your target audience is actively searching for solutions.',
    description: 'Visibility is not just having an online presence—it is ensuring that when high-intent prospects search for what you do, your business is the one they discover, understand, and trust. We build search architectures that capture demand at every stage of consideration.',
    deliverables: [
      'Comprehensive SEO & search intent audits',
      'Technical SEO & crawl efficiency optimisation',
      'On-page SEO & semantic structure refinement',
      'Keyword research & high-intent opportunity mapping',
      'Local & regional SEO optimisation',
      'Content architecture & topical authority clustering',
      'Search performance optimisation & indexation health',
      'Executive SEO performance reporting & telemetry'
    ],
    businessOutcomes: [
      'Consistent inbound discovery from qualified, search-intent buyers',
      'Long-term reduction in customer acquisition costs (CAC)',
      'High-authority positioning on the industry terms that drive real revenue'
    ],
    deliverableFocus: 'Organic Authority'
  },
  {
    id: 'digital-positioning',
    number: '03',
    title: 'Digital Positioning & Presence',
    tagline: 'Translate complex business value into a digital proposition that resonates immediately.',
    description: 'Many capable businesses lose opportunities simply because their online presence fails to articulate what they do clearly. We take your core capabilities, products, or service offerings and translate them into sharp, compelling digital messaging and structured customer experiences.',
    deliverables: [
      'Core value proposition development',
      'Digital messaging & clarity frameworks',
      'Information architecture & sitemap design',
      'Content architecture & narrative flow',
      'Brand-to-digital translation & narrative cohesion',
      'Digital customer experience (CX) structuring',
      'High-conversion website strategy'
    ],
    businessOutcomes: [
      'Instant comprehension by first-time website visitors',
      'Higher engagement from qualified institutional and enterprise buyers',
      'A website that functions as your highest-performing sales partner'
    ],
    deliverableFocus: 'Proposition Clarity'
  },
  {
    id: 'digital-execution',
    number: '04',
    title: 'Digital Execution & Growth',
    tagline: 'Move from strategic design into purposeful, measurable execution.',
    description: 'Strategy without rigorous execution is just theory. We provide hands-on direction for digital implementation, ensuring your website, content assets, analytics, and conversion paths operate as a unified growth engine.',
    deliverables: [
      'Website implementation direction & UX QA',
      'Search-grounded content planning & editorial workflows',
      'Digital campaign strategy & channel orchestration',
      'Analytics setup, event tracking & performance telemetry',
      'Conversion rate optimisation (CRO) & funnel friction removal',
      'Ongoing strategic advisory & quarterly growth iteration'
    ],
    businessOutcomes: [
      'Flawless bridge between strategic roadmaps and live execution',
      'Accurate data infrastructure to measure actual revenue attribution',
      'Continuous compounding improvements across traffic, engagement, and leads'
    ],
    deliverableFocus: 'Measurable Growth'
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
  {
    id: 'digital-strategy',
    name: 'Digital Strategy',
    pillar: 'digital-strategy',
    description: 'Crafting practical, phased digital roadmaps that translate ambitious commercial goals into structured online initiatives.',
    whyItMatters: 'Without a coherent strategy, businesses burn budget on disjointed tactics that generate activity without revenue.',
    keyOutputs: ['Multi-phase Digital Roadmap', 'Audience Segmentation Model', 'Resource & Channel Allocation Matrix']
  },
  {
    id: 'seo',
    name: 'Search Engine Optimisation (SEO)',
    pillar: 'seo-visibility',
    description: 'Full-spectrum search strategy designed to rank your business at the precise moment high-intent buyers are searching.',
    whyItMatters: 'Paid advertising stops the moment your budget runs out. Organic search builds a compounding asset that delivers qualified demand continuously.',
    keyOutputs: ['Holistic Search Strategy', 'Topical Authority Plan', 'Continuous Ranking & Visibility Reports']
  },
  {
    id: 'technical-seo',
    name: 'Technical SEO',
    pillar: 'seo-visibility',
    description: 'Architecting site structure, crawl pathways, Core Web Vitals, and semantic schema markup for flawless search engine indexation.',
    whyItMatters: 'Even the most compelling content will fail if search engine spiders cannot crawl, parse, and render your website effortlessly.',
    keyOutputs: ['Technical Health Audit', 'Site Architecture & Internal Link Graph', 'Schema.org JSON-LD Implementation']
  },
  {
    id: 'content-strategy',
    name: 'Content Strategy',
    pillar: 'seo-visibility',
    description: 'Creating search-intent grounded content frameworks that answer prospect questions, educate decision-makers, and establish authority.',
    whyItMatters: 'Content created for the sake of posting does not move needles. Content mapped to buyer intent captures searchers at critical decision moments.',
    keyOutputs: ['Search Intent Content Blueprint', 'Topical Pillar & Cluster Map', 'Editorial Quality Guidelines']
  },
  {
    id: 'digital-positioning',
    name: 'Digital Positioning',
    pillar: 'digital-positioning',
    description: 'Taking a business vision, product, or service and refining it into a crystal-clear value proposition that separates you from competitors.',
    whyItMatters: 'When visitors arrive at your site, you have seconds to answer: What is this? Who is it for? Why does it matter to me?',
    keyOutputs: ['Digital Proposition Framework', 'Core Messaging Hierarchy', 'Differentiator Articulation']
  },
  {
    id: 'website-strategy',
    name: 'Website Strategy',
    pillar: 'digital-positioning',
    description: 'Structuring your website as an intelligent commercial instrument rather than a passive brochure.',
    whyItMatters: 'A website should guide visitors smoothly from initial curiosity to qualified inquiry with minimal friction.',
    keyOutputs: ['Information Architecture (IA)', 'Wireframe Content Structure', 'Conversion Flow Pathways']
  },
  {
    id: 'customer-journey',
    name: 'Digital Customer Journey',
    pillar: 'digital-positioning',
    description: 'Mapping the digital touchpoints and psychological checkpoints a prospect passes through before committing to a commercial discussion.',
    whyItMatters: 'Different buyers enter with different awareness levels. Your digital presence must serve both immediate buyers and research-stage evaluators.',
    keyOutputs: ['Buyer Journey Lifecycle Map', 'Touchpoint Friction Audit', 'Content-to-Stage Alignment Matrix']
  },
  {
    id: 'analytics-performance',
    name: 'Analytics & Performance Telemetry',
    pillar: 'digital-execution',
    description: 'Implementing clean, privacy-compliant tracking architectures that measure real business signals instead of vanity vanity metrics.',
    whyItMatters: 'You cannot optimize what you do not accurately measure. We replace guessing with verifiable event data.',
    keyOutputs: ['GA4 / Search Console Measurement Setup', 'Custom Event Tracking Plan', 'Executive Performance Dashboard']
  },
  {
    id: 'conversion-optimisation',
    name: 'Conversion Optimisation (CRO)',
    pillar: 'digital-execution',
    description: 'Removing cognitive load, unclear copy, and navigation roadblocks to maximize the percentage of visitors who become qualified inquiries.',
    whyItMatters: 'Doubling your conversion rate yields the same business outcome as doubling your traffic, at a fraction of the acquisition cost.',
    keyOutputs: ['Conversion Friction Audit', 'CTA & Form Optimisation Plan', 'UX Clarity Recommendations']
  },
  {
    id: 'digital-growth',
    name: 'Digital Growth Strategy',
    pillar: 'digital-execution',
    description: 'Developing sustainable, compounding growth mechanisms across organic search, strategic content, and customer advocacy.',
    whyItMatters: 'Growth should not depend on fragile algorithms or unpredictable ad price spikes. It requires systematic digital momentum.',
    keyOutputs: ['Growth Velocity Playbook', 'Quarterly Growth Sprints', 'Ongoing Strategic Consultation']
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
