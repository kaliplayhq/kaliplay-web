import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPage } from "@/components/InfoPage";
import { StoreGate } from "@/components/StoreGate";
import { getCopy, hreflang, isLocale, locales, ogLocale, pageSlugs, type Locale, type PageSlug } from "@/i18n";

const SITE = "https://kaliplay.com";

type PageProps = {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
};

export function generateStaticParams() {
  return locales.flatMap((locale) => pageSlugs.map((slug) => ({ locale, slug })));
}

function isPageSlug(value: string): value is PageSlug {
  return pageSlugs.includes(value as PageSlug);
}

function stripTrailing(value: string) {
  return value.replace(/[.\s]+$/, "");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  if (!isLocale(resolved.locale) || !isPageSlug(resolved.slug)) return {};

  const locale = resolved.locale;
  const slug = resolved.slug;
  const text = getCopy(locale);
  const page = text.pages[slug];

  const title = `${stripTrailing(page.title)} | Kaliplay`;
  const description = page.body;
  const path = `/${locale}/${slug}`;

  // The store is a login gate with no crawlable content — keep it out of the index.
  const robots = slug === "store" ? { index: false, follow: true } : undefined;

  return {
    title,
    description,
    robots,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [hreflang[l], `/${l}/${slug}`])),
        "x-default": `/en/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Kaliplay",
      images: [{ url: "/hero-digital-assets-v3.png", width: 1600, height: 900, alt: "Kaliplay digital assets marketplace visual" }],
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-digital-assets-v3.png"]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const resolved = await params;

  if (!isLocale(resolved.locale) || !isPageSlug(resolved.slug)) {
    notFound();
  }

  const locale: Locale = resolved.locale;
  const text = getCopy(locale);

  if (resolved.slug === "store") {
    return <StoreGate locale={locale} copy={text} />;
  }

  const page = resolved.slug;
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: text.nav.home, item: `${SITE}/${locale}` },
      { "@type": "ListItem", position: 2, name: text.pages[page].eyebrow, item: `${SITE}/${locale}/${page}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <InfoPage locale={locale} copy={text} page={page} />
    </>
  );
}
