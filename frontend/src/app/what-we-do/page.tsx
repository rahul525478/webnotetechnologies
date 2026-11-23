import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Services3DCanvas } from "@/components/canvas3d/Services3DCanvas";
import { SERVICES_CATALOG } from "@/data/company";

export const metadata: Metadata = {
  title: "What We Do | Enterprise Services & Solutions | WebNote Technologies",
  description:
    "Comprehensive digital engineering, web development, mobile apps, AI automation, SEO, and US digital marketing solutions.",
};

export default function WhatWeDoPage() {
  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-indigo border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-white/90 border border-blue-200/70 mb-6 shadow-xs backdrop-blur-md">
                <span>Enterprise Service Directory</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Full-Lifecycle Digital Engineering & Strategic Growth
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                From scalable cloud architectures and mission-critical web applications to automated AI agent workflows and high-conversion US digital marketing campaigns, we engineer software that drives real enterprise revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  Request Technical Proposal
                </Link>
                <a
                  href="#services-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  Browse 9 Core Services
                </a>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <Services3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="services-grid" className="py-24 relative overflow-hidden gradient-mesh-cyan">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Complete Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Specialized Engineering Disciplines
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-normal text-base sm:text-lg">
              Explore our domain-specific capabilities built to scale seamlessly from seed to multinational enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CATALOG.map((service) => (
              <div
                key={service.slug}
                className="group p-8 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/70 shadow-2xs">
                      {service.category}
                    </span>
                    <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                      &rarr;
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-5 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Key Deliverables
                      </div>
                      <div className="space-y-1.5">
                        {service.deliverables.map((d, i) => (
                          <div key={i} className="flex items-center text-xs text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0 shadow-xs" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Included Specialties
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.subServices.map((sub, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/80 border border-slate-200/80 text-slate-700 px-2.5 py-1 rounded-lg font-medium shadow-2xs"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <Link
                    href={`/what-we-do/${service.slug}`}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 hover:text-white bg-blue-50/90 hover:bg-blue-600 border border-blue-200/60 hover:border-blue-600 transition-all shadow-xs"
                  >
                    <span>View Specifications & Process</span>
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
              Need a Dedicated Engineering Pod or Cross-Functional Team?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal text-base">
              We assemble dedicated sprint teams within 5 business days, aligned to your timezone, tools, and technical requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
            >
              <span>Discuss Engagement Models</span>
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
