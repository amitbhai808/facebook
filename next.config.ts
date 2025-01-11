import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeholder.com"], // Add domains for Image component
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Be more specific in production
      },
    ],
  },
};

export default nextConfig;
