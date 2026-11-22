import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="wn-container text-center max-w-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#c5e017]/10 text-[#c5e017] flex items-center justify-center mx-auto mb-6 border border-[#c5e017]/20">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
          404 Error — Page Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
          Lost in Digital Space
        </h1>
        <p className="text-[#a0a0b8] text-base mb-8">
          The page or resource you are looking for has been relocated, refactored, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="lime" size="md">
            <ArrowLeft className="w-4 h-4 mr-1" /> Return to Homepage
          </Button>
          <Button href="/services" variant="outline" size="md">
            Browse Services
          </Button>
        </div>
      </div>
    </div>
  );
}
