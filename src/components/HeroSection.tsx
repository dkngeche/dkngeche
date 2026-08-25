import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { ArrowUpRight, Compass, Globe, Search, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageType) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: clientX,
        y: clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden border-b border-white/[0.08]">
      {/* Interactive cursor light & background ambient glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 163, 88, 0.08), transparent 80%)`
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C5A358]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#71839A]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Brand Pill with Glassmorphism */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626]/80 backdrop-blur-md border border-[#C5A358]/30 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
              <span className="font-semibold text-white/90">DKNgeche</span>
              <span className="text-white/30">&bull;</span>
              <span className="text-[#C5A358]">Digital Strategy &amp; Growth Consultant</span>
            </div>

            {/* Core Editorial Headline */}
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F5F6F8] font-bold tracking-tight leading-[1.08]">
                Building digital foundations that help businesses grow.
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/75 font-normal leading-relaxed max-w-3xl">
                I help businesses build stronger digital foundations, establish credible online brands and turn their digital presence into a meaningful growth asset.
              </p>
            </div>

            {/* Strategic Pillars Ribbon / Subtle 4 Areas Indication */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3 font-semibold">
                Strategic Consulting Pillars
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {[
                  { icon: Compass, label: '01 — Strategy', id: 'digital-strategy' },
                  { icon: Globe, label: '02 — Web', id: 'web-strategy' },
                  { icon: Search, label: '03 — Search', id: 'search-strategy' },
                  { icon: ShieldCheck, label: '04 — Digital Brand', id: 'digital-brand' }
                ].map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => onNavigate('services')}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B1626]/60 hover:bg-[#162234] border border-white/[0.08] hover:border-[#C5A358]/40 transition-all text-xs font-mono text-white/80 hover:text-white backdrop-blur-sm"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#C5A358] group-hover:scale-110 transition-transform" />
                      <span>{pillar.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('work')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-[0_10px_30px_rgba(197,163,88,0.2)] hover:shadow-[0_15px_35px_rgba(197,163,88,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#0B1626]/80 hover:bg-[#162234] border border-white/15 hover:border-white/30 rounded-md transition-all backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
              >
                <span>Let's Work Together</span>
              </button>
            </div>

          </div>

          {/* Right Column: Editorial Glass Dashboard / Trust Panel */}
          <div className="lg:col-span-4 relative">
            <div className="relative z-10 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Profile Overview Card */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#162234] to-[#070D18] border border-[#C5A358]/40 flex items-center justify-center font-editorial text-lg font-bold text-[#C5A358] shadow-md">
                    DK
                  </div>
                  <div>
                    <div className="font-editorial text-lg font-bold text-white leading-tight">
                      Dickson Ngeche
                    </div>
                    <div className="text-[11px] font-mono text-[#C5A358] tracking-wider uppercase">
                      Independent Strategist
                    </div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#C5A358]/10 border border-[#C5A358]/30 text-[10px] font-mono text-[#C5A358]">
                  Available
                </div>
              </div>

              {/* Consultancy Philosophy Micro-Points */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#070D18]/70 border border-white/[0.06] space-y-1">
                  <div className="font-mono text-[#C5A358] text-[10px] uppercase tracking-wider font-semibold">
                    The Approach
                  </div>
                  <div className="text-white/80 leading-relaxed">
                    Strategy before activity. Clarity before complexity. Digital grounded in commercial unit economics.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070D18]/70 border border-white/[0.06] space-y-1">
                  <div className="font-mono text-[#C5A358] text-[10px] uppercase tracking-wider font-semibold">
                    Client Footprint
                  </div>
                  <div className="text-white/80 leading-relaxed">
                    National federations, cooperative dairy unions, fintech platforms, healthcare clinics, and aviation logistics.
                  </div>
                </div>
              </div>

              {/* Verified Results Summary */}
              <div className="pt-2 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-editorial text-xl font-bold text-[#F5F6F8]">100%</div>
                  <div className="text-[10px] font-mono text-white/50 uppercase mt-0.5">Commercial Focus</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-editorial text-xl font-bold text-[#C5A358]">4 Pillars</div>
                  <div className="text-[10px] font-mono text-white/50 uppercase mt-0.5">Unified Growth</div>
                </div>
              </div>

              {/* Secondary Navigation Cue */}
              <button 
                onClick={() => onNavigate('insights')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#162234]/80 hover:bg-[#162234] border border-[#C5A358]/20 hover:border-[#C5A358]/40 transition-colors text-xs text-white/90 group"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A358]" />
                  <span>Read "Thinking About Digital"</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#C5A358] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>

            </div>

            {/* Subtle background card depth accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C5A358]/10 to-[#71839A]/10 rounded-3xl blur-xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
