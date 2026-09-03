import { CaseStudy } from '../types';
import { X, CheckCircle2, ChevronRight, Share2, MapPin, Building, ArrowRight, ArrowUpRight, Sparkles, Target, Lightbulb, TrendingUp, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export function CaseStudyModal({ caseStudy, onClose, onNavigateToContact }: CaseStudyModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!caseStudy) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0B1626] border border-white/[0.15] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col relative"
      >
        {/* Sticky Top Header Bar */}
        <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-[#070D18]/95 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50" aria-label="Breadcrumb">
            <span>Selected Work</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#C5A358] font-mono font-medium">{caseStudy.category}</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#F5F6F8] font-bold truncate max-w-[180px] sm:max-w-xs">{caseStudy.client}</span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Copy share link"
              className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors text-xs flex items-center gap-1.5"
              data-cursor="magnetic"
            >
              <Share2 className="w-4 h-4 text-[#C5A358]" />
              <span className="hidden sm:inline font-mono">{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
            <button
              id="close-case-study-btn"
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              aria-label="Close case study details"
              data-cursor="magnetic"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Journal Content */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-12 bg-[#0B1626] text-[#E8E8E8]">
          
          {/* Title and Client Header */}
          <div className="space-y-4 pb-6 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/30 rounded-md font-semibold">
                {caseStudy.category}
              </span>
              {caseStudy.isMostRecent && (
                <span className="text-xs font-mono tracking-wider uppercase px-3 py-1 bg-[#C5A358] text-[#070D18] rounded-md font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#070D18] animate-pulse" />
                  Latest Client Engagement
                </span>
              )}
              <span className="text-xs text-white/60 flex items-center gap-1 font-mono">
                <Building className="w-3.5 h-3.5 text-[#C5A358]" />
                {caseStudy.clientType}
              </span>
              {caseStudy.location && (
                <span className="text-xs text-white/60 flex items-center gap-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A358]" />
                  {caseStudy.location}
                </span>
              )}
            </div>

            <h2 id="case-study-title" className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              {caseStudy.client}
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl">
              {caseStudy.summary}
            </p>
          </div>

          {/* Six-Part Narrative Sequence: Challenge -> Opportunity -> Strategy -> Work -> Result -> Insight */}
          <div className="space-y-10">
            
            {/* 1. THE CHALLENGE */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-300 font-bold">
                <Target className="w-4 h-4 text-rose-400" />
                <span>01 / The Challenge</span>
              </div>
              <div className="p-6 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
                <h4 className="font-editorial text-xl font-bold text-[#F5F6F8]">
                  What problem existed?
                </h4>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </section>

            {/* 2. THE OPPORTUNITY */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>02 / The Opportunity</span>
              </div>
              <div className="p-6 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
                <h4 className="font-editorial text-xl font-bold text-[#F5F6F8]">
                  What could be improved?
                </h4>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {caseStudy.opportunity}
                </p>
              </div>
            </section>

            {/* 3. THE STRATEGY */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
                <Sparkles className="w-4 h-4 text-[#C5A358]" />
                <span>03 / The Strategy</span>
              </div>
              <div className="p-6 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-2">
                <h4 className="font-editorial text-xl font-bold text-[#F5F6F8]">
                  What was the thinking behind the approach?
                </h4>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {caseStudy.strategy}
                </p>
              </div>
            </section>

            {/* 4. THE WORK (EXECUTION) */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-300 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>04 / The Work</span>
              </div>
              <div className="p-6 rounded-xl bg-[#070D18]/80 border border-white/[0.08] space-y-3">
                <h4 className="font-editorial text-xl font-bold text-[#F5F6F8]">
                  What was actually executed?
                </h4>
                <ul className="space-y-2.5">
                  {caseStudy.work.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5. THE RESULT */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>05 / The Result</span>
              </div>
              <div className="p-6 sm:p-8 rounded-xl bg-[#162234]/60 border border-[#C5A358]/30 space-y-4">
                <h4 className="font-editorial text-xl font-bold text-[#F5F6F8]">
                  What measurable transformation occurred?
                </h4>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  {caseStudy.result.summary}
                </p>

                {/* Metrics Grid */}
                {caseStudy.result.metrics && caseStudy.result.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                    {caseStudy.result.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-[#070D18] border border-white/[0.08] text-center">
                        <div className="text-base font-bold text-white font-mono">{metric.value}</div>
                        <div className="text-xs font-mono text-[#C5A358] mt-0.5">{metric.label}</div>
                        {metric.note && <div className="text-[10px] text-white/50 mt-0.5">{metric.note}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* 6. THE STRATEGIC INSIGHT */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
                <Sparkles className="w-4 h-4 text-[#C5A358]" />
                <span>06 / The Core Insight</span>
              </div>
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#070D18] to-[#162234] border border-[#C5A358]/40 space-y-2">
                <div className="text-xs font-mono text-[#C5A358] uppercase tracking-wider">
                  Key Strategic Lesson:
                </div>
                <blockquote className="font-editorial text-lg sm:text-xl text-[#F5F6F8] font-normal italic leading-relaxed">
                  "{caseStudy.takeaway}"
                </blockquote>
              </div>
            </section>

          </div>

          {/* Consultation Bridge CTA */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#070D18] p-6 sm:p-8 rounded-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-editorial text-xl text-[#F5F6F8] font-bold">
                Facing a similar digital or search challenge?
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Let's schedule a confidential discovery session to evaluate your business scope.
              </div>
            </div>
            <button
              onClick={onNavigateToContact}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all whitespace-nowrap shadow-lg flex items-center gap-2 group"
              data-cursor="magnetic"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
