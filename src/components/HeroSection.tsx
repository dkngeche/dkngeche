import React from 'react';
import { PageType } from '../types';
import { ArrowUpRight, ArrowRight, Compass, Globe, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveNetworkCanvas } from './InteractiveNetworkCanvas';

interface HeroSectionProps {
  onNavigate: (page: PageType) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden border-b border-white/[0.08]">
      {/* Background Interactive Concept Network Canvas */}
      <InteractiveNetworkCanvas />

      {/* Subtle radial ambient atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5A358]/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#162234]/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Editorial Hero Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Positioning Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626]/80 backdrop-blur-md border border-[#C5A358]/30 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse" />
              <span className="font-semibold text-white/90">Dickson Ngeche</span>
              <span className="text-white/30">&bull;</span>
              <span className="text-[#C5A358]">Digital Strategy &amp; SEO Consultant</span>
            </motion.div>

            {/* Core Large-Scale Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-[#F5F6F8] font-bold tracking-tight leading-[1.06]"
              >
                Turning Business Ideas Into Digital Growth.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl lg:text-2xl text-white/75 font-normal leading-relaxed max-w-3xl"
              >
                I help businesses clarify their digital direction, build the right online presence, and become visible to the audiences that matter through digital strategy, SEO and purposeful digital execution.
              </motion.p>
            </div>

            {/* Strategic Pillars Shortcut Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="pt-1"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3 font-semibold flex items-center gap-2">
                <span>The Intersection:</span>
                <span className="text-[#C5A358]">Strategy + Web + Search + Positioning</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {[
                  { icon: Compass, label: '01 / Strategy', id: 'digital-strategy' },
                  { icon: Globe, label: '02 / Web Experience', id: 'web-strategy' },
                  { icon: Search, label: '03 / SEO & Search', id: 'search-strategy' },
                  { icon: ShieldCheck, label: '04 / Brand Positioning', id: 'digital-brand' }
                ].map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => onNavigate('services')}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B1626]/70 hover:bg-[#162234] border border-white/[0.08] hover:border-[#C5A358]/40 transition-all text-xs font-mono text-white/80 hover:text-white backdrop-blur-sm shadow-sm"
                      data-cursor="magnetic"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#C5A358] group-hover:scale-110 transition-transform" />
                      <span>{pillar.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Primary & Secondary Call to Actions with Tactile Button Micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-[0_10px_30px_rgba(197,163,88,0.25)] hover:shadow-[0_15px_35px_rgba(197,163,88,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                data-cursor="magnetic"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('work')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#0B1626]/80 hover:bg-[#162234] border border-white/15 hover:border-white/30 rounded-md transition-all backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
                data-cursor="magnetic"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Editorial Consultant Trust Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative z-10 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/[0.12]">
              
              {/* Profile Overview Card */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#162234] to-[#070D18] border border-[#C5A358]/40 flex items-center justify-center font-editorial text-lg font-bold text-[#C5A358] shadow-md">
                    DK
                  </div>
                  <div>
                    <div className="font-editorial text-lg font-bold text-[#F5F6F8] leading-tight">
                      Dickson Ngeche
                    </div>
                    <div className="text-[11px] font-mono text-[#C5A358] tracking-wider uppercase">
                      Independent Consultant
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#C5A358]/10 border border-[#C5A358]/30 text-[10px] font-mono text-[#C5A358] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358] animate-ping" />
                  <span>Available</span>
                </div>
              </div>

              {/* Core Philosophy Statement */}
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.06] space-y-2">
                  <div className="font-mono text-[#C5A358] text-[10px] uppercase tracking-wider font-semibold">
                    Core Philosophy
                  </div>
                  <div className="text-white/85 leading-relaxed font-editorial text-sm italic">
                    "Turn the idea into something clear. Build the digital presence around it. Make it visible to the right people. Measure what happens. Improve continuously."
                  </div>
                </div>

                {/* Quick Trust Highlights */}
                <div className="p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.06] space-y-2">
                  <div className="font-mono text-[#C5A358] text-[10px] uppercase tracking-wider font-semibold">
                    Verified Engagements
                  </div>
                  <div className="text-[11px] text-white/70 space-y-1 font-mono">
                    <div className="truncate">&bull; FEDWEN Kenya (SEO &amp; Visibility)</div>
                    <div className="truncate">&bull; MCCCU &amp; County Fresh (Comms &amp; Dairy)</div>
                    <div className="truncate">&bull; Infiniti Financial Solutions (Fintech Strategy)</div>
                    <div className="truncate">&bull; 24HR Aviation Hub (Aircraft Charter B2B)</div>
                  </div>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>Nairobi &bull; Global Remote</span>
                <span className="text-[#C5A358]">Q3 2026 Advisory</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
