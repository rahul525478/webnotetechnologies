import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/services", destination: "/what-we-do", permanent: true },
      { source: "/services/:slug*", destination: "/what-we-do", permanent: true },
      { source: "/technologies", destination: "/technicals", permanent: true },
      { source: "/technologies/:slug*", destination: "/technicals", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/:slug*", destination: "/blogs", permanent: true },
      { source: "/careers", destination: "/career", permanent: true },
      { source: "/careers/:slug*", destination: "/career", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
