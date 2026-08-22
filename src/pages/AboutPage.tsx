import { PageType } from '../types';
import {
  Compass,
  Search,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  BrainCircuit,
  Building,
  Target,
  Shield,
  Lightbulb,
  FileCheck2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const principles = [
    {
      number: '01',
      title: 'Understand before recommending.',
      description: 'I never prescribe digital solutions without first dissecting the underlying unit economics, buyer psychology, and competitive reality of the business.'
    },
    {
      number: '02',
      title: 'Strategy before activity.',
      description: 'Activity without strategy is merely expensive distraction. Every channel, piece of content, and SEO initiative must trace directly back to a commercial objective.'
    },
    {
      number: '03',
      title: 'Clarity before complexity.',
      description: 'If you cannot explain your offering simply, no amount of technical search optimization will save it. Clarity in proposition precedes excellence in execution.'
    },
    {
      number: '04',
      title: 'Data informs decisions.',
      description: 'We replace gut feeling and subjective opinions with real search intent queries, crawl telemetry, and commercial conversion analytics.'
    },
    {
      number: '05',
      title: 'Digital should serve the business.',
      description: 'Traffic and impressions are vanity if they do not translate into qualified leads, trusted authority, and sustainable business revenue.'
    },
    {
      number: '06',
      title: 'Visibility without relevance is not growth.',
      description: 'Ranking for 1,000 irrelevant keywords produces nothing. Ranking #1 for the 10 terms high-intent economic buyers search changes everything.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* PAGE HERO */}
      <section className="pt-12 sm:pt-16 border-b border-white/10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#C5A358]/10 border border-[#C5A358]/30">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
            <span>Strategic Philosophy &amp; Background</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl text-[#E8E8E8] font-bold leading-tight max-w-4xl">
            Digital Strategy Is About Understanding the Business First.
          </h1>

          <p className="font-editorial text-2xl sm:text-3xl text-[#C5A358] italic font-normal max-w-3xl">
            “I don't start with the algorithm. I start with the business.”
          </p>

          <p className="text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed">
            Most digital agencies start by asking what tools you want to use or which keywords to buy. I start by understanding what you sell, who buys it, why they hesitate, and what makes your solution superior.
          </p>
        </div>
      </section>

      {/* THE TRANSLATION SEQUENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 sm:p-12 space-y-8 shadow-xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              The Translation Architecture
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#E8E8E8] font-semibold">
              How Business Objectives Become Market Visibility
            </h2>
            <p className="text-sm text-white/60">
              Every project systematically translates commercial objectives through six linked stages:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: '01', title: 'Positioning', desc: 'Clarifying the core offer & value' },
              { step: '02', title: 'Digital Experience', desc: 'Structuring website & UX pathways' },
              { step: '03', title: 'Content', desc: 'Answering high-intent buyer questions' },
              { step: '04', title: 'SEO Engine', desc: 'Technical crawlability & schema entity' },
              { step: '05', title: 'Visibility', desc: 'Discoverability when buyers search' },
              { step: '06', title: 'Growth', desc: 'Compounding inbound pipeline' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#181818] border border-white/10 p-4 rounded-xl flex flex-col justify-between space-y-2">
                <span className="font-mono text-xs font-bold text-[#C5A358]">{item.step}</span>
                <div className="font-semibold text-sm text-[#E8E8E8]">{item.title}</div>
                <div className="text-[11px] text-white/50">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTANT PROFILE & INTERSECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait & Persona Box */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl">
            <div className="relative aspect-square rounded-xl bg-[#181818] border border-white/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div className="w-24 h-24 rounded-full bg-[#222222] border-2 border-[#C5A358]/60 flex items-center justify-center font-editorial text-3xl font-bold text-[#C5A358] mb-3 shadow-lg">
                DN
              </div>
              <div className="font-editorial text-xl font-bold text-[#E8E8E8]">
                Dickson Ngeche
              </div>
              <div className="text-xs font-mono text-[#C5A358] uppercase tracking-wider mt-0.5">
                Digital Strategy &amp; SEO Consultant
              </div>
              <div className="text-xs text-white/50 mt-2 max-w-xs">
                Based in Nairobi, Kenya &bull; Advising enterprises &amp; ventures regionally and globally.
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-white/70">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">Consultancy Model</span>
                <span className="font-semibold text-[#E8E8E8]">Independent Strategic Advisory</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">Geographical Scope</span>
                <span className="font-semibold text-[#E8E8E8]">Kenya, East Africa &amp; Global Remote</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">Engagement Types</span>
                <span className="font-semibold text-[#E8E8E8]">Advisory Retainers &amp; Strategic Sprints</span>
              </div>
            </div>
          </div>

          {/* Background Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                Professional Background
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#E8E8E8] font-semibold leading-tight">
                A Strategic Partner Who Speaks Both Business and Technical SEO.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
              <p>
                Too often, a profound gap exists in digital projects. On one side, business leadership knows what they want to accomplish commercially. On the other side, technical developers and SEO technicians execute tasks without understanding the commercial model.
              </p>
              <p>
                My practice was established to eliminate that friction. I sit at the intersection of:
              </p>

              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="bg-[#181818] border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xs font-bold text-[#C5A358]">BUSINESS</div>
                  <div className="text-xs text-white/60 mt-1">Understanding commercial value, margins, target buyers, and growth objectives.</div>
                </div>
                <div className="bg-[#181818] border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xs font-bold text-[#C5A358]">DIGITAL STRATEGY</div>
                  <div className="text-xs text-white/60 mt-1">Mapping decision funnels, channel prioritization, and conversion mechanics.</div>
                </div>
                <div className="bg-[#181818] border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xs font-bold text-[#C5A358]">POSITIONING</div>
                  <div className="text-xs text-white/60 mt-1">Distilling complex products into propositions that buyers understand instantly.</div>
                </div>
                <div className="bg-[#181818] border border-white/10 p-4 rounded-xl">
                  <div className="font-mono text-xs font-bold text-[#C5A358]">TECHNICAL SEO</div>
                  <div className="text-xs text-white/60 mt-1">Crawl architecture, Schema.org entities, Core Web Vitals, and search intent clusters.</div>
                </div>
              </div>

              <p>
                Whether enhancing search visibility and website performance for national federations like FEDWEN Kenya, developing multi-stakeholder communications for MCCCU and County Fresh dairy brands, shaping fintech product positioning for Infiniti Financial Solutions, or crafting institutional B2B campaign concepts for 24HR Aviation Hub, I bring clarity, precision, and measurable outcomes to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK (6 CORE PRINCIPLES) */}
      <section id="principles-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Guiding Tenets
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#E8E8E8] font-semibold leading-tight">
            How I Work: Six Non-Negotiable Principles.
          </h2>
          <p className="text-base text-white/60">
            These principles govern how I analyze problems, formulate strategy, and interact with client leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-4 hover:border-[#C5A358]/60 hover:shadow-xl transition-all"
            >
              <div className="font-mono text-base font-bold text-[#C5A358]">
                {principle.number}
              </div>
              <h3 className="font-editorial text-xl text-[#E8E8E8] font-semibold">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border-2 border-[#C5A358]/40 text-white rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Let's Collaborate
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#E8E8E8] font-semibold">
              Ready to work with a strategist who understands the business behind the screen?
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              Let's schedule an initial discovery conversation to discuss your goals, current bottlenecks, and digital potential.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-lg"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
