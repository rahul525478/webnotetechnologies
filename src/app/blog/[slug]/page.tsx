import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ALL_POSTS } from "@/data/blogData";
import {
  Calendar,
  Clock,
  ChevronRight,
  Share2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | WebNote Technologies Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | WebNote Technologies`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostDetailPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = ALL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="py-12 md:py-20">
      {/* Breadcrumb Navigation */}
      <div className="wn-container mb-8">
        <nav className="flex items-center gap-2 text-xs text-[#a0a0b8]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#c5e017] font-medium truncate max-w-xs">
            {post.title}
          </span>
        </nav>
      </div>

      {/* Article Header */}
      <div className="wn-container max-w-4xl mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-xs text-[#a0a0b8]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] leading-relaxed border-l-2 border-[#c5e017] pl-4">
          {post.excerpt}
        </p>

        {/* Author Bio Banner */}
        <div className="flex items-center justify-between py-6 mt-8 border-y border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#111128] border border-[#c5e017]/30 flex items-center justify-center font-bold text-sm text-[#c5e017]">
              {post.author.name[0]}
            </div>
            <div>
              <div className="text-base font-bold text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-[#a0a0b8]">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#a0a0b8] flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" /> Share Insight
            </span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="wn-container max-w-4xl mb-20">
        <div className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-[#f0f0f5] space-y-6">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-[#a0a0b8] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-white mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs bg-[#111128] border border-white/5 text-[#a0a0b8]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="wn-container max-w-4xl mb-20">
          <div className="border-t border-white/10 pt-12 mb-8">
            <h2 className="text-2xl font-bold text-white">Related Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-6 rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="text-[11px] text-[#c5e017] font-semibold uppercase">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 leading-snug">
                    {rel.title}
                  </h3>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-[#a0a0b8]">
                  <span>{rel.readTime}</span>
                  <span className="text-[#c5e017] font-semibold inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Newsletter & Contact CTA */}
      <div className="wn-container max-w-4xl">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Proven Technology Engineering Partner?
          </h2>
          <p className="mt-3 text-[#a0a0b8] text-sm sm:text-base max-w-xl mx-auto">
            Discuss your technical roadmap, architecture, or digital growth initiatives with our specialists.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/contact" variant="lime" size="md">
              Start Project Inquiry
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
