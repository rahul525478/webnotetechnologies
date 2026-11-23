"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TechIcon } from "@/components/ui/TechIcon";

export type TechCategoryType = "Frontend" | "Backend" | "Database";

export interface DirectoryItem {
  name: string;
  role: string;
  icon: string;
  inVerifiedCoreStack?: boolean;
}

export const DIRECTORY_DATA: Record<TechCategoryType, DirectoryItem[]> = {
  Frontend: [
    { name: "HTML5", role: "Markup & Semantic Structure", icon: "devicon-html5-plain colored" },
    { name: "CSS3", role: "Modern Cascading Style Architecture", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", role: "Universal Web & Dynamic Client Scripting", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", role: "Strictly Typed Scalable JavaScript", icon: "devicon-typescript-plain colored", inVerifiedCoreStack: true },
    { name: "React", role: "Declarative Component-Driven UI Framework", icon: "devicon-react-original colored", inVerifiedCoreStack: true },
    { name: "Next.js", role: "Server-Rendered Production React Platform", icon: "devicon-nextjs-plain", inVerifiedCoreStack: true },
    { name: "Vue.js", role: "Progressive Component Architecture", icon: "devicon-vuejs-plain colored" },
    { name: "Nuxt.js", role: "Production-Grade Full-Stack Vue Framework", icon: "devicon-nuxtjs-plain colored" },
    { name: "Angular", role: "Enterprise Client Application Platform", icon: "devicon-angular-plain colored" },
    { name: "Svelte", role: "Compiled Cybernetically Enhanced Apps", icon: "devicon-svelte-plain colored" },
    { name: "SvelteKit", role: "Full-Stack Svelte Architecture", icon: "devicon-svelte-plain colored" },
    { name: "Astro", role: "High-Performance Content Island Architecture", icon: "devicon-astro-plain colored" },
    { name: "SolidJS", role: "Fine-Grained Reactive Web Framework", icon: "devicon-solidjs-plain colored" },
    { name: "Qwik", role: "Resumable Instant-Boot Application Framework", icon: "devicon-qwik-plain colored" },
    { name: "Remix", role: "Web Standards & Edge-Focused React Framework", icon: "devicon-remix-line-wordmark" },
    { name: "Gatsby", role: "Static Progressive Web App Generator", icon: "devicon-gatsby-original colored" },
    { name: "Tailwind CSS", role: "Utility-First Design System Framework", icon: "devicon-tailwindcss-original colored", inVerifiedCoreStack: true },
    { name: "Bootstrap", role: "Responsive Mobile-First UI Toolkit", icon: "devicon-bootstrap-plain colored" },
    { name: "Sass / SCSS", role: "Syntactically Awesome CSS Preprocessor", icon: "devicon-sass-original colored" },
    { name: "Less", role: "Dynamic Leaner Style Sheets", icon: "devicon-less-plain-wordmark colored" },
    { name: "Web Components", role: "Framework-Agnostic Custom Elements", icon: "devicon-html5-plain colored" },
    { name: "GraphQL", role: "Declarative Client Query Language", icon: "devicon-graphql-plain colored" },
  ],
  Backend: [
    { name: "Node.js", role: "Asynchronous Event-Driven JavaScript Runtime", icon: "devicon-nodejs-plain colored", inVerifiedCoreStack: true },
    { name: "Express.js", role: "Minimalist High-Throughput HTTP Framework", icon: "devicon-express-original", inVerifiedCoreStack: true },
    { name: "NestJS", role: "Enterprise Modular TypeScript Microservices", icon: "devicon-nestjs-line colored" },
    { name: "Python", role: "High-Level Systems & AI Backend Language", icon: "devicon-python-plain colored", inVerifiedCoreStack: true },
    { name: "Django", role: "Batteries-Included Python Web Framework", icon: "devicon-django-plain colored" },
    { name: "FastAPI", role: "High-Throughput Async REST Microservices", icon: "devicon-fastapi-plain colored", inVerifiedCoreStack: true },
    { name: "Flask", role: "Lightweight WSGI Python Microframework", icon: "devicon-flask-original colored" },
    { name: "Java", role: "Enterprise JVM Platform & Systems Language", icon: "devicon-java-plain colored", inVerifiedCoreStack: true },
    { name: "Spring Boot", role: "Production-Grade Distributed Microservices", icon: "devicon-spring-original colored", inVerifiedCoreStack: true },
    { name: "PHP", role: "Server-Side Enterprise Web Engine", icon: "devicon-php-plain colored", inVerifiedCoreStack: true },
    { name: "Laravel", role: "Elegant Web Artisan Framework for PHP", icon: "devicon-laravel-line colored", inVerifiedCoreStack: true },
    { name: "Symfony", role: "Reusable PHP Components & High-End Framework", icon: "devicon-symfony-original" },
    { name: "C", role: "Low-Level High-Speed Bare-Metal Language", icon: "devicon-c-line colored" },
    { name: "C++", role: "High-Performance Systems & Engine Programming", icon: "devicon-cplusplus-line colored" },
    { name: "C#", role: "Object-Oriented Enterprise Systems Language", icon: "devicon-csharp-line colored" },
    { name: "ASP.NET Core", role: "Cross-Platform High-Scale Web Architecture", icon: "devicon-dotnetcore-plain colored" },
    { name: "Go", role: "Concurrency-First Cloud Microservices Language", icon: "devicon-go-line colored" },
    { name: "Rust", role: "Memory-Safe Zero-Cost Abstraction Systems", icon: "devicon-rust-line colored" },
    { name: "Ruby", role: "Dynamic Programmer-Centric Language", icon: "devicon-ruby-plain colored" },
    { name: "Ruby on Rails", role: "Convention-Over-Configuration Web Architecture", icon: "devicon-rails-plain colored" },
    { name: "Kotlin", role: "Concise Multiplatform JVM Language", icon: "devicon-kotlin-plain colored" },
    { name: "Swift", role: "Fast, Safe Apple & Server Runtime", icon: "devicon-swift-plain colored" },
    { name: "Dart", role: "Client & Server Optimized Language", icon: "devicon-dart-plain colored", inVerifiedCoreStack: true },
    { name: "Elixir", role: "Fault-Tolerant Distributed Actor Runtime", icon: "devicon-elixir-plain-wordmark colored" },
    { name: "Scala", role: "High-Throughput Functional JVM Language", icon: "devicon-scala-plain colored" },
    { name: "Docker", role: "Standardized Container Runtime", icon: "devicon-docker-plain colored", inVerifiedCoreStack: true },
    { name: "Kubernetes", role: "Cloud Container Orchestration", icon: "devicon-kubernetes-line colored", inVerifiedCoreStack: true },
  ],
  Database: [
    { name: "PostgreSQL", role: "ACID Relational Object-Relational Database", icon: "devicon-postgresql-plain colored", inVerifiedCoreStack: true },
    { name: "MySQL", role: "Standard Enterprise Relational SQL Database", icon: "devicon-mysql-original colored", inVerifiedCoreStack: true },
    { name: "MariaDB", role: "High-Speed Drop-In Open Source SQL Engine", icon: "devicon-mariadb-original colored" },
    { name: "SQLite", role: "Zero-Configuration Serverless SQL Storage", icon: "devicon-sqlite-plain colored" },
    { name: "Microsoft SQL Server", role: "Enterprise Scale Relational Database", icon: "devicon-microsoftsqlserver-line colored" },
    { name: "Oracle Database", role: "Mission-Critical Multi-Model Database", icon: "devicon-oracle-original colored" },
    { name: "MongoDB", role: "Flexible Document-Oriented Distributed Store", icon: "devicon-mongodb-plain colored", inVerifiedCoreStack: true },
    { name: "Redis", role: "In-Memory Sub-Millisecond Key-Value Cache", icon: "devicon-redis-plain colored", inVerifiedCoreStack: true },
    { name: "Cassandra", role: "Linearly Scalable High-Availability NoSQL", icon: "devicon-cassandra-plain colored" },
    { name: "CouchDB", role: "Master-to-Master Replicated Document Store", icon: "devicon-couchdb-plain colored" },
    { name: "DynamoDB", role: "Managed Serverless Key-Value & Document DB", icon: "devicon-dynamodb-plain colored" },
    { name: "Firebase Firestore", role: "Real-Time Document Cloud Database", icon: "devicon-firebase-line colored" },
    { name: "Supabase", role: "PostgreSQL Backend-as-a-Service Platform", icon: "devicon-supabase-plain colored", inVerifiedCoreStack: true },
    { name: "Neo4j", role: "Native High-Performance Graph Database", icon: "devicon-neo4j-plain colored" },
    { name: "Elasticsearch", role: "Distributed Full-Text Search & Log Analytics", icon: "devicon-elasticsearch-plain colored" },
    { name: "Prisma ORM", role: "Next-Gen Type-Safe Node/TS Database ORM", icon: "devicon-prisma-original colored" },
  ],
};

