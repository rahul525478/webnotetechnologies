export const SITE_CONFIG = {
  name: "WebNote Technologies",
  legalName: "WebNote Technologies Private Limited",
  tagline: "We Build Digital Experiences That Drive Growth",
  description:
    "WebNote Technologies is a leading global digital engineering agency specializing in enterprise-grade web development, scalable mobile applications, and strategic digital marketing solutions.",
  url: "https://webnotetechnologies.com",
  logo: "/webnotelogo.png",
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
  { label: "What We Do", href: "/what-we-do" },
  { label: "Technicals", href: "/technicals" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
] as const;
