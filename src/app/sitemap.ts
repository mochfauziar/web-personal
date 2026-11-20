import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { site } from "@/lib/site";

// Sitemap dinamis: rute statis + tiap tulisan dari konten MDX.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
