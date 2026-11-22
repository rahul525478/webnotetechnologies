import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ALL_PROJECTS } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  Target,
  Wrench,
  Award,
} from "lucide-react";

interface PortfolioDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} | Case Study | WebNote Technologies`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.challenge,
    },
  };
}

export default async function PortfolioDetailPage(props: PortfolioDetailProps) {
  const { slug } = await props.params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
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
          <Link href="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#c5e017] font-medium">{project.title}</span>
        </nav>
      </div>

      {/* Case Study Hero */}
      <div className="wn-container mb-16">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0a0a2e]/90 via-[#0a0a1a] to-[#111128] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20">
                {project.category}
              </span>
              <span className="text-xs text-[#a0a0b8] font-mono">
                {project.industry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-[#c5e017]">
              {project.tagline}
            </p>

            {/* Impact Metrics Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 p-6 rounded-2xl bg-[#050510]/80 border border-white/10">
              {project.outcomes.map((out, idx) => (
                <div key={idx}>
                  <div className="text-3xl sm:text-4xl font-black text-[#c5e017]">
                    {out.metric}
                  </div>
                  <div className="text-xs sm:text-sm text-[#a0a0b8] mt-1 font-medium">
                    {out.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c5e017]/10 blur-[110px] pointer-events-none" />
        </div>
      </div>

      {/* Challenge vs Objectives Grid */}
      <div className="wn-container mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* The Business Challenge */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-red-400" /> The Business Challenge
            </h2>
            <p className="text-[#a0a0b8] leading-relaxed text-base">
              {project.challenge}
            </p>
          </div>

          {/* Project Objectives */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#c5e017]" /> Key Objectives
            </h2>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#c5e017] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Our Technical Approach & Architecture */}
      <div className="wn-container mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0a1a] border border-white/10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
            Strategic Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
            Our Architectural Approach
          </h2>
          <p className="text-[#a0a0b8] text-base leading-relaxed max-w-4xl">
            {project.approach}
          </p>

          <h3 className="text-lg font-bold text-white mt-10 mb-4">
            Custom Solutions Delivered
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#111128] border border-white/5 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-[#c5e017]/10 text-[#c5e017] flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-white">{sol}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack & Services Deployed */}
      <div className="wn-container mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#c5e017]" /> Technologies Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#111128] border border-white/10 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#c5e017]" /> Scope of Services
            </h3>
            <ul className="space-y-2.5">
              {project.servicesProvided.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-[#a0a0b8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5e017]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="wn-container">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Engineer an Unmatched Solution for Your Organization?
          </h2>
          <p className="mt-4 text-[#a0a0b8] max-w-2xl mx-auto text-base">
            Consult directly with our software architects to review technical feasibility and budget allocations.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Start Project Inquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
