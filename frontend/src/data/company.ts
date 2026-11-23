export interface ContactInfo {
  companyName: string;
  email: string;
  usPhone: string;
  usPhoneDisplay: string;
  indiaPhone1: string;
  indiaPhone1Display: string;
  indiaPhone2: string;
  indiaPhone2Display: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
}

export const COMPANY_CONTACT: ContactInfo = {
  companyName: "WebNote Technologies",
  email: "info@webnotetechnologies.com",
  usPhone: "+19362345948",
  usPhoneDisplay: "+1936-234-5948",
  indiaPhone1: "+919333204944",
  indiaPhone1Display: "+91 9333204944",
  indiaPhone2: "+916295836531",
  indiaPhone2Display: "+91 6295836531",
  address: {
    line1: "13th Floor, Unit No - 9B",
    line2: "Bengal Eco Intelligent Park, Lane, EM Block",
    area: "Sector V, Bidhannagar",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700091",
    country: "India",
    full: "13th Floor, Unit No - 9B, Bengal Eco Intelligent Park, Lane, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091, India.",
  },
};

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  fullDesc: string;
  category: "Engineering" | "Marketing" | "Advanced Tech" | "Design & Cloud";
  icon: string;
  deliverables: string[];
  subServices: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  marketFocus?: string;
}

