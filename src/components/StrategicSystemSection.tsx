import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Layers, Cpu, TrendingUp } from 'lucide-react';
import { PageType } from '../types';

interface StrategicSystemSectionProps {
  onNavigate?: (page: PageType) => void;
}

interface SystemStage {
  id: string;
  step: string;
  name: string;
  tagline: string;
  summary: string;
  whatWeDo: string[];
  deliverables: string[];
  icon: React.ElementType;
}

const SYSTEM_STAGES: SystemStage[] = [
  {
    id: 'clarify',
    step: '01',
    name: 'Clarify',
    tagline: 'Understand the business, audience and opportunity.',
    summary: 'Before designing a single screen or writing metadata, we dissect your commercial model, customer decision journeys, unit economics, and competitive dynamics to ground all digital work in reality.',
    whatWeDo: [
      'Comprehensive digital audit & baseline performance diagnostic',
      'Target buyer profiling & purchase decision journey mapping',
      'Unit economics and commercial priority alignment',
      'Competitor positioning and search territory analysis',
    ],
    deliverables: [
      'Digital Baseline Diagnostic Report',
      'Audience & Decision-Journey Architecture',
      'Commercial Priority Matrix',
    ],
    icon: Target,
  },
  {
    id: 'position',
    step: '02',
    name: 'Position',
    tagline: 'Define how the business should be understood digitally.',
    summary: 'Translate complex capabilities into crisp value propositions. When high-consequence buyers land on your digital presence, they must instantly recognize why you are uniquely qualified to solve their problem.',
    whatWeDo: [
      'Core proposition & messaging hierarchy definition',
      'Digital brand positioning and authority structuring',
      'Objection pre-emption and credibility architecture',
      'Strategic content and narrative guidelines',
    ],
    deliverables: [
      'Executive Value Proposition Blueprint',
      'Strategic Messaging Hierarchy',
      'Digital Brand Tone & Authority Standards',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'build',
    step: '03',
    name: 'Build',
    tagline: 'Create the digital presence and content structure.',
    summary: 'Architect web experiences that act as 24/7 business instruments rather than passive brochures. We organize information around how customers evaluate options and make buying decisions.',
    whatWeDo: [
      'Information architecture and frictionless conversion flows',
      'Bespoke web experience design and technical implementation',
      'Core Web Vitals and speed optimization across devices',
      'Topical content hub structure and semantic entity linking',
    ],
    deliverables: [
      'Operational High-Performance Website Asset',
      'Conversion-Engineered User Flow Wireframes',
      'Semantic Content & Navigation Architecture',
    ],
    icon: Layers,
  },
  {
    id: 'optimise',
    step: '04',
    name: 'Optimise',
    tagline: 'Improve SEO, performance and conversion.',
    summary: 'Eliminate technical crawl blocks and optimize for high-intent search queries. We ensure that search engine spiders index your key pages cleanly and searchers convert smoothly into inquiries.',
    whatWeDo: [
      'Technical SEO, crawl budget, and indexation optimization',
      'Search intent mapping for high-value commercial terms',
      'Conversion Rate Optimization (CRO) and friction elimination',
      'Structured data, JSON-LD Schema graph, and entity validation',
    ],
    deliverables: [
      'Technical SEO Audit & Resolution Sprint',
      'High-Intent Keyword & Search Opportunity Matrix',
      'Schema.org Semantic Knowledge Graph',
    ],
    icon: Cpu,
  },
  {
    id: 'grow',
    step: '05',
    name: 'Grow',
    tagline: 'Use data and continuous optimisation to create sustained growth.',
    summary: 'Digital is not a static one-time launch—it is an evolving business engine. We track telemetry, test improvements, and provide ongoing strategic advisory to compound market authority over time.',
    whatWeDo: [
      'Executive search and commercial telemetry reporting',
      'Ongoing technical SEO health and algorithm adaptation',
      'Strategic advisory on new products, campaigns, and markets',
      'Continuous content refinement based on active search queries',
    ],
    deliverables: [
      'Executive Performance & Attribution Dashboard',
      'Quarterly Strategic Evolution Roadmaps',
      'Dedicated Consultant Advisory Retainer',
    ],
    icon: TrendingUp,
  },
];

export function StrategicSystemSection({ onNavigate }: StrategicSystemSectionProps) {
  const [activeStageId, setActiveStageId] = useState<string>('clarify');
  const activeStage = SYSTEM_STAGES.find(s => s.id === activeStageId) || SYSTEM_STAGES[0];

  return (
    <section id="strategic-system" className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A358]" />
            <span>Signature Consulting System</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
            Clarify &rarr; Position &rarr; Build &rarr; Optimise &rarr; Grow
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            A methodical five-stage consulting architecture designed to eliminate subjective guesswork and build a compounding digital asset.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-white/50 bg-[#0B1626] px-4 py-2 rounded-lg border border-white/[0.08]">
          <span className="text-[#C5A358]">Interactive:</span> Click any stage to explore methodology
        </div>
      </div>

      {/* 5-Stage Interactive Tab Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {SYSTEM_STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          const Icon = stage.icon;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between min-h-[110px] ${
                isActive
                  ? 'bg-[#162234] border-[#C5A358] shadow-[0_10px_25px_rgba(197,163,88,0.15)]'
                  : 'bg-[#0B1626]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#0B1626]'
              }`}
              data-cursor="magnetic"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                  {stage.step}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`} />
              </div>

              <div>
                <div className="font-editorial text-lg sm:text-xl font-bold text-[#F5F6F8] leading-tight">
                  {stage.name}
                </div>
                <div className="text-[11px] font-mono text-white/50 truncate mt-0.5">
                  {stage.tagline.split('.')[0]}
                </div>
              </div>

              {isActive && (
                <motion.div
                  layoutId="system-active-bar"
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#C5A358] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Detail Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.12] space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/20 px-3 py-1 rounded-md">
                  STAGE {activeStage.step} &bull; {activeStage.name.toUpperCase()}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold leading-tight">
                "{activeStage.tagline}"
              </h3>

              <p className="text-base text-white/75 leading-relaxed">
                {activeStage.summary}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-[#C5A358] hover:text-[#D4B46A] transition-colors"
                >
                  <span>Discuss a {activeStage.name} Engagement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Execution & Deliverables */}
            <div className="lg:col-span-6 space-y-6">
              {/* What We Execute */}
              <div className="p-5 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-semibold">
                  Core Advisory Actions:
                </div>
                <ul className="space-y-2">
                  {activeStage.whatWeDo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concrete Deliverables */}
              <div className="p-5 rounded-xl bg-[#162234]/60 border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold">
                  Key Artifacts &amp; Deliverables:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStage.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#070D18] border border-white/[0.1] text-xs font-mono text-white/90"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
