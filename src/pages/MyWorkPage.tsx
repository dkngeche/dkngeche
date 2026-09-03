import { useState } from 'react';
import { PageType, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Filter, ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building, MapPin, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MyWorkPageProps {
  onNavigate: (page: PageType) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export function MyWorkPage({ onNavigate, onSelectCaseStudy }: MyWorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Strategy',
    'SEO',
    'Digital Experience',
    'Brand'
  ];

  // Map user categories cleanly to the case study fields
  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => {
        if (selectedCategory === 'Strategy') {
          return study.category === 'Digital Strategy' || study.services.some(s => s.toLowerCase().includes('strategy'));
        }
        if (selectedCategory === 'SEO') {
          return study.category === 'SEO' || study.category === 'Technical SEO' || study.services.some(s => s.toLowerCase().includes('seo') || s.toLowerCase().includes('search'));
        }
        if (selectedCategory === 'Digital Experience') {
          return study.category === 'Website Strategy' || study.services.some(s => s.toLowerCase().includes('web') || s.toLowerCase().includes('experience'));
        }
        if (selectedCategory === 'Brand') {
          return study.category === 'Digital Positioning' || study.services.some(s => s.toLowerCase().includes('brand') || s.toLowerCase().includes('positioning'));
        }
        return true;
      });

  // Featured Case Study (Most recent or designated featured)
  const featuredStudy = CASE_STUDIES.find(c => c.isMostRecent) || CASE_STUDIES[0];
  const remainingStudies = filteredStudies.filter(c => c.id !== featuredStudy.id);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      
      {/* 01: EDITORIAL HEADER */}
      <section className="pt-12 sm:pt-16 border-b border-white/[0.08] pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626] border border-[#C5A358]/30 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse" />
            <span>Digital Case-Study Journal &bull; Verified Client Engagements</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F5F6F8] font-bold leading-tight">
              Selected Work.
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[#C5A358] italic font-normal">
              Different businesses. Different problems. One approach: understand before solving.
            </p>
            <p className="text-base sm:text-lg text-white/75 max-w-3xl leading-relaxed pt-1 font-sans">
              Explore how I approach client challenges across national civil society, manufacturing FMCG, fintech, aviation logistics, and specialized healthcare. Every project is documented as a structured narrative: Challenge &rarr; Opportunity &rarr; Strategy &rarr; Work &rarr; Result &rarr; Insight.
            </p>
          </div>

          {/* Animated Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-white/40 mr-1 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#C5A358]" /> Filter Domain:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`work-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono transition-all relative ${
                    isActive
                      ? 'bg-[#C5A358] text-[#070D18] font-bold shadow-lg'
                      : 'bg-[#0B1626] border border-white/[0.08] text-white/70 hover:bg-[#162234] hover:text-white'
                  }`}
                  data-cursor="magnetic"
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 02: FEATURED HERO CASE STUDY (FULL-WIDTH EDITORIAL SPOTLIGHT) */}
      {selectedCategory === 'All' && featuredStudy && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spotlight Feature &bull; Most Recent Client</span>
            </span>
          </div>

          <div
            onClick={() => onSelectCaseStudy(featuredStudy)}
            className="group cursor-pointer rounded-2xl bg-gradient-to-br from-[#0B1626] via-[#162234]/70 to-[#0B1626] border border-white/[0.12] hover:border-[#C5A358]/60 p-8 sm:p-12 lg:p-14 shadow-2xl transition-all duration-300 relative overflow-hidden"
            data-cursor="project"
            data-cursor-text="VIEW DEEP DIVE"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A358]/5 blur-3xl rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-[#C5A358] text-[#070D18] rounded-md font-bold">
                    Featured Engagement
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    {featuredStudy.industry}
                  </span>
                  {featuredStudy.location && (
                    <span className="text-xs font-mono text-white/50">
                      &bull; {featuredStudy.location}
                    </span>
                  )}
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight group-hover:text-[#C5A358] transition-colors">
                  {featuredStudy.client}
                </h2>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans">
                  {featuredStudy.summary}
                </p>

                {/* 3-Part Snapshot */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.08] text-xs font-sans">
                  <div>
                    <span className="text-rose-400 font-mono font-bold block text-[10px]">CHALLENGE</span>
                    <span className="line-clamp-2 text-white/70 mt-0.5">{featuredStudy.challenge}</span>
                  </div>
                  <div>
                    <span className="text-[#C5A358] font-mono font-bold block text-[10px]">STRATEGY</span>
                    <span className="line-clamp-2 text-white/70 mt-0.5">{featuredStudy.strategy}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-mono font-bold block text-[10px]">RESULT</span>
                    <span className="line-clamp-2 text-white/90 mt-0.5 font-medium">{featuredStudy.result.summary}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
                  <span>Open Full Case Study Journal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Right Column Metrics & Verified Outcomes */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-xl bg-[#070D18]/90 border border-white/[0.08] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-semibold">
                    Key Outcomes &amp; Scope:
                  </div>

                  {featuredStudy.result.metrics && (
                    <div className="grid grid-cols-2 gap-3">
                      {featuredStudy.result.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-lg bg-[#0B1626] border border-white/[0.06] text-center">
                          <div className="text-lg font-bold text-white font-mono">{m.value}</div>
                          <div className="text-[11px] font-mono text-[#C5A358]">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-white/40 mb-2">Delivered Capabilities:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredStudy.services.map((svc, i) => (
                        <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#162234] text-white/80 border border-white/[0.06]">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 03: VARIABLE RHYTHM EDITORIAL CARDS (TWO-COLUMN PAIRS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between text-xs text-white/40 font-mono pb-2 border-b border-white/[0.08]">
          <span>Displaying {filteredStudies.length} {filteredStudies.length === 1 ? 'case study' : 'case studies'}</span>
          <span>Click any project card to open full journal breakdown</span>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {(selectedCategory === 'All' ? remainingStudies : filteredStudies).map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CaseStudyCard
                  caseStudy={study}
                  onSelect={onSelectCaseStudy}
                  layoutStyle="standard"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length === 0 && (
          <div className="p-16 text-center bg-[#0B1626] border border-white/[0.08] rounded-2xl space-y-4">
            <p className="text-base text-white/70">No case studies match this selected category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A358] hover:underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </section>

      {/* 04: INTEGRITY REMINDER & STRATEGIC BRIDGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
                <span>Integrity in Advisory</span>
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold">
                No Fabricated Metrics or Artificial Hype.
              </h3>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
                I do not invent exaggerated traffic numbers or unverifiable percentages. Case studies document the genuine business context, the structural work delivered, and real search discovery outcomes.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-lg group"
                data-cursor="magnetic"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
