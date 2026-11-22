import Link from "next/link";
import { Metadata } from "next";
import { HeroScene } from "@/components/three/HeroScene";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { ALL_PROJECTS } from "@/data/portfolioData";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  Code2,
  TrendingUp,
  Terminal,
  Activity,
  Award,
  ChevronRight,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WebNote Technologies | Premium IT, Software & Digital Growth Agency",
  description:
    "Building Digital Experiences. Empowering Businesses. Shaping the Future. WebNote Technologies is a world-class IT partner delivering enterprise software, 3D web experiences, and US market digital growth.",
};

const workingProcess = [
  { step: "01", title: "Discover", desc: "Deconstruct your business model, ICP constraints, and target growth metrics." },
  { step: "02", title: "Plan", desc: "Architect technical specifications, schema blueprints, and milestone roadmaps." },
  { step: "03", title: "Design", desc: "Craft bespoke UI/UX, interactive 3D components, and conversion-optimized wireframes." },
  { step: "04", title: "Develop", desc: "Engineer clean, typed, modular code utilizing Next.js, TypeScript, and modern APIs." },
  { step: "05", title: "Test", desc: "Execute automated unit tests, cross-browser validation, and load stress testing." },
  { step: "06", title: "Launch", desc: "Deploy via zero-downtime CI/CD edge pipelines with pre-warmed CDN caches." },
  { step: "07", title: "Support", desc: "Provide 24/7 telemetry monitoring, security patching, and ongoing growth iterations." },
];

const industriesWeServe = [
  { name: "Healthcare & Life Sciences", desc: "HIPAA-compliant telehealth platforms, EHR integrations, and patient portals." },
  { name: "Fintech & Wealth Management", desc: "Real-time trading feeds, SOC2-aligned client portals, and algorithmic calculators." },
  { name: "E-commerce & D2C Retail", desc: "Ultra-fast headless Shopify Plus stores, 3D product visualizers, and 1-click checkouts." },
  { name: "Startups & Venture SaaS", desc: "Rapid MVP development, multi-tenant database isolation, and Stripe billing setups." },
  { name: "Education & EdTech", desc: "Interactive learning management systems (LMS), student portals, and video streaming." },
  { name: "Real Estate & PropTech", desc: "Interactive architectural 3D showcases, MLS search portals, and CRM leads." },
  { name: "Manufacturing & Supply Chain", desc: "Automated bill-of-lading processing, ERP bridges, and IoT telemetry dashboards." },
  { name: "Professional B2B Services", desc: "High-ticket corporate web presence, speed-to-lead routing, and LinkedIn ABM funnels." },
];

const whyChooseUsPoints = [
  {
    title: "Zero Outsourced Mystery",
    desc: "Work directly with seasoned software architects and growth engineers dedicated to your technical success.",
  },
  {
    title: "Engineered for Sub-Second Speed",
    desc: "Every website and application we build is benchmarked to dominate Google Core Web Vitals and user retention.",
  },
  {
    title: "US Market Commercial Alignment",
    desc: "Our digital marketing, SEO, and paid media funnels are calibrated specifically for high-intent American and international buyers.",
  },
  {
    title: "Bespoke 3D & Immersive Design",
    desc: "We ditch cookie-cutter templates to produce memorable, award-winning interactive visual identities.",
  },
  {
    title: "Strict Code Standards & Full IP Ownership",
    desc: "Clean TypeScript codebases, comprehensive documentation, and 100% intellectual property ownership transferred to you.",
  },
  {
    title: "Continuous Scalability & Resilience",
    desc: "Cloud architectures engineered on AWS, Docker, and edge networks designed to handle viral spikes without crashing.",
  },
];

