import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Compass,
  Globe,
  Search,
  ShieldCheck,
  Briefcase,
  ChevronDown,
  Layers,
  TrendingUp,
  MessageSquare,
  FileSearch,
  Lightbulb,
  Workflow
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  // Active FAQ state for smooth accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Interactive ambient glow position (respects prefers-reduced-motion)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (!mediaQuery.matches) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const strategicEngagements = [
    {
      id: 'strategy',
      number: '01',
      eyebrow: '01 / STRATEGY',
      title: 'Digital Strategy & Growth',
      headline: 'Get clarity before you invest.',
      description: 'Understand where your business stands digitally, identify the gaps that matter and build a practical roadmap for growth.',
      icon: Compass,
      pricing: 'From KES 50,000',
      pricingNote: 'Final investment depends on the scope and complexity of the engagement.',
      ctaText: 'Discuss Strategy',
      badge: null,
      includes: [
        'Digital presence audits',
        'Digital strategy',
        'Growth roadmaps',
        'Competitor analysis',
        'Digital transformation planning',
        'Customer journey optimisation',
        'Digital performance analysis'
      ]
    },
    {
      id: 'web',
      number: '02',
      eyebrow: '02 / WEB',
      title: 'Web Strategy & Digital Experience',
      headline: 'Build a digital presence that works for the business.',
      description: 'Websites should do more than exist. I design and develop digital experiences around your business objectives, audience and growth goals.',
      icon: Globe,
      pricing: 'From KES 60,000',
      pricingNote: 'More complex business websites and digital platforms are scoped individually.',
      ctaText: 'Discuss a Web Project',
      badge: null,
      includes: [
        'Website strategy',
        'UX/UI design',
        'Website design',
        'Website development',
        'Website redesign',
        'Landing pages',
        'Conversion optimisation',
        'Technical foundations'
      ]
    },
    {
      id: 'seo',
      number: '03',
      eyebrow: '03 / SEO',
      title: 'Search Strategy & Organic Growth',
      headline: 'Be easier to find.',
      description: 'Build sustainable search visibility through technical SEO, strategic content and a deeper understanding of how your audience searches.',
      icon: Search,
      pricing: 'From KES 35,000 / month',
      pricingNote: 'Ongoing SEO investment depends on website size, competition and growth objectives.',
      ctaText: 'Discuss SEO',
      badge: null,
      includes: [
        'SEO audits',
        'Technical SEO',
        'On-page SEO',
        'Keyword research',
        'Search intent',
        'Content strategy',
        'Local SEO',
        'E-commerce SEO',
        'Organic growth strategy'
      ]
    },
    {
      id: 'brand',
      number: '04',
      eyebrow: '04 / DIGITAL BRAND',
      title: 'Digital Brand & Online Presence',
      headline: 'Make your digital presence reflect your business.',
      description: 'Establish a credible, consistent and strategically positioned online presence across the channels that matter.',
      icon: ShieldCheck,
      pricing: 'From KES 40,000',
      pricingNote: 'Engagements are tailored to the current state and objectives of your digital presence.',
      ctaText: 'Discuss Your Digital Presence',
      badge: null,
      includes: [
        'Digital brand positioning',
        'Online presence strategy',
        'Brand messaging',
        'Social profile optimisation',
        'Google Business Profile',
        'Personal branding',
        'Digital reputation',
        'Content direction',
        'Digital communication strategy'
      ]
    },
    {
      id: 'advisory',
      number: '05',
      eyebrow: '05 / ADVISORY',
      title: 'Digital Advisory',
      headline: 'Senior digital thinking, without the full-time hire.',
      description: 'For businesses that need an experienced digital perspective on an ongoing basis — from strategy and SEO to websites, technology and digital growth.',
      icon: Briefcase,
      pricing: 'From KES 50,000 / month',
      pricingNote: 'Ongoing advisory engagements are scoped around the level of involvement required.',
      ctaText: 'Discuss Advisory',
      badge: 'ONGOING PARTNERSHIP',
      includes: [
        'Ongoing digital strategy',
        'SEO direction',
        'Website optimisation',
        'Digital growth planning',
        'Technology recommendations',
        'Performance reviews',
        'Strategic consultations',
        'Digital project oversight'
      ]
    }
  ];

  const engagementTiers = [
    {
      id: 'start',
      tier: 'START',
      tagline: 'For businesses that need clarity.',
      range: 'KES 15,000 – 40,000',
      suitableFor: [
        'Consultations',
        'Audits',
        'Focused strategy',
        'Digital reviews',
        'Specific digital challenges'
      ],
      ctaText: 'Start Here'
    },
    {
      id: 'build',
      tier: 'BUILD',
      tagline: 'For businesses ready to improve their digital presence.',
      range: 'KES 60,000 – 180,000',
      suitableFor: [
        'Websites',
        'Digital strategy',
        'Digital brand projects',
        'SEO foundations',
        'Digital experience improvements'
      ],
      ctaText: 'Build With Me'
    },
    {
      id: 'grow',
      tier: 'GROW',
      tagline: 'For businesses looking for an ongoing strategic partner.',
      range: 'KES 60,000 – 200,000+ / month',
      suitableFor: [
        'SEO',
        'Digital growth',
        'Continuous optimisation',
        'Digital advisory',
        'Ongoing strategic support'
      ],
      ctaText: "Let's Grow"
    }
  ];

  const howItWorksSteps = [
    {
      num: '01',
      title: 'Conversation',
      description: 'We discuss your business, current challenges and objectives.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Diagnosis',
      description: 'I review the relevant digital landscape and identify the opportunities and gaps.',
      icon: FileSearch
    },
    {
      num: '03',
      title: 'Recommendation',
      description: 'You receive a clear recommendation, scope and proposed approach.',
      icon: Lightbulb
    },
    {
      num: '04',
      title: 'Engagement',
      description: 'Once we agree on the direction, we begin the work.',
      icon: Workflow
    }
  ];

  const faqs = [
    {
      question: 'Are these fixed prices?',
      answer: 'The prices shown are starting points. Final investment depends on the scope, complexity and objectives of the engagement.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes. Engagements can be scaled according to the business, stage and specific challenge.'
    },
    {
      question: 'Do you work with businesses outside Kenya?',
      answer: 'Yes. DKNgeche works with businesses and professionals in Kenya and internationally.'
    },
    {
      question: 'Can I hire you for just one project?',
      answer: 'Yes. One-off strategy, website, SEO and digital presence projects are available alongside ongoing advisory engagements.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes. Ongoing SEO, digital growth and advisory engagements are available for businesses that need continuous strategic support.'
    },
    {
      question: 'How does an engagement start?',
      answer: 'Every engagement begins with a conversation to understand the business, challenge and desired outcome.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 relative overflow-hidden">
      
      {/* Subtle ambient lighting effect */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none fixed -inset-px opacity-20 transition-opacity duration-300 z-0 hidden lg:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 163, 88, 0.08), transparent 80%)`
          }}
        />
      )}

      {/* 01: PAGE HERO */}
      <section className="pt-12 sm:pt-20 border-b border-white/[0.08] pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#C5A358] bg-[#0B1626] border border-[#C5A358]/30 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358] animate-pulse"></span>
              <span>ENGAGEMENTS &amp; INVESTMENT</span>
            </div>
            <span className="text-xs font-mono text-white/40 hidden sm:inline">&bull;</span>
            <span className="text-xs font-mono text-white/60 tracking-wider hidden sm:inline uppercase">
              Work With Me
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F5F6F8] font-bold leading-[1.08] tracking-tight">
              Let's build something that works.
            </h1>
            <p className="text-lg sm:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
              Whether you need clarity on your digital direction, a stronger online presence, better search visibility or an experienced digital partner, engagements are shaped around your business objectives.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-start-conversation-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group active:scale-[0.98]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#engagements"
              className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white/85 hover:text-white bg-[#0B1626] hover:bg-[#162234] border border-white/10 hover:border-white/20 rounded-md transition-colors shadow-sm"
            >
              <span>Explore Services</span>
              <span className="text-[#C5A358] font-sans">&darr;</span>
            </a>
          </div>

          {/* Core Strategic Positioning Note */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0B1626]/80 border border-white/[0.08] backdrop-blur-md space-y-3 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5A358] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A358]" />
              <span>The Engagement Philosophy</span>
            </div>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Every business starts from a different place. My engagements are designed around the challenge you're trying to solve, whether you need strategic clarity, a stronger digital presence, better search visibility or an ongoing digital partner.
            </p>
            <p className="text-xs sm:text-sm text-white/55 leading-relaxed">
              These starting points provide a framework for investment. Final scope and pricing are determined by the complexity, objectives and requirements of each engagement.
            </p>
          </div>

        </div>
      </section>

      {/* 02: FIVE STRATEGIC ENGAGEMENT AREAS */}
      <section id="engagements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Five Strategic Areas
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              Ways to Work Together.
            </h2>
            <p className="text-base text-white/65">
              Organised around high-impact business outcomes rather than commoditised task lists.
            </p>
          </div>

          <div className="text-xs font-mono text-white/40 hidden md:block">
            Investment starting points &bull; Scoped to business impact
          </div>
        </div>

        {/* 5 Engagement Cards in Editorial Grid */}
        <div className="space-y-8">
          {strategicEngagements.map((item) => {
            const Icon = item.icon;
            const isAdvisory = item.id === 'advisory';

            return (
              <div
                key={item.id}
                id={`engagement-${item.id}`}
                className={`rounded-2xl transition-all duration-300 relative group overflow-hidden ${
                  isAdvisory
                    ? 'bg-gradient-to-br from-[#0E1B2E] via-[#0B1626] to-[#070D18] border-2 border-[#C5A358]/50 shadow-2xl p-8 sm:p-12'
                    : 'glass-panel glass-panel-hover p-8 sm:p-10 border border-white/[0.08]'
                }`}
              >
                {/* Advisory highlight badge */}
                {item.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A358]/15 border border-[#C5A358]/40 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#C5A358] uppercase mb-4">
                    <Sparkles className="w-3 h-3 text-[#C5A358]" />
                    <span>{item.badge}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Scope & Narrative */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isAdvisory
                            ? 'bg-[#C5A358]/15 border border-[#C5A358]/60 text-[#C5A358]'
                            : 'bg-[#162234] border border-white/10 text-[#C5A358]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#C5A358] font-bold tracking-wider">
                            {item.eyebrow}
                          </span>
                          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F6F8] font-bold">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="font-editorial text-lg sm:text-xl text-[#C5A358] font-normal italic pt-1">
                        "{item.headline}"
                      </div>

                      <p className="text-sm sm:text-base text-white/75 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* What's Included Capabilities Chips/List */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold">
                        What's Included:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.includes.map((inc, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 text-xs text-white/85 bg-[#070D18]/70 border border-white/[0.05] p-2.5 rounded-lg group-hover:border-white/10 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A358] shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pricing Framework & Action */}
                  <div className="lg:col-span-5 bg-[#070D18]/90 border border-white/[0.08] rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-inner h-full">
                    <div className="space-y-4">
                      <div className="text-xs font-mono uppercase tracking-widest text-white/40 font-bold">
                        Investment Framework
                      </div>

                      <div>
                        <div className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold tracking-tight">
                          {item.pricing}
                        </div>
                        <p className="text-xs text-white/60 mt-2 leading-relaxed font-sans">
                          {item.pricingNote}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#0B1626] border border-white/[0.06] text-xs text-white/70 space-y-1">
                        <div className="font-mono text-[#C5A358] font-semibold uppercase text-[10px] tracking-wider">
                          Consultant Commitment:
                        </div>
                        <div>
                          Direct principal-level advisory, clear milestones, and measurable business alignment.
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08]">
                      <button
                        id={`btn-discuss-${item.id}`}
                        onClick={() => onNavigate('contact')}
                        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all shadow-md group ${
                          isAdvisory
                            ? 'bg-[#C5A358] text-[#070D18] hover:bg-[#D4B46A]'
                            : 'bg-[#162234] text-white hover:bg-[#C5A358] hover:text-[#070D18] border border-white/10'
                        }`}
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 03: THREE-LEVEL FRAMEWORK (WHERE ARE YOU RIGHT NOW?) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Investment Framework
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
            Where are you right now?
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Not every business needs the same level of support. Choose the starting point that best describes your current challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementTiers.map((tier) => (
            <div
              key={tier.id}
              id={`tier-${tier.id}`}
              className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between space-y-8 border border-white/[0.08] shadow-xl group"
            >
              <div className="space-y-6">
                <div className="space-y-2 border-b border-white/[0.08] pb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C5A358] tracking-widest">
                      TIER: {tier.tier}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#C5A358]" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#F5F6F8]">
                    {tier.tier}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 min-h-[40px] leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                    Typical Investment Range
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#C5A358]">
                    {tier.range}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 font-semibold">
                    Suitable For:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                    {tier.suitableFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A358] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <button
                  id={`btn-tier-${tier.id}`}
                  onClick={() => onNavigate('contact')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#162234] hover:bg-[#C5A358] hover:text-[#070D18] border border-white/10 rounded-md transition-all group"
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04: CUSTOM ENGAGEMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1626] border border-white/15 rounded-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C5A358]" />
                <span>Bespoke Scopes</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
                Have something more specific in mind?
              </h2>
              <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                Some projects don't fit neatly into a package. If you're dealing with a complex digital challenge, building something new or looking for a strategic partner, let's start with a conversation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:items-end">
              <button
                id="btn-custom-project"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group w-full sm:w-auto"
              >
                <span>Tell Me About Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs font-mono text-white/40 text-center lg:text-right">
                Confidential &bull; Principal-led consultation
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 05: HOW IT WORKS (FOUR-STEP PROCESS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Engagement Process
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
            How it works
          </h2>
          <p className="text-base text-white/65">
            A clear, collaborative path from initial dialogue to strategic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#070D18] border border-white/[0.08] rounded-xl p-6 sm:p-7 space-y-4 hover:border-[#C5A358]/40 transition-colors flex flex-col justify-between shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#C5A358]">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#162234] border border-white/[0.08] flex items-center justify-center text-[#C5A358] group-hover:border-[#C5A358]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#F5F6F8]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-white/35">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 06: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Questions &amp; Clarity
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-white/65">
            Common questions regarding advisory structures, scopes, and engagements.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0B1626]/80 border border-white/[0.08] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-[#C5A358] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-[#F5F6F8]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-md bg-white/[0.05] text-[#C5A358] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-white/75 leading-relaxed border-t border-white/[0.05] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 07: FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1626] border-2 border-[#C5A358]/40 rounded-2xl p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-glow pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
              Strategic Next Step
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F5F6F8] font-bold leading-tight">
              You don't need more digital activity. You need the right direction.
            </h2>
            <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Tell me where your business is today, where you want to go and what you're trying to solve. We'll work out the right approach from there.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              id="final-pricing-cta-talk-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-all shadow-xl group"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              id="final-pricing-cta-work-btn"
              onClick={() => onNavigate('work')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#F5F6F8] hover:text-[#C5A358] bg-[#070D18] hover:bg-[#162234] border border-white/15 rounded-md transition-colors"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
