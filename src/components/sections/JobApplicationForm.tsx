"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export function JobApplicationForm({ roleTitle }: { roleTitle: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate working submission service confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-[#c5e017]/20 text-[#c5e017] flex items-center justify-center mx-auto mb-4 border border-[#c5e017]/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">Application Received!</h3>
        <p className="text-sm text-[#a0a0b8] mt-2">
          Thank you for applying for the <span className="text-white font-medium">{roleTitle}</span> role. Our engineering recruitment team will review your portfolio and follow up within 3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Jane Doe"
          className="w-full px-4 py-2.5 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="jane@example.com"
          className="w-full px-4 py-2.5 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
          className="w-full px-4 py-2.5 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-1.5">
          LinkedIn / GitHub URL *
        </label>
        <input
          type="url"
          required
          value={formData.linkedin}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          placeholder="https://linkedin.com/in/username"
          className="w-full px-4 py-2.5 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-1.5">
          Portfolio / Code Samples
        </label>
        <input
          type="url"
          value={formData.portfolio}
          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
          placeholder="https://mywork.dev"
          className="w-full px-4 py-2.5 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-1.5">
          Brief Introduction / Cover Note
        </label>
        <textarea
          rows={3}
          value={formData.coverNote}
          onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
          placeholder="Tell us what excites you about this role..."
          className="w-full px-4 py-2.5 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-[#c5e017] text-[#0a0a0a] font-bold text-sm hover:bg-[#a8bf00] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Submit Application
          </>
        )}
      </button>
    </form>
  );
}