const CATEGORIES_CONFIG = [
  {
    key: "Frontend" as TechCategoryType,
    label: "Frontend",
    description: "Client-side declarative frameworks, modern styling systems, and browser compilation runtimes.",
    icon: "devicon-react-original colored",
    count: DIRECTORY_DATA.Frontend.length,
  },
  {
    key: "Backend" as TechCategoryType,
    label: "Backend",
    description: "Server-side runtimes, compiled languages, distributed microservices, and API engines.",
    icon: "devicon-nodejs-plain colored",
    count: DIRECTORY_DATA.Backend.length,
  },
  {
    key: "Database" as TechCategoryType,
    label: "Database",
    description: "Relational persistence, ACID stores, document collections, vector search, and in-memory caches.",
    icon: "devicon-postgresql-plain colored",
    count: DIRECTORY_DATA.Database.length,
  },
];

export function TechnologyDirectorySection() {
  const [activeCategory, setActiveCategory] = useState<TechCategoryType>("Frontend");
  const [searchQuery, setSearchQuery] = useState("");

  const currentConfig = CATEGORIES_CONFIG.find((c) => c.key === activeCategory)!;
  const items = DIRECTORY_DATA[activeCategory];

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase().trim();
    return items.filter(
      (tech) =>
        tech.name.toLowerCase().includes(q) ||
        tech.role.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  return (
    <div className="w-full">
      {/* Notice & Context */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 border border-slate-200/80 shadow-2xs backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
          <p className="text-xs text-slate-600 font-medium">
            <span className="font-bold text-slate-900">Industry Technology Directory:</span> Reference catalog of standard technologies used in global software engineering.
          </p>
        </div>
        <div className="text-xs text-slate-500 font-semibold shrink-0">
          Showing <span className="font-bold text-blue-600">{filteredItems.length}</span> of {items.length} {activeCategory} Technologies
        </div>
      </div>

      {/* Main 2-Column Clean Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Vertical Category Selector */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 px-1">
            Technology Categories
          </div>

          <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES_CONFIG.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setSearchQuery("");
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer shrink-0 sm:shrink ${
                    isActive
                      ? "bg-white border-2 border-blue-600 shadow-md text-slate-900"
                      : "bg-white/60 hover:bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-slate-100/80 text-slate-600 border border-slate-200/60"
                      }`}
                    >
                      <i className={`${cat.icon} text-xl`} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-sm tracking-tight text-slate-900 flex items-center gap-2">
                        <span>{cat.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {cat.count} Technologies
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-sm font-bold transition-transform ${
                      isActive
                        ? "text-blue-600 translate-x-1"
                        : "text-slate-400 opacity-60"
                    }`}
                  >
                    &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Filter Box */}
          <div className="pt-4 border-t border-slate-200/70 hidden lg:block">
            <label htmlFor="tech-search-filter" className="block text-2xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Filter Within {activeCategory}
            </label>
            <div className="relative">
              <input
                id="tech-search-filter"
                type="text"
                placeholder={`Search ${activeCategory} (e.g. ${
                  activeCategory === "Frontend" ? "React, Svelte" : activeCategory === "Backend" ? "Python, Go" : "Postgres, Redis"
                })...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-2xs"
              />
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
          </div>
        </div>

        {/* Right Side: Selected Category Content */}
        <div className="lg:col-span-8 xl:col-span-9 bg-white/75 backdrop-blur-xl rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          {/* Active Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/70">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/70 mb-2">
                <span>{currentConfig.label} Ecosystem</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {currentConfig.label} Architecture Reference
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
                {currentConfig.description}
              </p>
            </div>

            {/* Mobile Filter */}
            <div className="w-full sm:w-64 lg:hidden">
              <input
                type="text"
                placeholder={`Filter ${activeCategory}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Compact Grid of Selected Category Technologies */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-sm font-semibold text-slate-600">No technologies found matching &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5">
              {filteredItems.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-50/60 group-hover:border-blue-200 transition-all shadow-2xs">
                    <TechIcon name={tech.name} className="text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-bold text-slate-900 text-sm tracking-tight truncate group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </h4>
                      {tech.inVerifiedCoreStack && (
                        <span className="shrink-0 text-3xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200" title="Verified in WebNote Production Stack">
                          Core Stack
                        </span>
                      )}
                    </div>
                    <p className="text-2xs sm:text-xs text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                      {tech.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Footnote */}
          <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-2xs text-slate-500">
            <span>
              <strong className="text-slate-700">Note:</strong> Displayed technologies represent standard industry frameworks and engines. Only items marked &ldquo;Core Stack&rdquo; are part of our verified production toolchain.
            </span>
            <Link
              href="/contact"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 whitespace-nowrap shrink-0"
            >
              Consult on Architecture &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
