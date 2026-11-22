import Link from "next/link";
import { Metadata } from "next";
import { ALL_SERVICES, SERVICE_CATEGORIES } from "@/data/servicesData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do | Comprehensive IT Services & Digital Solutions",
  description:
    "Explore WebNote Technologies' full-spectrum service catalog: custom software, enterprise website development, mobile apps, digital marketing, AI automation, and cloud engineering.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      {/* Hero Header */}
      <div className="wn-container text-center mb-20">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5e017]/10 text-[#c5e017] border border-[#c5e017]/20 mb-6">
          Full-Cycle Digital Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Engineering the Next Generation of{" "}
          <span className="wn-gradient-text">Digital Growth</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto leading-relaxed">
          From enterprise web applications and mobile ecosystems to US market search dominance and custom AI agents, we deliver end-to-end technology solutions tailored for business scale.
        </p>
      </div>

      {/* Category Navigation Pills */}
      <div className="wn-container mb-16 overflow-x-auto pb-4">
        <div className="flex items-center justify-start lg:justify-center gap-3 min-w-max">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-[#111128] border border-white/10 text-[#a0a0b8] hover:text-[#c5e017] hover:border-[#c5e017]/40 transition-all whitespace-nowrap"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Services Grouped by Category */}
      <div className="wn-container space-y-24">
        {SERVICE_CATEGORIES.map((category) => {
          const categoryServices = ALL_SERVICES.filter(
            (s) => s.categorySlug === category.slug
          );

          return (
            <div key={category.slug} id={category.slug} className="scroll-mt-32">
              <div className="border-b border-white/10 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017]">
                    Practice Area
                  </span>
                  <h2 className="text-3xl font-bold text-white mt-1">
                    {category.name}
                  </h2>
                  <p className="text-[#a0a0b8] text-base mt-2 max-w-2xl">
                    {category.desc}
                  </p>
                </div>
                <div className="text-sm font-medium text-[#c5e017] bg-[#c5e017]/10 px-3.5 py-1.5 rounded-lg border border-[#c5e017]/20 shrink-0">
                  {categoryServices.length} Specialized Offerings
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => (
                  <div
                    key={service.slug}
                    className="group relative rounded-2xl bg-[#0a0a1a] border border-white/10 hover:border-[#c5e017]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,224,23,0.12)] hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#111128] border border-white/10 flex items-center justify-center text-[#c5e017] mb-6 group-hover:scale-110 group-hover:border-[#c5e017]/30 transition-all">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#c5e017] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#a0a0b8] leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>

                      <div className="mt-6 space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[#a0a0b8]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c5e017] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] rounded bg-white/5 text-[#a0a0b8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#c5e017] hover:underline"
                      >
                        Explore <ArrowRight className="w-4 h-4 ml-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Bottom Consultation CTA */}
      <div className="wn-container mt-32">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1a237e]/40 via-[#0a0a2e] to-[#111128] border border-white/10 p-10 md:p-16 text-center overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5e017] bg-[#c5e017]/10 px-3 py-1 rounded-full border border-[#c5e017]/20">
              Tailored Digital Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-6">
              Need a Customized Technical Scope for Your Business?
            </h2>
            <p className="mt-4 text-[#a0a0b8] text-lg">
              Our engineering architects and digital growth directors will evaluate your requirements and construct an actionable implementation roadmap within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="lime" size="lg">
                Schedule Technical Discovery
              </Button>
              <Button href="/technologies" variant="outline" size="lg">
                Browse Tech Directory
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c5e017]/10 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#1a237e]/30 blur-[90px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
