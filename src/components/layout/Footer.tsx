"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
} from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "What We Do", href: "/services" },
      { label: "Technicals", href: "/technologies" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blogs", href: "/blog" },
      { label: "Career", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "CRM Solutions", href: "/services/crm-solutions" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Web Hosting", href: "/services/web-hosting" },
      { label: "Maintenance", href: "/services/website-maintenance" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { label: "Frontend", href: "/technologies?category=frontend" },
      { label: "Backend", href: "/technologies?category=backend" },
      { label: "Mobile", href: "/technologies?category=mobile" },
      { label: "AI & ML", href: "/technologies?category=ai-ml" },
      { label: "Databases", href: "/technologies?category=databases" },
      { label: "Cloud & DevOps", href: "/technologies?category=cloud-devops" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-wn-bg-surface border-t border-white/5">
      {/* Newsletter CTA */}
      <div className="wn-container py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-wn-navy/40 to-wn-bg-elevated p-8 md:p-12 border border-white/5">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-wn-text-primary">
                Stay Ahead in Technology
              </h3>
              <p className="mt-2 text-wn-text-secondary">
                Get insights on software development, digital marketing, and emerging tech.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-wn-text-primary placeholder:text-wn-text-muted focus:outline-none focus:border-wn-lime transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-wn-lime text-wn-black font-semibold hover:bg-wn-lime-dark transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-wn-lime/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-wn-navy/20 blur-3xl" />
        </div>
      </div>

      {/* Links Grid */}
      <div className="wn-container pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-wn-text-muted leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-wn-text-secondary hover:text-wn-lime transition-colors"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-wn-text-secondary hover:text-wn-lime transition-colors"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-wn-text-secondary">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city},{" "}
                  {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-wn-text-primary mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-wn-text-muted hover:text-wn-lime transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="wn-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-wn-text-muted">
            © 2026 {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-wn-text-muted">
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wn-lime transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wn-lime transition-colors"
            >
              Twitter / X
            </a>
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wn-lime transition-colors"
            >
              GitHub
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-wn-lime transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
