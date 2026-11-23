import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { COMPANY_CONTACT, SERVICES_CATALOG } from "@/data/company";

export const metadata: Metadata = {
  title: "Website Development Services | WebNote Technologies",
  description:
    "Professional website development, custom web applications, responsive frontend engineering, and high-performance digital solutions built with Next.js, React, and TypeScript.",
};

const TECH_ROW_1 = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { name: "Angular", icon: "devicon-angularjs-plain colored" },
  { name: "Vite", icon: "devicon-vitejs-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
];

const TECH_ROW_2 = [
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Sass", icon: "devicon-sass-original colored" },
  { name: "Redux", icon: "devicon-redux-original colored" },
  { name: "GraphQL", icon: "devicon-graphql-plain colored" },
  { name: "Webpack", icon: "devicon-webpack-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
];

const MARQUEE_ROW_1 = [...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1];
const MARQUEE_ROW_2 = [...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Discovery & System Architecture",
    desc: "We analyze your business objectives, map technical requirements, define database schemas, and create performance budgets to prevent technical debt.",
    badge: "Planning & Scoping",
    tools: [
      { name: "PostgreSQL Schemas", icon: "devicon-postgresql-plain colored" },
      { name: "GraphQL Specs", icon: "devicon-graphql-plain colored" },
      { name: "System Architecture", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    num: "02",
    title: "Responsive UI/UX Prototyping",
    desc: "Our design team crafts component-driven design systems in Figma, ensuring seamless cross-device responsiveness and accessibility compliance.",
    badge: "Design Tokens",
    tools: [
      { name: "Figma UI", icon: "devicon-figma-plain colored" },
      { name: "Tailwind UI", icon: "devicon-tailwindcss-original colored" },
      { name: "HTML5 Semantic", icon: "devicon-html5-plain colored" },
    ],
  },
  {
    num: "03",
    title: "Agile Full-Stack Engineering",
    desc: "Using Next.js, React, and TypeScript, our senior engineers build clean, modular components with automated unit and integration tests.",
    badge: "Sprint Execution",
    tools: [
      { name: "Next.js 16", icon: "devicon-nextjs-plain" },
      { name: "TypeScript Strict", icon: "devicon-typescript-plain colored" },
      { name: "React 19", icon: "devicon-react-original colored" },
    ],
  },
  {
    num: "04",
    title: "Rigorous QA & Performance Audits",
    desc: "Every page is stress-tested across real devices, network profiles, and browsers to guarantee sub-0.8s Core Web Vitals and zero security flaws.",
    badge: "Quality Assurance",
    tools: [
      { name: "Core Web Vitals", icon: "devicon-chrome-plain colored" },
      { name: "Jest Testing", icon: "devicon-jest-plain colored" },
      { name: "Webpack Audits", icon: "devicon-webpack-plain colored" },
    ],
  },
  {
    num: "05",
    title: "CI/CD Deployment & Global CDN",
    desc: "We orchestrate automated deployment pipelines to global edge networks (Cloudflare/AWS) with continuous uptime monitoring and SLA guarantees.",
    badge: "Edge Production",
    tools: [
      { name: "Cloudflare Edge", icon: "devicon-cloudflare-plain colored" },
      { name: "Docker Containers", icon: "devicon-docker-plain colored" },
      { name: "AWS Cloud", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    ],
  },
];

const ADVANTAGES = [
  {
    title: "Clean Maintainable Codebase",
    desc: "Modular TypeScript architectures, standardized design tokens, and comprehensive documentation ensuring your team can maintain and scale effortlessly.",
    icon: "devicon-typescript-plain colored",
  },
  {
    title: "Sub-Second Core Web Vitals",
    desc: "Optimized server-side rendering, progressive image hydration, and minimal JavaScript payloads delivering 95+ Google Lighthouse speed scores.",
    icon: "devicon-chrome-plain colored",
  },
  {
    title: "99.99% Production Uptime",
    desc: "Enterprise cloud hosting with automated failover, distributed edge caching, and proactive health checks to handle high-traffic spikes without slowdown.",
    icon: "devicon-amazonwebservices-plain-wordmark colored",
  },
  {
    title: "100% In-House Senior Pods",
    desc: "Work directly with seasoned software architects and frontend engineers. No junior handoffs, no third-party outsourcing, and zero communication barriers.",
    icon: "devicon-react-original colored",
  },
  {
    title: "Dual Delivery Hubs (USA & India)",
    desc: "Dedicated project governance and coordination through our US desk, supported by round-the-clock development velocity from our engineering center.",
    icon: "devicon-googlecloud-plain colored",
  },
  {
    title: "Full Intellectual Property Ownership",
    desc: "You retain 100% ownership of your source code, deployment configs, database schemas, and visual assets with clean commercial licensing.",
    icon: "devicon-github-original colored",
  },
];

const FAQS = [
  {
    q: "What technology stack do you recommend for modern web development?",
    a: "We primarily build with Next.js, React, and TypeScript on the frontend, styled with Tailwind CSS, and backed by Node.js, Python, or Go microservices deployed on AWS or Cloudflare edge networks. This stack guarantees exceptional performance, search engine indexing, and long-term maintainability.",
  },
  {
    q: "How do you ensure our website is responsive and fast on all devices?",
    a: "We adhere to a mobile-first responsive design philosophy. Every interface component is tested across standard smartphone viewports, tablets, and 4K desktop screens. We enforce strict Core Web Vitals budgets (LCP under 0.8 seconds, CLS under 0.05) using modern asset pipelines and edge caching.",
  },
  {
    q: "Can you redesign or modernize an existing web application without losing data?",
    a: "Yes. We frequently execute seamless legacy migrations and frontend modernizations. We use phased sprint delivery to rewrite frontend interfaces while maintaining database continuity, API contracts, and user session states without service downtime.",
  },
  {
    q: "Who owns the code, design assets, and intellectual property?",
    a: "You own 100% of all intellectual property, source code, database architectures, and design files upon milestone completion. We provide full repository access, documentation, and deployment guides.",
  },
  {
    q: "What is your typical delivery timeline for an enterprise website project?",
    a: "Standard enterprise web projects typically launch within 6 to 12 weeks depending on scope complexity. We operate in bi-weekly agile sprints with functional staging environments so your stakeholders can test and review progress at every stage.",
  },
];

export default function WebDevelopmentServicePage() {
  const otherServices = SERVICES_CATALOG.filter((s) => s.slug !== "web-development").slice(0, 3);

  return (
    <div className="text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900">
      <section className="relative pt-4 pb-16 lg:pt-6 lg:pb-20 overflow-hidden gradient-mesh-blue border-b border-slate-200/80">
        <div className="absolute top-4 left-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-400/25 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-3 sm:mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/what-we-do" className="hover:text-blue-600 transition-colors">What We Do</Link>
            <span>/</span>
            <span className="text-blue-700 font-bold">Website Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-blue-700 border border-blue-200/70 shadow-xs mb-3.5 backdrop-blur-sm self-start">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Enterprise Full-Stack Web Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
                Professional Website Development Engineered for Scale
              </h1>

              <p className="text-lg sm:text-xl text-blue-700 font-bold mb-5 tracking-tight">
                Modern Frontend Engineering, Custom Web Architecture & High-Performance Platforms
              </p>

              <p className="text-slate-600 leading-relaxed mb-6 font-normal text-base sm:text-lg">
                We design and engineer resilient, enterprise-grade web applications, dynamic customer portals, and high-conversion e-commerce engines designed for zero downtime and sub-second load speeds. From modern responsive web design to clean architecture and scalable codebases, our platforms eliminate technical debt and maximize business ROI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-sm">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>&lt; 0.8s LCP Benchmark</span>
                  </div>
                  <div className="text-2xs text-slate-500 mt-0.5">Core Web Vitals Optimized</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-sm">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span>99.99% Uptime SLA</span>
                  </div>
                  <div className="text-2xs text-slate-500 mt-0.5">High-Availability Cloud</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-sm">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                    <span>100% Responsive Design</span>
                  </div>
                  <div className="text-2xs text-slate-500 mt-0.5">Mobile-First Fluid Layouts</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-sm">
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 shrink-0" />
                    <span>TypeScript Strict</span>
                  </div>
                  <div className="text-2xs text-slate-500 mt-0.5">Zero Technical Debt</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#151514] text-white font-bold text-base hover:bg-black shadow-lg shadow-black/10 transition-all hover:scale-[1.01]"
                >
                  Schedule Engineering Discovery
                </Link>
                <a
                  href="#why-choose-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/90 border border-slate-200/90 text-slate-800 font-bold text-base hover:bg-white shadow-xs backdrop-blur-sm transition-all hover:scale-[1.01]"
                >
                  Why Choose Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-[660px] lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-cyan-400/15 rounded-3xl blur-2xl pointer-events-none" />
                <Image
                  src="/images/web-development.png"
                  alt="Web Development"
                  width={1536}
                  height={1024}
                  priority
                  className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-2xl select-none"
                />
                <div className="w-4/5 h-8 bg-blue-950/15 rounded-full blur-xl mx-auto -mt-3 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden bg-white/60 backdrop-blur-xl border-b border-slate-200/80">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-indigo-100/30 to-cyan-100/40 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-blue-50/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-blue-50/90 to-transparent z-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-white/90 px-3 py-1 rounded-full border border-blue-200/60 shadow-2xs">
            Frontend Technology Stack
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 tracking-tight">
            Production-Tested Standards & Frameworks
          </h2>
        </div>

        <div className="relative w-full overflow-hidden space-y-4">
          <div className="animate-marquee-infinite flex items-center gap-5 sm:gap-6 py-1">
            {MARQUEE_ROW_1.map((tech, idx) => (
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

          <div className="animate-marquee-slow flex items-center gap-5 sm:gap-6 py-1">
            {MARQUEE_ROW_2.map((tech, idx) => (
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

      <section className="py-24 sm:py-28 relative overflow-hidden gradient-mesh-cyan border-b border-slate-200/80">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-5 tracking-tight">
              Sprint Delivery Methodology
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              A transparent, engineering-led development process designed to deliver functional software in bi-weekly increments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-12 before:absolute before:left-3 sm:before:left-6 before:top-6 before:bottom-6 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-cyan-500 space-y-8 sm:space-y-10">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute -left-6 sm:-left-12 top-6 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center font-black text-xs sm:text-sm text-blue-700 shadow-md group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {idx + 1}
                </div>

                <div className="p-6 sm:p-8 rounded-3xl glass-surface border border-white/90 shadow-md group-hover:border-blue-300 group-hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shadow-xs">
                        {step.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-2xs font-bold text-blue-700 bg-blue-50/90 border border-blue-200/70 px-3 py-1 rounded-full shadow-2xs">
                      {step.badge}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
                    {step.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-2">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 mr-2">
                      Tools & Standards:
                    </span>
                    {step.tools.map((t, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/85 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs group-hover:border-blue-200 transition-colors"
                      >
                        <i className={`${t.icon} text-sm`} />
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-24 relative overflow-hidden gradient-mesh-warm border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-5 tracking-tight">
              Enterprise Engineering Advantages
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Built on tested standards, strict code discipline, and transparent US-India delivery governance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-[560px] lg:max-w-none flex flex-col items-center">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-amber-400/15 rounded-3xl blur-2xl pointer-events-none" />
                <Image
                  src="/images/professional-businesswoman-presenting-benefits-infographic.png"
                  alt="Professional Businesswoman Presenting Benefits Infographic"
                  width={1536}
                  height={1024}
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
                />
                <div className="w-4/5 h-8 bg-slate-900/10 rounded-full blur-xl mx-auto -mt-3 pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ADVANTAGES.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl glass-surface flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-2xl mb-4 shadow-xs">
                      <i className={adv.icon} />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2.5 tracking-tight leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden gradient-mesh-blue border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs backdrop-blur-md">
              Client Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4 mb-5 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Everything you need to know about our web engineering process, timelines, and technical standards.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl glass-surface"
              >
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3 tracking-tight">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden mx-4 sm:mx-8 my-10 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-16 border border-slate-800/90 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Start Your Web Project
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-5 mb-6 tracking-tight leading-tight">
            Ready to Build a High-Performance Website?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Speak directly with our senior software architects. We provide full technical architecture scoping, transparent delivery timelines, and dedicated engineering pods for clients across the United States and globally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
            <a href={`tel:${COMPANY_CONTACT.usPhone}`} className="text-slate-200 hover:text-white font-semibold">
              <span className="text-slate-400">US Line:</span> {COMPANY_CONTACT.usPhoneDisplay}
            </a>
            <span className="text-slate-600">|</span>
            <a href={`tel:${COMPANY_CONTACT.indiaPhone1}`} className="text-slate-200 hover:text-white font-semibold">
              <span className="text-slate-400">India Desk:</span> {COMPANY_CONTACT.indiaPhone1Display}
            </a>
            <span className="text-slate-600">|</span>
            <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-blue-400 hover:underline font-semibold">
              {COMPANY_CONTACT.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold text-base hover:bg-slate-100 shadow-md transition-all hover:scale-[1.01]"
            >
              Initiate Technical Consultation
            </Link>
            <Link
              href="/what-we-do"
              className="px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-sm transition-all hover:scale-[1.01]"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden gradient-mesh-cyan border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Explore Related Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/what-we-do/${rel.slug}`}
                className="group p-6 rounded-2xl glass-surface flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50/90 px-2.5 py-1 rounded-md border border-blue-200/60 shadow-2xs">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
