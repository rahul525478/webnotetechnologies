"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CAREER_OPENINGS, COMPANY_CONTACT } from "@/data/company";
import { Hero3DCanvas } from "@/components/canvas3d/Hero3DCanvas";

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState(CAREER_OPENINGS[0].title);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        portfolioUrl: "",
        message: "",
      });
    }, 900);
  };

  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-indigo border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-white/90 border border-blue-200/70 mb-6 shadow-xs backdrop-blur-md">
                <span>Careers & Culture</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Build the Future of Digital Engineering With Us
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                Join an international collective of software architects, UI/UX engineers, and digital growth specialists solving complex challenges for high-growth enterprises worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#openings"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#151514] text-white font-bold text-sm hover:bg-black shadow-md transition-all hover:scale-[1.01]"
                >
                  View Active Openings ({CAREER_OPENINGS.length})
                </a>
                <a
                  href="#apply"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 font-bold text-sm hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  Direct Application Form
                </a>
              </div>
            </div>

            <div className="h-[420px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <Hero3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-cyan border-b border-slate-200/70">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Why WebNote
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Engineering Excellence Without Bureaucracy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass-surface space-y-4">
              <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm tabular-nums shadow-xs">
                01
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">High-Impact Global Projects</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Work directly with US and international enterprise clients building mission-critical platforms, not disposable maintenance tickets.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-surface space-y-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-sm tabular-nums shadow-xs">
                02
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Continuous Mastery & Budget</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Dedicated annual budgets for books, conferences, certifications, and high-spec workstation equipment.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-surface space-y-4">
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm tabular-nums shadow-xs">
                03
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Modern Engineering Culture</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Zero legacy baggage. Strictly typed TypeScript, modern Next.js 16, automated testing, and thoughtful code reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="openings" className="py-24 relative overflow-hidden gradient-mesh-blue">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Active Roles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Open Opportunities
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed font-normal text-base sm:text-lg">
              We review applications on a rolling basis. All positions offer competitive compensation and clear growth ladders.
            </p>
          </div>

          <div className="space-y-6">
            {CAREER_OPENINGS.map((role) => (
              <div
                key={role.id}
                className="p-8 rounded-3xl glass-surface flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-md border border-blue-200/70 shadow-2xs">
                      {role.department}
                    </span>
                    <span className="text-xs text-slate-700 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-md font-semibold shadow-2xs">
                      {role.type}
                    </span>
                    <span className="text-xs text-slate-700 bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-md font-semibold shadow-2xs">
                      {role.location}
                    </span>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md font-bold border border-emerald-200/60 shadow-2xs">
                      {role.experience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {role.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-normal">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {role.requirements.map((req, i) => (
                      <span key={i} className="text-xs text-slate-700 bg-white/70 border border-slate-200/80 px-3 py-1 rounded-lg font-medium shadow-2xs">
                        &bull; {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => {
                      setSelectedRole(role.title);
                      const el = document.getElementById("apply");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Apply for Role</span>
                    <span className="ml-1.5">&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 relative overflow-hidden gradient-mesh-warm border-t border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl glass-surface shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
                Direct Submission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Submit Your Application
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Apply directly to our engineering leadership team. We typically respond within 48 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-center space-y-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center text-xl font-bold shadow-xs">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold text-emerald-900 tracking-tight">
                  Application Received Successfully
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto font-normal">
                  Thank you for applying. Our talent lead will review your profile against the {selectedRole} requirements and get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 shadow-xs transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Role
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold shadow-2xs"
                  >
                    {CAREER_OPENINGS.map((r) => (
                      <option key={r.id} value={r.title}>
                        {r.title} ({r.department})
                      </option>
                    ))}
                    <option value="General Engineering Consideration">
                      General Engineering Consideration / Other
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Portfolio / GitHub / LinkedIn URL *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://github.com/janedoe"
                      value={formData.portfolioUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolioUrl: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Why WebNote? Tell Us About Your Work & Highlights
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your most challenging engineering or design project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01] flex items-center justify-center space-x-2"
                >
                  {submitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <span>Submit Application for {selectedRole}</span>
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200/80 text-center text-xs text-slate-500 font-medium">
              Prefer direct email? Send your resume and portfolio to{" "}
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-700 font-bold hover:underline">
                {COMPANY_CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
