export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  featured: boolean;
  image: string;
  tagline: string;
  challenge: string;
  objectives: string[];
  servicesProvided: string[];
  technologiesUsed: string[];
  approach: string;
  solutions: string[];
  outcomes: { metric: string; label: string }[];
  isDemoConcept: boolean;
}

export const ALL_PROJECTS: CaseStudy[] = [
  {
    slug: "aurora-fintech-platform",
    title: "Aurora Capital — Next-Gen Wealth Management Portal",
    client: "Aurora Global Asset Management (Concept Showcase)",
    industry: "Fintech & Wealth Management",
    category: "Web Applications",
    featured: true,
    image: "/images/portfolio/fintech.jpg",
    tagline: "Transforming high-net-worth portfolio management with real-time analytics and bank-grade security.",
    challenge: "The client operated with fragmented legacy desktop systems, causing portfolio managers to waste hours preparing reporting decks while clients lacked real-time visibility into their asset allocation and performance metrics.",
    objectives: [
      "Unify multi-custodian data into a single real-time dashboard",
      "Achieve sub-second load times across 50,000+ asset tracking streams",
      "Implement SOC2 Type II and FINRA-compliant security architectures",
      "Deliver a bespoke, ultra-luxurious digital client portal",
    ],
    servicesProvided: ["Custom Software Development", "UI/UX Architecture", "Enterprise Security Hardening", "Cloud DevOps on AWS"],
    technologiesUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "PostgreSQL", "AWS ECS", "Kafka"],
    approach: "We adopted a domain-driven microservice architecture with event-driven state syncing via Apache Kafka, paired with an accessible, high-density React frontend utilizing virtualized data tables.",
    solutions: [
      "Real-time streaming portfolio valuation engine utilizing WebSocket feeds",
      "Automated tax-loss harvesting alert system using event triggers",
      "Biometric client portal with role-based access for multi-family offices",
      "Automated PDF executive report generation with one-click export",
    ],
    outcomes: [
      { metric: "99.99%", label: "Platform Uptime SLA" },
      { metric: "78%", label: "Reduction in Client Reporting Prep Time" },
      { metric: "<120ms", label: "Average API Response Latency" },
    ],
    isDemoConcept: true,
  },
  {
    slug: "pulse-telehealth-ios-android",
    title: "PulseHealth — On-Demand Specialist Telehealth Ecosystem",
    client: "Pulse Medical Group (Concept Showcase)",
    industry: "Healthcare & Life Sciences",
    category: "Mobile Applications",
    featured: true,
    image: "/images/portfolio/healthcare.jpg",
    tagline: "Connecting patients to board-certified specialists with HIPAA-compliant encrypted video and EHR sync.",
    challenge: "Patients faced weeks of wait times for consultations while physicians struggled with clunky scheduling tools that failed to sync with their electronic health record (EHR) databases.",
    objectives: [
      "Build native-feeling iOS and Android patient applications",
      "Engineer zero-latency end-to-end encrypted WebRTC video calls",
      "Achieve full HIPAA compliance and HL7/FHIR EHR interoperability",
      "Deliver automated prescription routing to local pharmacies",
    ],
    servicesProvided: ["Mobile App Development", "HIPAA Compliance Engineering", "Cloud Infrastructure", "UI/UX Design"],
    technologiesUsed: ["React Native", "WebRTC", "Node.js", "PostgreSQL", "AWS HIPAA VPC", "Docker"],
    approach: "Built using React Native for unified cross-platform velocity, backed by dedicated HIPAA-compliant AWS VPCs and automated encryption at rest and in transit.",
    solutions: [
      "Custom WebRTC signaling server with automatic quality degradation for weak cellular connections",
      "Automated smart intake forms triaging urgency before consultation",
      "Integrated digital prescription pad syncing with nationwide US pharmacy networks",
      "Secure in-app biometric authorization for instant medical history unlock",
    ],
    outcomes: [
      { metric: "4.9 / 5.0", label: "App Store User Rating" },
      { metric: "15 min", label: "Average Time to Specialist Consultation" },
      { metric: "100%", label: "HIPAA Security Audit Compliance" },
    ],
    isDemoConcept: true,
  },
  {
    slug: "strata-ai-customer-ops",
    title: "Strata Logix — Autonomous AI Support & Operations Suite",
    client: "Strata Supply Chain Systems (Concept Showcase)",
    industry: "Logistics & Enterprise SaaS",
    category: "AI Automation",
    featured: true,
    image: "/images/portfolio/ai-logistics.jpg",
    tagline: "Automating 60% of tier-1 freight queries and bill-of-lading processing with multi-agent LLM systems.",
    challenge: "Dispatch operators were overwhelmed by thousands of daily status calls and unstructured PDF freight documents requiring manual data entry into the company ERP.",
    objectives: [
      "Automate email and EDI inquiry classification and resolution",
      "Extract line-item data from scanned invoices and shipping receipts with >99% precision",
      "Integrate directly with legacy SAP and Oracle logistics backends",
      "Establish human-in-the-loop review for high-liability transactions",
    ],
    servicesProvided: ["AI Agent Development", "Intelligent Document Processing (IDP)", "Custom API Integration", "Enterprise Training"],
    technologiesUsed: ["Python", "LangChain", "OpenAI GPT-4", "pgvector", "FastAPI", "React", "Docker"],
    approach: "Designed a multi-agent LangGraph topology with semantic vector memory, self-correcting schema extraction, and strict hallucination boundaries.",
    solutions: [
      "Multi-agent workflow routing freight inquiries based on urgency and carrier type",
      "Vision-language model pipeline converting wrinkled delivery receipts into structured JSON",
      "Real-time dispatch assistant providing suggested answers with source document citations",
      "Executive accuracy and latency monitoring dashboard with rollback capability",
    ],
    outcomes: [
      { metric: "62%", label: "Tier-1 Inquiries Autonomously Resolved" },
      { metric: "$340K+", label: "Projected Annual Administrative Cost Savings" },
      { metric: "99.4%", label: "Field Extraction Precision Rate" },
    ],
    isDemoConcept: true,
  },
  {
    slug: "vogue-nordic-headless-ecommerce",
    title: "Nordic Minimalist — Ultra-Fast Headless Luxury Storefront",
    client: "Nordic Atelier (Concept Showcase)",
    industry: "Retail & E-commerce",
    category: "Website Development",
    featured: false,
    image: "/images/portfolio/ecommerce.jpg",
    tagline: "Sub-100ms page transitions and interactive 3D product visualizers boosting conversion by 42%.",
    challenge: "A monolithic Shopify theme was sluggish, taking 4.2 seconds to load product catalogs on mobile devices and depressing conversion rates on high-intent paid social campaigns.",
    objectives: [
      "Migrate to a headless Next.js frontend with sub-second page loads",
      "Integrate interactive 3D WebGL material visualizers",
      "Seamlessly preserve Shopify Plus checkout, inventory, and order pipelines",
      "Deliver localized multi-currency and international checkout options",
    ],
    servicesProvided: ["Headless E-commerce Development", "3D WebGL Asset Engineering", "Conversion Rate Optimization (CRO)", "Technical SEO"],
    technologiesUsed: ["Next.js", "Shopify Plus Storefront API", "Three.js", "Tailwind CSS", "Vercel Edge"],
    approach: "Architected a decoupled headless store using Next.js on Vercel Edge with incremental static regeneration, paired with lightweight Draco-compressed Three.js models.",
    solutions: [
      "Instantaneous catalog navigation via optimistic edge prefetching",
      "Interactive 3D configurator letting shoppers preview bespoke fabric textures in 360 degrees",
      "One-click multi-currency checkout via Stripe and Apple Pay",
      "Automated server-side Meta Conversions API tracking for exact ad attribution",
    ],
    outcomes: [
      { metric: "<650ms", label: "Mobile First Contentful Paint (FCP)" },
      { metric: "+42%", label: "Conversion Rate Improvement" },
      { metric: "+28%", label: "Average Order Value (AOV)" },
    ],
    isDemoConcept: true,
  },
];
