import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages Static HTML Export
  output: "export",

  // Generates /about/index.html instead of /about.html.
  // Works very nicely with Cloudflare Pages clean URLs.
  trailingSlash: true,

  // Static hosting has no Next.js image optimization server.
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;