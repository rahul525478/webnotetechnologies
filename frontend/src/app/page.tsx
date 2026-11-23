import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SculptureHero } from "@/components/canvas3d/SculptureHero";
import { GlobalGlobe3DCanvas } from "@/components/canvas3d/GlobalGlobe3DCanvas";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { slugs as techSlugs } from "@/components/ui/demo";
import { TechIcon } from "@/components/ui/TechIcon";
import {
  COMPANY_CONTACT,
  SERVICES_CATALOG,
  ENTERPRISE_SHOWCASE_PROJECTS,
  CUSTOMER_REVIEWS,
} from "@/data/company";

export const metadata: Metadata = {
  title: "WebNote Technologies | Enterprise Digital Engineering & AI Growth Agency",
  description:
    "We build digital experiences that drive growth. Enterprise web development, scalable mobile applications, AI automation, and high-ROI digital marketing.",
};

const WORLDWIDE_TECH_SHOWCASE = [
  // Frontend
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js 16", icon: "devicon-nextjs-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { name: "Angular", icon: "devicon-angular-plain colored" },
  { name: "Svelte", icon: "devicon-svelte-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "HTML5 & CSS3", icon: "devicon-html5-plain colored" },

  // Backend & Languages
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Go", icon: "devicon-go-line colored" },
  { name: "Rust", icon: "devicon-rust-line colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-line colored" },
  { name: "Spring Boot", icon: "devicon-spring-original colored" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "Django", icon: "devicon-django-plain colored" },
  { name: "C# .NET", icon: "devicon-dotnetcore-plain colored" },

  // Databases
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-original colored" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },
  { name: "SQLite", icon: "devicon-sqlite-plain colored" },

  // Mobile
  { name: "Flutter", icon: "devicon-flutter-plain colored" },
  { name: "React Native", icon: "devicon-react-original colored" },
  { name: "Swift", icon: "devicon-swift-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },

  // AI & Machine Learning
  { name: "PyTorch", icon: "devicon-pytorch-original colored" },
  { name: "TensorFlow", icon: "devicon-tensorflow-line colored" },
  { name: "Hugging Face", icon: "devicon-huggingface-plain colored" },

  // Cloud & DevOps
  { name: "AWS Cloud", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-line colored" },
  { name: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
];

const MARQUEE_TECHS = [
  ...WORLDWIDE_TECH_SHOWCASE,
  ...WORLDWIDE_TECH_SHOWCASE,
];

const DUPLICATED_REVIEWS = [
  ...CUSTOMER_REVIEWS,
  ...CUSTOMER_REVIEWS,
];

export default function HomePage() {
  const featuredServices = SERVICES_CATALOG.slice(0, 6);

  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <SculptureHero
        src="/images/sculpture.webp"
        mobileSrc="/images/sculpture-mobile.webp"
        imageBackground="#EAE9E7"
        background="#FAF9F6"
        textColor="#151514"
        accentColor="#1d4ed8"
        sculptureScale={1.15}
        mobileSculptureScale={1.05}
        sculptureX={0}
        sculptureY={-6}
        interactive={true}
        strength={1}
        radius={220}
        particleDensity={1}
        dotSize={1}
        particleSpread={1}
        turbulence={1}
        liquid={1}
        streaks={true}
        restStyle="image"
        returnSpeed={1}
        ambient={true}
        ambientIntensity={1}
        speed={1}
        intro={false}
      >
        <div className="pt-4 pb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-white/85 border border-white/90 mb-8 shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
              <span>International Technology & Growth Agency</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#151514] tracking-tight leading-[1.08] mb-6">
              We Build Digital<br />
              Experiences<br />
              <span className="text-blue-600">
                That Drive Growth
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
              WebNote Technologies is a leading global digital engineering agency. We specialize in enterprise-grade web development, scalable mobile applications, and strategic digital marketing solutions designed to accelerate business growth and drive measurable results for industry leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#151514] hover:bg-black shadow-lg shadow-black/10 transition-all hover:scale-[1.01]"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/what-we-do"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-[#151514] bg-white/85 hover:bg-white border border-white/90 shadow-sm backdrop-blur-md transition-all hover:scale-[1.01]"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-stone-300/60 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-left">
              <div className="p-3.5 sm:p-4 bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-xs hover:border-blue-200 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-[#151514] tabular-nums">99.98%</div>
                <div className="text-2xs sm:text-xs text-stone-500 font-medium">Production SLA Guarantee</div>
              </div>
              <div className="p-3.5 sm:p-4 bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-xs hover:border-blue-200 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 tabular-nums">120+</div>
                <div className="text-2xs sm:text-xs text-stone-500 font-medium">Global Enterprise Deployments</div>
              </div>
              <div className="p-3.5 sm:p-4 bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-xs hover:border-blue-200 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-[#151514] tabular-nums">&lt; 0.8s</div>
                <div className="text-2xs sm:text-xs text-stone-500 font-medium">Core Web Vitals Benchmark</div>
              </div>
              <div className="p-3.5 sm:p-4 bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-xs hover:border-blue-200 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-2xs sm:text-xs text-stone-500 font-medium">Enterprise Support & Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </SculptureHero>

      <section className="py-8 relative overflow-hidden bg-white/70 backdrop-blur-md border-y border-slate-200/80">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-cyan-50/40 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF9F6] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF9F6] to-transparent z-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-5">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
            Powering Modern Digital Architectures Across High-Growth Enterprises
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-infinite flex items-center gap-6 sm:gap-8 py-2">
            {MARQUEE_TECHS.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/85 border border-slate-200/80 shadow-xs backdrop-blur-sm hover:border-blue-300 hover:bg-white transition-all duration-200 select-none whitespace-nowrap shrink-0"
              >
                <i className={`${tech.icon} text-lg`} />
                <span className="text-xs font-bold text-slate-700 tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-indigo">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200/60 shadow-xs">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
                Engineered for High-Stakes Performance
              </h2>
            </div>
            <Link
              href="/what-we-do"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
            >
              <span>View All Services</span>
              <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="group p-8 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200/70 shadow-2xs">
                      {service.category}
                    </span>
                    <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                      &rarr;
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-700 font-medium">
                        <svg className="w-3.5 h-3.5 mr-2 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/what-we-do/${service.slug}`}
                  className="pt-4 border-t border-slate-200/70 text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center justify-between transition-colors"
                >
                  <span>Explore Service Blueprint</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28 relative overflow-hidden gradient-mesh-blue border-t border-slate-200/80">
        <div className="absolute top-12 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-10 right-10 w-[520px] h-[520px] bg-indigo-300/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Modern Full-Stack Architecture Built on Tested Standards
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              We design and engineer resilient platforms that eliminate technical debt. Every technology in our stack is evaluated for memory efficiency, security compliance, and long-term maintenance cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-none flex flex-col items-center">
                <div className="relative w-full">
                  <Image
                    src="/images/smiling-professional-laptop.png"
                    alt="WebNote Technologies Solutions Architect"
                    width={1239}
                    height={1269}
                    priority
                    className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
                  />
                  <div className="w-3/4 h-6 bg-blue-950/15 rounded-full blur-xl mx-auto -mt-3 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative flex w-full items-center justify-center">
                <React.Suspense fallback={<div className="h-[350px] w-full" />}>
                  <IconCloud iconSlugs={techSlugs} />
                </React.Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden mx-4 sm:mx-8 my-10 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-16 border border-slate-800/90 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Enterprise Growth & GEO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-5 mb-6 tracking-tight leading-tight">
            Digital Marketing & GEO Built for Measurable Revenue
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            From technical SEO and Google Ads management to Generative Engine Optimization (GEO) for ChatGPT and Gemini, our multi-channel marketing campaigns drive high-intent customer acquisition across North America and global markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/what-we-do/digital-marketing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 shadow-md transition-all hover:scale-[1.01]"
            >
              Explore Digital Marketing
            </Link>
            <Link
              href="/what-we-do/seo-services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700/80 backdrop-blur-sm transition-all hover:scale-[1.01]"
            >
              SEO & GEO Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-cyan border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200/60 shadow-xs">
                Selected Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
                Digital Solutions That Deliver Enterprise Value
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed font-normal text-base sm:text-lg">
                Explore our proven track record of delivering enterprise-grade web and mobile applications that drive measurable business growth and digital transformation for global industry leaders.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group shrink-0"
            >
              <span>Consult on Custom Solutions</span>
              <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENTERPRISE_SHOWCASE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl glass-surface overflow-hidden flex flex-col justify-between border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative w-full h-52 bg-slate-950 overflow-hidden border-b border-slate-200/80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-3xs font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-3xs font-bold uppercase tracking-wider text-slate-400">
                        Integrated Toolchain
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 text-xs bg-white/85 border border-slate-200/90 text-slate-700 px-2.5 py-1 rounded-lg font-medium shadow-2xs"
                          >
                            <TechIcon name={tech} className="text-sm" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 px-7 bg-slate-50/80 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-2xs font-semibold text-slate-500">
                    Enterprise Reference Architecture
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center transition-colors"
                  >
                    <span>Discuss Similar System &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-warm border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200/60 shadow-xs">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Trusted by Technical Leaders
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-normal text-base sm:text-lg max-w-2xl mx-auto">
            Genuine verified customer reviews and experiences working with WebNote Technologies.
          </p>
        </div>

        {/* Right-to-Left Continuous Scrolling Infinite Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-slow flex items-stretch gap-6 sm:gap-8 py-3">
            {DUPLICATED_REVIEWS.map((r, idx) => (
              <div
                key={idx}
                className="w-[310px] sm:w-[380px] p-7 rounded-2xl glass-surface flex flex-col justify-between shrink-0 hover:shadow-lg transition-all border border-slate-200/80 hover:border-blue-300 select-none"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-500 text-sm tracking-widest" aria-label="5 out of 5 stars">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed font-normal">
                    &ldquo;{r.review}&rdquo;
                  </p>
                </div>
                <div className="pt-5 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <div className="font-bold text-slate-900 text-sm tracking-tight">{r.reviewer}</div>
                  <span className="text-3xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    5.0 Rating
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-indigo border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200/60 shadow-xs">
                Global Network
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight leading-tight">
                Ready to Accelerate Your Digital Roadmap?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 font-normal text-base">
                Speak directly with our solutions architects. We provide comprehensive technical scoping, transparent delivery timelines, and dedicated engineering pods for enterprise clients globally.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <span className="font-bold text-slate-900">International Desk:</span>
                  <a href={`tel:${COMPANY_CONTACT.usPhone}`} className="text-blue-600 hover:underline font-semibold">
                    {COMPANY_CONTACT.usPhoneDisplay}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <span className="font-bold text-slate-900">India Desk:</span>
                  <a href={`tel:${COMPANY_CONTACT.indiaPhone1}`} className="text-blue-600 hover:underline font-semibold">
                    {COMPANY_CONTACT.indiaPhone1Display}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_CONTACT.indiaPhone2}`} className="text-blue-600 hover:underline font-semibold">
                    {COMPANY_CONTACT.indiaPhone2Display}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <span className="font-bold text-slate-900">Official Email:</span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-600 hover:underline font-semibold">
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#151514] hover:bg-black shadow-lg shadow-black/15 transition-all hover:scale-[1.01]"
              >
                <span>Initiate Technical Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="h-[460px] rounded-3xl glass-surface p-3 shadow-xl relative overflow-hidden flex items-center justify-center">
              <GlobalGlobe3DCanvas className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
