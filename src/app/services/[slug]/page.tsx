import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ALL_SERVICES } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Zap,
  Layers,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | WebNote Technologies`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | WebNote Technologies`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);

  if (!service) {
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
          <Link href="/services" className="hover:text-white transition-colors">
            What We Do
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#c5e017] font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="wn-container mb-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0a0a2e]/90 via-[#0a0a1a] to-[#111128] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> {service.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-[#c5e017]">
              {service.tagline}
            </p>
            <p className="mt-6 text-lg text-[#a0a0b8] max-w-3xl leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="lime" size="lg">
                Discuss Your Requirements
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>

          {/* Decorative ambient gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c5e017]/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1a237e]/30 blur-[120px] pointer-events-none" />
        </div>
      </div>

      {/* Main Content Grid: Benefits & Problems Solved */}
      <div className="wn-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Business Benefits */}
          <div className="rounded-2xl bg-[#0a0a1a] border border-white/10 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#c5e017]/10 border border-[#c5e017]/30 flex items-center justify-center text-[#c5e017]">
                <Zap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Why Businesses Need This</h2>
            </div>
            <p className="text-[#a0a0b8] text-sm leading-relaxed mb-8">
              In today&apos;s hyper-competitive international markets, leveraging proven engineering practices and data-driven solutions is essential for sustainable growth.
            </p>
            <div className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#111128]/60 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#c5e017] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problems Solved */}
          <div className="rounded-2xl bg-[#0a0a1a] border border-white/10 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Challenges We Eliminate</h2>
            </div>
            <p className="text-[#a0a0b8] text-sm leading-relaxed mb-8">
              We diagnose systemic bottlenecks in codebases, marketing funnels, and manual workflows, replacing fragile friction with robust automation.
            </p>
            <div className="space-y-4">
              {service.problemsSolved.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#111128]/60 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-sm font-medium text-[#f0f0f5]">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Features Section */}
      <div className="wn-container mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
            Technical Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            What&apos;s Included in Our Scope
          </h2>
          <p className="mt-4 text-[#a0a0b8]">
            Detailed capabilities engineered into every delivery package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/30 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#c5e017]/10 text-[#c5e017] flex items-center justify-center font-bold text-sm shrink-0">
                {idx + 1}
              </div>
              <div>
                <p className="text-base font-semibold text-white leading-relaxed">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our 5-Step Working Process */}
      <div className="wn-container mb-24">
        <div className="border border-white/10 rounded-3xl bg-[#050510] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              Proven Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Our 5-Stage Implementation Process
            </h2>
            <p className="mt-3 text-[#a0a0b8]">
              A disciplined, transparent delivery framework honed across international client projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="relative p-6 rounded-2xl bg-[#111128]/70 border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#c5e017] opacity-80">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#a0a0b8] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack & Key Deliverables */}
      <div className="wn-container mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#c5e017]" /> Core Technologies Utilized
            </h3>
            <p className="text-sm text-[#a0a0b8] mb-6">
              Modern, enterprise-grade tooling selected specifically for durability and speed.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-[#111128] border border-white/10 text-white hover:border-[#c5e017]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tangible Deliverables */}
          <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#c5e017]" /> Tangible Deliverables
            </h3>
            <p className="text-sm text-[#a0a0b8] mb-6">
              Clear artifacts transferred upon milestone completions.
            </p>
            <ul className="space-y-3">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5e017]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Conversion Final CTA */}
      <div className="wn-container">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {service.ctaHeadline}
          </h2>
          <p className="mt-4 text-[#a0a0b8] max-w-2xl mx-auto text-base sm:text-lg">
            Let&apos;s build an exceptional solution together. Connect with our technical directors to evaluate your project scope and timelines.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Start Your Project Consultation
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              Inspect Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
