import type { MetadataRoute } from "next";
import { hreflang, locales, pageSlugs } from "@/i18n";

const base = "https://kaliplay.com";

// Login gate with no crawlable content — excluded from the sitemap (also noindex'd).
const indexableSlugs = pageSlugs.filter((slug) => slug !== "store");

function altLanguages(path: string) {
  return {
    languages: {
      ...Object.fromEntries(locales.map((l) => [hreflang[l], `${base}/${l}${path}`])),
      "x-default": `${base}/en${path}`
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  return locales.flatMap((locale) => [
    {
      url: `${base}/${locale}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.8,
      alternates: altLanguages("")
    },
    ...indexableSlugs.map((slug) => ({
      url: `${base}/${locale}/${slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: altLanguages(`/${slug}`)
    }))
  ]);
}
