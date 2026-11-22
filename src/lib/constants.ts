export const SITE_CONFIG = {
  name: "WebNote Technologies",
  legalName: "WebNote Technologies Pvt. Ltd",
  tagline: "Building Digital Experiences. Empowering Businesses. Shaping the Future.",
  description:
    "WebNote Technologies is a premium international IT, software development, and digital growth agency empowering businesses with innovative technology solutions.",
  url: "https://webnotetechnologies.com",
  logo: "/images/webnotelogo.png",
  email: "info@webnotetechnologies.com",
  phone: "+1 (555) 000-0000",
  address: {
    street: "123 Innovation Drive, Suite 400",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States",
  },
  social: {
    linkedin: "https://linkedin.com/company/webnotetechnologies",
    twitter: "https://twitter.com/webnotetechnologies",
    facebook: "https://facebook.com/webnotetechnologies",
    instagram: "https://instagram.com/webnotetechnologies",
    github: "https://github.com/webnotetechnologies",
    youtube: "https://youtube.com/@webnotetechnologies",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "What We Do",
    href: "/services",
    megaMenu: true,
    sections: [
      {
        title: "Development",
        items: [
          { label: "Website Development", href: "/services/website-development", description: "Business, e-commerce, and custom websites" },
          { label: "Mobile App Development", href: "/services/mobile-app-development", description: "Android, iOS, and cross-platform apps" },
          { label: "Custom Software", href: "/services/custom-software-development", description: "Enterprise and bespoke software solutions" },
          { label: "SaaS Development", href: "/services/saas-development", description: "Cloud-based subscription platforms" },
        ],
      },
      {
        title: "Digital Growth",
        items: [
          { label: "Digital Marketing", href: "/services/digital-marketing", description: "SEO, PPC, social media, and content" },
          { label: "AI Automation", href: "/services/ai-automation", description: "AI agents, chatbots, and workflow automation" },
          { label: "CRM Solutions", href: "/services/crm-solutions", description: "GoHighLevel, HubSpot, Salesforce" },
          { label: "Animation & Video", href: "/services/animation-video-production", description: "2D/3D animation, motion graphics, video" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { label: "Web Hosting & Cloud", href: "/services/web-hosting", description: "VPS, cloud, managed hosting solutions" },
          { label: "Website Maintenance", href: "/services/website-maintenance", description: "Updates, security, and performance" },
        ],
      },
    ],
  },
  {
    label: "Technicals",
    href: "/technologies",
    megaMenu: true,
    sections: [
      {
        title: "Development",
        items: [
          { label: "Frontend", href: "/technologies?category=frontend", description: "React, Next.js, Vue, Angular" },
          { label: "Backend", href: "/technologies?category=backend", description: "Node.js, Python, PHP, Java" },
          { label: "Mobile", href: "/technologies?category=mobile", description: "React Native, Flutter, Swift" },
        ],
      },
      {
        title: "Data & AI",
        items: [
          { label: "Databases", href: "/technologies?category=databases", description: "MySQL, PostgreSQL, MongoDB" },
          { label: "AI & ML", href: "/technologies?category=ai-ml", description: "TensorFlow, PyTorch, OpenAI" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { label: "Cloud & DevOps", href: "/technologies?category=cloud-devops", description: "AWS, Azure, Docker, Kubernetes" },
          { label: "CMS & E-commerce", href: "/technologies?category=cms-ecommerce", description: "WordPress, Shopify, Magento" },
        ],
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blog" },
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
