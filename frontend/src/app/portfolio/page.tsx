import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { GlobalGlobe3DCanvas } from "@/components/canvas3d/GlobalGlobe3DCanvas";
import { PORTFOLIO_CASES } from "@/data/company";
import { getTechDeviconClass } from "@/lib/devicon";

export const metadata: Metadata = {
  title: "Portfolio & Engineering Case Studies | WebNote Technologies",
  description:
    "Explore our enterprise architecture case studies and concept demonstration platforms across Fintech, Healthtech, E-commerce, and AI Logistics.",
};

export default function PortfolioPage() {
  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-cyan border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-white/90 border border-blue-200/70 mb-6 shadow-xs backdrop-blur-md">
                <span>Selected Architectural Work</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Enterprise Case Studies & Digital Proof of Concepts
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                Explore in-depth architecture breakdowns and demonstration platforms engineered by WebNote Technologies. Each project showcases our rigorous adherence to low-latency protocols, high-frequency throughput, and conversion-focused design.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  Propose Your Project
                </Link>
                <a
                  href="#cases-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  View 4 Showcase Studies
                </a>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <GlobalGlobe3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="cases-grid" className="py-24 relative overflow-hidden gradient-mesh-indigo">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Featured Demonstrations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Systems Engineered for High Complexity
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-normal text-base sm:text-lg">
              Transparent, measurable performance benchmarks demonstrating full-stack engineering across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_CASES.map((item) => (
              <div
                key={item.slug}
                className="group rounded-2xl glass-surface overflow-hidden flex flex-col justify-between"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/70 shadow-2xs">
                      {item.deliverableType}
                    </span>
                    <span className="text-xs text-slate-600 font-semibold bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs">
                      {item.clientCategory}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-bold text-blue-700 mb-4 tracking-tight">
                    {item.tagline}
                  </p>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl mb-6 border border-slate-200/80 shadow-2xs">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Production Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {item.metrics.map((m, i) => (
                        <div key={i} className="text-center p-3 rounded-xl bg-white/80 border border-slate-200/70 shadow-2xs">
                          <div className="text-base font-extrabold text-emerald-600 tabular-nums">{m.value}</div>
                          <div className="text-xs text-slate-500 font-medium truncate mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5 mb-6">
                      {item.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-700 font-medium flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 shrink-0 shadow-xs" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs bg-white/80 border border-slate-200/80 text-slate-700 px-2.5 py-1 rounded-md font-medium shadow-2xs"
                      >
                        <i className={`${getTechDeviconClass(tech)} text-xs`} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-50/70 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 hover:text-white bg-blue-50/90 hover:bg-blue-600 border border-blue-200/60 hover:border-blue-600 transition-all shadow-xs"
                  >
                    <span>Read Architecture Review</span>
                    <span className="ml-1.5">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-warm border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl glass-surface">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Have a Specific Industry Requirement or Custom Architecture?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal text-base">
              We sign mutual NDAs before initial discovery calls, protecting your intellectual property from day one.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
            >
              <span>Book Discovery Call</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