const clientTestimonials = [
  {
    quote:
      "WebNote Technologies completely elevated our digital presence. Their ability to fuse jaw-dropping 3D visuals with sub-second page performance helped us convert high-ticket enterprise contracts in the US market.",
    author: "David Sterling",
    role: "VP of Product Strategy (Sample Client Review)",
    company: "Apex Global Systems",
  },
  {
    quote:
      "Unlike conventional IT vendors, WebNote operates as a true technical partner. Their Generative Engine Optimization and full-stack engineering delivered measurable pipeline growth within 90 days.",
    author: "Samantha Lee",
    role: "Chief Marketing Officer (Sample Client Review)",
    company: "VentureScale Health",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 overflow-hidden">
        {/* 3D Interactive Canvas Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>

        {/* Ambient Overlay & Grid Pattern */}
        <div className="absolute inset-0 wn-grid-bg opacity-30 pointer-events-none" />

        <div className="wn-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>International Technology & Growth Agency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight max-w-5xl mx-auto leading-[1.08]">
            Building Digital Experiences.{" "}
            <span className="wn-gradient-text">Shaping the Future.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-[#a0a0b8] max-w-3xl mx-auto font-normal leading-relaxed">
            WebNote Technologies engineers high-performance web applications, native mobile ecosystems, cinematic 3D web experiences, and data-driven US market growth systems for ambitious businesses worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Start a Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Our Capabilities
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-[#a0a0b8] text-xs font-semibold tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5e017]" /> 99.99% Uptime Architecture
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#c5e017]" /> Sub-Second Core Web Vitals
            </span>
            <span className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#c5e017]" /> US & Global Market Scale
            </span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT WEBNOTE TECHNOLOGIES */}
      <section className="py-24 bg-[#0a0a1a] border-y border-white/5 relative">
        <div className="wn-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 leading-tight">
                An International Agency Born to Eliminate{" "}
                <span className="wn-gradient-text">Digital Mediocrity</span>
              </h2>
              <p className="mt-6 text-[#a0a0b8] text-base sm:text-lg leading-relaxed">
                WebNote Technologies was founded on a singular conviction: technology companies and fast-growing businesses deserve digital experiences that reflect their true market caliber. We refuse ordinary templates, sluggish legacy frameworks, and hollow promises.
              </p>
              <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg leading-relaxed">
                Our interdisciplinary studio brings together software architects, creative technologists, 3D modelers, and seasoned digital growth strategists to build proprietary digital assets that win clients and scale revenue.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#111128] border border-white/5">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#c5e017]">
                    Our Mission
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a0a0b8] mt-2 leading-relaxed">
                    To empower enterprises and entrepreneurs with resilient, scalable digital systems and marketing engines that command global market authority.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#111128] border border-white/5">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#c5e017]">
                    Our Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a0a0b8] mt-2 leading-relaxed">
                    To be the foremost international technology agency recognized worldwide for technical ingenuity, cinematic visual craft, and transparent client partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#111128] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c5e017]/10 text-[#c5e017] flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Modern Tech Stacks Only
                    </h3>
                    <p className="text-sm text-[#a0a0b8] mt-1">
                      Next.js 15, TypeScript, React 19, Python, Three.js, and cloud containerization — zero outdated bloat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      US Market Calibration
                    </h3>
                    <p className="text-sm text-[#a0a0b8] mt-1">
                      Positioned directly to engage American startups, enterprises, and high-ticket B2B decision-makers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Cinematic 3D Distinction
                    </h3>
                    <p className="text-sm text-[#a0a0b8] mt-1">
                      Award-winning interactive WebGL design that cements institutional prestige and brand recall.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex justify-end">
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-[#c5e017] hover:underline inline-flex items-center gap-1"
                >
                  Schedule an Executive Introduction <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-24 wn-section">
        <div className="wn-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
                Full-Lifecycle <span className="wn-gradient-text">Service Catalog</span>
              </h2>
              <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg max-w-2xl">
                Explore our dedicated service offerings. Each discipline is engineered to operate autonomously or integrate into an end-to-end digital transformation program.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#c5e017] hover:underline shrink-0"
            >
              Browse Complete Directory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.slug}
                className="group relative rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,224,23,0.12)] hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#111128] border border-white/10 flex items-center justify-center text-[#c5e017] mb-6 group-hover:scale-110 group-hover:border-[#c5e017]/30 transition-all">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c5e017] transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#a0a0b8] leading-relaxed">
                    {category.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#a0a0b8]">Practice Area</span>
                  <Link
                    href={`/services#${category.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#c5e017] group-hover:translate-x-1 transition-transform"
                  >
                    View Offerings <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY EXPERTISE SHOWCASE */}
      <section className="py-24 bg-[#0a0a1a] border-y border-white/5">
        <div className="wn-container text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
            Engineered with <span className="wn-gradient-text">World-Class Technologies</span>
          </h2>
          <p className="mt-4 text-[#a0a0b8] max-w-2xl mx-auto text-base sm:text-lg">
            We build exclusively on battle-tested, high-throughput technologies that deliver speed, security, and effortless maintainability.
          </p>
        </div>

        <div className="wn-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Next.js 15", category: "Frontend", slug: "nextjs" },
              { name: "React 19", category: "Frontend", slug: "react" },
              { name: "TypeScript", category: "Language", slug: "typescript" },
              { name: "Tailwind CSS", category: "Styling", slug: "tailwind-css" },
              { name: "Three.js", category: "3D Graphics", slug: "threejs" },
              { name: "Node.js", category: "Backend", slug: "nodejs" },
              { name: "Python", category: "AI & ML", slug: "python" },
              { name: "PostgreSQL", category: "Database", slug: "postgresql" },
              { name: "MongoDB", category: "NoSQL DB", slug: "mongodb" },
              { name: "AWS Cloud", category: "DevOps", slug: "aws" },
              { name: "Docker", category: "Containers", slug: "docker" },
              { name: "LangChain", category: "AI Agents", slug: "langchain-ai" },
            ].map((t) => (
              <Link
                key={t.slug}
                href={`/technologies/${t.slug}`}
                className="p-5 rounded-2xl bg-[#111128] border border-white/5 hover:border-[#c5e017]/40 flex flex-col items-center text-center transition-all group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(197,224,23,0.1)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a0a1a] flex items-center justify-center text-[#c5e017] mb-3 group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-white group-hover:text-[#c5e017] transition-colors">
                  {t.name}
                </span>
                <span className="text-[10px] text-[#a0a0b8] uppercase tracking-wider mt-1">
                  {t.category}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/technologies" variant="outline" size="md">
              Browse Complete 80+ Technology Directory →
            </Button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 wn-section">
        <div className="wn-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              The WebNote Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Why Global Leaders Partner With Us
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg">
              We operate with uncompromising standards to safeguard your timeline, capital investment, and market reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#c5e017]/10 text-[#c5e017] flex items-center justify-center font-black text-sm mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#a0a0b8] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR WORKING PROCESS */}
      <section className="py-24 bg-[#0a0a1a] border-y border-white/5">
        <div className="wn-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              Disciplined Execution
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Our 7-Stage Delivery Framework
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg">
              Transparent, milestone-based execution engineered to eliminate scope creep and deliver zero-downtime launches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {workingProcess.map((proc) => (
              <div
                key={proc.step}
                className="p-6 rounded-2xl bg-[#111128] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#c5e017] opacity-80">
                    {proc.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-[#a0a0b8] mt-2 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO PREVIEW */}
      <section className="py-24 wn-section">
        <div className="wn-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
                Proven Impact
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
                Selected Work & Case Studies
              </h2>
              <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg max-w-2xl">
                Explore our featured software architectures, mobile apps, and enterprise AI automation projects.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#c5e017] hover:underline shrink-0"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_PROJECTS.slice(0, 2).map((project) => (
              <div
                key={project.slug}
                className="group rounded-3xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(197,224,23,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-[#111128] text-[#c5e017] border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#a0a0b8]">{project.industry}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-[#c5e017] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-[#c5e017]">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-sm text-[#a0a0b8] leading-relaxed line-clamp-3">
                    {project.challenge}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-6 py-4 border-y border-white/5">
                    {project.outcomes.map((out, i) => (
                      <div key={i}>
                        <div className="text-lg sm:text-xl font-bold text-[#c5e017]">
                          {out.metric}
                        </div>
                        <div className="text-[11px] text-[#a0a0b8] mt-0.5 leading-tight">
                          {out.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologiesUsed.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-[#a0a0b8]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#c5e017] hover:underline"
                  >
                    Case Study <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-[#0a0a1a] border-y border-white/5">
        <div className="wn-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              Specialized Domain Know-How
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Industries We Serve
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-base sm:text-lg">
              Tailoring technical compliance, compliance regulations, and conversion mechanics to industry-specific landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesWeServe.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111128] border border-white/5 hover:border-[#c5e017]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0a0a1a] text-[#c5e017] flex items-center justify-center font-bold text-sm mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#a0a0b8] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 wn-section">
        <div className="wn-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              Client Perspectives
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Trusted by Ambitious Brands
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-sm">
              *Sample illustrative testimonials demonstrating our standard client collaboration feedback framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {clientTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#0a0a1a] border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-10 h-10 text-[#c5e017]/30 mb-6" />
                  <p className="text-base sm:text-lg text-white leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-base font-bold text-white">{t.author}</div>
                  <div className="text-xs text-[#c5e017] mt-0.5">{t.role}</div>
                  <div className="text-xs text-[#a0a0b8] mt-0.5">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="py-20 wn-container">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1a237e]/50 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 sm:p-16 text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017] bg-[#c5e017]/10 px-3.5 py-1.5 rounded-full border border-[#c5e017]/20">
              Start Your Digital Transformation
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-6 leading-tight">
              Ready to Build Something Extraordinary Together?
            </h2>
            <p className="mt-6 text-[#a0a0b8] text-base sm:text-lg leading-relaxed">
              Let&apos;s turn your vision into an authoritative digital reality. Connect with our technical directors today for an obligation-free technical discovery call.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="lime" size="lg">
                Schedule Technical Discovery
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                Explore Case Studies
              </Button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c5e017]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#1a237e]/30 blur-[100px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
