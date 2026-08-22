import { useState } from 'react';
import { Lightbulb, Compass, Map, Hammer, Search, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StageDetail {
  id: string;
  name: string;
  sub: string;
  icon: typeof Lightbulb;
  question: string;
  focus: string;
  description: string;
  deliverables: string[];
}

const STAGES: StageDetail[] = [
  {
    id: 'idea',
    name: 'Idea',
    sub: 'The Starting Point',
    icon: Lightbulb,
    question: '“What exactly are we offering and who is it truly for?”',
    focus: 'Deconstructing the raw vision or service offering to isolate its genuine commercial value.',
    description: 'Every great venture starts with an idea, product, or service. But an idea inside your head cannot win business online until it is shaped into a crisp proposition that the market understands immediately.',
    deliverables: [
      'Core proposition breakdown',
      'Target buyer persona identification',
      'Competitor whitespace discovery'
    ]
  },
  {
    id: 'clarity',
    name: 'Clarity',
    sub: 'The Definition',
    icon: Compass,
    question: '“How should this be positioned so its value is undeniable?”',
    focus: 'Eliminating marketing jargon and distilling an unmistakable value proposition.',
    description: 'We translate complex features and capabilities into clear business language. We clarify who you serve, what problem you eliminate, and why choosing you is the logical decision.',
    deliverables: [
      'Digital Value Proposition document',
      'Customer messaging hierarchy',
      'Differentiation narrative'
    ]
  },
  {
    id: 'strategy',
    name: 'Digital Strategy',
    sub: 'The Roadmap',
    icon: Map,
    question: '“Which digital channels and touchpoints will actually produce results?”',
    focus: 'Selecting high-leverage channels and mapping the exact buyer decision journey.',
    description: 'Instead of scattering effort across every fashionable platform, we design a focused digital blueprint. We map the exact steps a prospect takes from first touch to signed contract.',
    deliverables: [
      'Phased Digital Growth Roadmap',
      'Customer Journey Touchpoint Map',
      'Channel & resource allocation matrix'
    ]
  },
  {
    id: 'execution',
    name: 'Execution',
    sub: 'The Build',
    icon: Hammer,
    question: '“How do we structure our digital presence to convert visitors into inquiries?”',
    focus: 'Architecting high-performance websites and search-aligned content assets.',
    description: 'We turn the strategy into reality: structuring web architecture, authoring high-conversion copy, designing frictionless user journeys, and setting up accurate event telemetry.',
    deliverables: [
      'Website Information Architecture (IA)',
      'High-conversion page structures',
      'Search-intent content clusters'
    ]
  },
  {
    id: 'visibility',
    name: 'Visibility',
    sub: 'The Discovery (SEO)',
    icon: Search,
    question: '“How will high-intent buyers find us when searching for solutions?”',
    focus: 'Ensuring your business is found, understood, and trusted when people search.',
    description: 'Visibility is not just traffic—it is being the definitive answer when decision-makers search on Google. We deploy technical SEO, semantic schema, and topical authority to capture active demand.',
    deliverables: [
      'Technical SEO & Core Web Vitals optimization',
      'High-intent keyword capture architecture',
      'Structured Schema.org entity indexation'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    sub: 'The Compounding Outcome',
    icon: TrendingUp,
    question: '“How do we measure what is working and scale it sustainably?”',
    focus: 'Continuous iteration based on real conversion telemetry and search momentum.',
    description: 'With a sound strategy, clear presence, and strong search indexation in place, organic discovery compounds. We analyze conversion data to continuously expand your market share.',
    deliverables: [
      'Executive performance telemetry',
      'Conversion rate optimization (CRO)',
      'Topical expansion roadmaps'
    ]
  }
];

export function StrategicRoadmap() {
  const [activeStageId, setActiveStageId] = useState<string>('clarity');
  const activeStage = STAGES.find(s => s.id === activeStageId) || STAGES[1];

  return (
    <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono tracking-widest uppercase text-[#C5A358] font-semibold">
            The Transformation Continuum
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#E8E8E8] font-semibold mt-1">
            From Idea to Compounding Digital Growth
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-white/60 max-w-md">
          Explore each phase of how Dickson helps businesses transform a raw vision into an authoritative, discoverable digital presence.
        </p>
      </div>

      {/* Interactive Phase Bar */}
      <div className="py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                id={`roadmap-stage-btn-${stage.id}`}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative flex flex-col items-start p-3.5 sm:p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-white/[0.08] border-[#C5A358] shadow-lg ring-1 ring-[#C5A358]/50'
                    : 'bg-[#161616] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`}>
                    0{index + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A358]' : 'text-white/40'}`} />
                </div>
                <div className={`text-sm font-semibold tracking-tight ${isActive ? 'text-[#E8E8E8]' : 'text-white/70'}`}>
                  {stage.name}
                </div>
                <div className="text-[11px] text-white/40 truncate w-full mt-0.5">
                  {stage.sub}
                </div>

                {isActive && (
                  <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#161616] border-r border-b border-[#C5A358] rotate-45 hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="bg-[#161616] border border-white/10 rounded-xl p-6 sm:p-8 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/60">
              <span className="text-[#C5A358]">Stage Focus:</span>
              <span className="font-semibold text-white/90">{activeStage.focus}</span>
            </div>

            <h4 className="font-editorial text-xl sm:text-2xl text-[#E8E8E8] font-normal italic text-[#C5A358]">
              {activeStage.question}
            </h4>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          {/* Right Key Deliverables */}
          <div className="lg:col-span-5 bg-[#1F1F1F] border border-white/10 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A358] font-bold">
              Key Outputs &amp; Strategic Deliverables
            </div>
            <ul className="space-y-2.5">
              {activeStage.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A358] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
