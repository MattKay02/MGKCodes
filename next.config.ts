import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: "standalone",

  // Image optimization
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },

  // Trailing slashes for consistent URLs
  trailingSlash: false,
};

export default nextConfig;
