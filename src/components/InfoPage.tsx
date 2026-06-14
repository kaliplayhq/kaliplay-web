import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale, PageSlug } from "@/i18n";

type InfoPageProps = {
  locale: Locale;
  copy: HomeCopy;
  page: PageSlug;
};

export function InfoPage({ locale, copy, page }: InfoPageProps) {
  const content = copy.pages[page];

  return (
    <SiteFrame locale={locale} copy={copy}>
      <section className="relative min-h-screen px-4 pb-24 pt-32 sm:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,77,0,0.25),transparent_28rem),radial-gradient(circle_at_80%_18%,rgba(0,229,255,0.12),transparent_24rem)]" />
        <div className="mx-auto max-w-5xl">
          <Link href={`/${locale}`} className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-bone/60 transition hover:text-flare">
            <ArrowLeft size={16} />
            {copy.nav.home}
          </Link>
          <div className="rounded-[8px] border border-white/10 bg-carbon/70 p-6 shadow-2xl backdrop-blur sm:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-ember/50 bg-ember/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-flare">
              <Zap size={16} />
              {content.eyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-7xl">{content.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-bone/70">{content.body}</p>
            <div className="mt-10 grid gap-3">
              {content.bullets.map((item) => (
                <div key={item} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 text-bone/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
