import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/company";

export const metadata: Metadata = {
  title: "Blogs & Technical Insights | WebNote Technologies",
  description:
    "Engineering insights, AI architecture breakdowns, Next.js performance deep dives, and US digital marketing strategies from WebNote Technologies.",
};

export default function BlogsPage() {
  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-indigo border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-white/90 border border-blue-200/70 mb-6 shadow-xs backdrop-blur-md">
            <span>Engineering & Strategy Publications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Technical Research, Architecture Guides & Market Insights
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Essays and technical whitepapers authored by our lead software architects, AI researchers, and digital growth strategists.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-blue">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group p-8 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/70 shadow-2xs">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold bg-white/80 border border-slate-200/70 px-2.5 py-0.5 rounded-md shadow-2xs">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="font-bold text-slate-800">{post.author}</span>
                    <span className="mx-1.5">&bull;</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Article</span>
                    <span className="ml-1">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-cyan border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl glass-surface">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Stay Ahead of Emerging Engineering Paradigms
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm font-normal">
              We publish quarterly deep-dives on LLM evaluation, Next.js optimization, and international digital growth strategies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
            >
              <span>Subscribe to Engineering Memo</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
