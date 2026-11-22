export interface CareerOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const ALL_OPENINGS: CareerOpening[] = [
  {
    slug: "senior-full-stack-engineer-nextjs",
    title: "Senior Full-Stack Engineer (Next.js & TypeScript)",
    department: "Engineering",
    location: "Remote (US / International)",
    type: "Full-Time",
    experienceLevel: "Senior (5+ Years)",
    overview: "We are seeking a seasoned Senior Full-Stack Engineer to architect and build high-performance web applications, client portals, and SaaS platforms for our international client base.",
    responsibilities: [
      "Architect and ship scalable frontend architectures using Next.js, React 19, and TypeScript",
      "Design clean REST and GraphQL API services backed by PostgreSQL and Node.js",
      "Collaborate with design engineers to implement fluid 60fps micro-interactions with Tailwind and Framer Motion",
      "Mentor mid-level engineers and conduct comprehensive code reviews maintaining strict quality standards",
    ],
    requirements: [
      "5+ years of production experience building modern web applications",
      "Deep mastery of TypeScript, Next.js (App Router), React, and state management patterns",
      "Strong understanding of database schema design, indexing, and query optimization (PostgreSQL / Prisma)",
      "Passion for web performance, accessibility (WCAG), and clean software design patterns",
    ],
    benefits: [
      "Competitive global compensation package with equity options",
      "100% remote-first flexibility with home office stipend",
      "Comprehensive health, dental, and vision insurance",
      "Annual $2,500 learning and conference development budget",
      "Unlimited paid time off (PTO) with mandatory minimums",
    ],
  },
  {
    slug: "lead-creative-technologist-3d-threejs",
    title: "Lead Creative Technologist (Three.js & WebGL)",
    department: "Creative Studio",
    location: "Remote (US / International)",
    type: "Full-Time",
    experienceLevel: "Lead (6+ Years)",
    overview: "Join our creative division to engineer jaw-dropping, award-winning interactive 3D web experiences for technology pioneers and Fortune 500 brands.",
    responsibilities: [
      "Design and code hardware-accelerated 3D scenes, particle simulations, and interactive shaders using Three.js and GLSL",
      "Optimize 3D assets, Draco compression pipelines, and WebGL memory allocations for flawless mobile execution",
      "Partner with 3D modelers in Blender/Cinema4D to translate artistic vision into performant browser code",
      "Pioneer experimental web technologies, WebGPU prototypes, and immersive storytelling techniques",
    ],
    requirements: [
      "Proven portfolio of award-winning (Awwwards, FWA, CSSDA) interactive web experiences",
      "Expert knowledge of Three.js, React Three Fiber, GLSL shaders, and WebGL rendering pipelines",
      "Solid command of mathematics (linear algebra, matrix transformations, quaternions)",
      "Familiarity with modern React, Next.js, and TypeScript integration",
    ],
    benefits: [
      "Top-tier compensation package commensurate with creative leadership",
      "Top-spec hardware allowance (Maxed M-series MacBook Pro or high-end GPU workstation)",
      "Flexible asynchronous working hours across global timezones",
      "Annual international company retreat",
    ],
  },
  {
    slug: "senior-digital-growth-director-us",
    title: "Senior Digital Growth & GEO Strategist (US Market)",
    department: "Digital Marketing & Growth",
    location: "Remote (US Timezones)",
    type: "Full-Time",
    experienceLevel: "Senior (5+ Years)",
    overview: "Lead digital acquisition, Generative Engine Optimization (GEO), and multi-million dollar paid media strategies for US enterprise and tech startup clients.",
    responsibilities: [
      "Develop comprehensive organic and paid search strategies targeting high-intent US decision-makers",
      "Design and execute Generative Engine Optimization (GEO) programs across ChatGPT, Perplexity, and Google AI",
      "Manage high-budget Google Ads, LinkedIn Ads, and Meta Ads performance funnels with strict CPA thresholds",
      "Deliver strategic quarterly business reviews (QBRs) and executive analytics dashboards to C-suite clients",
    ],
    requirements: [
      "5+ years managing enterprise digital marketing campaigns with proven revenue attribution",
      "In-depth mastery of modern search landscape, entity-based SEO, and AI overview citation mechanics",
      "Hands-on expertise with Google Ads, GA4, Looker Studio, Ahrefs, and conversion rate optimization tools",
      "Exceptional English communication and presentation skills suitable for US executive stakeholders",
    ],
    benefits: [
      "Competitive base salary plus performance-linked client growth bonuses",
      "Health, dental, and 401(k) retirement matching for US residents",
      "Flexible remote schedule with company-sponsored coworking memberships",
      "Generous parental leave and wellness allowances",
    ],
  },
];
