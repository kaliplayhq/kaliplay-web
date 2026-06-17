"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ShoppingCart } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { SiteFrame } from "@/components/SiteFrame";
import { brandIcons } from "@/components/brandIcons";
import type { AssetCode, HomeCopy, Locale } from "@/i18n";

type HomePageProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function HomePage({ locale, copy }: HomePageProps) {
  const assetLayout: { code: AssetCode; theme: string; brands: string[] }[] = [
    { code: "KEY", theme: "games", brands: ["steam", "epicgames", "playstation", "battledotnet"] },
    { code: "DLC", theme: "dlc", brands: ["steam", "ubisoft", "ea", "epicgames"] },
    { code: "OS", theme: "software", brands: ["adobe", "autodesk", "jetbrains", "norton"] },
    { code: "GFT", theme: "gift", brands: ["playstation", "nintendo", "razer", "googleplay"] },
    { code: "SUB", theme: "sub", brands: ["netflix", "spotify", "discord", "primevideo"] },
    { code: "COIN", theme: "currency", brands: ["roblox", "epicgames", "ea", "battledotnet"] },
    { code: "EVT", theme: "event", brands: ["twitch", "youtube", "discord", "riotgames"] },
    { code: "ART", theme: "art", brands: ["opensea", "ethereum", "solana", "polygon"] },
    { code: "EDU", theme: "edu", brands: ["udemy", "coursera", "skillshare", "audible"] },
    { code: "WEB", theme: "web", brands: ["namecheap", "cloudflare", "nordvpn", "surfshark"] }
  ];
  const assetCards = assetLayout.map((card) => ({ ...card, ...copy.home.assets[card.code] }));
  const workflowSteps = copy.home.workflow;

  return (
    <SiteFrame locale={locale} copy={copy}>
      <section
        className="magnetic-glow relative isolate min-h-screen px-4 pb-28 pt-32 sm:px-6 lg:pt-36"
        style={{ "--x": "54%", "--y": "30%" } as React.CSSProperties}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          const el = event.currentTarget;
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
          el.style.setProperty("--y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
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
            <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-bone sm:text-7xl lg:text-8xl">
              {copy.hero.title}
              <span className="sr-only"> — Kaliplay: {copy.hero.eyebrow}</span>
            </h1>
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

      <section className="asset-deck-section relative z-20 -mt-14 overflow-hidden py-10">
        <div className="deck-track flex w-max gap-10 px-6">
          {assetCards.concat(assetCards).map((card, index) => (
            <article key={`${card.title}-${index}`} className={`asset-card asset-${card.theme} group`} tabIndex={0} aria-label={`${card.title}: ${card.body}`}>
              <div className="asset-card-inner">
                <div className="asset-face asset-face-front">
                  <div className="flex items-start justify-between gap-5">
                    <span className="asset-code">{card.code}</span>
                    <span className="asset-medal" aria-label={`Kaliplay ${copy.home.verified}`}>
                      <svg className="asset-seal" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="sealGold" cx="42%" cy="34%" r="72%">
                            <stop offset="0%" stopColor="#fff3cf" />
                            <stop offset="34%" stopColor="#ffe08f" />
                            <stop offset="62%" stopColor="#eebf52" />
                            <stop offset="84%" stopColor="#c9912f" />
                            <stop offset="100%" stopColor="#8c5e16" />
                          </radialGradient>
                          <radialGradient id="sealCore" cx="44%" cy="32%" r="70%">
                            <stop offset="0%" stopColor="#fff8e0" />
                            <stop offset="55%" stopColor="#ffdc88" />
                            <stop offset="100%" stopColor="#d59e3f" />
                          </radialGradient>
                        </defs>
                        <path
                          d="M 50 2 L 55.29 9.85 L 62.42 3.64 L 65.5 12.58 L 74 8.43 L 74.65 17.87 L 83.94 16.06 L 82.13 25.35 L 91.57 26 L 87.42 34.5 L 96.36 37.58 L 90.15 44.71 L 98 50 L 90.15 55.29 L 96.36 62.42 L 87.42 65.5 L 91.57 74 L 82.13 74.65 L 83.94 83.94 L 74.65 82.13 L 74 91.57 L 65.5 87.42 L 62.42 96.36 L 55.29 90.15 L 50 98 L 44.71 90.15 L 37.58 96.36 L 34.5 87.42 L 26 91.57 L 25.35 82.13 L 16.06 83.94 L 17.87 74.65 L 8.43 74 L 12.58 65.5 L 3.64 62.42 L 9.85 55.29 L 2 50 L 9.85 44.71 L 3.64 37.58 L 12.58 34.5 L 8.43 26 L 17.87 25.35 L 16.06 16.06 L 25.35 17.87 L 26 8.43 L 34.5 12.58 L 37.58 3.64 L 44.71 9.85 Z"
                          fill="url(#sealGold)"
                          stroke="#7a5214"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(120,78,18,0.5)" strokeWidth="1.2" />
                        <circle cx="50" cy="50" r="35" fill="url(#sealCore)" stroke="rgba(255,247,205,0.7)" strokeWidth="0.8" />
                        <circle cx="50" cy="50" r="32.5" fill="none" stroke="rgba(120,78,18,0.3)" strokeWidth="0.6" />
                        <path d="M45.5 28.5 L45.5 40.5 L57 34.5 Z" fill="#6b4406" />
                        <text className="seal-kali" x="50" y="56" textAnchor="middle">KALIPLAY</text>
                        <text className="seal-verified" x="50" y="67" textAnchor="middle">{copy.home.verified}</text>
                      </svg>
                    </span>
                  </div>
                  <div className="asset-visual" aria-label={`Compatible brands: ${card.brands.map((b) => brandIcons[b].name).join(", ")}`}>
                    {card.brands.map((b) => (
                      <svg key={b} className="asset-brand" viewBox="0 0 24 24" role="img" aria-label={brandIcons[b].name}>
                        <title>{brandIcons[b].name}</title>
                        <path d={brandIcons[b].path} fill="currentColor" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-bone">{card.title}</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-bone/68">{card.body}</div>
                </div>
                <div className="asset-face asset-face-back">
                  <div className="text-2xl font-semibold tracking-[-0.045em] text-bone">{card.title}</div>
                  <div className="asset-back-brands" aria-label={`Compatible brands: ${card.brands.map((b) => brandIcons[b].name).join(", ")}`}>
                    {card.brands.map((b) => (
                      <svg key={b} className="asset-back-brand" viewBox="0 0 24 24" role="img" aria-label={brandIcons[b].name}>
                        <title>{brandIcons[b].name}</title>
                        <path d={brandIcons[b].path} fill="currentColor" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-bone/72 text-justify">{card.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mission-panel mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center sm:p-12">
          <div className="text-center lg:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-flare">{copy.home.missionLabel}</div>
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-bone sm:text-6xl">
              <span className="block text-bone/80">{copy.mission.lead}</span>
              {copy.mission.adjectives.map((adj) => (
                <span key={adj} className="mission-adj mt-1 block">
                  {adj}.
                </span>
              ))}
            </h2>
          </div>
          <div className="text-center lg:pl-8 lg:border-l lg:border-white/10 lg:text-left">
            <p className="mx-auto max-w-xl text-lg leading-8 text-bone/78 text-justify sm:text-xl lg:mx-0">{copy.mission.body}</p>
            <p className="mt-6 whitespace-nowrap text-[clamp(0.45rem,2vw,0.78rem)] font-semibold uppercase tracking-[0.06em] text-bone/40">Verified sources · Transparent regions · Auditable inventory</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="workflow-panel mx-auto max-w-5xl p-8 sm:p-12">
          <div className="text-center lg:text-left">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-flare">{copy.home.inventory.kicker}</div>
            <h2 className="mx-auto mt-2 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-6xl lg:mx-0">{copy.home.inventory.heading}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-bone/68 text-justify lg:mx-0">
              {copy.home.inventory.body}
            </p>
          </div>
          <div className="workflow-steps mt-12">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="workflow-step">
                <div className="workflow-copy">
                  <div className="workflow-kicker">{step.kicker}</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-bone">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-bone/64">{step.body}</p>
                </div>
                {index < workflowSteps.length - 1 ? (
                  <div className="workflow-arrow" aria-hidden="true">
                    <svg viewBox="-3 -2 122 82" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="wfFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#ff9214" />
                          <stop offset="0.58" stopColor="#ff2a00" />
                          <stop offset="1" stopColor="#b81200" />
                        </linearGradient>
                        <clipPath id="wfClip">
                          <path d="M34 0 H82 Q88 0 88 6 V34 H112 Q118 34 114 40 L64 74 Q58 78 52 74 L2 40 Q-2 34 4 34 H28 V6 Q28 0 34 0 Z" />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#wfClip)">
                        <rect x="-3" y="-2" width="122" height="82" fill="url(#wfFill)" />
                        <rect className="wf-shine" x="-30" y="-2" width="26" height="82" fill="rgba(255,255,255,0.85)" />
                      </g>
                      <path
                        d="M34 0 H82 Q88 0 88 6 V34 H112 Q118 34 114 40 L64 74 Q58 78 52 74 L2 40 Q-2 34 4 34 H28 V6 Q28 0 34 0 Z"
                        fill="none"
                        stroke="#ffe0b0"
                        strokeWidth="2.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="cta-panel mx-auto max-w-3xl p-8 text-center sm:p-14">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-6xl">{copy.pages.contact.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-bone/68">
            {copy.pages.contact.body}
          </p>
          <div className="contact-panel mx-auto mt-9 max-w-xl rounded-[16px] p-6 text-left sm:p-7">
            <ContactRequestForm locale={locale} showTitle={false} />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
