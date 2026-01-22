import { MetadataRoute } from "next";

import { getBlogList } from "@/lib/blog";
import { getBaseUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
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
