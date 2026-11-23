"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { SERVICES_CATALOG } from "@/data/company";
import {
  GlobeIcon,
  SmartphoneIcon,
  CodeIcon,
  LayersIcon,
  TrendingUpIcon,
  SparklesIcon,
  ServerIcon,
  ArrowUpRightIcon,
} from "./Icons";

interface WhatWeDoMegaMenuProps {
  onItemClick?: () => void;
}

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case "web-development":
      return <GlobeIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
    case "mobile-app-development":
      return <SmartphoneIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
    case "digital-marketing":
    case "seo-services":
      return <TrendingUpIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
    case "ai-automation":
      return <SparklesIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
    case "custom-software-saas":
      return <LayersIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
    case "cloud-hosting-maintenance":
      return <ServerIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
    default:
      return <CodeIcon className="text-stone-700 group-hover:text-blue-600 transition-colors" size={18} />;
  }
};

export const WhatWeDoMegaMenu = forwardRef<HTMLDivElement, WhatWeDoMegaMenuProps>(
  ({ onItemClick }, ref) => {
    return (
      <div
        ref={ref}
        role="region"
        aria-label="What We Do Mega Menu"
        className="w-full max-w-7xl mx-auto rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] p-6 lg:p-8 text-slate-800"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-5 border-b border-slate-200/80 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-blue-50 text-blue-700 border border-blue-200/60">
                Services Directory
              </span>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-slate-500">
                Enterprise Capabilities & Global Solutions
              </h3>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Scalable digital engineering, autonomous AI workflows, and ROI-driven US market growth
            </p>
          </div>
          <Link
            href="/what-we-do"
            onClick={onItemClick}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link"
          >
            <span>Explore all services</span>
            <ArrowUpRightIcon size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_CATALOG.map((service) => (
            <Link
              key={service.slug}
              href={`/what-we-do/${service.slug}`}
              onClick={onItemClick}
              className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50/90 border border-transparent hover:border-slate-200/80 transition-all duration-200"
            >
              <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-slate-50 border border-slate-200/70 group-hover:border-blue-300 group-hover:bg-blue-50/50 group-hover:scale-105 transition-all duration-200">
                {getServiceIcon(service.slug)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {service.title}
                  </span>
                  {service.marketFocus && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      US Focus
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {service.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>All enterprise engagements backed by dedicated SLAs and ISO-grade security</span>
          </div>
          <Link
            href="/contact"
            onClick={onItemClick}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Schedule a scope consultation →
          </Link>
        </div>
      </div>
    );
  }
);

WhatWeDoMegaMenu.displayName = "WhatWeDoMegaMenu";
