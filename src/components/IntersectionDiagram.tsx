import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Globe, Search, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

interface IntersectionPillar {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  whyItMatters: string;
  withoutThis: string;
}

const INTERSECTION_PILLARS: IntersectionPillar[] = [
  {
    id: 'business',
    name: 'Business Reality',
    subtitle: 'Margins, economics & commercial intent',
    icon: Briefcase,
    whyItMatters: 'Every digital initiative must be evaluated against unit economics, customer lifetime value, and profit margins—not vanity metrics.',
    withoutThis: 'You burn marketing budget on meaningless traffic that never converts into paying enterprise clients.',
  },
  {
    id: 'digital',
    name: 'Digital Strategy',
    subtitle: 'Holistic direction & channel priorities',
    icon: Globe,
    whyItMatters: 'Orchestrates web assets, content, and touchpoints into a unified path so buyers experience consistent clarity at every stage.',
    withoutThis: 'Random acts of marketing across fragmented channels with no compounding leverage.',
  },
  {
    id: 'seo',
    name: 'Search Strategy (SEO)',
    subtitle: 'Active intent capture & crawl health',
    icon: Search,
    whyItMatters: 'SEO is not a technical checklist—it is an economic strategy to capture prospective buyers at the exact moment they search for solutions.',
    withoutThis: 'High-intent buyers land on competitors simply because search engines cannot interpret your authority.',
  },
  {
    id: 'tech',
    name: 'Technology & UX',
    subtitle: 'Speed, stability & frictionless pathways',
    icon: Cpu,
    whyItMatters: 'Delivers fast, accessible, high-performance web platforms that remove hesitation and inspire executive confidence.',
    withoutThis: 'Slow load times, mobile friction, and broken crawl paths that cause 60%+ of visitors to bounce.',
  },
  {
    id: 'growth',
    name: 'Sustainable Growth',
    subtitle: 'Compounding assets & ongoing advisory',
    icon: TrendingUp,
    whyItMatters: 'Transforms the digital presence from an expense line into a compounding commercial asset that increases in value each month.',
    withoutThis: 'A stagnant website that degrades over time requiring expensive complete rebuilds every 2 years.',
  },
];

export function IntersectionDiagram() {
  const [activeId, setActiveId] = useState<string>('business');
  const activePillar = INTERSECTION_PILLARS.find(p => p.id === activeId) || INTERSECTION_PILLARS[0];

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.12] space-y-8 shadow-2xl">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
          The Strategic Convergence
        </span>
        <h3 className="font-editorial text-2xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
          Where Business, Digital, SEO, Technology &amp; Growth Intersect.
        </h3>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
          Most agencies operate in narrow silos. I work at the convergence of all five disciplines, ensuring that technical implementation always serves genuine commercial objectives.
        </p>
      </div>

      {/* 5 Convergent Pillars */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {INTERSECTION_PILLARS.map((item) => {
          const isActive = item.id === activeId;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between min-h-[110px] ${
                isActive
                  ? 'bg-[#162234] border-[#C5A358] shadow-[0_10px_25px_rgba(197,163,88,0.18)]'
                  : 'bg-[#0B1626]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#0E1B2E]'
              }`}
              data-cursor="magnetic"
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`} />
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#C5A358]' : 'bg-white/20'}`} />
              </div>

              <div className="mt-3">
                <div className="font-editorial text-base sm:text-lg font-bold text-[#F5F6F8] leading-tight">
                  {item.name}
                </div>
                <div className="text-[10px] font-mono text-white/50 truncate mt-0.5">
                  {item.subtitle}
                </div>
              </div>

              {isActive && (
                <motion.div
                  layoutId="intersection-glow"
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#C5A358] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Focused Analysis Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl bg-[#070D18]/90 border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
              Why This Discipline Is Crucial
            </div>
            <p className="text-sm text-white/85 leading-relaxed font-sans">
              {activePillar.whyItMatters}
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-lg bg-[#162234]/50 border border-white/[0.06]">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-300 font-bold">
              The Cost of Ignoring This
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              {activePillar.withoutThis}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
