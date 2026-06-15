"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Coins,
  Gem,
  KeyRound,
  Mail,
  MonitorCog,
  Music2,
  Puzzle,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Ticket,
  Trophy
} from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale } from "@/i18n";

type HomePageProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function HomePage({ locale, copy }: HomePageProps) {
  const [spot, setSpot] = useState({ x: "54%", y: "30%" });
  const assetCards = [
    { code: "KEY", icon: KeyRound, title: "Game serials", body: "documented PC keys", detail: "Invoice-backed origin, region clarity, and replacement policy before listing." },
    { code: "DLC", icon: Puzzle, title: "DLC packs", body: "expansions + add-ons", detail: "Add-on inventory reviewed against platform, publisher, and activation rules." },
    { code: "SKN", icon: Sparkles, title: "Skins", body: "publisher-permitted", detail: "Cosmetic assets only where transfer, resale, and delivery rules are explicit." },
    { code: "TOP", icon: Coins, title: "Top-ups", body: "approval required", detail: "Credit-like inventory stays gated until supplier rights and tax treatment are clear." },
    { code: "LIC", icon: MonitorCog, title: "Tool licenses", body: "approved B2B licenses", detail: "Only documented licenses with commercial resale permission; no dubious office keys." },
    { code: "PRK", icon: Ticket, title: "Perks", body: "redeemable codes", detail: "Promotional or benefit codes need source proof, limits, and supportable redemption." },
    { code: "COL", icon: Gem, title: "Collectibles", body: "rights-reviewed assets", detail: "Digital collectibles stay rights-first, with no crypto checkout in this phase." },
    { code: "DRP", icon: Music2, title: "Content drops", body: "soundtracks + extras", detail: "Bonus content is checked for ownership, platform terms, and customer delivery." },
    { code: "PAS", icon: Trophy, title: "Passes", body: "season access codes", detail: "Passes require clear duration, region, entitlement, and refund handling." },
    { code: "LOT", icon: ShieldCheck, title: "Verified lots", body: "auditable supply", detail: "Small batches, traceable records, and review before capital is committed." }
  ];

  return (
    <SiteFrame locale={locale} copy={copy}>
      <section
        className="magnetic-glow relative isolate min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:pt-36"
        style={{ "--x": spot.x, "--y": spot.y } as React.CSSProperties}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setSpot({
            x: `${((event.clientX - rect.left) / rect.width) * 100}%`,
            y: `${((event.clientY - rect.top) / rect.height) * 100}%`
          });
        }}
      >
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-digital-assets-v3.png"
            alt="Premium digital assets marketplace visual"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-100 brightness-[1.08] saturate-[1.16] contrast-[1.04]"
          />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center text-center">
          <div className="hero-copy-panel reveal relative z-10 mx-auto max-w-6xl">
            <BrandLogo variant="lockupVertical" className="hero-lockup mx-auto mb-6 h-60 w-52 sm:h-72 sm:w-64 lg:h-80 lg:w-72" priority />
            <h1 className="sr-only">Kaliplay</h1>
            <h2 className="mx-auto mt-4 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-bone sm:text-7xl lg:text-8xl">
              {copy.hero.title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-8 text-bone/92 sm:text-2xl">{copy.hero.body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-ember px-6 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:scale-[1.02] hover:bg-flare"
              >
                {copy.hero.primary}
                <Mail size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href={`/${locale}/store`}
                className="inline-flex items-center justify-center rounded-[8px] border border-pulse/50 bg-pulse/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-bone shadow-cyan transition hover:bg-pulse/20"
              >
                {copy.hero.secondary}
                <ShoppingCart size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-flare">Mission</div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-bone sm:text-6xl">{copy.mission.title}</h2>
          </div>
          <p className="text-lg leading-8 text-bone/70 sm:text-xl">{copy.mission.body}</p>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-y border-white/10 bg-black/45 py-20">
        <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6 px-5">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-flare">Digital inventory</div>
            <h2 className="mt-2 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-6xl">Inventory we can validate.</h2>
          </div>
          <p className="hidden max-w-md text-sm leading-6 text-bone/62 md:block">
            Every category depends on documented origin, resale permission, region clarity, platform rules, and supportable delivery.
          </p>
        </div>
        <div className="deck-track flex w-max gap-5 px-5">
          {assetCards.concat(assetCards).map((card, index) => {
            const Icon = card.icon;
            return (
              <article key={`${card.title}-${index}`} className="asset-card group" tabIndex={0} aria-label={`${card.title}: ${card.body}`}>
                <div className="asset-card-inner">
                  <div className="asset-face asset-face-front">
                    <div className="flex items-start justify-between gap-5">
                      <span className="asset-icon" aria-hidden="true">
                        <span className="asset-reel">
                          <Icon size={40} strokeWidth={1.6} />
                          <span className="asset-code">{card.code}</span>
                          <Icon size={40} strokeWidth={1.6} />
                        </span>
                      </span>
                      <span className="asset-grade">Verified</span>
                    </div>
                    <div className="mt-9 text-3xl font-semibold tracking-[-0.05em] text-bone">{card.title}</div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-bone/62">{card.body}</div>
                  </div>
                  <div className="asset-face asset-face-back">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-pulse">Review gate</div>
                    <div className="mt-6 text-2xl font-semibold tracking-[-0.045em] text-bone">{card.title}</div>
                    <p className="mt-4 text-sm leading-6 text-bone/72">{card.detail}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="cta-panel mx-auto max-w-7xl rounded-[8px] p-8 text-center sm:p-16">
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-bone sm:text-6xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-bone/68">{copy.cta.body}</p>
          <a
            href={`mailto:${copy.cta.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-[8px] border border-ember/70 bg-ember px-6 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:scale-[1.02] hover:bg-flare hover:shadow-cyan"
          >
            {copy.cta.email}
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
