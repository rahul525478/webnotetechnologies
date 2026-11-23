import React from "react";
import Link from "next/link";
import { TECHNICALS_CATALOG } from "@/data/company";
import { getTechDeviconClass } from "@/lib/devicon";

interface TechnicalsMegaMenuProps {
  onClose?: () => void;
  onItemClick?: () => void;
}

export function TechnicalsMegaMenu({ onClose, onItemClick }: TechnicalsMegaMenuProps) {
  const handleClick = () => {
    if (onClose) onClose();
    if (onItemClick) onItemClick();
  };
  const categories = [
    {
      title: "Frontend & Languages",
      items: TECHNICALS_CATALOG.filter((t) => ["Frontend", "Languages"].includes(t.category)),
    },
    {
      title: "Backend & Systems",
      items: TECHNICALS_CATALOG.filter((t) => ["Backend"].includes(t.category)),
    },
    {
      title: "Mobile & Cloud",
      items: TECHNICALS_CATALOG.filter((t) => ["Mobile", "Cloud & DevOps"].includes(t.category)),
    },
    {
      title: "AI & Databases",
      items: TECHNICALS_CATALOG.filter((t) => ["AI & ML", "Databases"].includes(t.category)),
    },
  ];

  return (
    <div className="w-full bg-white/90 backdrop-blur-2xl border-t border-b border-slate-200/80 shadow-2xl py-8 px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/70">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/70 shadow-xs">
              Technology Stack & Architecture
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Enterprise Engineering Capabilities
            </h3>
          </div>
          <Link
            href="/technicals"
            onClick={handleClick}
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <span>Explore All Technologies</span>
            <svg
              className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200/60">
                {cat.title}
              </h4>
              <div className="space-y-2">
                {cat.items.map((tech) => (
                  <Link
                    key={tech.slug}
                    href={`/technicals/${tech.slug}`}
                    onClick={handleClick}
                    className="group flex items-start gap-3 p-3 rounded-xl bg-white/60 hover:bg-white border border-slate-200/60 hover:border-blue-300/80 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-50/90 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-blue-50/60 group-hover:border-blue-200 transition-colors shadow-xs">
                      <i className={`${getTechDeviconClass(tech.slug)} text-xl`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-slate-900 group-hover:text-blue-600 text-sm tracking-tight transition-colors">
                          {tech.name}
                        </div>
                        <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          &rarr;
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/70 flex items-center justify-between bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50/70 p-4 rounded-xl border border-blue-100/80 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
            <span className="text-xs font-medium text-slate-700">
              Production-tested on AWS, GCP & Cloudflare with 99.99% uptime guarantees.
            </span>
          </div>
          <Link
            href="/contact"
            onClick={handleClick}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            Need a custom tech evaluation? Consult our engineers &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
