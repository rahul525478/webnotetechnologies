import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/servicesData";
import { ALL_TECHNOLOGIES } from "@/data/technologiesData";
import { ALL_PROJECTS } from "@/data/portfolioData";
import { ALL_POSTS } from "@/data/blogData";
import { ALL_OPENINGS } from "@/data/careersData";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const lastModified = new Date("2026-11-22T00:00:00.000Z");

  const staticRoutes = [
    "",
    "/services",
    "/technologies",
    "/portfolio",
    "/blog",
    "/careers",
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

  const serviceRoutes = ALL_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const techRoutes = ALL_TECHNOLOGIES.map((t) => ({
    url: `${baseUrl}/technologies/${t.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolioRoutes = ALL_PROJECTS.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = ALL_POSTS.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const careerRoutes = ALL_OPENINGS.map((c) => ({
    url: `${baseUrl}/careers/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...techRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
    ...careerRoutes,
  ];
}
