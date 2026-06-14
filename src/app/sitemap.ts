import type { MetadataRoute } from "next";
import { locales, pageSlugs } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kaliplay.com";
  const today = new Date();

  return locales.flatMap((locale) => [
    {
      url: `${base}/${locale}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.8
    },
    ...pageSlugs.map((slug) => ({
      url: `${base}/${locale}/${slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ]);
}
