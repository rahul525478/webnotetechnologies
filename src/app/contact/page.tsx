"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "Website Development",
    budget: "$10k - $25k",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real working submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="py-16 md:py-24">
      {/* Contact Header */}
      <div className="wn-container text-center mb-16">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
          Global Engagement & Discovery
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Let&apos;s Build Something <span className="wn-gradient-text">Exceptional</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          Connect with our technical architects and growth directors to scope your next engineering initiative or digital campaign.
        </p>
      </div>

      <div className="wn-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0a0a1a] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {isSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c5e017]/20 text-[#c5e017] flex items-center justify-center mx-auto mb-6 border border-[#c5e017]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-white">
                  Inquiry Successfully Received
                </h2>
                <p className="mt-4 text-[#a0a0b8] text-base max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to WebNote Technologies. One of our Senior Technical Directors will review your project requirements and connect within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      companyName: "",
                      service: "Website Development",
                      budget: "$10k - $25k",
                      description: "",
                    });
                  }}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-[#111128] text-white hover:text-[#c5e017] border border-white/10 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Project Inquiry Form
                </h2>
                <p className="text-sm text-[#a0a0b8] mb-8">
                  Fill in your project parameters below to initiate discovery.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Johnathan Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="Acme Global Inc."
                        className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                        Service Interested In *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing & GEO">Digital Marketing & GEO</option>
                        <option value="AI Automation & Agents">AI Automation & Agents</option>
                        <option value="CRM Solutions">CRM & Pipeline Solutions</option>
                        <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                        <option value="3D Animation & Video">3D Animation & Video</option>
                        <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                        Estimated Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                      >
                        <option value="$10k - $25k">$10,000 – $25,000</option>
                        <option value="$25k - $50k">$25,000 – $50,000</option>
                        <option value="$50k - $100k">$50,000 – $100,000</option>
                        <option value="$100k+">$100,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#a0a0b8] uppercase mb-2">
                      Project Description & Key Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Share details on your target audience, existing stack, and expected launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#111128] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c5e017]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#c5e017] text-[#0a0a0a] font-bold text-base hover:bg-[#a8bf00] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Request Discovery Consultation
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#a0a0b8] pt-2">
                    <ShieldCheck className="w-4 h-4 text-[#c5e017]" />
                    <span>Strict mutual NDA guaranteed. Your IP and ideas remain 100% confidential.</span>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Corporate Coordinates & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0a0a1a] border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Direct Corporate Coordinates
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111128] flex items-center justify-center text-[#c5e017] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a0a0b8] uppercase font-semibold">
                      General & Technical Inquiries
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-white hover:text-[#c5e017] transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111128] flex items-center justify-center text-[#c5e017] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a0a0b8] uppercase font-semibold">
                      Direct Telephone Line
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-base font-bold text-white hover:text-[#c5e017] transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111128] flex items-center justify-center text-[#c5e017] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a0a0b8] uppercase font-semibold">
                      Registered Office
                    </div>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city},{" "}
                      {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip},{" "}
                      {SITE_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111128] flex items-center justify-center text-[#c5e017] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#a0a0b8] uppercase font-semibold">
                      Operating Schedule
                    </div>
                    <p className="text-sm font-medium text-white">
                      Monday – Friday: 9:00 AM – 6:00 PM EST
                    </p>
                    <p className="text-xs text-[#a0a0b8] mt-0.5">
                      24/7 on-call SLA for active infrastructure retainers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111128] to-[#161632] border border-[#c5e017]/30">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
                Client Service Commitment
              </span>
              <h4 className="text-lg font-bold text-white mt-2">
                Guaranteed 24-Hour Review
              </h4>
              <p className="text-sm text-[#a0a0b8] mt-2 leading-relaxed">
                Every technical inquiry receives direct review from an active software architect or growth strategist, not an outsourced script.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
