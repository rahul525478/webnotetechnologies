import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Services3DCanvas } from "@/components/canvas3d/Services3DCanvas";
import { SERVICES_CATALOG, COMPANY_CONTACT } from "@/data/company";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_CATALOG.filter((s) => s.slug !== "web-development").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const service = SERVICES_CATALOG.find((s) => s.slug === decodedSlug || s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | WebNote Technologies`,
    description: service.fullDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const service = SERVICES_CATALOG.find((s) => s.slug === decodedSlug || s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_CATALOG.filter((s) => s.slug !== service.slug).slice(0, 3);

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
                <Link href="/what-we-do" className="hover:text-blue-600 transition-colors">What We Do</Link>
                <span>/</span>
                <span className="text-blue-700 font-bold">{service.title}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-blue-700 border border-blue-200/70 shadow-xs mb-4 backdrop-blur-sm">
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
                {service.title}
              </h1>

              <p className="text-xl text-blue-700 font-bold mb-6 tracking-tight">
                {service.tagline}
              </p>

              <p className="text-slate-600 leading-relaxed mb-8 font-normal text-base sm:text-lg">
                {service.fullDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  Schedule Engineering Discovery
                </Link>
                <Link
                  href="/what-we-do"
                  className="px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  All Services
                </Link>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <Services3DCanvas className="w-full h-full" />
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
                  Execution Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-8 tracking-tight">
                  Sprint Delivery Methodology
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl glass-surface"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-white text-xs font-bold tabular-nums flex items-center justify-center shadow-xs">
                          0{idx + 1}
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                          {step.step}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 pl-11 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
                  Strategic Advantages
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
                  Measurable Business Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl glass-surface flex items-start space-x-3"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-slate-800">
                        {b}
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
                    Deliverables Checklist
                  </h3>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="text-xs font-semibold text-slate-700 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 shrink-0 shadow-xs" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Supported Sub-Services
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {service.subServices.map((sub, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/80 text-slate-800 px-3 py-1 rounded-lg border border-slate-200/80 font-medium shadow-2xs"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Direct Line
                  </div>
                  <a
                    href={`tel:${COMPANY_CONTACT.usPhone}`}
                    className="block text-sm font-bold text-blue-700 hover:underline"
                  >
                    International: {COMPANY_CONTACT.usPhoneDisplay}
                  </a>
                  <a
                    href={`tel:${COMPANY_CONTACT.indiaPhone1}`}
                    className="block text-xs font-semibold text-slate-600 hover:text-blue-700 mt-1"
                  >
                    India: {COMPANY_CONTACT.indiaPhone1Display}
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                >
                  <span>Book Consultation</span>
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
            Explore Related Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/what-we-do/${rel.slug}`}
                className="group p-6 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-2.5 py-1 rounded-md border border-blue-200/60 shadow-2xs">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Learn more</span>
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
