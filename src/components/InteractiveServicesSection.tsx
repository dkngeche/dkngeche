import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Compass, Search, Globe, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';

interface InteractiveServicesSectionProps {
  onNavigate: (page: PageType) => void;
}

interface CapabilitySystem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  primaryConcepts: string[];
  expandedDetails: {
    problemItSolves: string;
    strategicApproach: string;
    keyDeliverables: string[];
  };
}

const CAPABILITY_SYSTEMS: CapabilitySystem[] = [
  {
    id: 'digital-strategy',
    number: '01',
    title: 'Digital Strategy',
    shortDesc: 'Turning business objectives into a practical digital direction.',
    icon: Compass,
    primaryConcepts: ['Audience', 'Positioning', 'Channels', 'Experience', 'Growth'],
    expandedDetails: {
      problemItSolves: 'Scattered marketing spend, disjointed channel efforts, and lack of clarity on how digital investments connect to business margins.',
      strategicApproach: 'We diagnose unit economics, buyer evaluation journeys, and market dynamics before architecting a phased multi-quarter digital roadmap.',
      keyDeliverables: [
        'Commercial Audience & Decision Flow Matrix',
        'Digital Channel Prioritization Blueprint',
        'Multi-Quarter Execution & Resource Roadmap',
      ],
    },
  },
  {
    id: 'seo-visibility',
    number: '02',
    title: 'SEO & Organic Visibility',
    shortDesc: 'Helping the right audience discover the business when they are searching.',
    icon: Search,
    primaryConcepts: ['Search', 'Intent', 'Content', 'Authority', 'Visibility'],
    expandedDetails: {
      problemItSolves: 'High-value prospects searching for your exact solutions finding competitors because your website lacks crawl health and semantic topical authority.',
      strategicApproach: 'We treat SEO as a commercial growth discipline—aligning crawlability, site speed, schema graphs, and high-intent topical hubs with real buying queries.',
      keyDeliverables: [
        'Exhaustive Technical SEO & Crawl Diagnostics',
        'High-Intent Commercial Keyword & Entity Matrix',
        'Topical Authority Pillar & Cluster Architecture',
      ],
    },
  },
  {
    id: 'digital-positioning',
    number: '03',
    title: 'Digital Positioning & Presence',
    shortDesc: 'Translating the business idea into a clear digital proposition and experience.',
    icon: Globe,
    primaryConcepts: ['Narrative', 'Architecture', 'Conversion', 'Assets', 'Distinction'],
    expandedDetails: {
      problemItSolves: 'A website that looks like a static brochure, causing prospective buyers to bounce within seconds due to vague buzzwords and confusing navigation.',
      strategicApproach: 'We engineer web experiences that actively qualify prospects, communicate your core differentiation instantly, and guide buyers into commercial inquiries.',
      keyDeliverables: [
        'Executive Proposition & Value Framing Guidelines',
        'Conversion-Engineered Information Architecture',
        'Operational Web Experience & Friction Removal',
      ],
    },
  },
  {
    id: 'digital-growth',
    number: '04',
    title: 'Digital Growth',
    shortDesc: 'Using data, optimisation and continuous strategy to improve digital performance.',
    icon: TrendingUp,
    primaryConcepts: ['Telemetry', 'Unit Economics', 'Conversion Rate', 'Compounding', 'Retention'],
    expandedDetails: {
      problemItSolves: 'Treating digital as a one-and-done launch that slowly degrades rather than continuously optimizing to capture more market share.',
      strategicApproach: 'Through conversion rate telemetry, search algorithm adaptation, and direct consultant advisory, we ensure your digital assets compound over time.',
      keyDeliverables: [
        'Executive Attribution & Search Telemetry Dashboards',
        'Continuous Conversion Rate Optimization (CRO) Sprints',
        'Dedicated Strategic Advisory Retainers',
      ],
    },
  },
];

export function InteractiveServicesSection({ onNavigate }: InteractiveServicesSectionProps) {
  const [activeSystemId, setActiveSystemId] = useState<string>('digital-strategy');
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null);

  const activeSystem = CAPABILITY_SYSTEMS.find(s => s.id === activeSystemId) || CAPABILITY_SYSTEMS[0];

  return (
    <section id="interactive-capabilities" className="space-y-12">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A358]" />
            <span>Consultancy Capabilities</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
            An Interconnected Strategic System.
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            I don’t treat SEO or digital strategy as isolated tasks. Hover or select each domain below to reveal how underlying concepts interlock to create compounded market power.
          </p>
        </div>

        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1626] hover:bg-[#162234] border border-white/10 text-xs font-mono text-white/80 hover:text-white transition-colors shrink-0"
          data-cursor="magnetic"
        >
          <span>Detailed Service Breakdown</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C5A358]" />
        </button>
      </div>

      {/* 4 Capability Cards as Interactive Exploration Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CAPABILITY_SYSTEMS.map((system) => {
          const isActive = system.id === activeSystemId;
          const Icon = system.icon;

          return (
            <div
              key={system.id}
              onClick={() => setActiveSystemId(system.id)}
              onMouseEnter={() => setActiveSystemId(system.id)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative group ${
                isActive
                  ? 'bg-[#162234] border-[#C5A358] shadow-[0_15px_35px_rgba(197,163,88,0.18)] -translate-y-1'
                  : 'bg-[#0B1626]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#0E1B2E]'
              }`}
              data-cursor="magnetic"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#C5A358] text-[#070D18]' : 'bg-[#070D18] text-white/60 group-hover:text-white'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                    {system.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-xl text-[#F5F6F8] font-bold leading-tight group-hover:text-white">
                    {system.title}
                  </h3>
                  <p className="text-xs text-white/65 mt-2 leading-relaxed">
                    {system.shortDesc}
                  </p>
                </div>
              </div>

              {/* Dynamic Pill Concepts */}
              <div className="pt-6 mt-4 border-t border-white/[0.08]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-2">
                  Key Strategic Nodes:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {system.primaryConcepts.map((concept) => (
                    <span
                      key={concept}
                      onMouseEnter={() => setHoveredConcept(concept)}
                      onMouseLeave={() => setHoveredConcept(null)}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                        isActive
                          ? 'bg-[#C5A358]/15 text-[#C5A358] border border-[#C5A358]/30 font-semibold'
                          : 'bg-[#070D18] text-white/50 border border-white/[0.06]'
                      }`}
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active System Spotlight Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSystem.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.12] space-y-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
                Capability Matrix &bull; Deep Exploration
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold">
                {activeSystem.title}
              </h3>
              <p className="text-sm text-white/70 italic">
                "{activeSystem.shortDesc}"
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-white/50 mr-1">Interconnected Concepts:</span>
              {activeSystem.primaryConcepts.map((concept) => (
                <span
                  key={concept}
                  className={`text-xs font-mono px-3 py-1 rounded-full border transition-all ${
                    hoveredConcept === concept
                      ? 'bg-[#C5A358] text-[#070D18] font-bold shadow-md scale-105'
                      : 'bg-[#070D18] text-[#C5A358] border-[#C5A358]/30'
                  }`}
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-300 font-bold">
                Commercial Friction It Solves
              </div>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {activeSystem.expandedDetails.problemItSolves}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
                Strategic Advisory Method
              </div>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {activeSystem.expandedDetails.strategicApproach}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                Tangible Business Deliverables
              </div>
              <ul className="space-y-1.5 pt-1">
                {activeSystem.expandedDetails.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
