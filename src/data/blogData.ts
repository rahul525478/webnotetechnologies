export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export const ALL_POSTS: BlogPost[] = [
  {
    slug: "generative-engine-optimization-future-of-seo",
    title: "Generative Engine Optimization (GEO): Why AI Search Changes Everything for US B2B",
    category: "AI & Automation",
    excerpt: "With ChatGPT, Perplexity, and Google AI Overviews answering search queries directly, discover how modern technology brands optimize to be cited and recommended by LLMs.",
    publishedAt: "November 18, 2026",
    readTime: "7 min read",
    featured: true,
    tags: ["GEO", "AI Search", "SEO", "Generative AI", "B2B Marketing"],
    author: {
      name: "Marcus Vance",
      role: "Head of Digital Strategy",
      avatar: "/images/authors/marcus.jpg",
    },
    content: [
      "The fundamental mechanics of how decision-makers discover technology partners have experienced their greatest disruption since Google was founded in 1998. Where prospective enterprise buyers once browsed through pages of organic blue links, they now prompt conversational AI engines like Perplexity, ChatGPT Search, and Google Gemini with high-context business challenges: 'What are the top three agencies specializing in SOC2-compliant healthcare software with React Native expertise?'",
      "If your digital footprint is not engineered for Generative Engine Optimization (GEO), your company is rendered invisible in these high-stakes recommendation moments.",
      "Traditional SEO focused on keyword density, backlink quantities, and technical crawling. GEO, in contrast, optimizes for machine comprehension, entity verification, semantic consensus, and authoritative knowledge graph positioning. Large language models do not merely rank pages; they extract facts, assess consensus across diverse sources, and generate synthesized answers backed by reliable citations.",
      "To win in the GEO era, engineering and marketing teams must collaborate. Web properties need to structure their architectures around machine-readable JSON-LD schemas, publish dense informational content rather than keyword-stuffed fluff, and establish digital PR citations on platforms weighted heavily in AI training corpora such as GitHub, Crunchbase, Wikidata, and peer-reviewed technical publications.",
      "At WebNote Technologies, we build GEO readiness into every website and marketing campaign we engineer, ensuring our clients lead the market as artificial intelligence becomes the default interface for digital discovery.",
    ],
  },
  {
    slug: "architecting-nextjs-15-enterprise-scalability",
    title: "Architecting Next.js 15 for Mission-Critical Enterprise Web Applications",
    category: "Web Development",
    excerpt: "A deep dive into React Server Components, partial pre-rendering, edge streaming, and state management patterns for multi-million user web products.",
    publishedAt: "November 12, 2026",
    readTime: "9 min read",
    featured: true,
    tags: ["Next.js", "React 19", "Architecture", "TypeScript", "Performance"],
    author: {
      name: "Elena Rostova",
      role: "Principal Solutions Architect",
      avatar: "/images/authors/elena.jpg",
    },
    content: [
      "Next.js 15 has redefined enterprise frontend engineering. By shifting the computational burden of component rendering from client browser CPUs to distributed edge servers, teams can build richly interactive web applications with virtually zero client-side JavaScript overhead on initial page load.",
      "In this architectural breakdown, we explore how our engineering team configures Next.js 15 inside enterprise environments with stringent uptime and latency requirements.",
      "First, let us examine React Server Components (RSC). By defaulting to server components, we execute database queries and private API requests directly inside component trees without exposing credentials or endpoints to browser dev tools. Only nodes requiring browser event listeners (form inputs, 3D canvases, interactive modals) are marked with 'use client', dramatically shrinking client bundle payloads.",
      "Second, Partial Prerendering (PPR) combines the instantaneous delivery of static HTML shells with the dynamic real-time personalization of server streaming through React Suspense boundaries. Users receive an immediate visual response within 100 milliseconds while heavy personalized data streams in seamlessly.",
      "When paired with TypeScript strict mode, Zod runtime validation, and automated CI/CD pipelines, Next.js 15 provides an unassailable foundation for world-class web engineering.",
    ],
  },
  {
    slug: "threejs-webgl-performance-guidelines",
    title: "Cinematic 3D on the Web Without Destroying Mobile Battery Life or Core Web Vitals",
    category: "3D & Interactive",
    excerpt: "Practical techniques for implementing high-end Three.js and WebGL animations while maintaining 60fps performance and perfect Google Lighthouse scores.",
    publishedAt: "November 05, 2026",
    readTime: "6 min read",
    featured: false,
    tags: ["Three.js", "WebGL", "UX Design", "Performance", "Creative Development"],
    author: {
      name: "Julian Thorne",
      role: "Lead Creative Technologist",
      avatar: "/images/authors/julian.jpg",
    },
    content: [
      "Nothing establishes immediate creative authority and technological sophistication quite like a bespoke 3D interactive hero experience. However, poorly optimized WebGL scenes frequently crash mobile browsers, spike CPU temperature, and decimate Google Lighthouse performance scores.",
      "Creating award-winning 3D web experiences requires balancing artistic ambition with ruthless performance engineering.",
      "The first principle is geometry compression. Raw OBJ or uncompressed GLTF 3D files often exceed 20 to 50 megabytes. By applying Draco geometry compression and KTX2 texture transcoding, we routinely reduce 3D asset weights by 85% to 92%, delivering full scenes over the wire in under 800 kilobytes.",
      "The second principle is lazy initialization. A 3D WebGL canvas should never compete with critical first-contentful-paint (FCP) rendering. We mount Three.js scenes asynchronously via Intersection Observer only when the container enters the viewport, and immediately pause render requestAnimationFrame loops when the user scrolls away.",
      "Finally, always provide a graceful fallback. For low-powered mobile devices or users with 'prefers-reduced-motion' enabled, our architecture automatically substitutes heavy WebGL calculations with lightweight CSS gradients and optimized SVG illustrations.",
    ],
  },
  {
    slug: "react-native-vs-native-ios-android-2026",
    title: "React Native vs. Pure Native in 2026: An Objective Executive Decision Framework",
    category: "Mobile Applications",
    excerpt: "Should your company invest in dual native iOS/Android teams or choose React Native? We evaluate performance, costs, hiring velocity, and real-world trade-offs.",
    publishedAt: "October 29, 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Mobile", "React Native", "Swift", "Kotlin", "Product Strategy"],
    author: {
      name: "Marcus Vance",
      role: "Head of Digital Strategy",
      avatar: "/images/authors/marcus.jpg",
    },
    content: [
      "For founders, CTOs, and product executives preparing to launch a mobile application in competitive markets, one dilemma emerges above all: Do we hire two separate engineering teams for native Swift (iOS) and Kotlin (Android), or do we consolidate around a cross-platform framework like React Native?",
      "Historically, cross-platform frameworks were criticized for sluggish scroll performance, bloated binaries, and clumsy bridges. However, with the full maturity of React Native's New Architecture (Fabric rendering engine and TurboModules with direct C++ memory access), the performance delta between native and React Native has virtually vanished for 95% of business applications.",
      "When React Native makes sense: For SaaS products, e-commerce stores, social platforms, and internal enterprise tools, React Native cuts engineering payroll by 40% while doubling feature delivery cadence. You maintain a single codebase, unified design tokens, and can push critical bug fixes over the air via EAS Update without waiting days for Apple or Google review queues.",
      "When Pure Native is mandatory: For applications demanding low-level Bluetooth LE driver interactions, custom audio DSP processing, heavy ARKit/Metal gaming, or background GPS tracking under extreme battery constraints, pure native Swift and Kotlin remain the gold standard.",
      "At WebNote Technologies, we evaluate each client's technical architecture objectively to recommend the exact framework that maximizes ROI.",
    ],
  },
];
