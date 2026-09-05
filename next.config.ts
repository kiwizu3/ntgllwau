import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy Wix service URLs -> clean canonical service URLs.
      { source: "/service-1", destination: "/construction-law", permanent: true },
      { source: "/copy-of-service-1", destination: "/criminal-law", permanent: true },
      { source: "/copy-of-criminal-law-1", destination: "/family-law", permanent: true },
      { source: "/copy-of-criminal-law", destination: "/conveyancing", permanent: true },
      { source: "/copy-of-property-law", destination: "/commercial-law", permanent: true },

      // URLs used by earlier redesign packages.
      { source: "/practice-areas", destination: "/services", permanent: true },
      { source: "/practice-areas/criminal-law", destination: "/criminal-law", permanent: true },
      { source: "/practice-areas/construction-law", destination: "/construction-law", permanent: true },
      { source: "/practice-areas/family-law", destination: "/family-law", permanent: true },
      { source: "/practice-areas/conveyancing", destination: "/conveyancing", permanent: true },
      { source: "/practice-areas/commercial-law", destination: "/commercial-law", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },

      // Wix blog/profile URLs retained for inbound links.
      { source: "/post/welcome-a-law-firm-wollongong-online-frontier", destination: "/blog/welcome-a-law-firm-wollongong-online-frontier", permanent: true },
      { source: "/about-5", destination: "/about#hanna-ayoub", permanent: true },
      { source: "/profile/hanna/profile", destination: "/about#hanna-ayoub", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
