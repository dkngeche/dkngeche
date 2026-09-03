import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Globe, Search, ShieldCheck, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CapabilityNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  role: string;
  connectsTo: string;
  icon: React.ElementType;
  keyAction: string;
  impactOnNext: string;
}

const CAPABILITY_FLOW: CapabilityNode[] = [
  {
    id: 'strategy',
    step: '01',
    title: 'Digital Strategy',
    subtitle: 'Commercial Foundation',
    role: 'Defines who to target, what channels to prioritize, and how unit economics dictate digital spend.',
    connectsTo: 'Web Experience',
    icon: Compass,
    keyAction: 'Audience profiling & commercial goal alignment',
    impactOnNext: 'Gives the website a clear purpose and defined customer journeys.',
  },
  {
    id: 'web',
    step: '02',
    title: 'Web Experience',
    subtitle: 'The Conversion Vessel',
    role: 'Structures information and user flows so prospective buyers quickly grasp value and take action.',
    connectsTo: 'SEO & Search',
    icon: Globe,
    keyAction: 'Conversion-engineered architecture & speed optimization',
    impactOnNext: 'Provides fast, crawlable, and indexable landing destinations for search traffic.',
  },
  {
    id: 'seo',
    step: '03',
    title: 'SEO & Search',
    subtitle: 'Organic Discovery Engine',
    role: 'Captures active commercial intent so economic buyers discover your website when researching solutions.',
    connectsTo: 'Positioning & Brand',
    icon: Search,
    keyAction: 'Technical crawl health, Schema graphs & topical authority hubs',
    impactOnNext: 'Brings qualified prospects into direct contact with your distinctive positioning.',
  },
  {
    id: 'positioning',
    step: '04',
    title: 'Positioning & Brand',
    subtitle: 'Authority & Differentiation',
    role: 'Pre-empts skepticism, reinforces subject-matter authority, and proves why you are the obvious partner.',
    connectsTo: 'Compounding Growth',
    icon: ShieldCheck,
    keyAction: 'Credibility structuring & market differentiation narrative',
    impactOnNext: 'Converts visitors into high-confidence inquiries and repeat business.',
  },
  {
    id: 'growth',
    step: '05',
    title: 'Compounding Growth',
    subtitle: 'Continuous Telemetry',
    role: 'Monitors real buyer queries, conversion rates, and revenue telemetry to iteratively compound asset value.',
    connectsTo: 'Digital Strategy (Feedback Loop)',
    icon: TrendingUp,
    keyAction: 'Attribution analytics, continuous CRO & advisory iterations',
    impactOnNext: 'Refines strategy with ground-truth commercial data for the next quarter.',
  },
];

export function CapabilityConnectionDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>('strategy');
  const activeNode = CAPABILITY_FLOW.find(n => n.id === activeNodeId) || CAPABILITY_FLOW[0];

  return (
    <div className="space-y-8 glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.12] shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
            Interactive Architecture Diagram
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold">
            How Capabilities Connect Into a Cohesive System
          </h3>
        </div>
        <div className="text-xs font-mono text-white/50">
          Click any step to inspect the connection logic
        </div>
      </div>

      {/* Horizontal Flow Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
        {CAPABILITY_FLOW.map((node) => {
          const isActive = node.id === activeNodeId;
          const Icon = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between min-h-[120px] ${
                isActive
                  ? 'bg-[#162234] border-[#C5A358] shadow-[0_10px_25px_rgba(197,163,88,0.18)]'
                  : 'bg-[#0B1626]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#0E1B2E]'
              }`}
              data-cursor="magnetic"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                  {node.step}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`} />
              </div>

              <div>
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  {node.subtitle}
                </div>
                <div className="font-editorial text-base sm:text-lg font-bold text-[#F5F6F8] leading-tight mt-0.5">
                  {node.title}
                </div>
              </div>

              {isActive && (
                <motion.div
                  layoutId="diagram-active-glow"
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#C5A358] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Deep-dive Node Relationship Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl bg-[#070D18]/90 border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C5A358]">
              <span className="px-2.5 py-0.5 rounded bg-[#C5A358]/10 border border-[#C5A358]/30 font-bold">
                NODE {activeNode.step}
              </span>
              <span>&rarr; Connects Directly Into {activeNode.connectsTo}</span>
            </div>

            <h4 className="font-editorial text-xl sm:text-2xl text-[#F5F6F8] font-bold">
              {activeNode.title}: {activeNode.role}
            </h4>

            <div className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
              <span className="text-[#C5A358] font-mono font-semibold">Primary Focus: </span>
              {activeNode.keyAction}
            </div>
          </div>

          <div className="lg:col-span-5 p-4 rounded-xl bg-[#162234]/70 border border-white/[0.08] space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
              Compounding Effect on Next Stage:
            </div>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
              <span>{activeNode.impactOnNext}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
