import { useState } from 'react';
import { PageType } from '../types';
import { JOURNEY_STAGES, CAPABILITIES, SERVICE_PILLARS } from '../data/servicesData';
import {
  Compass,
  Search,
  Layers,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Zap,
  Filter
} from 'lucide-react';

interface WhatIDoPageProps {
  onNavigate: (page: PageType) => void;
}

export function WhatIDoPage({ onNavigate }: WhatIDoPageProps) {
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const filteredCapabilities = selectedPillarFilter === 'all'
    ? CAPABILITIES
    : CAPABILITIES.filter(c => c.pillar === selectedPillarFilter);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* PAGE HEADER */}
      <section className="pt-12 sm:pt-16 border-b border-white/10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/30">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
            <span>Capabilities &amp; Growth Architecture</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl text-[#E8E8E8] font-bold leading-tight max-w-4xl">
            A Unified Digital Growth System, Not Isolated Marketing Tactics.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
            I help businesses connect commercial strategy, digital positioning, website experience, and organic search visibility into a coherent, high-performing system.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-lg group"
            >
              <span>Discuss Your Digital Scope</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-[#C5A358] bg-[#C5A358]/10 hover:bg-[#C5A358]/20 border border-[#C5A358]/30 rounded-md transition-colors"
            >
              <span>View Pricing &amp; Engagements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#journey-system"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-colors"
            >
              <span>5-Stage Journey</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE CLIENT'S JOURNEY (5 PHASES) */}
      <section id="journey-system" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            The Methodology
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#E8E8E8] font-semibold leading-tight">
            How Engagements Unfold: The 5-Phase Journey.
          </h2>
          <p className="text-base text-white/60">
            Every strategic partnership follows a structured path designed to eliminate ambiguity and build durable organic momentum.
          </p>
        </div>

        {/* Phase Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-white/10 pb-2">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                id={`journey-tab-${stage.step}`}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 text-left rounded-xl transition-all border ${
                  isActive
                    ? 'bg-[#181818] border-[#C5A358] shadow-lg'
                    : 'bg-[#121212] border-white/10 hover:bg-white/5 text-white/60'
                }`}
              >
                <div className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                  Phase {stage.step}
                </div>
                <div className={`text-base font-semibold mt-0.5 ${isActive ? 'text-[#E8E8E8]' : 'text-white/70'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        {(() => {
          const current = JOURNEY_STAGES[activeStageIndex];
          return (
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A358]/10 border border-[#C5A358]/30 rounded-md text-xs font-mono text-[#C5A358] font-semibold">
                    <span>PHASE {current.step}</span> &bull; <span>{current.title.toUpperCase()}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-semibold">
                    {current.tagline}
                  </h3>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold">
                      Critical Questions We Answer:
                    </div>
                    <ul className="space-y-2">
                      {current.questions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-medium">
                          <HelpCircle className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#181818] border border-white/10 rounded-xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
                      Tangible Deliverables at this Stage
                    </div>
                    <div className="space-y-3">
                      {current.deliverables.map((del, i) => (
                        <div key={i} className="bg-[#222222] border border-white/10 p-3.5 rounded-lg flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-white/90">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-white/40">
                    Phase {current.step} outputs directly inform the subsequent stage to ensure continuous alignment.
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SECTION 2: THE 10 DETAILED CAPABILITIES */}
      <section id="capabilities-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Specialist Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
              Ten Core Competencies. One Unified Purpose.
            </h2>
            <p className="text-base text-white/60">
              Discover how each capability fits into the overall digital strategy and search visibility ecosystem.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedPillarFilter('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'all'
                  ? 'bg-[#C5A358] text-black font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              All Capabilities ({CAPABILITIES.length})
            </button>
            <button
              onClick={() => setSelectedPillarFilter('digital-strategy')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'digital-strategy'
                  ? 'bg-[#C5A358] text-black font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              Strategy
            </button>
            <button
              onClick={() => setSelectedPillarFilter('seo-visibility')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'seo-visibility'
                  ? 'bg-[#C5A358] text-black font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              SEO &amp; Search
            </button>
            <button
              onClick={() => setSelectedPillarFilter('digital-positioning')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'digital-positioning'
                  ? 'bg-[#C5A358] text-black font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              Positioning
            </button>
            <button
              onClick={() => setSelectedPillarFilter('digital-execution')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'digital-execution'
                  ? 'bg-[#C5A358] text-black font-semibold'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              Execution &amp; CRO
            </button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCapabilities.map((cap) => (
            <div
              key={cap.id}
              id={`capability-${cap.id}`}
              className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-[#C5A358]/60 hover:bg-white/[0.02] hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#E8E8E8] font-semibold">
                    {cap.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-[#C5A358]/10 border border-[#C5A358]/30 text-[#C5A358] rounded-md font-semibold">
                    {cap.pillar.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  {cap.description}
                </p>

                <div className="bg-[#181818] border border-white/10 p-4 rounded-xl text-xs space-y-1">
                  <div className="font-mono font-bold text-[#C5A358] uppercase text-[10px]">
                    Why It Matters:
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {cap.whyItMatters}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase text-white/40 font-semibold">
                  Sample Outputs:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cap.keyOutputs.map((out, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 rounded-md font-medium">
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border-2 border-[#C5A358]/40 text-white rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Ready to Align Your Digital Assets?
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#E8E8E8] font-semibold">
              Let's build a digital presence that answers what your buyers are searching for.
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              Whether you need a full digital roadmap, technical SEO architecture, or value proposition clarity.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-lg"
          >
            <span>Book a Strategic Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
