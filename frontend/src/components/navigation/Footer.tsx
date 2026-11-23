"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/data/company";
import { ArrowUpRightIcon } from "./Icons";
import { NavLogo } from "./NavLogo";
import { getTechDeviconClass } from "@/lib/devicon";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative gradient-mesh-blue border-t border-slate-200/80 pt-16 pb-12 overflow-hidden text-slate-800">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-300/25 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-200/80">
          <div className="lg:col-span-2 space-y-5">
            <NavLogo />

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              WebNote Technologies Private Limited is a global digital engineering and growth agency. We specialize in enterprise-grade software, cloud platforms, mobile applications, and high-impact digital marketing.
            </p>

            <div className="space-y-2.5 pt-2 p-5 rounded-2xl glass-surface">
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <span className="font-bold text-slate-900 min-w-16">USA Phone:</span>
                <a
                  href={`tel:${COMPANY_CONTACT.usPhone}`}
                  className="text-blue-600 hover:text-blue-800 font-bold transition-colors"
                >
                  {COMPANY_CONTACT.usPhoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <span className="font-bold text-slate-900 min-w-16">India:</span>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <a
                    href={`tel:${COMPANY_CONTACT.indiaPhone1}`}
                    className="text-blue-600 hover:text-blue-800 font-bold transition-colors"
                  >
                    {COMPANY_CONTACT.indiaPhone1Display}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${COMPANY_CONTACT.indiaPhone2}`}
                    className="text-blue-600 hover:text-blue-800 font-bold transition-colors"
                  >
                    {COMPANY_CONTACT.indiaPhone2Display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <span className="font-bold text-slate-900 min-w-16">Email:</span>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-blue-600 hover:text-blue-800 font-bold transition-colors"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600 pt-1">
                <span className="font-bold text-slate-900 min-w-16">Address:</span>
                <span className="leading-relaxed">
                  {COMPANY_CONTACT.address.full}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/what-we-do/web-development" className="hover:text-blue-600 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/mobile-app-development" className="hover:text-blue-600 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/digital-marketing" className="hover:text-blue-600 transition-colors">
                  Digital Marketing (US & Global)
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/seo-services" className="hover:text-blue-600 transition-colors">
                  Technical & Local SEO
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/ai-automation" className="hover:text-blue-600 transition-colors">
                  AI Automation & Agents
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/custom-software-saas" className="hover:text-blue-600 transition-colors">
                  CRM & SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1 text-xs pt-1">
                  <span>View All Services</span>
                  <ArrowUpRightIcon size={12} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Technicals
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/technicals/react-nextjs" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <i className={`${getTechDeviconClass("react-nextjs")} text-sm`} />
                  <span>React & Next.js 16</span>
                </Link>
              </li>
              <li>
                <Link href="/technicals/typescript-javascript" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <i className={`${getTechDeviconClass("typescript-javascript")} text-sm`} />
                  <span>TypeScript Engineering</span>
                </Link>
              </li>
              <li>
                <Link href="/technicals/python-ai" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <i className={`${getTechDeviconClass("python-ai")} text-sm`} />
                  <span>Python & Machine Learning</span>
                </Link>
              </li>
              <li>
                <Link href="/technicals/node-backend" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <i className={`${getTechDeviconClass("node-backend")} text-sm`} />
                  <span>Node.js Microservices</span>
                </Link>
              </li>
              <li>
                <Link href="/technicals/mobile-flutter-reactnative" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <i className={`${getTechDeviconClass("mobile-flutter-reactnative")} text-sm`} />
                  <span>React Native & Flutter</span>
                </Link>
              </li>
              <li>
                <Link href="/technicals/cloud-devops" className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  <i className={`${getTechDeviconClass("cloud-devops")} text-sm`} />
                  <span>AWS & Cloud Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/technicals" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1 text-xs pt-1">
                  <span>Full Tech Directory</span>
                  <ArrowUpRightIcon size={12} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company & Insights
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                  Case Studies & Demos
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                  Engineering Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
                    We&apos;re Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Talk to Us
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Tech Briefings Newsletter
              </h5>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter work email"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white/90 shadow-2xs font-medium"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors active:scale-[0.99]"
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4 text-center sm:text-left">
          <p>© 2026 WebNote Technologies Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-800 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
