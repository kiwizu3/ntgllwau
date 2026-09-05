import type { MetadataRoute } from "next";
import { blogPost, practices } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nightingalelawyers.com";
  const routes = ["", "/about", "/services", "/blog", "/contact-us"];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...practices.map((practice) => ({
      url: `${base}/${practice.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${base}/blog/${blogPost.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.65,
    },
  ];
}
