import { notFound } from "next/navigation";
import { InfoPage } from "@/components/InfoPage";
import { getCopy, isLocale, locales, pageSlugs, type Locale, type PageSlug } from "@/i18n";

type PageProps = {
  params: Promise<{ locale: string; slug: string }> | { locale: string; slug: string };
};

export function generateStaticParams() {
  return locales.flatMap((locale) => pageSlugs.map((slug) => ({ locale, slug })));
}

function isPageSlug(value: string): value is PageSlug {
  return pageSlugs.includes(value as PageSlug);
}

export default async function Page({ params }: PageProps) {
  const resolved = await params;

  if (!isLocale(resolved.locale) || !isPageSlug(resolved.slug)) {
    notFound();
  }

  const locale: Locale = resolved.locale;
  const text = getCopy(locale);

  return <InfoPage locale={locale} copy={text} page={resolved.slug} />;
}
