import { Metadata } from "next";
import Link from "next/link";
import { ALL_POSTS } from "@/data/blogData";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Engineering & Digital Growth Blog | WebNote Technologies",
  description:
    "Insights on modern web architecture, Generative Engine Optimization (GEO), enterprise Next.js, 3D WebGL development, and US market tech trends.",
};

export default function BlogIndexPage() {
  const featuredPost = ALL_POSTS.find((p) => p.featured) || ALL_POSTS[0];
  const regularPosts = ALL_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="py-16 md:py-24">
      {/* Blog Hero Header */}
      <div className="wn-container text-center mb-16">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
          Thought Leadership & Tech Insights
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          WebNote <span className="wn-gradient-text">Engineering Blog</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          Deep-dive technical perspectives on software engineering, AI search paradigms, performance benchmarks, and international digital growth.
        </p>
      </div>

      {/* Featured Article Card */}
      {featuredPost && (
        <div className="wn-container mb-20">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block relative rounded-3xl bg-gradient-to-br from-[#0a0a2e] via-[#0a0a1a] to-[#111128] border border-white/10 hover:border-[#c5e017]/40 p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_0_35px_rgba(197,224,23,0.1)]"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5e017] text-[#0a0a0a]">
                Featured Article
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-[#111128] border border-white/10 text-[#a0a0b8]">
                {featuredPost.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-[#a0a0b8] ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {featuredPost.publishedAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#c5e017] transition-colors leading-tight">
              {featuredPost.title}
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg leading-relaxed max-w-4xl">
              {featuredPost.excerpt}
            </p>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111128] border border-white/10 flex items-center justify-center font-bold text-xs text-[#c5e017]">
                  {featuredPost.author.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {featuredPost.author.name}
                  </div>
                  <div className="text-xs text-[#a0a0b8]">
                    {featuredPost.author.role}
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c5e017] group-hover:translate-x-1 transition-transform">
                Read Full Analysis <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* Grid of Other Articles */}
      <div className="wn-container">
        <div className="border-b border-white/10 pb-4 mb-10">
          <h2 className="text-2xl font-bold text-white">Recent Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,224,23,0.1)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#a0a0b8] mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#111128] text-[#c5e017] font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#c5e017] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-[#a0a0b8] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#a0a0b8]">
                  {post.publishedAt}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c5e017] group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
