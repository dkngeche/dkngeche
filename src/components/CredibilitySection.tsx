import React from 'react';
import { ArrowUpRight, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../types';

interface CredibilitySectionProps {
  onSelectClient?: (slug: string) => void;
}

interface ClientRosterItem {
  name: string;
  subtitle: string;
  industry: string;
  scope: string;
  caseStudyId?: string;
}

const CLIENT_ROSTER: ClientRosterItem[] = [
  {
    name: 'FEDWEN Kenya',
    subtitle: 'Federation of Women Entrepreneurs Kenya',
    industry: 'National Federation / Civil Society',
    scope: 'National Digital Presence & Technical SEO Architecture',
    caseStudyId: 'fedwen-kenya'
  },
  {
    name: 'MCCCU & County Fresh',
    subtitle: "Murang'a County Creameries",
    industry: 'FMCG & Agricultural Dairy Co-operative',
    scope: 'Institutional Communications & Brand Strategy',
    caseStudyId: 'mcccu-county-fresh'
  },
  {
    name: 'Infiniti Financial Solutions',
    subtitle: 'Corporate Financial Advisory & Payroll Services',
    industry: 'Fintech & Enterprise Financial Services',
    scope: 'High-Intent Search Strategy & Digital Positioning',
    caseStudyId: 'infiniti-financial'
  },
  {
    name: '24HR Aviation Hub',
    subtitle: 'Global Air Charter & Aviation Logistics',
    industry: 'Aviation Logistics & Private Charter',
    scope: 'International B2B SEO & Digital Inquiries Engine',
    caseStudyId: '24hr-aviation'
  },
  {
    name: 'Nova Pryme Dental Clinic',
    subtitle: 'Specialized Dental Healthcare Facility',
    industry: 'Healthcare & Private Specialized Medicine',
    scope: 'Local Search Dominance & Patient Acquisition UX',
    caseStudyId: 'nova-pryme'
  },
  {
    name: 'Sky Premium Drinking Water',
    subtitle: 'FMCG Bottled Beverage Producer',
    industry: 'Manufacturing & Consumer Goods',
    scope: 'B2B Distribution Discovery & Product Web Portal',
    caseStudyId: 'sky-premium'
  }
];

export function CredibilitySection({ onSelectClient }: CredibilitySectionProps) {
  return (
    <section id="credibility-roster" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]" />
            <span>Trusted By Leaders &amp; Enterprises</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
            An Understated Client Roster.
          </h2>
          <p className="text-sm sm:text-base text-white/65">
            Partnering with institutions, founders, and enterprises where search authority and clear digital positioning directly protect commercial margins.
          </p>
        </div>

        <div className="text-xs font-mono text-white/40 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C5A358]" />
          <span>Independent Strategy Advisory</span>
        </div>
      </div>

      {/* Refined Editorial Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {CLIENT_ROSTER.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[#0B1626]/70 border border-white/[0.08] hover:border-[#C5A358]/40 hover:bg-[#162234]/50 transition-all duration-300 flex flex-col justify-between group space-y-4 shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
                <span className="text-[#C5A358] font-bold">0{idx + 1}</span>
                <span className="truncate max-w-[170px]">{item.industry}</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#F5F6F8] group-hover:text-white transition-colors leading-snug">
                {item.name}
              </h3>

              <p className="text-xs text-white/60 leading-relaxed font-sans">
                {item.subtitle}
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#C5A358]/90 truncate max-w-[200px]">
                {item.scope}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#C5A358] transition-colors shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
