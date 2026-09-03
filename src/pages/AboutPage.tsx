import React from 'react';
import { PageType } from '../types';
import { IntersectionDiagram } from '../components/IntersectionDiagram';
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
  Sparkles,
  ArrowRight,
  Globe,
  Briefcase
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const connectedDisciplines = [
    {
      title: 'Business Objectives',
      desc: 'Understanding revenue drivers, margins, target buyers, and long-term commercial goals.'
    },
    {
      title: 'Digital Strategy',
      desc: 'Formulating structured roadmaps and channel prioritization that align with unit economics.'
    },
    {
      title: 'Search & SEO',
      desc: 'Capturing active commercial intent through crawl architecture, semantic entities, and topical authority.'
    },
    {
      title: 'Websites & UX',
      desc: 'Structuring digital touchpoints that clarify value and remove friction from customer decision journeys.'
    },
    {
      title: 'Product Thinking',
      desc: 'Translating complex capabilities into intuitive propositions that users and buyers grasp immediately.'
    },
    {
      title: 'Technology & Tooling',
      desc: 'Selecting reliable, scalable digital platforms without unnecessary technical overhead.'
    },
    {
      title: 'Strategic Communications',
      desc: 'Crafting persuasive messaging tailored to high-consequence enterprise and institutional decision-makers.'
    },
    {
      title: 'Brand Positioning',
      desc: 'Establishing unmistakable market identity and authority across all public-facing digital assets.'
    }
  ];

  const principles = [
    {
      number: '01',
      title: 'Understand before recommending.',
      description: 'I never prescribe digital tactics without first dissecting the underlying unit economics, buyer psychology, and competitive reality of the business.'
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
      <section className="pt-12 sm:pt-16 border-b border-white/[0.08] pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#C5A358] bg-[#0B1626] border border-[#C5A358]/30 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#C5A358] animate-pulse"></span>
            <span>About Dickson Ngeche &bull; Strategic Philosophy</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F5F6F8] font-bold leading-tight max-w-4xl">
            Digital is not just about being online. It's about being intentional.
          </h1>

          <p className="font-editorial text-2xl sm:text-3xl text-[#C5A358] italic font-normal max-w-3xl">
            “I don't start with the algorithm or the trend. I start with the business.”
          </p>

          <p className="text-base sm:text-lg text-white/75 max-w-3xl leading-relaxed">
            Most digital agencies start by asking what tools you want to use or which keywords to buy. I start by understanding what you sell, who buys it, why they hesitate, and what makes your solution superior.
          </p>
        </div>
      </section>

      {/* HOLISTIC PERSPECTIVE & DISCIPLINE INTERSECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 space-y-10 shadow-2xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Holistic Strategy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold">
              Connecting Disciplines That Are Too Often Siloed.
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              When businesses experience stagnant growth, the issue is rarely a single isolated tool. It is almost always a breakdown in alignment between business vision, web architecture, search intent, and brand communications. I connect these critical disciplines into one cohesive growth engine:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {connectedDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070D18]/80 border border-white/[0.08] p-5 rounded-xl flex flex-col justify-between space-y-3 hover:border-[#C5A358]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#C5A358]">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]/60" />
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-sm text-[#F5F6F8]">{item.title}</div>
                  <div className="text-xs text-white/60 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC INTERSECTION OF BUSINESS, DIGITAL, SEO, TECH & GROWTH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IntersectionDiagram />
      </section>

      {/* CONSULTANT PROFILE & BACKGROUND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Portrait & Persona Box */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-8 space-y-6 shadow-2xl">
            <div className="relative aspect-square rounded-2xl bg-[#070D18] border border-[#C5A358]/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden shadow-inner">
              <div className="w-24 h-24 rounded-2xl bg-[#162234] border border-[#C5A358]/60 flex items-center justify-center font-editorial text-3xl font-bold text-[#C5A358] mb-3 shadow-lg">
                DK
              </div>
              <div className="font-editorial text-2xl font-bold text-[#F5F6F8]">
                Dickson Ngeche
              </div>
              <div className="text-xs font-mono text-[#C5A358] uppercase tracking-wider mt-1 font-semibold">
                Digital Strategy &amp; Growth Consultant
              </div>
              <div className="text-xs text-white/60 mt-3 max-w-xs leading-relaxed">
                Based in Nairobi, Kenya &bull; Advising enterprises, federations, and ventures regionally and globally.
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-white/70">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <span className="text-white/40">Consultancy Model</span>
                <span className="font-semibold text-[#F5F6F8]">Independent Strategic Advisory</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <span className="text-white/40">Geographical Scope</span>
                <span className="font-semibold text-[#F5F6F8]">Kenya, East Africa &amp; Global Remote</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <span className="text-white/40">Engagement Types</span>
                <span className="font-semibold text-[#F5F6F8]">Strategic Sprints &amp; Advisory Retainers</span>
              </div>
            </div>
          </div>

          {/* Background Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
                Professional Background
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold leading-tight">
                A Strategic Partner Who Speaks Both Business Reality and Digital Strategy.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
              <p>
                Too often, a costly gap exists in digital initiatives. On one side, business leaders understand their revenue targets, margin dynamics, and market realities. On the other, technical agencies and tactical marketers execute fragmented tasks without grasping how the business actually creates value or makes money.
              </p>
              <p>
                My professional background was built to bridge that exact divide. Rather than operating merely as a technical specialist or a superficial marketing vendor, I serve as an end-to-end strategic advisor operating across five interconnected domains: commercial digital strategy, web experience architecture, search visibility (SEO), digital brand positioning, and ongoing executive advisory.
              </p>
              <p>
                Over years of hands-on advisory work across East Africa and internationally, I have partnered with executive leadership teams across diverse sectors—from national economic federations and member organizations (such as FEDWEN Kenya) and agricultural value chains (MCCCU and County Fresh) to fintech and financial solutions (Infiniti Financial Solutions) and global aviation logistics (24HR Aviation Hub). In every engagement, my focus is translating complex organizational capability into sharp digital clarity, authoritative presence, and measurable commercial results.
              </p>
            </div>

            {/* Quick stats ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-4 rounded-xl bg-[#0B1626]/80 border border-white/[0.08]">
                <div className="font-editorial text-2xl font-bold text-[#F5F6F8]">5 Pillars</div>
                <div className="text-[11px] font-mono text-white/50 uppercase mt-1">Full-Spectrum Growth</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B1626]/80 border border-white/[0.08]">
                <div className="font-editorial text-2xl font-bold text-[#C5A358]">100%</div>
                <div className="text-[11px] font-mono text-white/50 uppercase mt-1">Commercial Alignment</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0B1626]/80 border border-white/[0.08]">
                <div className="font-editorial text-2xl font-bold text-[#F5F6F8]">Direct</div>
                <div className="text-[11px] font-mono text-white/50 uppercase mt-1">Consultant Advisory</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SIX GUIDING PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-bold">
            Guiding Tenets
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5F6F8] font-bold leading-tight">
            How I Work: Six Non-Negotiable Principles.
          </h2>
          <p className="text-base text-white/65">
            These principles govern how I analyze problems, formulate strategy, and interact with client leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg group"
            >
              <div className="font-mono text-base font-bold text-[#C5A358]">
                {principle.number}
              </div>
              <h3 className="font-editorial text-xl text-[#F5F6F8] font-bold group-hover:text-white transition-colors">
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
        <div className="bg-[#0B1626] border-2 border-[#C5A358]/40 text-white rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-glow pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Let's Collaborate
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F5F6F8] font-bold">
              Ready to work with a strategist who understands the business behind the screen?
            </h2>
            <p className="text-sm sm:text-base text-white/65">
              Let's schedule an initial discovery conversation to discuss your goals, current bottlenecks, and digital potential.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#070D18] bg-[#C5A358] hover:bg-[#D4B46A] rounded-md transition-colors shadow-lg relative z-10"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
