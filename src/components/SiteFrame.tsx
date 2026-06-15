"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { languages, locales, pageSlugs, type HomeCopy, type Locale } from "@/i18n";

type SiteFrameProps = {
  locale: Locale;
  copy: HomeCopy;
  children: React.ReactNode;
};

function localizedPath(pathname: string | null, nextLocale: Locale) {
  const parts = (pathname || "/en").split("/").filter(Boolean);
  const rest = parts.slice(1).join("/");
  return `/${nextLocale}${rest ? `/${rest}` : ""}`;
}

export function SiteFrame({ locale, copy, children }: SiteFrameProps) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-blacktop/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href={`/${locale}`} className="group flex items-center gap-3" aria-label="Kaliplay home">
            <BrandLogo variant="lockupHorizontal" className="h-12 w-40 sm:w-48" priority />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {["store", "about", "compliance", "contact"].map((slug) => (
              <Link
                key={slug}
                href={`/${locale}/${slug}`}
                className="rounded-[8px] px-3 py-2 text-sm font-semibold text-bone/70 transition hover:bg-white/10 hover:text-bone"
              >
                {copy.nav[slug as keyof typeof copy.nav]}
              </Link>
            ))}
          </div>

          <div className="group relative">
            <button className="flex items-center gap-2 rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-sm font-bold text-bone transition hover:border-ember/70 hover:bg-ember/10">
              {languages[locale]}
              <ChevronDown size={16} />
            </button>
            <div className="absolute end-0 top-11 hidden w-52 rounded-[8px] border border-white/10 bg-carbon/95 p-2 shadow-2xl backdrop-blur-xl group-hover:block">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={localizedPath(pathname, item)}
                  className="block rounded-[6px] px-3 py-2 text-sm text-bone/75 transition hover:bg-ember/15 hover:text-bone"
                >
                  {languages[item]}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {children}

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-bone/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Kaliplay. {copy.footer}</p>
          <div className="flex flex-wrap gap-4">
            {pageSlugs.map((slug) => (
              <Link key={slug} href={`/${locale}/${slug}`} className="transition hover:text-flare">
                {copy.nav[slug]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
