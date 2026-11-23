import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 relative overflow-hidden gradient-mesh-indigo text-[#0f172a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-xl mx-auto px-4 text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl glass-surface shadow-2xl">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-blue-700 border border-blue-200/70 shadow-xs mb-6 backdrop-blur-sm">
            404 &bull; Page Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-base mb-8 max-w-md mx-auto leading-relaxed font-normal">
            The requested page could not be located. It may have been relocated during our system upgrade.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/what-we-do"
              className="px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 hover:bg-white text-slate-700 font-bold text-sm shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
