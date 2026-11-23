"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TECHNOLOGY_DIRECTORY } from "@/data/technologyDirectory";
import { TechIcon } from "@/components/ui/TechIcon";

interface TechnicalsMegaMenuProps {
  onClose?: () => void;
  onItemClick?: () => void;
}

export function TechnicalsMegaMenu({ onClose, onItemClick }: TechnicalsMegaMenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("frontend");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClick = () => {
    if (onClose) onClose();
    if (onItemClick) onItemClick();
  };

  const activeCategory =
    TECHNOLOGY_DIRECTORY.find((c) => c.id === activeCategoryId) ||
    TECHNOLOGY_DIRECTORY[0];

  // Search across all categories or within active
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;
    const matches: { categoryTitle: string; name: string; role: string; icon: string; verified?: boolean }[] = [];
    for (const cat of TECHNOLOGY_DIRECTORY) {
      for (const tech of cat.technologies) {
        if (tech.name.toLowerCase().includes(q) || tech.role.toLowerCase().includes(q)) {
          matches.push({
            categoryTitle: cat.shortTitle,
            ...tech,
          });
        }
      }
    }
    return matches;
  }, [searchQuery]);

  return (
    <div className="w-full bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl py-6 px-6 sm:px-8 rounded-3xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/70">
                Software Technology Directory
              </span>
              <span className="text-3xs font-medium text-slate-500">
                122+ Global Industry Standards
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Global Engineering Stack & Toolchains
            </h3>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick Live Search Bar */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search any tech (e.g. Next.js, Go, Kafka)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 pl-9 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            <Link
              href="/technicals"
              onClick={handleClick}
              className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group shrink-0"
            >
              <span>Explore All</span>
              <svg
                className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Search Results Mode */}
        {searchResults !== null ? (
          <div className="py-2">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-700">
                Found {searchResults.length} matching {searchResults.length === 1 ? "technology" : "technologies"} for &ldquo;{searchQuery}&rdquo;
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-2xs font-bold text-blue-600 hover:underline"
              >
                Reset Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-12 text-xs text-slate-500">
                No matching technologies found. Try searching for &ldquo;React&rdquo;, &ldquo;Python&rdquo;, &ldquo;Docker&rdquo;, or &ldquo;PostgreSQL&rdquo;.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {searchResults.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center gap-3 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <TechIcon name={tech.name} className="text-base" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 truncate">{tech.name}</span>
                        <span className="text-3xs text-slate-400 uppercase font-semibold shrink-0">{tech.categoryTitle}</span>
                      </div>
                      <div className="text-3xs text-slate-500 truncate">{tech.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard 8-Category Directory Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: 8 Category Selectors */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-1.5 border-r border-slate-200/70 pr-4">
              <div className="text-3xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Industry Categories (8)
              </div>
              {TECHNOLOGY_DIRECTORY.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-150 flex items-center justify-between gap-2.5 cursor-pointer ${
                      isActive
                        ? "bg-blue-50/90 border border-blue-200 text-blue-900 font-bold shadow-2xs"
                        : "bg-transparent hover:bg-slate-50 text-slate-700 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-sm ${
                          isActive
                            ? "bg-blue-600 text-white shadow-2xs"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <TechIcon name={cat.title.split(" ")[0]} className="text-sm" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs truncate tracking-tight">
                          {cat.shortTitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-3xs text-slate-400 font-semibold">
                        {cat.technologies.length}
                      </span>
                      {isActive && (
                        <span className="text-blue-600 text-xs">&rarr;</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected Category's Technologies */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="pb-3 mb-4 flex items-center justify-between border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{activeCategory.title}</span>
                    <span className="text-3xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/70">
                      {activeCategory.technologies.length} Items
                    </span>
                  </h4>
                  <p className="text-3xs text-slate-500 mt-0.5 font-normal">
                    {activeCategory.description}
                  </p>
                </div>

                <Link
                  href="/technicals"
                  onClick={handleClick}
                  className="text-3xs font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
                >
                  View in Directory &rarr;
                </Link>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5">
                {activeCategory.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-2.5 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-blue-300 hover:shadow-xs transition-all flex items-center gap-2.5 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <TechIcon name={tech.name} className="text-base" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </span>
                        {tech.verified && (
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                            title="Verified in WebNote Core Stack"
                          />
                        )}
                      </div>
                      <div className="text-3xs text-slate-400 truncate leading-tight">
                        {tech.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-3xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-xs" />
            <span>
              Directory reference of global software standards. Green dot marks verified WebNote core production stack.
            </span>
          </div>
          <Link
            href="/contact"
            onClick={handleClick}
            className="text-3xs font-bold text-blue-700 hover:text-blue-900 transition-colors shrink-0"
          >
            Need a custom stack evaluation? Consult our architects &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
