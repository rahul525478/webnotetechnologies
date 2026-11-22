import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ALL_OPENINGS } from "@/data/careersData";
import {
  MapPin,
  Clock,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { JobApplicationForm } from "@/components/sections/JobApplicationForm";

interface CareerDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_OPENINGS.map((op) => ({
    slug: op.slug,
  }));
}

export async function generateMetadata({
  params,
}: CareerDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const opening = ALL_OPENINGS.find((o) => o.slug === slug);
  if (!opening) return { title: "Position Not Found" };

  return {
    title: `${opening.title} | Careers | WebNote Technologies`,
    description: opening.overview,
  };
}

export default async function CareerDetailPage(props: CareerDetailProps) {
  const { slug } = await props.params;
  const opening = ALL_OPENINGS.find((o) => o.slug === slug);

  if (!opening) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      {/* Breadcrumb Navigation */}
      <div className="wn-container mb-8">
        <nav className="flex items-center gap-2 text-xs text-[#a0a0b8]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/careers" className="hover:text-white transition-colors">
            Careers
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#c5e017] font-medium">{opening.title}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <div className="wn-container mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a0a2e] via-[#0a0a1a] to-[#111128] border border-white/10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20">
              {opening.department}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#a0a0b8]">
              <MapPin className="w-3.5 h-3.5" /> {opening.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#a0a0b8]">
              <Clock className="w-3.5 h-3.5" /> {opening.type}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {opening.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#a0a0b8] max-w-3xl leading-relaxed">
            {opening.overview}
          </p>
        </div>
      </div>

      {/* Main Grid: Details + Application Form */}
      <div className="wn-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Responsibilities, Requirements, Benefits */}
          <div className="lg:col-span-7 space-y-12">
            {/* Responsibilities */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {opening.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#a0a0b8] leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#c5e017] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Qualifications & Technical Requirements
              </h2>
              <ul className="space-y-4">
                {opening.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#a0a0b8] leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-[#c5e017] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Compensation & Benefits
              </h2>
              <ul className="space-y-4">
                {opening.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#a0a0b8] leading-relaxed">
                    <Sparkles className="w-5 h-5 text-[#c5e017] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-8 rounded-2xl bg-[#0a0a1a] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Apply for this Position
              </h2>
              <p className="text-xs text-[#a0a0b8] mb-6">
                Submit your credentials directly to our engineering hiring team.
              </p>
              <JobApplicationForm roleTitle={opening.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
