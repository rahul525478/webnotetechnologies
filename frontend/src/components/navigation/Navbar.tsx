"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { NavLogo } from "./NavLogo";
import { WhatWeDoMegaMenu } from "./WhatWeDoMegaMenu";
import { TechnicalsMegaMenu } from "./TechnicalsMegaMenu";
import { MobileMenu } from "./MobileMenu";
import { ChevronDownIcon, MenuIcon, PhoneCallIcon, ArrowUpRightIcon } from "./Icons";

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<"services" | "tech" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const megaMenuContainerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeMenu && megaMenuContainerRef.current) {
      gsap.fromTo(
        megaMenuContainerRef.current,
        {
          opacity: 0,
          y: 8,
          scale: 0.99,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.22,
          ease: "power2.out",
        }
      );
    }
  }, [activeMenu]);

  const handleMouseEnter = (menu: "services" | "tech") => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-white/92 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
            : "py-3 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-13 sm:h-14">
            <div className="flex-shrink-0 flex items-center">
              <NavLogo />
            </div>

            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === "/"
                    ? "text-blue-600 font-semibold bg-blue-50/70"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                <span>Home</span>
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/what-we-do"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname.startsWith("/what-we-do") || activeMenu === "services"
                      ? "text-blue-600 font-semibold bg-blue-50/70"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  <span>What We Do</span>
                  <ChevronDownIcon
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeMenu === "services" ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </Link>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("tech")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/technicals"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname.startsWith("/technicals") || activeMenu === "tech"
                      ? "text-blue-600 font-semibold bg-blue-50/70"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  <span>Technicals</span>
                  <ChevronDownIcon
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeMenu === "tech" ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </Link>
              </div>

              <Link
                href="/portfolio"
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname.startsWith("/portfolio")
                    ? "text-blue-600 font-semibold bg-blue-50/70"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                <span>Portfolio</span>
                {pathname.startsWith("/portfolio") && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>

              <Link
                href="/blogs"
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname.startsWith("/blogs")
                    ? "text-blue-600 font-semibold bg-blue-50/70"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                <span>Blogs</span>
                {pathname.startsWith("/blogs") && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>

              <Link
                href="/career"
                className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  pathname.startsWith("/career")
                    ? "text-blue-600 font-semibold bg-blue-50/70"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                <span>Career</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  Hiring
                </span>
                {pathname.startsWith("/career") && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>

              <div className="ml-2 pl-2 border-l border-slate-200">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <PhoneCallIcon size={14} className="relative z-10" />
                  <span className="relative z-10">Contact</span>
                  <ArrowUpRightIcon size={12} className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRightIcon size={12} />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileOpen}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <MenuIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        {activeMenu && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 pt-2 px-4 sm:px-6 lg:px-8"
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={megaMenuContainerRef}>
              {activeMenu === "services" && (
                <WhatWeDoMegaMenu onItemClick={() => setActiveMenu(null)} />
              )}
              {activeMenu === "tech" && (
                <TechnicalsMegaMenu onItemClick={() => setActiveMenu(null)} />
              )}
            </div>
          </div>
        )}
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
