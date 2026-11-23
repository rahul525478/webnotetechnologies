import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Technicals3DCanvas } from "@/components/canvas3d/Technicals3DCanvas";
import { TECHNICALS_CATALOG, COMPANY_CONTACT } from "@/data/company";
import { getTechDeviconClass } from "@/lib/devicon";

interface TechPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TECHNICALS_CATALOG.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: TechPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tech = TECHNICALS_CATALOG.find((t) => t.slug === slug);
  if (!tech) return { title: "Technology Not Found" };
  return {
    title: `${tech.name} | Technical Architecture | WebNote Technologies`,
    description: tech.description,
  };
}

export default async function TechnicalDetailPage({ params }: TechPageProps) {
  const { slug } = await params;
  const tech = TECHNICALS_CATALOG.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  const relatedTechs = TECHNICALS_CATALOG.filter((t) => t.slug !== tech.slug).slice(0, 3);

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
                <Link href="/technicals" className="hover:text-blue-600 transition-colors">Technicals</Link>
                <span>/</span>
                <span className="text-blue-700 font-bold">{tech.name}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-blue-700 border border-blue-200/70 shadow-xs mb-4 backdrop-blur-sm">
                <span>{tech.category}</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0">
                  <i className={`${getTechDeviconClass(tech.slug)} text-3xl`} />
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  {tech.name}
                </h1>
              </div>

              <p className="text-xl text-blue-700 font-bold mb-6 tracking-tight">
                {tech.architectureRole}
              </p>

              <p className="text-slate-600 leading-relaxed mb-8 font-normal text-base sm:text-lg">
                {tech.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  Schedule Engineering Discovery
                </Link>
                <Link
                  href="/technicals"
                  className="px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  All Technologies
                </Link>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <Technicals3DCanvas className="w-full h-full" />
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
                  Engineering Benchmarks
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-8 tracking-tight">
                  Core Architectural Strengths
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tech.keyStrengths.map((str, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl glass-surface"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-white text-xs font-bold tabular-nums flex items-center justify-center shadow-xs">
                          0{idx + 1}
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                          {str}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 pl-11 leading-relaxed font-normal">
                        Evaluated under high-concurrency production workloads for memory stability, clean error boundaries, and predictable horizontal autoscaling.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
                  Integration Stack
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
                  Production Ecosystem & Tooling
                </h2>
                <div className="p-8 rounded-2xl glass-surface">
                  <div className="flex flex-wrap gap-3">
                    {tech.ecosystem.map((pkg, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 text-slate-800 text-sm font-bold border border-slate-200/80 shadow-xs backdrop-blur-sm"
                      >
                        <i className={`${getTechDeviconClass(pkg)} text-base`} />
                        <span>{pkg}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl glass-surface space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Architecture Role
                  </h3>
                  <div className="p-4 rounded-xl bg-white/80 border border-slate-200/80 text-sm font-bold text-slate-800 shadow-2xs">
                    {tech.architectureRole}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Deployment SLA
                  </h3>
                  <div className="text-xs text-slate-600 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Uptime Guarantee:</span>
                      <span className="font-bold text-slate-900 tabular-nums">99.98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">Telemetry Monitoring:</span>
                      <span className="font-bold text-emerald-600">24/7 Real-Time</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-500">CI/CD Pipeline:</span>
                      <span className="font-bold text-blue-600">Automated</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Inquiries
                  </div>
                  <a
                    href={`tel:${COMPANY_CONTACT.usPhone}`}
                    className="block text-sm font-bold text-blue-700 hover:underline"
                  >
                    US: {COMPANY_CONTACT.usPhoneDisplay}
                  </a>
                  <a
                    href={`tel:${COMPANY_CONTACT.indiaPhone1}`}
                    className="block text-xs font-semibold text-slate-600 hover:text-blue-700 mt-1"
                  >
                    IN: {COMPANY_CONTACT.indiaPhone1Display}
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                >
                  <span>Consult Engineering Team</span>
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
            Complementary Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTechs.map((rel) => (
              <Link
                key={rel.slug}
                href={`/technicals/${rel.slug}`}
                className="group p-6 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-2.5 py-1 rounded-md border border-blue-200/60 shadow-2xs">
                      {rel.category}
                    </span>
                    <i className={`${getTechDeviconClass(rel.slug)} text-xl`} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Explore stack details</span>
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
