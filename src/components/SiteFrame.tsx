"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const languageRef = useRef<HTMLDivElement>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    function closeLanguage(event: PointerEvent) {
      if (!languageRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeLanguage);
    return () => document.removeEventListener("pointerdown", closeLanguage);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <Link href={`/${locale}`} className="group flex items-center gap-3" aria-label="Kaliplay home">
            <BrandLogo variant="lockupHorizontal" className="h-14 w-48 sm:h-16 sm:w-64" priority />
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

          <div
            ref={languageRef}
            className="relative"
            onKeyDown={(event) => {
              if (event.key === "Escape") setLanguageOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={languageOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 rounded-[8px] border border-white/15 bg-white/5 px-3 py-2 text-sm font-bold text-bone transition hover:border-ember/70 hover:bg-ember/10"
              onClick={() => setLanguageOpen((open) => !open)}
            >
              {languages[locale]}
              <ChevronDown size={16} className={`transition ${languageOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              role="menu"
              className={`absolute end-0 top-12 w-52 rounded-[8px] border border-white/10 bg-black p-2 shadow-2xl shadow-black/70 ring-1 ring-ember/20 ${languageOpen ? "block" : "hidden"}`}
            >
              {locales.map((item) => (
                <Link
                  key={item}
                  href={localizedPath(pathname, item)}
                  role="menuitem"
                  aria-current={item === locale ? "page" : undefined}
                  className="block rounded-[6px] px-3 py-2 text-sm text-bone/75 transition hover:bg-ember/15 hover:text-bone aria-[current=page]:bg-pulse/10 aria-[current=page]:text-bone"
                  onClick={() => setLanguageOpen(false)}
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
