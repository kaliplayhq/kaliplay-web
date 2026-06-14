import type { Metadata } from "next";
import "../globals.css";
import { dir, getCopy, isLocale, locales, type Locale } from "@/i18n";

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
    openGraph: {
      title: text.meta.title,
      description: text.meta.description,
      url: `/${locale}`,
      siteName: "Kaliplay",
      images: [{ url: "/hero-digital-assets-v2.png", width: 1600, height: 900, alt: "Kaliplay digital assets marketplace visual" }],
      locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: text.meta.title,
      description: text.meta.description,
      images: ["/hero-digital-assets-v2.png"]
    }
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? resolved.locale : "en";

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <div className="noise" />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
