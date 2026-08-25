import React from 'react';
import { CaseStudy } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  key?: React.Key;
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
}

export function CaseStudyCard({ caseStudy, onSelect }: CaseStudyCardProps) {
  return (
    <article
      id={`case-study-card-${caseStudy.id}`}
      className="bg-[#0B1626]/90 border border-white/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A358]/50 hover:bg-[#162234]/60 hover:shadow-2xl transition-all group backdrop-blur-sm"
    >
      <div className="space-y-5">
        {/* Header metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/30 rounded-md font-medium">
              {caseStudy.category}
            </span>
            {caseStudy.isMostRecent && (
              <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 bg-[#C5A358] text-black rounded-md font-bold flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping"></span>
                Most Recent Client
              </span>
            )}
          </div>
          <span className="text-xs text-white/50">{caseStudy.industry}</span>
        </div>

        {/* Client & Summary */}
        <div>
          <h3 className="font-editorial text-xl sm:text-2xl text-[#E8E8E8] font-bold group-hover:text-[#C5A358] transition-colors">
            {caseStudy.client}
          </h3>
          <p className="text-sm text-white/65 mt-2 leading-relaxed line-clamp-3">
            {caseStudy.summary}
          </p>
        </div>

        {/* Structured 4-Step Breakdown Preview */}
        <div className="bg-[#070D18] border border-white/[0.08] rounded-xl p-4 space-y-2.5 text-xs text-white/70 shadow-inner">
          <div className="flex items-start gap-2">
            <span className="font-mono font-bold text-red-400 shrink-0 text-[11px]">CHALLENGE:</span>
            <span className="line-clamp-2">{caseStudy.challenge}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono font-bold text-[#C5A358] shrink-0 text-[11px]">STRATEGY:</span>
            <span className="line-clamp-2">{caseStudy.strategy}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono font-bold text-emerald-400 shrink-0 text-[11px]">RESULT:</span>
            <span className="line-clamp-2 text-white/90 font-medium">{caseStudy.result.summary}</span>
          </div>
        </div>

        {/* Metric Badges if available */}
        {caseStudy.result.metrics && caseStudy.result.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {caseStudy.result.metrics.slice(0, 3).map((metric, i) => (
              <div key={i} className="bg-[#070D18] border border-white/[0.08] rounded-lg p-2 text-center">
                <div className="text-sm font-bold text-white/90">{metric.value}</div>
                <div className="text-[10px] text-white/50 truncate">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Services Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {caseStudy.services.slice(0, 4).map((svc, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-0.5 bg-[#070D18] border border-white/[0.08] text-white/70 rounded-md font-medium"
            >
              {svc}
            </span>
          ))}
          {caseStudy.services.length > 4 && (
            <span className="text-[11px] px-1.5 py-0.5 text-white/40">
              +{caseStudy.services.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-xs font-mono text-white/40">
          Challenge &rarr; Strategy &rarr; Result
        </span>
        <button
          id={`view-study-btn-${caseStudy.id}`}
          onClick={() => onSelect(caseStudy)}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A358] hover:text-[#D4B46A] group-hover:underline transition-all"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
