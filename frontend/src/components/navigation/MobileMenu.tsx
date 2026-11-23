"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_CONTACT, SERVICES_CATALOG, TECHNICALS_CATALOG } from "@/data/company";
import { getTechDeviconClass } from "@/lib/devicon";
import { NavLogo } from "./NavLogo";
import { ChevronDownIcon, CloseIcon, PhoneCallIcon, ArrowUpRightIcon } from "./Icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<"services" | "tech" | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-200/90 shadow-2xs">
        <div onClick={onClose}>
          <NavLogo />
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 px-4 sm:px-6 py-6 space-y-6">
        <nav className="space-y-1.5" aria-label="Mobile Navigation Links">
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              pathname === "/"
                ? "bg-blue-50 text-blue-600 font-bold"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <div>
            <div className="flex items-center justify-between min-h-[44px]">
              <Link
                href="/what-we-do"
                onClick={onClose}
                className={`flex-1 min-h-[44px] flex items-center px-4 py-3 rounded-l-xl text-base font-semibold transition-colors ${
                  pathname.startsWith("/what-we-do")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                What We Do
              </Link>
              <button
                onClick={() =>
                  setOpenSubmenu(openSubmenu === "services" ? null : "services")
                }
                className="min-h-[44px] min-w-[44px] p-3 text-slate-500 hover:text-slate-900 flex items-center justify-center"
                aria-label="Toggle What We Do submenu"
                aria-expanded={openSubmenu === "services"}
              >
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSubmenu === "services" ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
            </div>

            {openSubmenu === "services" && (
              <div className="pl-3 pr-2 py-2 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80">
                {SERVICES_CATALOG.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/what-we-do/${service.slug}`}
                    onClick={onClose}
                    className="block px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-blue-600 hover:bg-white transition-colors"
                  >
                    <div className="font-semibold text-slate-900">{service.title}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{service.shortDesc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between min-h-[44px]">
              <Link
                href="/technicals"
                onClick={onClose}
                className={`flex-1 min-h-[44px] flex items-center px-4 py-3 rounded-l-xl text-base font-semibold transition-colors ${
                  pathname.startsWith("/technicals")
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Technicals
              </Link>
              <button
                onClick={() =>
                  setOpenSubmenu(openSubmenu === "tech" ? null : "tech")
                }
                className="min-h-[44px] min-w-[44px] p-3 text-slate-500 hover:text-slate-900 flex items-center justify-center"
                aria-label="Toggle Technicals submenu"
                aria-expanded={openSubmenu === "tech"}
              >
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSubmenu === "tech" ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
            </div>

            {openSubmenu === "tech" && (
              <div className="pl-3 pr-2 py-2 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80">
                <Link
                  href="/technicals"
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50/90 hover:bg-blue-100/90 border border-blue-200/80 transition-colors mb-2"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shadow-2xs" />
                    <span>Browse Full Directory (122+ Technologies)</span>
                  </span>
                  <span>&rarr;</span>
                </Link>
                {TECHNICALS_CATALOG.map((tech) => (
                  <Link
                    key={tech.slug}
                    href={`/technicals/${tech.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:text-blue-600 hover:bg-white transition-colors"
                  >
                    <i className={`${getTechDeviconClass(tech.slug)} text-lg shrink-0`} />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-slate-900 truncate">{tech.name}</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{tech.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            onClick={onClose}
            className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              pathname.startsWith("/portfolio")
                ? "bg-blue-50 text-blue-600 font-bold"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/blogs"
            onClick={onClose}
            className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              pathname.startsWith("/blogs")
                ? "bg-blue-50 text-blue-600 font-bold"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Blogs
          </Link>

          <Link
            href="/career"
            onClick={onClose}
            className={`flex items-center justify-between min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              pathname.startsWith("/career")
                ? "bg-blue-50 text-blue-600 font-bold"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            <span>Career</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Hiring
            </span>
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              pathname === "/contact"
                ? "bg-blue-50 text-blue-600 font-bold"
                : "text-slate-800 hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="pt-6 border-t border-slate-200/80 space-y-4">
          <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Immediate Inquiries
            </div>
            <a
              href={`tel:${COMPANY_CONTACT.usPhone}`}
              className="flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors py-1"
            >
              <PhoneCallIcon className="w-4 h-4 mr-2 text-blue-600 shrink-0" />
              <span>US: {COMPANY_CONTACT.usPhoneDisplay}</span>
            </a>
            <div className="flex flex-col space-y-1.5 pl-6 text-xs text-slate-600">
              <a href={`tel:${COMPANY_CONTACT.indiaPhone1}`} className="hover:text-blue-600">
                IN: {COMPANY_CONTACT.indiaPhone1Display}
              </a>
              <a href={`tel:${COMPANY_CONTACT.indiaPhone2}`} className="hover:text-blue-600">
                IN: {COMPANY_CONTACT.indiaPhone2Display}
              </a>
            </div>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="block pt-1 text-xs font-medium text-blue-600 hover:underline"
            >
              {COMPANY_CONTACT.email}
            </a>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-md shadow-blue-600/20 active:scale-[0.99]"
          >
            <span>Start a Project</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
