import { useState } from 'react';
import { PageType, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Filter, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface MyWorkPageProps {
  onNavigate: (page: PageType) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export function MyWorkPage({ onNavigate, onSelectCaseStudy }: MyWorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'SEO',
    'Digital Strategy',
    'Website Strategy',
    'Digital Positioning',
    'Content Strategy',
    'Technical SEO'
  ];

  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === selectedCategory || study.services.includes(selectedCategory));

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* PAGE HEADER */}
      <section className="pt-12 sm:pt-16 border-b border-white/[0.08] pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
            <span>Case Studies &amp; Track Record</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="font-editorial text-4xl sm:text-6xl text-[#E8E8E8] font-bold leading-tight">
              My Work
            </h1>
            <p className="font-editorial text-2xl sm:text-3xl text-[#C5A358] italic font-normal">
              Strategy, execution and measurable digital progress.
            </p>
            <p className="text-base sm:text-lg text-white/75 max-w-3xl leading-relaxed pt-2">
              Explore how I approach client challenges across search engine optimization, digital positioning, customer journey architecture, and organic discovery. Every project is rooted in commercial thinking rather than superficial vanity metrics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-white/40 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#C5A358]" /> Filter by:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`work-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all ${
                    isActive
                      ? 'bg-[#C5A358] text-black font-bold shadow-md'
                      : 'bg-[#0B1626] border border-white/[0.08] text-white/60 hover:bg-[#162234] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between text-xs text-white/40 font-mono">
            <span>Showing {filteredStudies.length} {filteredStudies.length === 1 ? 'project' : 'projects'}</span>
            <span>Framework: Challenge &rarr; Strategy &rarr; Execution &rarr; Result</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudy={study}
                onSelect={onSelectCaseStudy}
              />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="p-12 text-center bg-[#0B1626] border border-white/[0.08] rounded-xl">
              <p className="text-sm text-white/60">No case studies match this specific filter.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-3 text-xs font-semibold text-[#C5A358] hover:underline"
              >
                Reset to All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* METHODOLOGY REMINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1626]/90 border border-white/[0.08] rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
                Integrity in Reporting
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-bold">
                No Fabricated Metrics or Artificial Hype.
              </h3>
              <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                I do not invent exaggerated percentages or unverifiable claims. Case studies document the genuine strategic challenge, the specific architectural work delivered, and verified search indexation results.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-lg"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
