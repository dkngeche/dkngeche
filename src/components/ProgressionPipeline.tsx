import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Lightbulb, Compass, Globe, Search, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  label: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  keyQuestion: string;
  outcome: string;
}

const STAGES: Stage[] = [
  {
    id: 'idea',
    step: '01',
    label: 'Business Idea',
    subtitle: 'The Core Offering',
    description: 'Every enterprise begins with subject-matter expertise, a valuable product, or a distinctive commercial ambition.',
    icon: Lightbulb,
    keyQuestion: 'What core commercial value does the business create, and who specifically benefits?',
    outcome: 'Raw capability unconstrained by tactical noise.',
  },
  {
    id: 'clarity',
    step: '02',
    label: 'Clarity',
    subtitle: 'The Proposition',
    description: 'Distilling complex operations into a razor-sharp market proposition that high-value buyers grasp in seconds.',
    icon: Sparkles,
    keyQuestion: 'Why should a discerning client choose you over credible alternatives?',
    outcome: 'Unambiguous value positioning and messaging architecture.',
  },
  {
    id: 'strategy',
    step: '03',
    label: 'Digital Strategy',
    subtitle: 'The Direction',
    description: 'Formulating a deliberate digital roadmap aligned with unit economics, commercial priorities, and buyer evaluation paths.',
    icon: Compass,
    keyQuestion: 'Where should digital investments be channeled to compound long-term return?',
    outcome: 'A prioritized execution roadmap with zero wasted marketing spend.',
  },
  {
    id: 'presence',
    step: '04',
    label: 'Digital Presence',
    subtitle: 'The Experience',
    description: 'Building operational web experiences, content structures, and brand assets that qualify buyers and advance deals.',
    icon: Globe,
    keyQuestion: 'Does your website function as a 24/7 commercial conversion instrument?',
    outcome: 'High-performance web architecture with clear decision pathways.',
  },
  {
    id: 'visibility',
    step: '05',
    label: 'SEO / Visibility',
    subtitle: 'The Discovery',
    description: 'Engineering technical crawl health and topical authority so active economic buyers find you when searching.',
    icon: Search,
    keyQuestion: 'Are you discoverable at the exact moment high-intent prospects search?',
    outcome: 'Topical authority and first-page capture of commercial queries.',
  },
  {
    id: 'growth',
    step: '06',
    label: 'Growth',
    subtitle: 'The Compounding Asset',
    description: 'Leveraging real telemetry, continuous CRO, and strategic advisory to compound qualified pipeline month after month.',
    icon: TrendingUp,
    keyQuestion: 'How does digital momentum translate into durable enterprise revenue?',
    outcome: 'Compounding commercial growth and resilient market authority.',
  },
];

export function ProgressionPipeline() {
  const [activeStageId, setActiveStageId] = useState<string>('clarity');
  const activeStage = STAGES.find(s => s.id === activeStageId) || STAGES[0];

  return (
    <div className="space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]" />
          <span>The Progression Framework</span>
        </div>
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
          A good business deserves a digital presence that makes sense.
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Businesses often have good products, services, and ideas but struggle to communicate their value, reach the right audience, or understand where their digital effort should go. I connect these pieces into a continuous, compounding journey.
        </p>
      </div>

      {/* Horizontal Pipeline Steps on Desktop / Scroller on Mobile */}
      <div className="relative">
        {/* Connecting Filament Line behind nodes */}
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-gradient-to-r from-white/10 via-[#C5A358]/40 to-white/10 z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
          {STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            const Icon = stage.icon;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`text-left p-4 rounded-xl border transition-all relative group flex flex-col justify-between min-h-[140px] ${
                  isActive
                    ? 'bg-[#162234] border-[#C5A358] shadow-[0_10px_30px_rgba(197,163,88,0.15)]'
                    : 'bg-[#0B1626]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#0B1626]'
                }`}
                data-cursor="magnetic"
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                    {stage.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#C5A358] text-[#070D18]' : 'bg-[#070D18] text-white/60 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="mt-4">
                  <div className={`text-xs font-mono uppercase tracking-wider ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                    {stage.subtitle}
                  </div>
                  <div className="font-editorial text-base sm:text-lg font-bold text-[#F5F6F8] leading-tight mt-0.5">
                    {stage.label}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="pipeline-active-indicator"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#C5A358] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Interactive Deep Dive Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/[0.12] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/30 font-bold">
                  STAGE {activeStage.step}
                </span>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  {activeStage.subtitle}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold">
                {activeStage.label}: {activeStage.description}
              </h3>

              <div className="p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
                <div className="text-[11px] font-mono text-[#C5A358] uppercase tracking-wider font-semibold">
                  Strategic Diagnostic Question
                </div>
                <p className="text-sm text-white/85 italic leading-relaxed">
                  "{activeStage.keyQuestion}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:border-l lg:border-white/[0.08] lg:pl-8">
              <div className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold">
                Tangible Stage Outcome
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#162234]/60 border border-white/[0.08]">
                <CheckCircle2 className="w-5 h-5 text-[#C5A358] shrink-0 mt-0.5" />
                <span className="text-sm text-white/90 leading-relaxed font-medium">
                  {activeStage.outcome}
                </span>
              </div>

              <div className="text-xs text-white/50 leading-relaxed pt-1">
                Progression is iterative. Each stage reinforces the next, ensuring that search authority rests on a rock-solid commercial proposition.
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
