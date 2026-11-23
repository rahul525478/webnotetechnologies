import { MetadataRoute } from "next";
import {
  SERVICES_CATALOG,
  TECHNICALS_CATALOG,
  PORTFOLIO_CASES,
  BLOG_POSTS,
} from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webnotetechnologies.com";
  const lastModified = new Date("2026-11-22T00:00:00.000Z");

  const staticRoutes = [
    "",
    "/what-we-do",
    "/technicals",
    "/portfolio",
    "/blogs",
    "/career",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_CATALOG.map((s) => ({
    url: `${baseUrl}/what-we-do/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const techRoutes = TECHNICALS_CATALOG.map((t) => ({
    url: `${baseUrl}/technicals/${t.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioRoutes = PORTFOLIO_CASES.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...techRoutes, ...portfolioRoutes, ...blogRoutes];
}
