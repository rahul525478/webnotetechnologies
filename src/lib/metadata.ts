import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface MetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.png",
}: MetadataParams): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
