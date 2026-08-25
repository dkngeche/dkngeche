import { CaseStudy } from '../types';
import { X, ArrowLeft, CheckCircle2, ChevronRight, Share2, MapPin, Building, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export function CaseStudyModal({ caseStudy, onClose, onNavigateToContact }: CaseStudyModalProps) {
  const [copied, setCopied] = useState(false);

  if (!caseStudy) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="bg-[#0B1626] border border-white/[0.12] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-[#070D18] flex items-center justify-between shrink-0">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50" aria-label="Breadcrumb">
            <span>My Work</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#C5A358] font-medium">{caseStudy.category}</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#E8E8E8] font-bold truncate max-w-[180px] sm:max-w-xs">{caseStudy.client}</span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Copy link to case study"
              className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors text-xs flex items-center gap-1"
            >
              <Share2 className="w-4 h-4 text-[#C5A358]" />
              <span className="hidden sm:inline font-mono">{copied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              id="close-case-study-btn"
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              aria-label="Close case study details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 bg-[#0B1626]">
          {/* Title and Client Overview */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/30 rounded-md font-semibold">
                {caseStudy.category}
              </span>
              {caseStudy.isMostRecent && (
                <span className="text-xs font-mono tracking-wider uppercase px-3 py-1 bg-[#C5A358] text-black rounded-md font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                  Most Recent Client
                </span>
              )}
              <span className="text-xs text-white/60 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#C5A358]" />
                {caseStudy.clientType}
              </span>
              {caseStudy.location && (
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A358]" />
                  {caseStudy.location}
                </span>
              )}
            </div>

            <h2 id="case-study-title" className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#E8E8E8] font-bold leading-tight">
              {caseStudy.client}: {caseStudy.summary}
            </h2>

            <div className="flex flex-wrap gap-2 pt-1">
              {caseStudy.services.map((svc, i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-[#070D18] border border-white/[0.08] text-white/75 rounded-md font-medium">
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {/* Section 1: The Challenge */}
          <section className="bg-[#070D18] border border-white/[0.08] rounded-xl p-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              The Challenge (What Problem Existed)
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </section>

          {/* Section 2: The Opportunity */}
          <section className="bg-[#070D18] border border-white/[0.08] rounded-xl p-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              The Opportunity (What Could Be Improved)
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {caseStudy.opportunity}
            </p>
          </section>

          {/* Section 3: The Strategy */}
          <section className="bg-[#070D18] border border-white/[0.08] rounded-xl p-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A358]"></span>
              The Strategy (How Dickson Approached the Problem)
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {caseStudy.strategy}
            </p>
          </section>

          {/* Section 4: The Work */}
          <section className="bg-[#070D18] border border-white/[0.08] rounded-xl p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              The Work (Specific Activities Undertaken)
            </div>
            <ul className="space-y-3">
              {caseStudy.work.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: The Result */}
          <section className="bg-[#070D18] border border-[#C5A358]/40 rounded-xl p-6 sm:p-7 space-y-4 shadow-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A358]" />
              The Result (Measurable Outcomes)
            </div>
            <p className="text-base text-white font-medium leading-relaxed">
              {caseStudy.result.summary}
            </p>

            {caseStudy.result.metrics && caseStudy.result.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {caseStudy.result.metrics.map((metric, i) => (
                  <div key={i} className="bg-[#162234] border border-white/[0.08] rounded-lg p-3.5 text-left">
                    <div className="text-lg font-bold text-white">{metric.value}</div>
                    <div className="text-xs font-semibold text-[#C5A358] mt-0.5">{metric.label}</div>
                    {metric.note && <div className="text-[11px] text-white/60 mt-1">{metric.note}</div>}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section 6: The Takeaway */}
          <section className="bg-[#050911] border border-white/[0.08] text-white rounded-xl p-6 sm:p-7 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              The Strategic Takeaway
            </div>
            <p className="font-editorial text-lg sm:text-xl text-[#E8E8E8] italic leading-relaxed">
              “{caseStudy.takeaway}”
            </p>
          </section>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#070D18] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-white/60 hover:text-white flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </button>

          <button
            id="modal-consult-cta"
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors text-center shadow-md"
          >
            Consult Dickson On Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
