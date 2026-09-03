import React, { useState } from 'react';
import { PageType } from '../types';
import { JOURNEY_STAGES, CAPABILITIES, SERVICE_PILLARS } from '../data/servicesData';
import { CapabilityConnectionDiagram } from '../components/CapabilityConnectionDiagram';
import {
  Compass,
  Search,
  Globe,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Zap,
  Filter,
  Layers
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

  const pillarIcons = {
    'digital-strategy': Compass,
    'web-strategy': Globe,
    'search-strategy': Search,
    'digital-brand': ShieldCheck
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* PAGE HEADER */}
      <section className="pt-12 sm:pt-16 border-b border-white/[0.08] pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626] border border-[#C5A358]/30 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
            <span>Core Expertise &bull; 4 Strategic Pillars</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F5F6F8] font-bold leading-tight max-w-4xl">
            A Unified Digital Growth System, Not Isolated Marketing Tactics.
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-3xl leading-relaxed">
            I help businesses connect high-level commercial strategy, operational website experiences, organic search visibility, and credible digital branding into a high-performing growth asset.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group"
            >
              <span>Discuss Your Digital Scope</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-white hover:text-[#C5A358] bg-[#0B1626] hover:bg-[#162234] border border-white/10 hover:border-[#C5A358]/40 rounded-md transition-colors shadow-sm"
            >
              <span>View Pricing &amp; Engagements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#pillars-deepdive"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-white/80 bg-[#070D18] hover:bg-[#162234] border border-white/[0.08] rounded-md transition-colors"
            >
              <span>Explore 4 Pillars</span>
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CAPABILITY CONNECTION DIAGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CapabilityConnectionDiagram />
      </section>

      {/* THE 4 CORE PILLARS OVERVIEW SECTION */}
      <section id="pillars-deepdive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Four Core Pillars
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5F6F8] font-bold leading-tight">
            Structure of Expertise
          </h2>
          <p className="text-base text-white/65">
            Every engagement is anchored in four interconnected disciplines, structured to eliminate guesswork and compound commercial returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Compass;
            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="glass-panel glass-panel-hover rounded-2xl p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#162234] border border-[#C5A358]/30 flex items-center justify-center text-[#C5A358]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#C5A358] font-bold">{pillar.number}</span>
                        <h3 className="font-editorial text-2xl text-[#F5F6F8] font-bold">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/20 hidden sm:inline">
                      {pillar.deliverableFocus}
                    </span>
                  </div>

                  <p className="font-editorial text-base text-[#C5A358] italic">
                    "{pillar.tagline}"
                  </p>

                  <p className="text-sm text-white/75 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* List of specific services */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold">
                      Included Services &amp; Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.services.map((srv, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/80 bg-[#070D18]/70 border border-white/[0.05] p-2 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A358] shrink-0" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="text-xs text-white/50">
                    Deliverable: <span className="text-white/80 font-medium">{pillar.deliverableFocus}</span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C5A358] hover:text-[#D4B46A] font-semibold group"
                  >
                    <span>Inquire About Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 1: THE CLIENT'S JOURNEY (5 PHASES) */}
      <section id="journey-system" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            The Methodology
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5F6F8] font-bold leading-tight">
            How Engagements Unfold: The 5-Phase Journey.
          </h2>
          <p className="text-base text-white/65">
            Every strategic partnership follows a structured path designed to eliminate ambiguity and build durable organic momentum.
          </p>
        </div>

        {/* Phase Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-white/[0.08] pb-2">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                id={`journey-tab-${stage.step}`}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 text-left rounded-xl transition-all border ${
                  isActive
                    ? 'bg-[#162234] border-[#C5A358] shadow-lg ring-1 ring-[#C5A358]/40'
                    : 'bg-[#0B1626]/80 border-white/[0.08] hover:bg-[#162234]/50 text-white/60'
                }`}
              >
                <div className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                  Phase {stage.step}
                </div>
                <div className={`text-base font-semibold mt-0.5 ${isActive ? 'text-white' : 'text-white/70'}`}>
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
            <div className="glass-panel rounded-2xl p-8 sm:p-12 shadow-2xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A358]/10 border border-[#C5A358]/30 rounded-md text-xs font-mono text-[#C5A358] font-semibold">
                    <span>PHASE {current.step}</span> &bull; <span>{current.title.toUpperCase()}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold">
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

                <div className="lg:col-span-6 bg-[#070D18] border border-white/[0.08] rounded-xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-inner">
                  <div className="space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
                      Tangible Deliverables at this Stage
                    </div>
                    <div className="space-y-3">
                      {current.deliverables.map((del, i) => (
                        <div key={i} className="bg-[#0B1626] border border-white/[0.08] p-3.5 rounded-lg flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-white/90">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] text-xs text-white/40">
                    Phase {current.step} outputs directly inform the subsequent stage to ensure continuous alignment.
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* SECTION 2: SPECIALIST CAPABILITIES FILTER */}
      <section id="capabilities-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Granular Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Specialist Disciplines. Unified Purpose.
            </h2>
            <p className="text-base text-white/65">
              Discover how each capability fits into the overall digital strategy and search visibility ecosystem.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedPillarFilter('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'all'
                  ? 'bg-[#C5A358] text-black font-bold'
                  : 'bg-[#0B1626] border border-white/[0.08] text-white/60 hover:bg-[#162234] hover:text-white'
              }`}
            >
              All Capabilities ({CAPABILITIES.length})
            </button>
            <button
              onClick={() => setSelectedPillarFilter('digital-strategy')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'digital-strategy'
                  ? 'bg-[#C5A358] text-black font-bold'
                  : 'bg-[#0B1626] border border-white/[0.08] text-white/60 hover:bg-[#162234] hover:text-white'
              }`}
            >
              01 Strategy
            </button>
            <button
              onClick={() => setSelectedPillarFilter('web-strategy')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'web-strategy'
                  ? 'bg-[#C5A358] text-black font-bold'
                  : 'bg-[#0B1626] border border-white/[0.08] text-white/60 hover:bg-[#162234] hover:text-white'
              }`}
            >
              02 Web
            </button>
            <button
              onClick={() => setSelectedPillarFilter('search-strategy')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'search-strategy'
                  ? 'bg-[#C5A358] text-black font-bold'
                  : 'bg-[#0B1626] border border-white/[0.08] text-white/60 hover:bg-[#162234] hover:text-white'
              }`}
            >
              03 Search
            </button>
            <button
              onClick={() => setSelectedPillarFilter('digital-brand')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedPillarFilter === 'digital-brand'
                  ? 'bg-[#C5A358] text-black font-bold'
                  : 'bg-[#0B1626] border border-white/[0.08] text-white/60 hover:bg-[#162234] hover:text-white'
              }`}
            >
              04 Brand
            </button>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCapabilities.map((cap) => (
            <div
              key={cap.id}
              id={`capability-${cap.id}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#F5F6F8] font-bold group-hover:text-white transition-colors">
                    {cap.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-[#C5A358]/10 border border-[#C5A358]/30 text-[#C5A358] rounded-md font-semibold">
                    {cap.pillar.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  {cap.description}
                </p>

                <div className="bg-[#070D18] border border-white/[0.08] p-4 rounded-xl text-xs space-y-1">
                  <div className="font-mono font-bold text-[#C5A358] uppercase text-[10px]">
                    Why It Matters:
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {cap.whyItMatters}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono uppercase text-white/40 font-semibold">
                  Sample Outputs:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cap.keyOutputs.map((out, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-[#070D18] border border-white/[0.08] text-white/80 rounded-md font-medium">
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
        <div className="bg-[#0B1626] border-2 border-[#C5A358]/40 text-white rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-glow pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Ready to Align Your Digital Assets?
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold">
              Let's build a digital presence that answers what your buyers are searching for.
            </h2>
            <p className="text-sm sm:text-base text-white/65">
              Whether you need a full digital roadmap, technical SEO architecture, or value proposition clarity.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-lg relative z-10"
          >
            <span>Book a Strategic Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