export const SERVICES_CATALOG: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Website Development",
    shortDesc: "High-performance, scalable web applications built with Next.js, React, and modern micro-frontends.",
    tagline: "Enterprise Full-Stack Web Architecture",
    fullDesc: "We build enterprise-grade web applications, dynamic customer portals, and high-conversion e-commerce engines designed for zero downtime and sub-second load speeds.",
    category: "Engineering",
    icon: "globe",
    deliverables: ["Custom Full-Stack Apps", "Progressive Web Apps (PWA)", "API Integrations", "Serverless Systems"],
    subServices: ["Custom Web Apps", "E-commerce Platforms", "Enterprise CMS", "Headless Frontends"],
    benefits: ["99.99% Uptime Architecture", "SEO & Core Web Vitals Optimization", "Multi-tenant scalability"],
    process: [
      { step: "Architecture & Wireframing", desc: "System design, database schemas, and UX user flows." },
      { step: "Agile Engineering", desc: "Component-driven development with automated testing." },
      { step: "Global Cloud Deployment", desc: "Edge CDN distribution, security auditing, and continuous monitoring." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortDesc: "Native iOS and Android and high-performance cross-platform mobile apps with Flutter and React Native.",
    tagline: "Native & Cross-Platform Mobile Engineering",
    fullDesc: "From consumer apps with millions of active users to mission-critical enterprise internal tools, we engineer fluid mobile experiences with offline synchronization and biometric security.",
    category: "Engineering",
    icon: "smartphone",
    deliverables: ["iOS Swift Apps", "Android Kotlin Apps", "Cross-Platform Flutter/React Native", "App Store Optimization"],
    subServices: ["Native iOS", "Native Android", "Hybrid Flutter Apps", "Mobile Backend APIs"],
    benefits: ["60fps Fluid Micro-interactions", "End-to-End Encryption", "App Store Launch Assurance"],
    process: [
      { step: "Discovery & Prototyping", desc: "Interactive Figma prototypes and native OS human interface guidelines." },
      { step: "Core Mobile Build", desc: "Offline-first data sync, real-time push notifications, and payment gateways." },
      { step: "Store Publishing & ASO", desc: "App Store & Google Play compliance, store optimization, and QA." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortDesc: "ROI-driven performance marketing, SEM, PPC, Google Ads, and Meta Ads engineered for the United States market.",
    tagline: "Data-Driven Full-Funnel Growth for the US & Global Markets",
    fullDesc: "Targeted digital marketing solutions specialized for US enterprises, B2B SaaS, and high-velocity DTC brands. We orchestrate programmatic advertising, conversion rate optimization, and multi-channel attribution.",
    category: "Marketing",
    icon: "trending-up",
    marketFocus: "United States (US) & Global Enterprise Market",
    deliverables: ["Google Ads & PPC Management", "Meta & LinkedIn B2B Campaigns", "Conversion Rate Optimization (CRO)", "Multi-Touch Attribution"],
    subServices: ["PPC & Paid Search", "Meta Ads Management", "Social Media Marketing", "Email & Marketing Automation", "Lead Generation"],
    benefits: ["Predictable Customer Acquisition Cost", "Custom Real-time Analytics Dashboards", "Dedicated US Campaign Managers"],
    process: [
      { step: "Market & Competitor Audit", desc: "Comprehensive landscape analysis and high-intent keyword mapping." },
      { step: "Creative & Copy Engine", desc: "High-converting ad copy, landing pages, and interactive lead magnets." },
      { step: "Algorithmic Bidding Optimization", desc: "Continuous bid adjustments and multi-channel attribution tuning." },
    ],
  },
  {
    slug: "seo-services",
    title: "Comprehensive SEO Services",
    shortDesc: "Technical SEO, Local SEO, International SEO, and E-commerce SEO driving organic revenue growth.",
    tagline: "Dominant Search Engine Visibility & Authority",
    fullDesc: "We eliminate technical crawl barriers, engineer authoritative topic clusters, and execute localized search strategies that place your business in front of high-value buyers.",
    category: "Marketing",
    icon: "search",
    marketFocus: "North American Search Engines & Local US Markets",
    deliverables: ["Technical SEO Audits", "Local Google Business Profile Domination", "International Multi-region SEO", "E-commerce Product SEO"],
    subServices: ["Technical SEO", "Local SEO", "International SEO", "E-commerce SEO", "Reputation Management"],
    benefits: ["Sustained Long-Term Organic Inflow", "Top 3 Local Map Pack Rankings", "Schema Markup & Semantic Search Optimization"],
    process: [
      { step: "Deep Crawl & Schema Audit", desc: "Resolve indexation bottlenecks, canonical issues, and Core Web Vitals." },
      { step: "Entity & Content Architecture", desc: "Build topic clusters and authoritative landing pages." },
      { step: "Authority Building & Monitoring", desc: "High-tier digital PR, local citation syndication, and SERP tracking." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Autonomous Agents",
    shortDesc: "Autonomous AI agents, LLM integrations, custom chatbots, and workflow automation systems.",
    tagline: "Next-Generation Intelligence for Modern Operations",
    fullDesc: "Transform operational throughput with custom AI workflows, private LLM fine-tuning, RAG data connectors, and self-directing agentic automation pipelines.",
    category: "Advanced Tech",
    icon: "cpu",
    deliverables: ["Autonomous AI Agents", "Retrieval-Augmented Generation (RAG)", "Customer Support Copilots", "Business Process Automation"],
    subServices: ["AI Agents", "Workflow Automation", "Private LLM Deployment", "Document Intelligence"],
    benefits: ["80% Reduction in Repetitive Overhead", "Sub-second Query Resolution", "Enterprise-grade Data Privacy"],
    process: [
      { step: "Workflow Discovery", desc: "Identify high-value automation opportunities and data pipelines." },
      { step: "Model Customization & Vector Indexing", desc: "Connect private enterprise data securely to vector stores." },
      { step: "Agent Orchestration", desc: "Deploy fail-safe agentic loops with human-in-the-loop review." },
    ],
  },
  {
    slug: "custom-software-saas",
    title: "Custom Software & SaaS Platforms",
    shortDesc: "Bespoke CRM systems, scalable multi-tenant SaaS platforms, enterprise tools, and REST/GraphQL APIs.",
    tagline: "Scalable Cloud-Native Software Engineering",
    fullDesc: "We turn complex business workflows into intuitive cloud software, offering end-to-end architecture from data modeling to billing engine integration.",
    category: "Engineering",
    icon: "layers",
    deliverables: ["Custom CRM Platforms", "Multi-Tenant SaaS Engines", "Enterprise ERP Extensions", "Secure Public APIs"],
    subServices: ["CRM Development", "SaaS Development", "API Development", "Legacy Modernization"],
    benefits: ["Zero Vendor Lock-in", "Automated Stripe/Paddle Billing", "SOC2-compliant Infrastructure"],
    process: [
      { step: "Domain Modeling", desc: "Map business rules, entity relationships, and authorization matrices." },
      { step: "Iterative Sprints", desc: "Bi-weekly production releases with continuous automated regression testing." },
      { step: "Scaling & Maintenance", desc: "Auto-scaling infrastructure with automated telemetry and alerting." },
    ],
  },
  {
    slug: "cloud-hosting-maintenance",
    title: "Cloud Solutions & 24/7 Website Maintenance",
    shortDesc: "Secure cloud infrastructure on AWS, GCP, and Cloudflare with 24/7 proactive security monitoring.",
    tagline: "Resilient Cloud Infrastructure & SLA-Backed Uptime",
    fullDesc: "Ensure continuous availability and lightning-fast speed with multi-cloud deployments, automated backup routines, zero-day security patching, and round-the-clock incident response.",
    category: "Design & Cloud",
    icon: "server",
    deliverables: ["Managed Cloud Hosting", "24/7 Incident Response", "Automated Disaster Recovery", "Continuous Security Audits"],
    subServices: ["Web Hosting", "Website Maintenance", "Cloud Architecture", "DevOps Infrastructure"],
    benefits: ["Guaranteed 99.95%+ Uptime SLA", "Proactive Threat Mitigation", "Automated Daily Backups"],
    process: [
      { step: "Cloud Infrastructure Audit", desc: "Analyze resource utilization, bottlenecks, and security attack surfaces." },
      { step: "Migration & Hardening", desc: "Zero-downtime cutover with SSL, WAF, and CDN edge rules." },
      { step: "Ongoing Monitoring", desc: "Synthetic monitoring and continuous performance optimization." },
    ],
  },
  {
    slug: "ui-ux-design-qa",
    title: "UI/UX Design & QA Testing",
    shortDesc: "User research, interactive Figma design systems, usability audits, and end-to-end automated QA testing.",
    tagline: "Intuitive Design Systems & Rigorous Software Quality",
    fullDesc: "We design products that users love and test them until they never break. Combining human-centered visual design with automated cross-device regression testing.",
    category: "Design & Cloud",
    icon: "sparkles",
    deliverables: ["Design Systems & Style Guides", "Interactive Prototypes", "Automated E2E Test Suites", "Cross-Browser Testing"],
    subServices: ["UI/UX Design", "QA Testing", "User Testing Audits", "Accessibility (a11y) Reviews"],
    benefits: ["Reduced Churn & High Engagement", "Zero Production Critical Regressions", "Figma-to-Code Precision"],
    process: [
      { step: "Research & Journey Mapping", desc: "User interviews, competitive benchmarking, and interaction maps." },
      { step: "High-Fidelity Design", desc: "Pixel-perfect Figma designs, component libraries, and interactive flows." },
      { step: "Automated QA Verification", desc: "Playwright and Cypress automated test coverage across 50+ viewport sizes." },
    ],
  },
  {
    slug: "creative-media",
    title: "Animation & Video Editing Studio",
    shortDesc: "Motion graphics, 3D product animations, corporate showreels, and technical explainer videos.",
    tagline: "High-Impact Visual Storytelling & Motion Design",
    fullDesc: "Elevate your brand presence with commercial-grade video edits, interactive web animations, product reels, and compelling visual content that converts visitors into advocates.",
    category: "Design & Cloud",
    icon: "video",
    deliverables: ["Interactive Web 3D Animation", "Commercial Video Editing", "Product Explainer Videos", "Social Video Creatives"],
    subServices: ["Animation", "Video Editing", "Content Creation", "Content Writing"],
    benefits: ["3x Higher Landing Page Conversion", "Studio-Grade Color Grading & Sound", "Custom WebGL & GSAP Assets"],
    process: [
      { step: "Concept & Storyboarding", desc: "Scriptwriting, narrative structure, and scene-by-scene storyboards." },
      { step: "Production & 3D Modeling", desc: "Motion design, 3D asset generation, and audio engineering." },
      { step: "Post-Production & Web Optimization", desc: "Compression, edge streaming, and code integration." },
    ],
  },
];

export interface TechDetail {
  slug: string;
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Mobile" | "Cloud & DevOps" | "Databases" | "AI & ML";
  description: string;
  architectureRole: string;
  keyStrengths: string[];
  ecosystem: string[];
}

export const TECHNICALS_CATALOG: TechDetail[] = [
  {
    slug: "react-nextjs",
    name: "React & Next.js",
    category: "Frontend",
    description: "Enterprise React 19 and Next.js 16 with App Router, Turbopack, Server Actions, and Partial Prerendering.",
    architectureRole: "Flagship Frontend & Full-Stack Application Framework",
    keyStrengths: ["Streaming Server-Side Rendering", "Turbopack Zero-Lag Bundling", "Edge Network Runtime", "Optimal Core Web Vitals"],
    ecosystem: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "GSAP"],
  },
  {
    slug: "typescript-javascript",
    name: "TypeScript & Modern JS",
    category: "Languages",
    description: "Strictly-typed JavaScript delivering predictable, self-documenting codebases across the entire stack.",
    architectureRole: "Core Language for Client and Cloud Runtime",
    keyStrengths: ["Zero-Runtime Type Safety", "Refactoring Confidence", "Universal Code Sharing between Frontend and Backend"],
    ecosystem: ["TypeScript 5.x", "ESNext", "Zod Validation", "Node.js Runtimes"],
  },
  {
    slug: "python-ai",
    name: "Python & Machine Learning",
    category: "AI & ML",
    description: "High-performance Python backend services, PyTorch pipelines, FastAPI microservices, and AI integrations.",
    architectureRole: "AI Engineering, Mathematical Modeling & Data Pipelines",
    keyStrengths: ["Broad AI/ML Ecosystem", "Async FastAPI Throughput", "Native LLM & Vector Store Connectors"],
    ecosystem: ["Python 3.12+", "FastAPI", "PyTorch", "LangChain", "OpenAI SDK", "Pandas"],
  },
  {
    slug: "node-backend",
    name: "Node.js & Express",
    category: "Backend",
    description: "Asynchronous, event-driven runtime powering high-concurrency microservices and real-time WebSocket platforms.",
    architectureRole: "API Gateways, Microservices & Real-Time Sync",
    keyStrengths: ["Non-blocking I/O", "High Concurrent Throughput", "Massive Package Ecosystem", "Lightweight Memory Footprint"],
    ecosystem: ["Node.js 22 LTS", "Express.js", "NestJS", "Socket.io", "Prisma ORM"],
  },
  {
    slug: "mobile-flutter-reactnative",
    name: "React Native & Flutter",
    category: "Mobile",
    description: "Cross-platform mobile frameworks delivering 60fps native performance with single codebases for iOS & Android.",
    architectureRole: "Cross-Platform Mobile Application Development",
    keyStrengths: ["Unified Codebase", "Near-Native Benchmark Speeds", "Fast Feature Parity across App Store & Google Play"],
    ecosystem: ["React Native", "Flutter / Dart", "Expo", "Swift Bridges", "Kotlin Bridges"],
  },
  {
    slug: "cloud-devops",
    name: "AWS, GCP & Cloudflare",
    category: "Cloud & DevOps",
    description: "Multi-cloud infrastructure, Docker containerization, Kubernetes orchestration, and automated CI/CD pipelines.",
    architectureRole: "Global Infrastructure, Edge Computing & Security",
    keyStrengths: ["Multi-Region High Availability", "DDoS Resilience", "Automated Blue-Green Deployments"],
    ecosystem: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Cloudflare Workers & CDN", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    slug: "databases-sql-nosql",
    name: "PostgreSQL, MongoDB & Redis",
    category: "Databases",
    description: "Relational persistence with ACID compliance, high-volume document stores, and in-memory caching.",
    architectureRole: "Enterprise Persistence, Caching & Real-Time Queues",
    keyStrengths: ["High-Throughput Read/Write", "Sub-millisecond Redis Caching", "Robust Data Integrity"],
    ecosystem: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL"],
  },
  {
    slug: "php-laravel",
    name: "PHP & Laravel",
    category: "Backend",
    description: "Modern PHP 8+ and Laravel framework powering robust enterprise ERPs, APIs, and scalable web platforms.",
    architectureRole: "Enterprise Backend & Monolithic Web Architectures",
    keyStrengths: ["Elegant Eloquent ORM", "Built-in Queue Workers", "Rapid Production Time-to-Market"],
    ecosystem: ["PHP 8.3", "Laravel 11", "Livewire", "MySQL", "Composer"],
  },
  {
    slug: "java-enterprise",
    name: "Java & Spring Boot",
    category: "Backend",
    description: "Industrial-grade Java platforms, Spring Boot microservices, high-reliability banking and enterprise systems.",
    architectureRole: "High-Reliability Enterprise Core Systems",
    keyStrengths: ["Rock-solid JVM Stability", "Enterprise Concurrency", "Extensive Security Modules"],
    ecosystem: ["Java 21 LTS", "Spring Boot 3", "Hibernate", "Maven", "Gradle"],
  },
];

export interface PortfolioProject {
  slug: string;
  title: string;
  clientCategory: string;
  tagline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  features: string[];
  deliverableType: "Web Platform" | "Mobile App" | "AI System" | "SaaS Application";
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "fintech-global-platform",
    title: "ApexPay Global Financial Platform",
    clientCategory: "Concept Demonstration Platform",
    tagline: "High-Frequency Multi-Currency Settlement Engine",
    summary: "A conceptual high-volume cross-border financial dashboard featuring sub-second settlement calculations, real-time liquidity tracking, and compliant KYC verification.",
    metrics: [
      { label: "Throughput Capacity", value: "25,000 TPS" },
      { label: "Dashboard Latency", value: "<120ms" },
      { label: "Currency Pairs", value: "48+" },
    ],
    technologies: ["Next.js 16", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Tailwind CSS"],
    features: ["Real-time WebSocket Tickers", "Multi-tier RBAC Security", "Audit-Ready Export Workflows"],
    deliverableType: "Web Platform",
  },
  {
    slug: "healthtech-telemedicine-app",
    title: "PulseCare Telemedicine Suite",
    clientCategory: "Concept Demonstration System",
    tagline: "End-to-End HIPAA-Compliant Mobile Consultation Suite",
    summary: "A concept telemedicine mobile application connecting patients with board-certified physicians via encrypted WebRTC video, e-prescriptions, and vital tracking.",
    metrics: [
      { label: "Connection Reliability", value: "99.98%" },
      { label: "Doctor Match Time", value: "<45s" },
      { label: "Encryption", value: "AES-256" },
    ],
    technologies: ["React Native", "WebRTC", "FastAPI", "Python", "Cloudflare Stream", "MongoDB"],
    features: ["HD Encrypted Video Consultations", "Biometric Health Record Access", "Automated Prescription Sync"],
    deliverableType: "Mobile App",
  },
  {
    slug: "ecommerce-scale-engine",
    title: "OmniStore Headless E-commerce",
    clientCategory: "Concept Demonstration Project",
    tagline: "Next-Gen Headless Omnichannel Commerce Engine",
    summary: "A concept headless storefront optimized for high-volume flash sales with sub-second page transitions, dynamic inventory reservation, and 1-click checkout.",
    metrics: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Cart Abandonment Drop", value: "-24%" },
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Redis", "Stripe API"],
    features: ["Instant Edge Prerendering", "Intelligent Product Recommendations", "Unified Multi-currency Checkout"],
    deliverableType: "SaaS Application",
  },
  {
    slug: "ai-logistics-optimizer",
    title: "FleetMind AI Logistics Dispatcher",
    clientCategory: "Concept Demonstration Project",
    tagline: "Autonomous Dynamic Route & Fleet Optimization",
    summary: "An AI-powered fleet management dashboard that calculates dynamic routing models based on weather, traffic, and fuel constraints for enterprise supply chains.",
    metrics: [
      { label: "Fuel Cost Reduction", value: "18.5%" },
      { label: "Route Compute Speed", value: "0.2s" },
      { label: "Fleet Coverage", value: "10,000+ Vehicles" },
    ],
    technologies: ["Python", "FastAPI", "React", "Mapbox GL", "Three.js", "Docker"],
    features: ["3D Fleet Tracking Map", "Real-time Telemetry Processing", "Automated Driver Dispatch Routing"],
    deliverableType: "AI System",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: "AI & Innovation" | "Engineering" | "Digital Growth" | "Architecture";
  publishedAt: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "future-of-ai-agents-enterprise",
    title: "How Autonomous AI Agents are Transforming Enterprise Operations in 2026",
    category: "AI & Innovation",
    publishedAt: "November 2026",
    readTime: "6 min read",
    author: "WebNote AI Research Lab",
    excerpt: "Exploring the evolution from passive LLMs to autonomous goal-directed agents that execute complex multi-step business operations.",
    content: [
      "The paradigm of enterprise artificial intelligence has definitively transitioned from basic prompt-response chatbots to autonomous, goal-directed agentic architectures.",
      "In modern production systems, an agent perceives environment state, evaluates intermediate objectives against business guardrails, executes API tool calls, and handles exceptions without manual intervention.",
      "Organizations implementing multi-agent workflows report up to an 80% reduction in routine workflow friction across customer onboarding, invoice reconciliation, and automated QA.",
    ],
  },
  {
    slug: "nextjs-16-turbopack-performance",
    title: "Next.js 16 & Turbopack: Deep Dive into Enterprise Performance & Partial Prerendering",
    category: "Engineering",
    publishedAt: "November 2026",
    readTime: "7 min read",
    author: "WebNote Engineering Team",
    excerpt: "A technical breakdown of Next.js 16 architectures, cache components, partial prefetching, and optimal Core Web Vitals.",
    content: [
      "Next.js 16 solidifies Turbopack as the default bundler for both development and production builds, achieving compilation speeds that eliminate traditional dev cycle latency.",
      "Partial Prerendering (PPR) solves the historical dichotomy between static shell delivery and dynamic personalization, streaming personalized components into cached layouts seamlessly.",
      "By combining React 19 server actions with fine-grained cache component controls, enterprise portals achieve near-instant initial render times while serving live, personalized data.",
    ],
  },
  {
    slug: "us-digital-marketing-roi-2026",
    title: "Mastering Digital Marketing in the United States: High-Intent Search & Conversion Rate Optimization",
    category: "Digital Growth",
    publishedAt: "November 2026",
    readTime: "5 min read",
    author: "WebNote Growth Strategy Group",
    excerpt: "Why US market acquisition requires precision intent modeling, programmatic CRO, and multi-channel attribution.",
    content: [
      "Customer acquisition across competitive US sectors demands moving beyond vanity impressions toward high-intent search optimization and conversion rate engineering.",
      "With customer acquisition costs rising across paid channels, high-ranking technical SEO combined with systematic A/B testing on landing pages yields the highest blended lifetime value.",
      "Integrating local SEO signals, verified business reviews, and authoritative industry content creates a compound advantage that paid advertising alone cannot replicate.",
    ],
  },
  {
    slug: "scaling-saas-cloud-architecture",
    title: "Architecting Multi-Tenant Cloud SaaS for Zero Downtime and Global Latency Targets",
    category: "Architecture",
    publishedAt: "November 2026",
    readTime: "8 min read",
    author: "WebNote Cloud Architects",
    excerpt: "Best practices for database partitioning, edge caching, and automated failover in enterprise cloud applications.",
    content: [
      "Building a multi-tenant cloud application that guarantees 99.99% availability requires designing for failure at every tier of the stack.",
      "By decoupling tenant configuration from the core database via in-memory Redis replication and utilizing Cloudflare edge routing, requests hit nearest points of presence in sub-50ms.",
      "Automated blue-green deployments via GitHub Actions and Docker container orchestration ensure zero-downtime releases even during peak business hours.",
    ],
  },
];

export interface CareerOpening {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Marketing" | "Internship";
  location: "Kolkata, India / Hybrid" | "Remote (Global)";
  type: "Full-Time" | "Internship" | "Contract";
  experience: string;
  description: string;
  requirements: string[];
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "fe-lead-01",
    title: "Senior Full-Stack Next.js / React Engineer",
    department: "Engineering",
    location: "Kolkata, India / Hybrid",
    type: "Full-Time",
    experience: "3+ years",
    description: "Lead the development of cutting-edge client web platforms using Next.js 16, TypeScript, Three.js, and modern cloud architectures.",
    requirements: ["Deep expertise in React 19, Next.js App Router, and TypeScript", "Demonstrated experience with Tailwind CSS and responsive design systems", "Familiarity with WebGL, Three.js, or GSAP is a major plus"],
  },
  {
    id: "growth-mkt-02",
    title: "Digital Marketing & Performance Growth Strategist",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Full-Time",
    experience: "2+ years",
    description: "Orchestrate PPC, Google Ads, and conversion optimization campaigns for enterprise clients across the United States and global markets.",
    requirements: ["Proven track record managing US Google Ads and Meta Ads campaigns", "Expertise in Technical SEO, Google Analytics 4, and conversion funnel optimization", "Strong data analytical skills and client reporting"],
  },
  {
    id: "uiux-designer-03",
    title: "Senior UI/UX & Motion Designer",
    department: "Design",
    location: "Kolkata, India / Hybrid",
    type: "Full-Time",
    experience: "2+ years",
    description: "Craft modern, light-themed digital experiences, interactive design systems, and micro-interactions in Figma.",
    requirements: ["Exceptional portfolio demonstrating modern web application design", "Mastery of Figma, component libraries, and interactive prototyping", "Understanding of developer handoff and CSS grid/flexbox"],
  },
  {
    id: "intern-eng-04",
    title: "Software Engineering Intern (Web & Cloud)",
    department: "Internship",
    location: "Kolkata, India / Hybrid",
    type: "Internship",
    experience: "Entry Level / Students",
    description: "Hands-on internship working alongside senior architects on real-world production web platforms, API integrations, and testing.",
    requirements: ["Foundational knowledge of JavaScript, TypeScript, and HTML/CSS", "Eagerness to learn Next.js, Node.js, and cloud deployments", "Strong problem-solving and algorithmic thinking"],
  },
];

export const PORTFOLIO_CASES = PORTFOLIO_PROJECTS;

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "WebNote Technologies engineered our platform with sub-second responsiveness and flawless 3D interactions. Their senior team delivered our US enterprise product ahead of schedule.",
    author: "David Sterling",
    role: "VP of Product Strategy",
    company: "Apex Global Systems (San Francisco, CA)",
  },
  {
    quote: "Their digital marketing and technical SEO strategy expanded our organic pipeline in the US market by 180% within four months. A truly exceptional technical and growth partner.",
    author: "Elena Rostova",
    role: "Chief Operating Officer",
    company: "VentureScale Health (New York, NY)",
  },
  {
    quote: "The cleanest TypeScript and Next.js architecture we have seen from an agency. Zero technical debt, rigorous automated testing, and transparent daily communication.",
    author: "Marcus Thorne",
    role: "Chief Technology Officer",
    company: "OmniCore Logistics (London, UK)",
  },
];

