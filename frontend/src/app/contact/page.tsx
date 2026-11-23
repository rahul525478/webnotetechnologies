"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/data/company";
import { GlobalGlobe3DCanvas } from "@/components/canvas3d/GlobalGlobe3DCanvas";
import { PhoneCallIcon, MailIcon, MapPinIcon } from "@/components/navigation/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceInterest: "Enterprise Web Development",
    budgetRange: "$10,000 - $25,000",
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
        companyName: "",
        serviceInterest: "Enterprise Web Development",
        budgetRange: "$10,000 - $25,000",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative py-20 overflow-hidden gradient-mesh-cyan border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/35 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 bg-white/90 border border-blue-200/70 mb-6 shadow-xs backdrop-blur-md">
                <span>Start a Project</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Let&apos;s Build Something Extraordinary Together
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-normal">
                Connect directly with our solutions architects to discuss your technical specifications, project timeline, and growth objectives. We support clients globally across all timezones.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl glass-surface flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 shrink-0 shadow-2xs">
                    <PhoneCallIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Telephone Support
                    </div>
                    <a
                      href={`tel:${COMPANY_CONTACT.usPhone}`}
                      className="text-base font-extrabold text-slate-900 hover:text-blue-600 block transition-colors mt-0.5"
                    >
                      US: {COMPANY_CONTACT.usPhoneDisplay}
                    </a>
                    <div className="text-xs text-slate-600 mt-1 space-x-2 font-medium">
                      <a href={`tel:${COMPANY_CONTACT.indiaPhone1}`} className="hover:text-blue-600 transition-colors">
                        IN: {COMPANY_CONTACT.indiaPhone1Display}
                      </a>
                      <span>&bull;</span>
                      <a href={`tel:${COMPANY_CONTACT.indiaPhone2}`} className="hover:text-blue-600 transition-colors">
                        {COMPANY_CONTACT.indiaPhone2Display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-surface flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/60 shrink-0 shadow-2xs">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="text-base font-extrabold text-blue-700 hover:underline block mt-0.5"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Average response time: &lt; 2 hours</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-surface flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0 shadow-2xs">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Corporate Office
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed max-w-md font-normal mt-0.5">
                      {COMPANY_CONTACT.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[460px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <GlobalGlobe3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-indigo">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl glass-surface shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
                Detailed Inquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
                Project Discovery Questionnaire
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Fill out the form below to receive a customized architectural proposal and milestone estimate.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-center space-y-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center text-xl font-bold shadow-xs">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold text-emerald-900 tracking-tight">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto font-normal">
                  Thank you for reaching out to WebNote Technologies. One of our lead architects will contact you shortly to schedule an initial discovery call.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 shadow-xs transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="David Sterling"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
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
                      placeholder="+1 (936) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Enterprises"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceInterest: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold shadow-2xs"
                    >
                      <option value="Enterprise Web Development">Enterprise Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Digital Marketing & Performance">Digital Marketing & Performance</option>
                      <option value="Technical SEO & GEO">Technical SEO & GEO</option>
                      <option value="Autonomous AI Automation">Autonomous AI Automation</option>
                      <option value="Custom SaaS / Cloud Architecture">Custom SaaS / Cloud Architecture</option>
                      <option value="UI/UX & 3D Interactive Design">UI/UX & 3D Interactive Design</option>
                      <option value="General Architecture Consultation">General Architecture Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Estimated Investment Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetRange: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold shadow-2xs"
                    >
                      <option value="< $10,000">&lt; $10,000 (Discovery / MVP)</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000 (Standard Sprint)</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (Full Platform)</option>
                      <option value="$50,000+">$50,000+ (Enterprise Multi-Month)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Overview & Timeline Constraints
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current tech stack, target goals, key dates, or any specific constraints..."
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
                    <span>Submitting Technical Proposal Request...</span>
                  ) : (
                    <span>Request Proposal & Milestone Estimate</span>
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-2">
              <span>Protected by mutual non-disclosure policy.</span>
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-700 font-bold hover:underline">
                Direct Email: {COMPANY_CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
