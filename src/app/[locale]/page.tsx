import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { getCopy, isLocale, locales, type Locale } from "@/i18n";

type PageProps = {
  params: Promise<{ locale: string }> | { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({ params }: PageProps) {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const locale: Locale = resolved.locale;

  return <HomePage locale={locale} copy={getCopy(locale)} />;
}
