"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CircuitBoard, Flame, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale } from "@/i18n";

type HomePageProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function HomePage({ locale, copy }: HomePageProps) {
  const [spot, setSpot] = useState({ x: "54%", y: "30%" });

  return (
    <SiteFrame locale={locale} copy={copy}>
      <section
        className="magnetic-glow relative isolate min-h-screen px-4 pb-24 pt-32 sm:px-6 lg:pt-36"
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
            src="/hero-gaming-marketplace.png"
            alt="Premium gaming PC and digital marketplace infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.88)_28%,rgba(3,3,3,0.34)_68%,#030303_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,transparent_0,rgba(3,3,3,0.7)_58%,#030303_100%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal relative z-10 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-ember/60 bg-ember/10 px-3 py-2 text-sm font-black uppercase text-flare shadow-glow">
              <Flame size={16} />
              {copy.hero.eyebrow}
            </div>
            <h1 className="font-display text-5xl font-black leading-tight text-bone sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-bone/72 sm:text-xl">{copy.hero.body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-2 rounded-[8px] bg-flare px-6 py-4 text-sm font-black uppercase text-blacktop shadow-glow transition hover:scale-[1.02] hover:bg-ember"
              >
                {copy.hero.primary}
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href={`/${locale}/compliance`}
                className="inline-flex items-center justify-center rounded-[8px] border border-pulse/50 bg-pulse/10 px-6 py-4 text-sm font-black uppercase text-bone shadow-cyan transition hover:bg-pulse/20"
              >
                {copy.hero.secondary}
              </Link>
            </div>
          </div>

          <div className="float-core relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block">
            <div className="pulse-ring absolute inset-8 rounded-full border border-ember/40 shadow-glow" />
            <div className="pulse-ring absolute inset-20 rounded-full border border-pulse/30 shadow-cyan [animation-delay:500ms]" />
            <div className="absolute inset-32 rounded-[8px] border border-white/15 bg-white/5 backdrop-blur-md" />
            <div className="absolute left-16 top-24 rounded-[8px] border border-ember/40 bg-black/50 px-4 py-3 shadow-glow">
              <span className="text-xs font-black uppercase text-flare">verified</span>
            </div>
            <div className="absolute bottom-24 right-12 rounded-[8px] border border-pulse/40 bg-black/50 px-4 py-3 shadow-cyan">
              <span className="text-xs font-black uppercase text-pulse">traceable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <div className="text-4xl font-black text-flare">{stat.value}</div>
              <div className="mt-2 text-sm font-semibold text-bone/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-bone sm:text-6xl">Signal. Supply. Control.</h2>
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
