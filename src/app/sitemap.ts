import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { servicesData } from "@/data/services";
import { articlesData } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/tentang",
    "/layanan",
    "/portfolio",
    "/testimoni",
    "/klien",
    "/kontak",
    "/artikel"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const articlePages = articlesData.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...servicePages, ...articlePages];
}

