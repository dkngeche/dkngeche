import React from 'react';
import { CaseStudy } from '../types';
import { ArrowUpRight, Building, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  key?: React.Key;
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
  layoutStyle?: 'standard' | 'featured' | 'compact';
}

export function CaseStudyCard({ caseStudy, onSelect, layoutStyle = 'standard' }: CaseStudyCardProps) {
  const isFeatured = layoutStyle === 'featured';

  return (
    <article
      id={`case-study-card-${caseStudy.id}`}
      onClick={() => onSelect(caseStudy)}
      data-cursor="project"
      data-cursor-text="VIEW CASE →"
      className={`group cursor-pointer rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
        isFeatured
          ? 'bg-[#0B1626] border-white/15 p-8 sm:p-10 hover:border-[#C5A358]/60 hover:bg-[#162234]/70 shadow-2xl'
          : 'bg-[#0B1626]/90 border-white/[0.08] p-6 sm:p-8 hover:border-[#C5A358]/50 hover:bg-[#162234]/60 shadow-lg'
      }`}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A358]/5 blur-3xl rounded-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

      <div className="space-y-6 relative z-10">
        
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/30 rounded-md font-semibold">
              {caseStudy.category}
            </span>
            {caseStudy.isMostRecent && (
              <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 bg-[#C5A358] text-[#070D18] rounded-md font-bold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#070D18] animate-ping" />
                Latest Engagement
              </span>
            )}
          </div>
          <span className="text-xs text-white/50 font-mono truncate max-w-[200px]">
            {caseStudy.industry}
          </span>
        </div>

        {/* Client & Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-white/45 font-mono">
            <span>Client Engagement</span>
            {caseStudy.location && <span>&bull; {caseStudy.location}</span>}
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#C5A358]">
            {caseStudy.client}
          </h3>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
            {caseStudy.summary}
          </p>
        </div>

        {/* Structured 3-Step Preview (Challenge -> Strategy -> Result) */}
        <div className="bg-[#070D18]/90 border border-white/[0.06] rounded-xl p-4 space-y-2 text-xs text-white/70 shadow-inner group-hover:border-white/15 transition-colors">
          <div className="flex items-start gap-2">
            <span className="font-mono font-bold text-rose-400 shrink-0 text-[10px]">CHALLENGE:</span>
            <span className="line-clamp-2 text-white/75">{caseStudy.challenge}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono font-bold text-[#C5A358] shrink-0 text-[10px]">STRATEGY:</span>
            <span className="line-clamp-2 text-white/75">{caseStudy.strategy}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono font-bold text-emerald-400 shrink-0 text-[10px]">RESULT:</span>
            <span className="line-clamp-2 text-white/90 font-medium">{caseStudy.result.summary}</span>
          </div>
        </div>

        {/* Verified Metric Badges if available */}
        {caseStudy.result.metrics && caseStudy.result.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {caseStudy.result.metrics.slice(0, 3).map((metric, i) => (
              <div key={i} className="bg-[#070D18] border border-white/[0.08] rounded-lg p-2.5 text-center group-hover:border-[#C5A358]/25 transition-colors">
                <div className="text-sm font-bold text-white/90 truncate">{metric.value}</div>
                <div className="text-[10px] font-mono text-white/50 truncate mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Services / Deliverables Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {caseStudy.services.slice(0, 4).map((svc, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-1 bg-[#070D18] border border-white/[0.08] text-white/70 rounded-md"
            >
              {svc}
            </span>
          ))}
          {caseStudy.services.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-1 text-white/40">
              +{caseStudy.services.length - 4} more
            </span>
          )}
        </div>

      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between relative z-10">
        <span className="text-xs font-mono text-white/40">
          Click to read deep dive
        </span>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A358] group-hover:text-[#D4B46A] transition-colors">
          <span>Explore Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}
