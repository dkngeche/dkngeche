import { PageType } from '../types';
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Shield,
  Layers,
  Search,
  Compass,
  Zap,
  Target,
  Clock,
  Briefcase
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const alaCarteServices = [
    {
      title: 'SEO Audit',
      price: 'From KES 35,000',
      description: 'Comprehensive crawl, indexing, and on-page diagnostic uncovering search visibility bottlenecks and quick-win fixes.',
      deliverable: 'Technical audit + prioritised issue matrix'
    },
    {
      title: 'Technical SEO',
      price: 'From KES 40,000',
      description: 'Deep site architecture remediation, core web vitals, structured schema markup, and canonical indexing repairs.',
      deliverable: 'Engineered code & indexation fixes'
    },
    {
      title: 'Keyword & Search Strategy',
      price: 'From KES 30,000',
      description: 'High-intent commercial search mapping, search volume analysis, competitor gap intelligence, and topical cluster plans.',
      deliverable: 'Target keyword matrix & content plan'
    },
    {
      title: 'Website Strategy',
      price: 'From KES 50,000',
      description: 'Information architecture, user flow mapping, conversion touchpoints, and wireframe narratives designed to convert traffic.',
      deliverable: 'Website blueprint & UX hierarchy'
    },
    {
      title: 'Content Strategy',
      price: 'From KES 40,000',
      description: 'Topical authority modeling, editorial frameworks, and commercial copywriting guidelines built for buyer education.',
      deliverable: 'Editorial pillars & copy blueprints'
    },
    {
      title: 'Digital Positioning',
      price: 'From KES 50,000',
      description: 'Differentiation narrative, value proposition engineering, and target audience messaging that sets you apart from competitors.',
      deliverable: 'Positioning playbook & value prop deck'
    },
    {
      title: 'SEO Retainer',
      price: 'From KES 50,000 / month',
      description: 'Dedicated ongoing search engine optimisation, ranking defense, technical monitoring, and monthly keyword expansion.',
      deliverable: 'Monthly implementation & ranking reports'
    },
    {
      title: 'Strategic Advisory',
      price: 'From KES 75,000 / month',
      description: 'Executive-level digital consultation, senior stakeholder guidance, vendor vetting, and digital growth roadmap governance.',
      deliverable: 'Bi-weekly advisory calls & ongoing reviews'
    }
  ];

  const engagementPhases = [
    {
      num: '01',
      title: 'DISCOVER',
      tagline: 'Understand your business, audience and objectives.',
      desc: 'We examine your business model, current commercial priorities, target buyers, and growth targets to establish baseline reality.'
    },
    {
      num: '02',
      title: 'DIAGNOSE',
      tagline: 'Identify what’s working, what’s not and where the opportunity lies.',
      desc: 'Exhaustive audit across search visibility, website conversion, user experience, and competitor positioning to pinpoint exact friction.'
    },
    {
      num: '03',
      title: 'STRATEGISE',
      tagline: 'Develop the digital direction, positioning and roadmap.',
      desc: 'Formulate your differentiated positioning, technical search blueprint, and a sequenced 90-day execution roadmap with clear milestones.'
    },
    {
      num: '04',
      title: 'EXECUTE',
      tagline: 'Put the strategy into action through SEO, content and digital optimisation.',
      desc: 'Implement structural website changes, technical SEO fixes, high-intent content pillars, and conversion mechanisms.'
    },
    {
      num: '05',
      title: 'GROW',
      tagline: 'Measure, learn and continuously improve.',
      desc: 'Continuous performance tracking, search ranking defense, topical expansion, and refinement based on real commercial response.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* TOP / HERO */}
      <section className="pt-12 sm:pt-16 border-b border-white/10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/30">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
            <span>Transparent Consultancy Pricing</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#E8E8E8] font-bold leading-[1.08] tracking-tight max-w-4xl">
              Digital clarity.<br />
              Strategic direction.<br />
              <span className="text-[#C5A358] italic">Measurable growth.</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
            Every business is at a different stage. Choose the level of support that matches where you are today — or let's build a custom engagement around your objectives.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-pricing-cta-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-bold text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-lg group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="#packages-section"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-colors"
            >
              <span>View The 3 Engagement Models</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — THE THREE WAYS TO WORK TOGETHER */}
      <section id="packages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Engagement Structures
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#E8E8E8] font-semibold leading-tight">
            The Three Ways to Work Together
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Where is your business right now, and what level of support do you need?
          </p>
        </div>

        {/* 3 Large Cards with Middle Emphasized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* 01 — DIGITAL CLARITY */}
          <div
            id="pricing-card-clarity"
            className="flex flex-col justify-between bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-9 hover:border-white/20 transition-all shadow-xl"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A358] tracking-widest font-bold uppercase">
                    01 — DIAGNOSTIC SPRINT
                  </span>
                  <span className="text-[11px] font-mono text-white/40 px-2 py-0.5 bg-white/5 rounded border border-white/10">
                    2–3 Weeks
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#E8E8E8]">
                  Digital Clarity
                </h3>
                <div className="pt-2">
                  <div className="text-xs text-white/40 font-mono uppercase tracking-wider">Investment</div>
                  <div className="text-3xl font-bold font-editorial text-[#E8E8E8] text-[#C5A358]">
                    From KES 35,000
                  </div>
                </div>
                <p className="text-sm text-white/80 font-medium pt-1">
                  Find out what’s holding your digital presence back.
                </p>
              </div>

              {/* Scope Description */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  For businesses that already have a website and digital presence but aren’t sure what’s working, what’s broken, or what to prioritise.
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
                  What’s Included:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Digital presence audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>SEO &amp; crawlability audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Website &amp; UX structure review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Competitor presence analysis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Search visibility assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Key growth opportunities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Prioritised recommendations matrix</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Strategic action report &amp; debrief</span>
                  </li>
                </ul>
              </div>

              {/* Best For Callout */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/70">
                <span className="font-semibold text-white">Best for:</span> Businesses that need clarity and verifiable diagnostic data before investing further.
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                id="select-clarity-btn"
                onClick={() => onNavigate('contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all group"
              >
                <span>Start with Clarity</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* 02 — DIGITAL STRATEGY (FLAGSHIP OFFER - EMPHASIZED) */}
          <div
            id="pricing-card-strategy"
            className="flex flex-col justify-between bg-gradient-to-b from-[#181818] to-[#121212] border-2 border-[#C5A358] rounded-2xl p-8 sm:p-9 shadow-2xl relative lg:-translate-y-2"
          >
            {/* Flagship Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C5A358] text-black font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Engagement</span>
            </div>

            <div className="space-y-6 pt-2">
              {/* Header */}
              <div className="space-y-3 pb-6 border-b border-[#C5A358]/30">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A358] tracking-widest font-bold uppercase">
                    02 — COMPLETE BLUEPRINT
                  </span>
                  <span className="text-[11px] font-mono text-[#C5A358] px-2.5 py-0.5 bg-[#C5A358]/10 rounded border border-[#C5A358]/30 font-semibold">
                    4–6 Weeks
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Digital Strategy
                </h3>
                <div className="pt-2">
                  <div className="text-xs text-white/40 font-mono uppercase tracking-wider">Investment</div>
                  <div className="text-3xl font-bold font-editorial text-[#C5A358]">
                    KES 100,000 – 175,000
                  </div>
                  <div className="text-[11px] text-white/40 font-mono">From KES 100,000 based on scope depth</div>
                </div>
                <p className="text-sm text-white/90 font-medium pt-1">
                  Turn the business vision into an executable digital strategy.
                </p>
              </div>

              {/* Scope Description */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  For businesses that need more than an audit. We define how the business should position itself, communicate its value, reach its audience and grow digitally.
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
                  What’s Included:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span className="font-medium">Business &amp; digital discovery sessions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Audience definition &amp; buyer persona mapping</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#E8E8E8]">Digital positioning &amp; value proposition</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Competitor landscape &amp; gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Website strategy &amp; information architecture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#E8E8E8]">SEO strategy &amp; topical keyword cluster plan</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>High-intent content strategy &amp; editorial pillars</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Digital channel strategy &amp; distribution paths</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Commercial measurement &amp; KPI framework</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#C5A358]">Actionable 90-day growth roadmap</span>
                  </li>
                </ul>
              </div>

              {/* Best For Callout */}
              <div className="p-4 rounded-xl bg-[#C5A358]/10 border border-[#C5A358]/30 text-xs text-white/80">
                <span className="font-semibold text-[#C5A358]">Best for:</span> Businesses launching, repositioning or preparing for their next stage of organic growth.
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                id="select-strategy-btn"
                onClick={() => onNavigate('contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-lg group"
              >
                <span>Build My Strategy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* 03 — DIGITAL GROWTH PARTNER */}
          <div
            id="pricing-card-partner"
            className="flex flex-col justify-between bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-9 hover:border-white/20 transition-all shadow-xl"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A358] tracking-widest font-bold uppercase">
                    03 — ONGOING PARTNERSHIP
                  </span>
                  <span className="text-[11px] font-mono text-white/40 px-2 py-0.5 bg-white/5 rounded border border-white/10">
                    Monthly Retainer
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#E8E8E8]">
                  Digital Growth Partner
                </h3>
                <div className="pt-2">
                  <div className="text-xs text-white/40 font-mono uppercase tracking-wider">Investment</div>
                  <div className="text-3xl font-bold font-editorial text-[#C5A358]">
                    KES 80,000 – 200,000
                  </div>
                  <div className="text-[11px] text-white/40 font-mono">Per month / tailored to search velocity</div>
                </div>
                <p className="text-sm text-white/80 font-medium pt-1">
                  Don’t just create the strategy. Grow with it.
                </p>
              </div>

              {/* Scope Description */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Ongoing strategic and SEO support for businesses that want someone continuously looking at their digital performance and identifying opportunities for improvement.
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
                  What’s Included:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Ongoing SEO &amp; organic ranking expansion</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Continuous technical optimisation &amp; audit fixes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Keyword &amp; search intent strategy evolution</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Content direction &amp; topical gap filling</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Website conversion &amp; UX optimisation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Analytics &amp; performance review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Competitor move monitoring</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Monthly executive reporting &amp; debriefs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Strategic consultations &amp; leadership advisory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                    <span>Continuous commercial optimisation</span>
                  </li>
                </ul>
              </div>

              {/* Best For Callout */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/70">
                <span className="font-semibold text-white">Best for:</span> Businesses ready to invest consistently in ongoing digital growth and market leadership.
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                id="select-growth-btn"
                onClick={() => onNavigate('contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-all group"
              >
                <span>Let’s Discuss Growth</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — NOT SURE WHICH ONE YOU NEED? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A358]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Not Sure Which One You Need?
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#E8E8E8] font-semibold leading-tight">
                Start with the problem, not the package.
              </h2>
              <div className="space-y-3 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
                <p>
                  You don’t need to know exactly what service you need before contacting me.
                </p>
                <p className="text-white/60 text-sm sm:text-base">
                  Tell me where your business is today, what you’re trying to achieve, and what’s getting in the way. I’ll recommend the right starting point based on your commercial reality.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:items-end">
              <button
                id="book-discovery-call-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group w-full sm:w-auto"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs font-mono text-white/40 text-center lg:text-right">
                30-min scoping call &bull; No obligation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW ENGAGEMENT WORKS (HORIZONTAL PROCESS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            The Transformation Methodology
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#E8E8E8] font-semibold leading-tight">
            How Engagement Works
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Why pricing is structured around transformation rather than commoditised task lists.
          </p>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {engagementPhases.map((phase, idx) => (
            <div
              key={phase.num}
              className="bg-[#121212] border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#C5A358]/40 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C5A358]">
                    {phase.num}
                  </span>
                  {idx < engagementPhases.length - 1 && (
                    <span className="hidden md:block text-white/20 font-mono text-xs group-hover:text-[#C5A358] transition-colors">
                      &rarr;
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-xl font-bold text-white tracking-wide">
                  {phase.title}
                </h3>

                <p className="text-xs text-[#C5A358] font-medium leading-snug">
                  {phase.tagline}
                </p>

                <p className="text-xs text-white/50 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-white/30">
                <span>Phase {phase.num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — À LA CARTE / ADDITIONAL EXPERTISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Targeted Modules
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#E8E8E8] font-semibold leading-tight">
            Additional Expertise
          </h2>
          <p className="text-base sm:text-lg text-white/60">
            Not everything needs to be a full strategy engagement. Available as targeted sprints or standalone deep dives.
          </p>
        </div>

        {/* Clean Two-Column List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alaCarteServices.map((service, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-white/10 rounded-xl p-6 sm:p-7 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#C5A358] transition-colors">
                    {service.title}
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#C5A358] px-2.5 py-1 bg-[#C5A358]/10 rounded border border-[#C5A358]/20">
                    {service.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-white/40 font-mono text-[11px]">
                  Output: <span className="text-white/80">{service.deliverable}</span>
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-[#C5A358] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#181818] to-[#0E0E0E] border border-white/15 rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Subtle lighting overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,163,88,0.08)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Ready to Begin?
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
              Your business already has a story.
            </h2>
            <p className="font-editorial text-2xl sm:text-3xl text-white/80 italic">
              Let’s make sure the right people can find it.
            </p>
            <div className="pt-2 text-xs sm:text-sm font-mono text-[#C5A358] tracking-widest uppercase">
              Digital strategy &bull; SEO &bull; Visibility &bull; Growth
            </div>
          </div>

          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="bottom-pricing-cta-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-md transition-colors"
            >
              <span>Review Case Studies First</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
