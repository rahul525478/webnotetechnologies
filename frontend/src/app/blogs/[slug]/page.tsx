import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOG_POSTS, COMPANY_CONTACT } from "@/data/company";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | WebNote Technologies Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((b) => b.slug !== post.slug).slice(0, 2);

  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <article className="py-20 relative overflow-hidden gradient-mesh-indigo border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-blue-700 font-bold">{post.category}</span>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 text-blue-700 border border-blue-200/70 shadow-xs backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 font-semibold bg-white/80 border border-slate-200/70 px-2.5 py-0.5 rounded-md shadow-2xs">
              {post.readTime}
            </span>
            <span className="text-slate-300">&bull;</span>
            <span className="text-xs text-slate-500 font-semibold">
              {post.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pb-8 mb-10 border-b border-slate-200/80">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
                WN
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm tracking-tight">{post.author}</div>
                <div className="text-xs text-slate-500 font-medium">Engineering Whitepaper Series</div>
              </div>
            </div>
            <Link
              href="/blogs"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
            >
              &larr; Back to all articles
            </Link>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <div className="p-6 rounded-2xl glass-surface text-slate-800 font-normal italic mb-8">
              {post.excerpt}
            </div>

            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}

            <div className="my-10 p-8 rounded-3xl glass-surface space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Key Takeaways for Technical Leadership
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700 list-disc list-inside font-normal">
                <li>Production architectures must prioritize predictability and deterministic fallbacks over novelty.</li>
                <li>Instrumenting end-to-end telemetry early saves dozens of engineering hours during critical scaling events.</li>
                <li>Aligning engineering sprints directly to revenue objectives drives superior long-term business returns.</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 font-normal">
              Have feedback on this publication? Reach our editorial team at{" "}
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-700 font-bold hover:underline">
                {COMPANY_CONTACT.email}
              </a>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#151514] text-white text-xs font-bold hover:bg-black shadow-md transition-all hover:scale-[1.01]"
            >
              Schedule Technical Discussion
            </Link>
          </div>
        </div>
      </article>

      <section className="py-20 relative overflow-hidden gradient-mesh-cyan border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Related Whitepapers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blogs/${rel.slug}`}
                className="group p-8 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-2.5 py-1 rounded-md border border-blue-200/60 shadow-2xs">
                    {rel.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Read full article</span>
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
