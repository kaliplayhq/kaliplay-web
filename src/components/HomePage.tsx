"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CircuitBoard, Flame, KeyRound, PackageCheck, Play, Radar, ShieldCheck, ShoppingCart, Sparkles, Ticket } from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale } from "@/i18n";

type HomePageProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function HomePage({ locale, copy }: HomePageProps) {
  const [spot, setSpot] = useState({ x: "54%", y: "30%" });
  const assetCards = [
    { icon: Play, title: "Play-ready", body: "digital goods" },
    { icon: KeyRound, title: "Keys", body: "documented origin" },
    { icon: Ticket, title: "Perks", body: "redeemable assets" },
    { icon: PackageCheck, title: "Licenses", body: "clear rules" },
    { icon: ShieldCheck, title: "Risk", body: "reviewed supply" }
  ];

  return (
    <SiteFrame locale={locale} copy={copy}>
      <section
        className="magnetic-glow relative isolate min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:pt-32"
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
            src="/hero-digital-assets-v2.png"
            alt="Premium digital assets marketplace visual"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.32)_60%,rgba(0,0,0,0.62)_100%)]" />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center text-center">
          <div className="reveal relative z-10 mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-ember/70 bg-black/35 px-3 py-2 text-sm font-black uppercase text-flare shadow-glow backdrop-blur-md">
              <Flame size={16} />
              {copy.hero.eyebrow}
            </div>
            <LogoMark className="mx-auto mb-5 h-20 w-20 sm:h-24 sm:w-24" />
            <h1 className="hero-brand text-6xl font-semibold leading-[0.86] tracking-[-0.08em] text-bone sm:text-8xl lg:text-[9.5rem]">
              Kaliplay
            </h1>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-bone sm:text-5xl">
              {copy.hero.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-bone/86 sm:text-xl">{copy.hero.body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/store`}
                className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-ember px-6 py-4 text-sm font-black uppercase text-blacktop shadow-glow transition hover:scale-[1.02] hover:bg-flare"
              >
                {copy.hero.primary}
                <ShoppingCart size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center rounded-[8px] border border-pulse/50 bg-pulse/10 px-6 py-4 text-sm font-black uppercase text-bone shadow-cyan transition hover:bg-pulse/20"
              >
                {copy.hero.secondary}
              </Link>
            </div>
            <div className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-flare">{copy.hero.store}</div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-y border-white/10 bg-black/35 py-8 backdrop-blur-md">
        <div className="deck-track flex w-max gap-5 px-5">
          {assetCards.concat(assetCards).map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={`${card.title}-${index}`} className="asset-card group">
                <div className="flex items-center justify-between">
                  <Icon className="text-flare transition group-hover:scale-110 group-hover:text-pulse" size={28} />
                  <span className="play-chip">
                    <Play size={14} fill="currentColor" />
                  </span>
                </div>
                <div className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-bone">{card.title}</div>
                <div className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-bone/50">{card.body}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-flare">Mission</div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-bone sm:text-6xl">{copy.mission.title}</h2>
          </div>
          <p className="text-lg leading-8 text-bone/70 sm:text-xl">{copy.mission.body}</p>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-bone sm:text-6xl">Source. Validate. Distribute.</h2>
            <Sparkles className="hidden text-flare md:block" size={42} />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.pillars.map((pillar, index) => {
              const icons = [ShieldCheck, Radar, CircuitBoard];
              const Icon = icons[index] || BadgeCheck;

              return (
                <article key={pillar.title} className="group rounded-[8px] border border-white/10 bg-carbon/80 p-6 transition hover:-translate-y-1 hover:border-ember/70 hover:shadow-glow">
                  <Icon className="mb-8 text-flare transition group-hover:text-pulse" size={34} />
                  <h3 className="text-2xl font-black text-bone">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-bone/62">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden py-12">
        <div className="process-track flex w-max gap-4 px-4">
          {copy.flow.concat(copy.flow).map((item, index) => (
            <div key={`${item.step}-${index}`} className="w-72 rounded-[8px] border border-pulse/30 bg-pulse/10 p-5 shadow-cyan">
              <div className="mb-8 text-xs font-black text-pulse">{item.step}</div>
              <h3 className="text-2xl font-black text-bone">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-bone/62">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,77,0,0.16),rgba(0,229,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-2xl sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {copy.flow.map((item) => (
                <div key={item.step} className="rounded-[8px] border border-white/10 bg-black/35 p-6">
                  <div className="mb-12 text-sm font-black text-pulse">{item.step}</div>
                  <h3 className="text-3xl font-black text-bone">{item.title}</h3>
                  <p className="mt-4 leading-7 text-bone/62">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[8px] border border-ember/40 bg-[radial-gradient(circle_at_50%_0%,rgba(255,77,0,0.32),rgba(3,3,3,0.96)_58%)] p-8 text-center shadow-glow sm:p-16">
          <h2 className="mx-auto max-w-4xl text-4xl font-black text-bone sm:text-6xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-bone/68">{copy.cta.body}</p>
          <a
            href={`mailto:${copy.cta.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-[8px] bg-bone px-6 py-4 text-sm font-black uppercase text-blacktop transition hover:scale-[1.02] hover:bg-flare"
          >
            {copy.cta.email}
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
