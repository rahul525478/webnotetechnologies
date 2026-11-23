import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { GlobalGlobe3DCanvas } from "@/components/canvas3d/GlobalGlobe3DCanvas";
import { PORTFOLIO_CASES, COMPANY_CONTACT } from "@/data/company";
import { getTechDeviconClass } from "@/lib/devicon";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_CASES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_CASES.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Case Study | WebNote Technologies`,
    description: project.summary,
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_CASES.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedCases = PORTFOLIO_CASES.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-indigo border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
                <span>/</span>
                <span className="text-blue-700 font-bold">{project.title}</span>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 text-blue-700 border border-blue-200/70 shadow-xs backdrop-blur-sm">
                  {project.deliverableType}
                </span>
                <span className="text-xs text-slate-600 font-semibold bg-white/80 border border-slate-200/80 px-3 py-1 rounded-full shadow-2xs">
                  {project.clientCategory}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
                {project.title}
              </h1>

              <p className="text-xl text-blue-700 font-bold mb-6 tracking-tight">
                {project.tagline}
              </p>

              <p className="text-slate-600 leading-relaxed mb-8 font-normal text-base sm:text-lg">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  Request Similar Architecture
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  All Case Studies
                </Link>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <GlobalGlobe3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-blue">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
                  Production Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-8 tracking-tight">
                  Validated Performance Metrics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl glass-surface text-center"
                    >
                      <div className="text-3xl font-extrabold text-emerald-600 mb-1 tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
                  Key Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
                  System Features & Engineering Highlights
                </h2>
                <div className="space-y-3">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl glass-surface flex items-start space-x-3.5"
                    >
                      <svg
                        className="w-5 h-5 text-blue-700 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl glass-surface space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs bg-white/80 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200/80 font-medium shadow-2xs"
                      >
                        <i className={`${getTechDeviconClass(t)} text-xs`} />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Project Governance
                  </h3>
                  <div className="text-xs text-slate-600 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Ownership:</span>
                      <span className="font-bold text-slate-900">100% Client IP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Security Standard:</span>
                      <span className="font-bold text-emerald-600">Enterprise Grade</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Code Coverage:</span>
                      <span className="font-bold text-blue-600">&gt;85% Tested</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    US Direct Line
                  </div>
                  <a
                    href={`tel:${COMPANY_CONTACT.usPhone}`}
                    className="block text-sm font-bold text-blue-700 hover:underline"
                  >
                    {COMPANY_CONTACT.usPhoneDisplay}
                  </a>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="block text-xs font-semibold text-slate-600 hover:text-blue-700 mt-1"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                >
                  <span>Inquire for Similar Build</span>
                  <span className="ml-1.5">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-cyan border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
            More Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCases.map((rel) => (
              <Link
                key={rel.slug}
                href={`/portfolio/${rel.slug}`}
                className="group p-8 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-2.5 py-1 rounded-md border border-blue-200/60 shadow-2xs">
                    {rel.deliverableType}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>View case breakdown</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
