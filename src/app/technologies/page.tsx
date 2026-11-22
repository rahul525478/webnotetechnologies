import { Metadata } from "next";
import { TechDirectoryClient } from "@/components/sections/TechDirectoryClient";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Technicals | Enterprise Technology Directory",
  description:
    "Explore WebNote Technologies' engineering directory: frontend frameworks, backend environments, cloud DevOps, databases, mobile SDKs, and AI/ML architectures.",
};

export default function TechnologiesPage() {
  return (
    <div className="py-16 md:py-24">
      {/* Directory Hero */}
      <div className="wn-container text-center mb-16">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
          Architectural Expertise
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Modern Technology <span className="wn-gradient-text">Directory</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          We maintain rigorous standards for the tools, runtimes, and frameworks we deploy into production. Explore our active technology capabilities.
        </p>
      </div>

      <div className="wn-container">
        <TechDirectoryClient />
      </div>

      {/* Custom Stack Consultation CTA */}
      <div className="wn-container mt-28">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl font-bold text-white">
            Have a Specific Technology Stack or Legacy Migration Need?
          </h2>
          <p className="mt-3 text-[#a0a0b8] max-w-2xl mx-auto text-base">
            Our principal software architects audit legacy systems, design migration pathways, and integrate bespoke microservices.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="lime" size="lg">
              Consult with a Lead Architect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
