import React from 'react';
import { PageType, CaseStudy } from '../types';
import { SERVICE_PILLARS, PHILOSOPHY_QUESTIONS } from '../data/servicesData';
import { CASE_STUDIES } from '../data/caseStudies';
import { INSIGHTS } from '../data/insightsData';
import { HeroSection } from '../components/HeroSection';
import { StrategicRoadmap } from '../components/StrategicRoadmap';
import { CaseStudyCard } from '../components/CaseStudyCard';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Search,
  Compass,
  Globe,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Clock,
  Briefcase
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export function HomePage({ onNavigate, onSelectCaseStudy }: HomePageProps) {
  const featuredCaseStudies = CASE_STUDIES.filter(c => c.featured);
  const featuredInsights = INSIGHTS.slice(0, 3);

  const pillarIcons = {
    'digital-strategy': Compass,
    'web-strategy': Globe,
    'search-strategy': Search,
    'digital-brand': ShieldCheck
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 01: HERO SECTION */}
      <HeroSection onNavigate={onNavigate} />

      {/* 02: INTERACTIVE TRANSFORMATION BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StrategicRoadmap />
      </section>

      {/* 03: THE UNDERLYING PROBLEM */}
      <section id="problem-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 lg:p-16 space-y-10 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              The Commercial Dilemma
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              A Good Business Still Needs to Be Found and Understood.
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Countless businesses with outstanding offerings, capabilities, and subject-matter expertise struggle to generate reliable digital demand. They invest in tactical marketing activity, but without an integrated digital strategy, those investments fail to compound.
            </p>
          </div>

          {/* 6 Problem Friction Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="bg-[#070D18]/80 border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono font-bold text-[#C5A358]">01 / Proposition Gap</div>
              <h3 className="font-semibold text-base text-[#F5F6F8]">Unclear Value Proposition</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Decision-makers land on your website and leave within seconds because messaging is vague, buzzword-heavy, or fails to articulate direct business value.
              </p>
            </div>

            <div className="bg-[#070D18]/80 border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono font-bold text-[#C5A358]">02 / Narrative Misalignment</div>
              <h3 className="font-semibold text-base text-[#F5F6F8]">Passive Brochure Web Design</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                The website acts as a static brochure rather than an operational commercial tool that qualifies prospects and addresses buyer hesitation.
              </p>
            </div>

            <div className="bg-[#070D18]/80 border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono font-bold text-[#C5A358]">03 / Structural Friction</div>
              <h3 className="font-semibold text-base text-[#F5F6F8]">Unstructured User Pathways</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Navigation is organized around internal organizational charts rather than how prospective buyers evaluate problems, compare solutions, and make decisions.
              </p>
            </div>

            <div className="bg-[#070D18]/80 border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono font-bold text-[#C5A358]">04 / Search Disconnect</div>
              <h3 className="font-semibold text-base text-[#F5F6F8]">Content Without Search Intent</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Content is produced for the sake of publishing, but completely fails to answer the high-intent search queries that high-value buyers type into Google.
              </p>
            </div>

            <div className="bg-[#070D18]/80 border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono font-bold text-[#C5A358]">05 / Technical SEO Barrier</div>
              <h3 className="font-semibold text-base text-[#F5F6F8]">Missing Crawl &amp; Entity Architecture</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Search engine spiders encounter crawl errors, slow mobile speeds, and lack structured schema markup, leaving high-value searches to competitors.
              </p>
            </div>

            <div className="bg-[#070D18]/80 border border-white/[0.08] p-6 sm:p-7 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono font-bold text-[#C5A358]">06 / Channel Fragmentation</div>
              <h3 className="font-semibold text-base text-[#F5F6F8]">Disjointed Digital Touchpoints</h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Social media, website, email, and organic presence operate in silos without a cohesive brand tone or clear attribution telemetry.
              </p>
            </div>
          </div>

          {/* The Solution Bridge Banner */}
          <div className="mt-8 p-6 sm:p-8 bg-[#070D18] border border-[#C5A358]/30 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-inner">
            <div className="space-y-1.5">
              <div className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                The Integrated Remedy
              </div>
              <div className="text-base sm:text-lg font-medium text-white/90">
                I bridge commercial goals, digital experience design, and organic search architecture into a single, compounding growth engine.
              </div>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors whitespace-nowrap shadow-md"
            >
              <span>Consultant Approach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 04: THE FOUR PILLARS OF EXPERTISE */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Core Areas of Expertise
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Four Major Pillars of Digital Growth.
            </h2>
            <p className="text-base text-white/65">
              Each discipline works synergistically to elevate your business from scattered tactics to market leadership.
            </p>
          </div>

          <div className="bg-[#0B1626] border border-white/[0.08] px-4 py-2.5 rounded-lg text-xs font-mono text-white/70 flex items-center gap-2 shrink-0">
            <span className="text-[#C5A358] font-bold">DISCIPLINES:</span>
            <span>Strategy &bull; Web &bull; Search &bull; Brand</span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Compass;
            return (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between shadow-lg group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#162234] border border-[#C5A358]/30 flex items-center justify-center text-[#C5A358]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xl font-bold text-[#C5A358]">{pillar.number}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#C5A358]/10 text-[#C5A358] border border-[#C5A358]/20">
                      {pillar.deliverableFocus}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-medium text-[#C5A358] mt-1.5 italic">
                      "{pillar.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold">
                      Featured Services &amp; Deliverables:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {pillar.services.slice(0, 4).map((srv, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A358] shrink-0" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold uppercase tracking-widest text-[#C5A358] hover:text-[#D4B46A] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View All Services in Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-bold text-white/90 hover:text-white bg-[#0B1626] hover:bg-[#162234] border border-white/15 rounded-md transition-colors shadow-lg"
          >
            <span>Explore Full 4-Pillar Breakdown &amp; Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 05: SELECTED CASE STUDIES & PROVEN WORK */}
      <section id="work-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Case Studies &amp; Client Engagements
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Work That Has Moved the Needle.
            </h2>
            <p className="text-base text-white/65">
              Real-world strategic solutions delivered across civil society federations, FMCG dairy cooperatives, fintech enterprises, healthcare clinics, and aviation logistics.
            </p>
          </div>

          <button
            id="view-all-work-btn"
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#0B1626] hover:bg-[#162234] border border-white/15 rounded-md transition-colors shrink-0 shadow-sm"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

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

      {/* 06: THINKING ABOUT DIGITAL (INSIGHTS & PERSPECTIVES) */}
      <section id="insights-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A358]" />
              <span>Thinking About Digital</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Perspectives, Frameworks &amp; Strategic Notes.
            </h2>
            <p className="text-base text-white/65">
              Consultative thinking on digital strategy, search architecture, AI, website design, and building compounding online assets.
            </p>
          </div>

          <button
            onClick={() => onNavigate('insights')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#0B1626] hover:bg-[#162234] border border-white/15 rounded-md transition-colors shrink-0 shadow-sm"
          >
            <span>Read All Essays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredInsights.map((insight) => (
            <div
              key={insight.id}
              onClick={() => onNavigate('insights')}
              className="group cursor-pointer glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#162234] border border-white/[0.08] text-[#C5A358] font-semibold">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/50">
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

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">
                  {insight.date}
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A358] group-hover:translate-x-1 transition-transform">
                  <span>Read Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07: EDITORIAL ABOUT SECTION */}
      <section id="about-summary-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Profile Avatar Card */}
            <div className="lg:col-span-5 bg-[#070D18] border border-white/[0.08] rounded-2xl p-8 text-center space-y-5 shadow-lg">
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#162234] border border-[#C5A358]/40 flex items-center justify-center overflow-hidden shadow-inner">
                <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#C5A358] tracking-tighter">
                  DK
                </div>
              </div>
              <div>
                <h3 className="font-editorial text-2xl text-[#F5F6F8] font-bold">
                  Dickson Ngeche
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C5A358] mt-1 font-semibold">
                  Digital Strategy &amp; Growth Consultant
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Nairobi, Kenya &bull; Global Remote Advisory
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-[11px] font-mono text-white/70">
                <div className="p-2 bg-[#0B1626] rounded border border-white/[0.08]">Business Strategy</div>
                <div className="p-2 bg-[#0B1626] rounded border border-white/[0.08]">Web Architecture</div>
                <div className="p-2 bg-[#0B1626] rounded border border-white/[0.08]">Technical SEO</div>
                <div className="p-2 bg-[#0B1626] rounded border border-white/[0.08]">Brand Positioning</div>
              </div>
            </div>

            {/* Narrative & Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                About the Consultant
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
                Digital is not just about being online. It's about being intentional.
              </h2>
              <p className="text-base text-white/75 leading-relaxed">
                My work operates across strategy, technology, marketing, and digital experience. By connecting business objectives, web structure, SEO, communications, and product thinking, I evaluate your digital presence holistically rather than treating individual problems in isolation.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                I partner with founders, executives, and organizations to build enduring digital foundations that earn market trust, capture search intent, and compound commercial outcomes.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="home-about-cta"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-md"
                >
                  <span>More About My Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white bg-[#162234] hover:bg-[#273244] border border-white/10 rounded-md transition-colors"
                >
                  <span>Schedule Discovery</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08: FINAL CALL TO ACTION */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1626] border-2 border-[#C5A358]/40 rounded-2xl p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-glow pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Initiate Collaboration
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Ready to turn your digital presence into a meaningful growth asset?
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Let's schedule a confidential discovery session to evaluate your current digital foundation, search visibility, and commercial growth roadmap.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              id="final-cta-talk-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              id="final-cta-services-btn"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#F5F6F8] hover:text-[#C5A358] bg-[#070D18] hover:bg-[#162234] border border-white/15 rounded-md transition-colors"
            >
              <span>Explore All 4 Pillars</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
