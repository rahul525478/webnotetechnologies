import { Metadata } from "next";
import Link from "next/link";
import { ALL_PROJECTS } from "@/data/portfolioData";
import { ArrowRight, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | WebNote Technologies",
  description:
    "Explore our featured software engineering, web application, mobile ecosystem, and AI automation case studies built for global enterprise scale.",
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24">
      {/* Portfolio Header */}
      <div className="wn-container text-center mb-16">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
          Proven Engineering Excellence
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Selected Work & <span className="wn-gradient-text">Case Studies</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          Examine how WebNote Technologies approaches complex software development, 3D interactive design, and performance-tuned acquisition platforms.
        </p>

        {/* Transparent Concept Note */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>Showcase architectures and concept case studies demonstrating our technical implementation capabilities.</span>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="wn-container space-y-16">
        {ALL_PROJECTS.map((project, idx) => (
          <div
            key={project.slug}
            className="rounded-3xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_0_35px_rgba(197,224,23,0.1)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#111128] text-[#c5e017] border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#a0a0b8]">
                    {project.industry}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-[#c5e017]">
                  {project.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#a0a0b8] leading-relaxed">
                  {project.challenge}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 my-6 py-6 border-y border-white/5">
                  {project.outcomes.map((out, i) => (
                    <div key={i}>
                      <span className="text-xl sm:text-2xl font-black text-[#c5e017]">
                        {out.metric}
                      </span>
                      <p className="text-xs text-[#a0a0b8] mt-1">{out.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c5e017] text-[#0a0a0a] font-bold text-sm hover:bg-[#a8bf00] transition-colors"
                  >
                    Read Detailed Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Technologies Column */}
              <div className="lg:col-span-5 bg-[#111128]/70 border border-white/5 rounded-2xl p-6 sm:p-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Technologies Deployed
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0a0a1a] border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                  Services Provided
                </h3>
                <ul className="space-y-2">
                  {project.servicesProvided.map((service, i) => (
                    <li key={i} className="text-xs text-[#a0a0b8] flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5e017]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Start Project CTA */}
      <div className="wn-container mt-28">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Have a Project Requiring Similar Technical Precision?
          </h2>
          <p className="mt-4 text-[#a0a0b8] max-w-2xl mx-auto text-base">
            Whether building a scalable web app, a native mobile ecosystem, or an AI workflow, we deliver measurable outcomes.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Start Your Project Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
