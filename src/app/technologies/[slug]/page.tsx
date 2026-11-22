import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ALL_TECHNOLOGIES } from "@/data/technologiesData";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface TechPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_TECHNOLOGIES.map((tech) => ({
    slug: tech.slug,
  }));
}

export async function generateMetadata({
  params,
}: TechPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = ALL_TECHNOLOGIES.find((t) => t.slug === slug);
  if (!tech) return { title: "Technology Profile Not Found" };

  return {
    title: `${tech.name} Development & Architecture | WebNote Technologies`,
    description: tech.tagline,
    openGraph: {
      title: `${tech.name} Development | WebNote Technologies`,
      description: tech.description,
    },
  };
}

export default async function TechnologyDetailPage(props: TechPageProps) {
  const { slug } = await props.params;
  const tech = ALL_TECHNOLOGIES.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb Navigation */}
      <div className="wn-container mb-8">
        <nav className="flex items-center gap-2 text-xs text-[#a0a0b8]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/technologies"
            className="hover:text-white transition-colors"
          >
            Technicals
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#c5e017] font-medium">{tech.name}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <div className="wn-container mb-16">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0a0a2e]/90 via-[#0a0a1a] to-[#111128] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20">
                {tech.category}
              </span>
              <span className="text-xs text-[#a0a0b8] font-mono">
                Production-Certified Stack
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {tech.name}
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-medium text-[#c5e017]">
              {tech.tagline}
            </p>
            <p className="mt-6 text-lg text-[#a0a0b8] max-w-3xl leading-relaxed">
              {tech.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="lime" size="lg">
                Build with {tech.name}
              </Button>
              <Button href="/technologies" variant="outline" size="lg">
                Explore Full Directory
              </Button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c5e017]/10 blur-[110px] pointer-events-none" />
        </div>
      </div>

      {/* Deep Dive Grid: Purpose & Why Useful */}
      <div className="wn-container mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Purpose */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#c5e017]/10 border border-[#c5e017]/30 flex items-center justify-center text-[#c5e017] mb-6">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Core Purpose & Function</h2>
            <p className="text-[#a0a0b8] leading-relaxed text-sm sm:text-base">
              {tech.purpose}
            </p>
          </div>

          {/* Why It Is Useful */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Why This Technology Matters</h2>
            <p className="text-[#a0a0b8] leading-relaxed text-sm sm:text-base">
              {tech.whyUseful}
            </p>
          </div>
        </div>
      </div>

      {/* Why WebNote Works With It */}
      <div className="wn-container mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111128] via-[#0a0a1a] to-[#161632] border border-[#c5e017]/30">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              Our Engineering Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Why WebNote Technologies Works with {tech.name}
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-base leading-relaxed">
              {tech.whyWebNoteUses}
            </p>
          </div>
        </div>
      </div>

      {/* Main Advantages */}
      <div className="wn-container mb-20">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
            Technical Strengths
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Main Advantages of {tech.name}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tech.mainAdvantages.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0a0a1a] border border-white/10 flex items-start gap-4 hover:border-[#c5e017]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#c5e017]/10 text-[#c5e017] flex items-center justify-center font-bold text-sm shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-base font-semibold text-white leading-relaxed">
                {adv}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Applications & What Projects Can Be Created */}
      <div className="wn-container mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Where It Is Used */}
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#c5e017]" /> Where It Is Used
            </h3>
            <ul className="space-y-3">
              {tech.useCases.map((uc, i) => (
                <li key={i} className="text-sm text-[#a0a0b8] flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5e017]" />
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suitable Projects */}
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#c5e017]" /> Suitable Project Types
            </h3>
            <ul className="space-y-3">
              {tech.suitableProjects.map((sp, i) => (
                <li key={i} className="text-sm text-[#a0a0b8] flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{sp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Business Benefits */}
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#c5e017]" /> How It Benefits Clients
            </h3>
            <ul className="space-y-3">
              {tech.businessBenefits.map((bb, i) => (
                <li key={i} className="text-sm text-[#a0a0b8] flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{bb}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Technologies */}
      <div className="wn-container mb-24">
        <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">
            Related & Complementary Technologies
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {tech.relatedTechnologies.map((rel) => (
              <span
                key={rel}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-[#111128] border border-white/10 text-white"
              >
                {rel}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="wn-container">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Plan Your Next Project with {tech.name}
          </h2>
          <p className="mt-4 text-[#a0a0b8] max-w-2xl mx-auto text-base">
            Consult with our engineering team to explore if {tech.name} is the optimal foundation for your product scalability requirements.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Initiate Project Discussion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
