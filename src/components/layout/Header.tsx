"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-wn-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="wn-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <Image
            src={SITE_CONFIG.logo}
            alt={SITE_CONFIG.name}
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                "megaMenu" in item && item.megaMenu
                  ? setActiveMegaMenu(item.label)
                  : setActiveMegaMenu(null)
              }
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  "text-wn-text-secondary hover:text-wn-text-primary hover:bg-white/5"
                )}
              >
                {item.label}
                {"megaMenu" in item && item.megaMenu && (
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      activeMegaMenu === item.label && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Mega Menu */}
              {"megaMenu" in item && item.megaMenu && (
                <AnimatePresence>
                  {activeMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] p-6 rounded-2xl bg-wn-bg-elevated/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {"sections" in item &&
                          item.sections?.map((section) => (
                            <div key={section.title}>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-wn-lime mb-3">
                                {section.title}
                              </h4>
                              <div className="space-y-1">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                                    onClick={() => setActiveMegaMenu(null)}
                                  >
                                    <span className="text-sm font-medium text-wn-text-primary group-hover:text-wn-lime transition-colors">
                                      {subItem.label}
                                    </span>
                                    <p className="text-xs text-wn-text-muted mt-0.5">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <Link
                          href={item.href}
                          className="text-sm text-wn-lime hover:underline"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          View all {item.label.toLowerCase()} →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button href="/contact" size="sm" variant="lime" className="hidden lg:inline-flex">
            Start a Project
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-wn-text-primary relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-wn-bg-dark/98 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6 p-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-wn-text-primary hover:text-wn-lime transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="mt-4"
              >
                <Button
                  href="/contact"
                  variant="lime"
                  size="lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start a Project
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
