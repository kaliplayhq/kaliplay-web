"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ShoppingCart } from "lucide-react";
import { useState } from "react";
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
  const [spot, setSpot] = useState({ x: "54%", y: "30%" });
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

      <section className="asset-deck-section relative z-20 -mt-14 overflow-hidden border-y border-ember/40 bg-black/60 py-8">
        <div className="deck-track flex w-max gap-5 px-5">
          {assetCards.concat(assetCards).map((card, index) => (
            <article key={`${card.title}-${index}`} className={`asset-card asset-${card.theme} group`} tabIndex={0} aria-label={`${card.title}: ${card.body}`}>
              <div className="asset-card-inner">
                <div className="asset-face asset-face-front">
                  <div className="flex items-start justify-between gap-5">
                    <span className="asset-code">{card.code}</span>
                    <span className="asset-medal" aria-label={copy.home.verified}>
                      <svg className="asset-seal" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                          <radialGradient id="sealGold" cx="38%" cy="30%" r="78%">
                            <stop offset="0%" stopColor="#fff8e2" />
                            <stop offset="26%" stopColor="#ffe79c" />
                            <stop offset="54%" stopColor="#f0c258" />
                            <stop offset="78%" stopColor="#c68d2c" />
                            <stop offset="100%" stopColor="#8f611a" />
                          </radialGradient>
                          <linearGradient id="sealHolo" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#ff4db8" />
                            <stop offset="28%" stopColor="#ffd24d" />
                            <stop offset="52%" stopColor="#46ffd0" />
                            <stop offset="78%" stopColor="#4db8ff" />
                            <stop offset="100%" stopColor="#c44dff" />
                          </linearGradient>
                          <linearGradient id="sealShine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                          </linearGradient>
                          <clipPath id="sealClip">
                            <path d="M 50 17 A 6.44 6.44 0 0 1 62.63 19.51 A 6.44 6.44 0 0 1 73.33 26.67 A 6.44 6.44 0 0 1 80.49 37.37 A 6.44 6.44 0 0 1 83 50 A 6.44 6.44 0 0 1 80.49 62.63 A 6.44 6.44 0 0 1 73.33 73.33 A 6.44 6.44 0 0 1 62.63 80.49 A 6.44 6.44 0 0 1 50 83 A 6.44 6.44 0 0 1 37.37 80.49 A 6.44 6.44 0 0 1 26.67 73.33 A 6.44 6.44 0 0 1 19.51 62.63 A 6.44 6.44 0 0 1 17 50 A 6.44 6.44 0 0 1 19.51 37.37 A 6.44 6.44 0 0 1 26.67 26.67 A 6.44 6.44 0 0 1 37.37 19.51 A 6.44 6.44 0 0 1 50 17 Z" />
                          </clipPath>
                          <path id="sealArc" d="M 29.5 52 A 20.5 20.5 0 0 1 70.5 52" fill="none" />
                        </defs>
                        <path
                          d="M 50 17 A 6.44 6.44 0 0 1 62.63 19.51 A 6.44 6.44 0 0 1 73.33 26.67 A 6.44 6.44 0 0 1 80.49 37.37 A 6.44 6.44 0 0 1 83 50 A 6.44 6.44 0 0 1 80.49 62.63 A 6.44 6.44 0 0 1 73.33 73.33 A 6.44 6.44 0 0 1 62.63 80.49 A 6.44 6.44 0 0 1 50 83 A 6.44 6.44 0 0 1 37.37 80.49 A 6.44 6.44 0 0 1 26.67 73.33 A 6.44 6.44 0 0 1 19.51 62.63 A 6.44 6.44 0 0 1 17 50 A 6.44 6.44 0 0 1 19.51 37.37 A 6.44 6.44 0 0 1 26.67 26.67 A 6.44 6.44 0 0 1 37.37 19.51 A 6.44 6.44 0 0 1 50 17 Z"
                          fill="url(#sealGold)"
                          stroke="#7a5214"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <g clipPath="url(#sealClip)">
                          <rect className="seal-holo" x="0" y="0" width="100" height="100" fill="url(#sealHolo)" />
                          <g transform="rotate(12 50 50)">
                            <rect className="seal-shine" x="-46" y="-20" width="34" height="140" fill="url(#sealShine)">
                              <animateTransform attributeName="transform" type="translate" values="0 0; 150 0; 150 0" keyTimes="0; 0.42; 1" dur="4s" repeatCount="indefinite" />
                            </rect>
                          </g>
                        </g>
                        <circle cx="50" cy="50" r="28.5" fill="none" stroke="rgba(122,82,20,0.55)" strokeWidth="1.4" />
                        <circle cx="50" cy="50" r="26.5" fill="none" stroke="rgba(255,246,196,0.6)" strokeWidth="0.8" />
                        <path d="M41.5 43.5 l5 6 l11.5 -14" fill="none" stroke="#6b4406" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                        <text className="seal-text" textAnchor="middle">
                          <textPath href="#sealArc" startOffset="50%">
                            {copy.home.verified}
                          </textPath>
                        </text>
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
          <div className="cta-kicker">{copy.pages.contact.eyebrow}</div>
          <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-bone/68">
            {copy.pages.contact.body}
          </p>
          <div className="contact-panel mx-auto mt-9 max-w-xl rounded-[16px] p-6 text-left sm:p-7">
            <ContactRequestForm locale={locale} large />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
