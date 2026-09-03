import React from 'react';
import { PageType, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/caseStudies';
import { INSIGHTS } from '../data/insightsData';
import { HeroSection } from '../components/HeroSection';
import { ProgressionPipeline } from '../components/ProgressionPipeline';
import { InteractiveServicesSection } from '../components/InteractiveServicesSection';
import { StrategicSystemSection } from '../components/StrategicSystemSection';
import { CredibilitySection } from '../components/CredibilitySection';
import { CaseStudyCard } from '../components/CaseStudyCard';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Compass,
  Mail,
  Calendar,
  ShieldCheck,
  Building,
  Target
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export function HomePage({ onNavigate, onSelectCaseStudy }: HomePageProps) {
  const featuredCaseStudies = CASE_STUDIES.filter(c => c.featured);
  const featuredInsights = INSIGHTS.slice(0, 3);

  return (
    <div className="space-y-28 sm:space-y-36 pb-24">
      
      {/* 01: AWWWARDS-CALIBER EDITORIAL HERO */}
      <HeroSection onNavigate={onNavigate} />

      {/* 02: THE INTRODUCTION & PROGRESSION PIPELINE */}
      {/* "A good business deserves a digital presence that makes sense." */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressionPipeline />
      </section>

      {/* 03: INTERACTIVE WHAT I DO CAPABILITIES */}
      {/* 4 Major Capabilities with Dynamic Interlocking Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveServicesSection onNavigate={onNavigate} />
      </section>

      {/* 04: THE STRATEGIC SYSTEM */}
      {/* Clarify → Position → Build → Optimise → Grow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StrategicSystemSection onNavigate={onNavigate} />
      </section>

      {/* 05: SELECTED WORK (EDITORIAL JOURNAL STYLE) */}
      <section id="selected-work-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]" />
              <span>Demonstrated Commercial Outcomes</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Selected Work.
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
              Different businesses. Different problems. One approach: understand the problem before solving it.
            </p>
          </div>

          <button
            id="view-all-work-home-btn"
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#F5F6F8] hover:text-white bg-[#0B1626] hover:bg-[#162234] border border-white/15 rounded-md transition-all shrink-0 shadow-sm"
            data-cursor="magnetic"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A358]" />
          </button>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCaseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              caseStudy={study}
              onSelect={onSelectCaseStudy}
            />
          ))}
        </div>
      </section>

      {/* 06: CREDIBILITY (UNDERSTATED TYPOGRAPHIC CLIENT ROSTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CredibilitySection />
      </section>

      {/* 07: THINKING ABOUT DIGITAL (INSIGHTS & ESSAYS PREVIEW) */}
      <section id="insights-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A358]" />
              <span>Perspectives &amp; Essays</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
              Thinking About Digital.
            </h2>
            <p className="text-sm sm:text-base text-white/65 font-sans">
              Essays on digital strategy, search intent, web architecture, and compounding business presence.
            </p>
          </div>

          <button
            onClick={() => onNavigate('insights')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#0B1626] hover:bg-[#162234] border border-white/15 rounded-md transition-colors shrink-0 shadow-sm"
            data-cursor="magnetic"
          >
            <span>Read All Insights</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A358]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredInsights.map((insight) => (
            <div
              key={insight.id}
              onClick={() => onNavigate('insights')}
              className="group cursor-pointer glass-panel rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-[#C5A358]/50 hover:bg-[#162234]/60 transition-all duration-300"
              data-cursor="project"
              data-cursor-text="READ ESSAY"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-[#162234] border border-white/[0.08] text-[#C5A358] font-medium text-[11px]">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/50 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-xl text-[#F5F6F8] font-bold group-hover:text-[#C5A358] transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                  {insight.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-white/40">{insight.date}</span>
                <span className="text-[#C5A358] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  <span>Read Note</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08: ABOUT SECTION (EDITORIAL FOCUS) */}
      {/* "I don't start with the algorithm. I start with the business." */}
      <section id="about-focus-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 bg-[#070D18] border border-white/[0.08] rounded-2xl p-8 text-center space-y-5 shadow-lg">
              <div className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#162234] to-[#070D18] border border-[#C5A358]/40 flex items-center justify-center overflow-hidden shadow-inner">
                <span className="font-signature text-4xl sm:text-5xl text-[#C5A358] select-none">
                  Dngeche
                </span>
              </div>
              
              <div>
                <h3 className="font-editorial text-2xl text-[#F5F6F8] font-bold">
                  Dickson Ngeche
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C5A358] mt-1 font-semibold">
                  Digital Strategy &amp; SEO Consultant
                </p>
                <p className="text-xs text-white/50 mt-1 font-mono">
                  Nairobi &bull; Global Remote
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.08] text-xs font-mono text-white/60 italic">
                "Strategy is about understanding before doing."
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Consultant Philosophy</span>
              </span>
              
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
                "I don't start with the algorithm. I start with the business."
              </h2>
              
              <p className="text-base text-white/75 leading-relaxed font-sans">
                Too many digital projects fail because they jump straight to execution—redesigning a website, paying for ads, or chasing vanity metrics—without understanding how the business actually makes money and how customers evaluate choices.
              </p>
              
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                My work operates across business strategy, web experience, technical SEO, and positioning. I look at your digital presence as a unified system, building foundations that earn customer trust and compound search visibility over time.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  id="home-about-link-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-md"
                  data-cursor="magnetic"
                >
                  <span>Read Full Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#162234] hover:bg-[#273244] border border-white/10 rounded-md transition-colors"
                  data-cursor="magnetic"
                >
                  <span>Start a Conversation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 09: FINAL CALL TO ACTION */}
      {/* "Your business already has a story. Let's make sure the right people can find it." */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1626] border-2 border-[#C5A358]/40 rounded-2xl p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-glow pointer-events-none opacity-50" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Initiate Strategic Engagement
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Your business already has a story. Let's make sure the right people can find it.
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-sans">
              Schedule a confidential discovery conversation to evaluate your current digital presence, search positioning, and commercial growth opportunities.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              id="final-cta-talk-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group"
              data-cursor="magnetic"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              id="final-cta-services-btn"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#F5F6F8] hover:text-[#C5A358] bg-[#070D18] hover:bg-[#162234] border border-white/15 rounded-md transition-colors"
              data-cursor="magnetic"
            >
              <span>Explore Capability Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/50 relative z-10">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C5A358]" />
              <a href="mailto:dkngeche@gmail.com" className="hover:text-[#C5A358] transition-colors underline decoration-dotted">
                dkngeche@gmail.com
              </a>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A358]" />
              <span>Discovery Sessions: 30–45 min</span>
            </span>
            <span>&bull;</span>
            <span className="text-[#C5A358]">Nairobi &amp; Global Remote</span>
          </div>
        </div>
      </section>

    </div>
  );
}
