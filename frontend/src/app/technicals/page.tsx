import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Technicals3DCanvas } from "@/components/canvas3d/Technicals3DCanvas";
import { TECHNICALS_CATALOG } from "@/data/company";
import { getTechDeviconClass } from "@/lib/devicon";
import { TechnologyDirectorySection } from "@/components/sections/TechnologyDirectorySection";

export const metadata: Metadata = {
  title: "Technicals & Engineering Architecture | WebNote Technologies",
  description:
    "Explore our full technology stack: Next.js 16, TypeScript, Python AI, Node.js microservices, Flutter, AWS, and Cloudflare edge networks.",
};

export default function TechnicalsPage() {
  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-cyan border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-white/90 border border-blue-200/70 mb-6 shadow-xs backdrop-blur-md">
                <span>Technology Directory</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Enterprise Engineering Stack & Multi-Cloud Architecture
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                We engineer scalable, secure, and maintainable systems using industry-standard open source frameworks and enterprise cloud platforms. Explore our tested capabilities across frontend, backend, AI, and distributed cloud computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  Consult an Architect
                </Link>
                <a
                  href="#tech-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  Explore Technologies
                </a>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <Technicals3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="tech-grid" className="py-20 relative overflow-hidden gradient-mesh-blue">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Technology Directory
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Global Engineering Stack Directory
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-normal text-base sm:text-lg">
              Explore our organized technology directory across Frontend, Backend, and Database categories. Select a category on the left to inspect industry-standard frameworks, runtimes, and persistence engines.
            </p>
          </div>

          <TechnologyDirectorySection />

          {/* Deep-Dive Specifications for Core Stack */}
          <div className="mt-20 pt-16 border-t border-slate-200/70">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                Verified Production Toolchains
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-3 tracking-tight">
                Architectural Deep-Dive Specifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Detailed runtime benchmarks and architectural roles for our verified core production stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TECHNICALS_CATALOG.map((tech) => (
                <Link
                  key={tech.slug}
                  href={`/technicals/${tech.slug}`}
                  className="group p-5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                        {tech.category}
                      </span>
                      <span className="text-slate-400 group-hover:text-blue-600 text-xs transition-colors">
                        &rarr;
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        <i className={`${getTechDeviconClass(tech.slug)} text-lg`} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-2xs text-slate-500 line-clamp-2 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-3xs font-bold text-blue-600">
                    <span>View Technical Spec</span>
                    <span>&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-indigo border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl glass-surface">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Evaluating a Complex Cloud Migration or Architecture Audit?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal text-base">
              Our principal software engineers perform thorough codebase evaluations, security audits, and latency profiling for enterprise applications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
            >
              <span>Request Architecture Audit</span>
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
