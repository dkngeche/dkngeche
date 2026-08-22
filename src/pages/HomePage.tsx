import { PageType, CaseStudy } from '../types';
import { SERVICE_PILLARS, PHILOSOPHY_QUESTIONS } from '../data/servicesData';
import { CASE_STUDIES } from '../data/caseStudies';
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
  Layers,
  Sparkles,
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

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* SECTION 1: HERO */}
      <section id="hero-section" className="pt-12 sm:pt-16 lg:pt-20 border-b border-white/10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {/* Positioning pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/30">
              <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
              <span>Digital Strategy &bull; SEO Architecture &bull; Value Positioning</span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8E8E8] leading-[1.08]">
              Turning Business Ideas Into Digital Growth.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 font-normal leading-relaxed max-w-3xl">
              I help businesses clarify their digital direction, build the right online presence, and become visible to the audiences that matter through digital strategy, SEO and purposeful digital execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-lg group"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('work')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#C5A358] hover:bg-[#C5A358] hover:text-black border border-[#C5A358] rounded-md transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Supporting Trust Anchors */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0" />
                <span>Strategy-led, not agency-generic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0" />
                <span>Deep search intent &amp; technical SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0" />
                <span>Nairobi &amp; Global Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TRANSFORMATION BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StrategicRoadmap />
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section id="problem-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-red-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              The Underlying Problem
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
              A Good Business Still Needs to Be Found.
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Countless businesses with outstanding products, services, and domain expertise struggle to generate meaningful online demand. They invest in digital activity, but without strategic coherence, results remain elusive.
            </p>
          </div>

          {/* 6 Problem Friction Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            <div className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#C5A358]">01 / Proposition Gap</div>
              <h3 className="font-semibold text-base text-[#E8E8E8]">Unclear Value Proposition</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Visitors land on your website and leave within seconds because the messaging is vague or overly technical.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#C5A358]">02 / Narrative Misalignment</div>
              <h3 className="font-semibold text-base text-[#E8E8E8]">Misaligned Digital Presence</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                The website looks like a static brochure that fails to convey the caliber, authority, and actual scope of the business.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#C5A358]">03 / Structural Friction</div>
              <h3 className="font-semibold text-base text-[#E8E8E8]">Unstructured Customer Journeys</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Pages are organized around internal department silos rather than how prospective clients evaluate and buy.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#C5A358]">04 / Search Disconnect</div>
              <h3 className="font-semibold text-base text-[#E8E8E8]">Content That Answers Nothing</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Articles are published for the sake of posting, but fail to target the high-intent questions decision-makers actually type into Google.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#C5A358]">05 / Missing SEO Engine</div>
              <h3 className="font-semibold text-base text-[#E8E8E8]">Poorly Executed Search Strategy</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Search engine spiders encounter crawl errors, slow page loads, and zero entity schema, leaving high-value searches to competitors.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-2.5">
              <div className="text-xs font-mono font-bold text-[#C5A358]">06 / Channel Fragmentation</div>
              <h3 className="font-semibold text-base text-[#E8E8E8]">Disjointed Digital Channels</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Social media, email, website, and ads operate in isolation without a unifying strategic purpose or clear attribution telemetry.
              </p>
            </div>
          </div>

          {/* Dickson's Role */}
          <div className="mt-10 p-6 sm:p-8 bg-[#181818] border border-[#C5A358]/30 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                Connecting The Disconnected Pieces
              </div>
              <div className="text-base sm:text-lg font-medium text-white/90">
                I bridge the gap between business objectives, digital positioning, and technical search visibility.
              </div>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors whitespace-nowrap"
            >
              <span>How I Think</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT I DO (4 STRATEGIC SERVICE PILLARS) */}
      <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                03 &bull; Strategic Capabilities
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
                Four Interconnected Pillars of Digital Growth.
              </h2>
              <p className="text-base text-white/60">
                Not a fragmented agency catalog. These four disciplines work as an integrated growth engine:
              </p>
            </div>

            {/* Process Flow Badge */}
            <div className="bg-[#121212] border border-white/10 px-4 py-2.5 rounded-lg text-xs font-mono text-white/60 flex items-center gap-2 shrink-0">
              <span className="text-[#C5A358] font-bold">PROCESS:</span>
              <span>Clarify &rarr; Position &rarr; Build &rarr; Optimise &rarr; Grow</span>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#C5A358]/60 hover:bg-white/[0.02] hover:shadow-xl transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-2xl font-bold text-[#C5A358]">{pillar.number}</span>
                    <span className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white/60">
                      {pillar.deliverableFocus}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-medium text-[#C5A358] mt-1 italic">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-white/60 mt-3 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold">
                      Core Strategic Deliverables:
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {pillar.deliverables.slice(0, 5).map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A358] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold uppercase tracking-widest text-[#C5A358] hover:text-[#D4B46A] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-colors"
            >
              <span>Explore All Capabilities &amp; The 5-Phase Client Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW I THINK (STRATEGY BEFORE ACTIVITY) */}
      <section id="philosophy-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 text-white rounded-2xl p-8 sm:p-12 lg:p-16 space-y-12 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              04 &bull; Consulting Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
              Strategy Before Activity.
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Digital marketing should never start with “What should we post on LinkedIn this week?” or “Can we run some Google ads?” It begins with rigorous foundational clarity.
            </p>
          </div>

          {/* 6 Questions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHILOSOPHY_QUESTIONS.map((item) => (
              <div
                key={item.number}
                className="bg-[#181818] border border-white/10 p-6 rounded-xl space-y-3"
              >
                <div className="font-mono text-sm font-bold text-[#C5A358]">
                  {item.number}
                </div>
                <h3 className="font-editorial text-xl text-[#E8E8E8] font-semibold">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>
              When these six questions are answered thoroughly, every dollar and hour spent on SEO, design, and content creates compounding returns.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="text-[#C5A358] hover:underline flex items-center gap-1 font-semibold whitespace-nowrap"
            >
              <span>Read Dickson's Full Approach</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: MY WORK (PREVIEW OF CASE STUDIES) */}
      <section id="work-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                05 &bull; Selected Case Studies
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
                Work That Has Moved the Needle.
              </h2>
              <p className="text-base text-white/60">
                Every project is structured around: Challenge &rarr; Strategy &rarr; Execution &rarr; Result.
              </p>
            </div>

            <button
              id="view-all-work-btn"
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-colors shrink-0"
            >
              <span>View All Projects</span>
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
        </div>
      </section>

      {/* SECTION 6: RESULTS / PROOF (SELECTED EXPERIENCE & EVIDENCE) */}
      <section id="proof-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              06 &bull; Verified Impact &amp; Architecture
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#E8E8E8] font-semibold">
              Selected Experience &amp; Measurable Outlines.
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              Real strategic outcomes across organic search indexation, technical performance, and commercial proposition positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#181818] border border-white/10 rounded-xl p-6 space-y-2">
              <div className="text-xs font-mono uppercase text-[#C5A358] font-semibold">
                Organic Search
              </div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-bold">
                100% Crawled
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Full knowledge hub indexation &amp; search snippet validation for institutional platforms like FEDWEN Kenya.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-xl p-6 space-y-2">
              <div className="text-xs font-mono uppercase text-[#C5A358] font-semibold">
                Core Web Vitals
              </div>
              <div className="font-editorial text-2xl sm:text-3xl text-emerald-400 font-bold">
                All Green
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                High-performance mobile delivery, sub-second LCP, and zero CLS layout shifts for optimal crawl ranking.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-xl p-6 space-y-2">
              <div className="text-xs font-mono uppercase text-[#C5A358] font-semibold">
                B2B Positioning
              </div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-bold">
                Clear Inbound
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Converting ambiguous service catalogs into high-converting digital value propositions for advisory firms.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-xl p-6 space-y-2">
              <div className="text-xs font-mono uppercase text-[#C5A358] font-semibold">
                Search Intent
              </div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-bold">
                Topical Silos
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Architecting structured entity schema and internal link graphs that capture high-intent buyer inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT DICKSON (SUMMARY) */}
      <section id="about-summary-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Editorial Profile Card */}
            <div className="lg:col-span-5 bg-[#181818] border border-white/10 rounded-2xl p-8 text-center space-y-5">
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#1F1F1F] border-2 border-[#C5A358]/40 flex items-center justify-center overflow-hidden shadow-inner">
                <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#C5A358] tracking-tighter">
                  DN
                </div>
              </div>
              <div>
                <h3 className="font-editorial text-2xl text-[#E8E8E8] font-bold">
                  Dickson Ngeche
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C5A358] mt-1 font-semibold">
                  Digital Strategy &amp; SEO Consultant
                </p>
                <p className="text-xs text-white/50 mt-1">
                  Nairobi, Kenya &bull; Global Remote
                </p>
              </div>

              {/* Intersection diagram */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-white/70">
                <div className="p-2 bg-[#121212] rounded border border-white/10">Business</div>
                <div className="p-2 bg-[#121212] rounded border border-white/10">Digital Strategy</div>
                <div className="p-2 bg-[#121212] rounded border border-white/10">Technical SEO</div>
                <div className="p-2 bg-[#121212] rounded border border-white/10">Technology</div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                07 &bull; Meet Dickson Ngeche
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#E8E8E8] font-semibold leading-tight">
                Operating at the Intersection of Business, Marketing &amp; Technology.
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                My primary strength is understanding the commercial model behind the digital activity. I don't treat SEO as an isolated checklist of keywords or web design as mere visual decoration.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                I partner with founders, executives, and organizations to translate complex business ideas into clear, authoritative digital propositions that search engines index and prospective clients trust.
              </p>

              <div className="pt-4">
                <button
                  id="home-about-cta"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors"
                >
                  <span>More About My Background &amp; Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border-2 border-[#C5A358]/40 rounded-2xl p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              08 &bull; Initiate A Collaboration
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
              Have a good business idea but need the digital direction to make it visible?
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Let's turn the idea into a digital strategy that gives it clarity, direction and visibility.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-cta-talk-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              id="final-cta-services-btn"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#C5A358] hover:bg-[#C5A358] hover:text-black border border-[#C5A358] rounded-md transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
