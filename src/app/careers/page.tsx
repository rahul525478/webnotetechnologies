import { Metadata } from "next";
import Link from "next/link";
import { ALL_OPENINGS } from "@/data/careersData";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Globe2,
  HeartHandshake,
  Laptop,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers & Open Positions | WebNote Technologies",
  description:
    "Join WebNote Technologies' international engineering team. Explore remote career opportunities in full-stack engineering, 3D WebGL development, and digital growth.",
};

const culturePillars = [
  {
    icon: Globe2,
    title: "Global Remote Culture",
    desc: "Collaborate asynchronously with high-caliber software craftsmen across the United States, Europe, and Asia.",
  },
  {
    icon: Laptop,
    title: "Engineering Autonomy",
    desc: "We prize output over hours. Work with modern tech stacks without cumbersome legacy bureaucracy.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Mastery",
    desc: "Annual $2,500 learning allowances, conference sponsorships, and dedicated time for experimental R&D.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Well-being",
    desc: "Competitive compensation, top-tier healthcare, unlimited PTO, and mental health support.",
  },
];

export default function CareersPage() {
  return (
    <div className="py-16 md:py-24">
      {/* Careers Hero */}
      <div className="wn-container text-center mb-20">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
          Join Our International Team
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Build the Future of <span className="wn-gradient-text">Digital Technology</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          We are assembling an elite team of software engineers, creative technologists, and digital strategists shaping the digital experiences of tomorrow.
        </p>
      </div>

      {/* Why Join Us / Culture Pillars */}
      <div className="wn-container mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
            Why Join WebNote
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            A Culture of Craftsmanship and Respect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culturePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#111128] border border-white/10 flex items-center justify-center text-[#c5e017] mb-6">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#a0a0b8] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Open Positions */}
      <div className="wn-container mb-24">
        <div className="border-b border-white/10 pb-6 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
              Current Openings
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Active Career Opportunities
            </h2>
          </div>
          <div className="text-sm text-[#a0a0b8]">
            <span className="font-bold text-white">{ALL_OPENINGS.length}</span> positions currently accepting applications
          </div>
        </div>

        <div className="space-y-6">
          {ALL_OPENINGS.map((opening) => (
            <div
              key={opening.slug}
              className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,224,23,0.1)]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#111128] text-[#c5e017] border border-white/10">
                    {opening.department}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#a0a0b8]">
                    <MapPin className="w-3.5 h-3.5" /> {opening.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#a0a0b8]">
                    <Clock className="w-3.5 h-3.5" /> {opening.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {opening.title}
                </h3>
                <p className="text-sm text-[#a0a0b8] mt-2 max-w-3xl leading-relaxed">
                  {opening.overview}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/careers/${opening.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c5e017] text-[#0a0a0a] font-bold text-sm hover:bg-[#a8bf00] transition-colors"
                >
                  View Role & Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Application Note */}
      <div className="wn-container">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white">
            Don&apos;t See Your Exact Role Listed?
          </h2>
          <p className="mt-4 text-[#a0a0b8] max-w-2xl mx-auto text-base">
            We are always interested in connecting with world-class engineers and creative talents. Send us your portfolio and GitHub profile.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Send General Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
