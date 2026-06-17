import type { Metadata } from "next";
import "../globals.css";
import { dir, getCopy, hreflang, isLocale, locales, ogLocale, type Locale } from "@/i18n";
import { SpeedInsights } from '@vercel/speed-insights/next';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : "en";
  const text = getCopy(locale);

  return {
    title: text.meta.title,
    description: text.meta.description,
    metadataBase: new URL("https://kaliplay.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [hreflang[l], `/${l}`])),
        "x-default": "/en"
      }
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/brand/favicon.svg", type: "image/svg+xml" },
        { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [{ url: "/brand/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"]
    },
    openGraph: {
      title: text.meta.title,
      description: text.meta.description,
      url: `/${locale}`,
      siteName: "Kaliplay",
      images: [{ url: "/hero-digital-assets-v3.png", width: 1600, height: 900, alt: "Kaliplay digital assets marketplace visual" }],
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: text.meta.title,
      description: text.meta.description,
      images: ["/hero-digital-assets-v3.png"]
    }
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? resolved.locale : "en";
  const text = getCopy(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kaliplay.com/#organization",
        name: "Kaliplay",
        url: "https://kaliplay.com",
        logo: "https://kaliplay.com/brand/favicon-512.png",
        description: text.meta.description,
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@kaliplay.com",
          contactType: "sales",
          availableLanguage: locales.map((l) => hreflang[l])
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kaliplay.com/#website",
        url: "https://kaliplay.com",
        name: "Kaliplay",
        description: text.meta.description,
        inLanguage: hreflang[locale],
        publisher: { "@id": "https://kaliplay.com/#organization" }
      }
    ]
  };

  return (
    <html lang={hreflang[locale]} dir={dir(locale)}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <div className="noise" />
        <div className="scanline" />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
