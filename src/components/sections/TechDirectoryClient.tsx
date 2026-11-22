"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_TECHNOLOGIES, TECH_CATEGORIES, TechnologyItem } from "@/data/technologiesData";
import { Search, ArrowRight, Code2, Cpu, Database, Globe, Smartphone, Server } from "lucide-react";

export function TechDirectoryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTechs = useMemo(() => {
    return ALL_TECHNOLOGIES.filter((tech) => {
      const matchesCat =
        selectedCategory === "All" || tech.categorySlug === selectedCategory;
      const matchesSearch =
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search and Category Filter Bar */}
      <div className="bg-[#0a0a1a] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0b8]" />
            <input
              type="text"
              placeholder="Search technologies (e.g. Next.js, Python, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white placeholder:text-[#a0a0b8] focus:outline-none focus:border-[#c5e017] transition-all text-sm"
            />
          </div>

          {/* Result counter */}
          <div className="text-sm text-[#a0a0b8] whitespace-nowrap">
            Showing <span className="font-bold text-[#c5e017]">{filteredTechs.length}</span> technologies
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-[#c5e017] text-[#0a0a0a] shadow-[0_0_15px_rgba(197,224,23,0.3)]"
                : "bg-[#111128] text-[#a0a0b8] hover:text-white border border-white/5"
            }`}
          >
            All Categories
          </button>
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.slug
                  ? "bg-[#c5e017] text-[#0a0a0a] shadow-[0_0_15px_rgba(197,224,23,0.3)]"
                : "bg-[#111128] text-[#a0a0b8] hover:text-white border border-white/5"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Technologies */}
      {filteredTechs.length === 0 ? (
        <div className="text-center py-20 bg-[#0a0a1a] rounded-2xl border border-white/10">
          <Code2 className="w-12 h-12 text-[#a0a0b8] mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-bold text-white">No technologies found</h3>
          <p className="text-[#a0a0b8] mt-2 text-sm">
            Try adjusting your search criteria or resetting the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-[#c5e017] text-[#0a0a0a] font-semibold text-xs cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((tech) => (
            <Link
              key={tech.slug}
              href={`/technologies/${tech.slug}`}
              className="group p-8 rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,224,23,0.12)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#111128] border border-white/10 text-[#c5e017]">
                    {tech.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#111128] flex items-center justify-center text-[#a0a0b8] group-hover:text-[#c5e017] group-hover:bg-[#c5e017]/10 transition-colors">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-[#c5e017] transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-[#c5e017]">
                  {tech.tagline}
                </p>
                <p className="mt-4 text-sm text-[#a0a0b8] leading-relaxed line-clamp-3">
                  {tech.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#a0a0b8]">
                  {tech.mainAdvantages.length} Key Advantages
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#c5e017] group-hover:translate-x-1 transition-transform">
                  Full Tech Profile <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
