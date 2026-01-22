import { MetadataRoute } from "next";

import { getBlogList } from "@/lib/blog";

export const dynamic = "force-static";

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resolveSiteUrl();
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/product",
    "/solution",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));

  const blogRoutes = getBlogList().map((post) => ({
    url: `${baseUrl}/blog/${post.slug.join("/")}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
