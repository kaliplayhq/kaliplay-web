"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale } from "@/i18n";

type HomePageProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function HomePage({ locale, copy }: HomePageProps) {
  const [spot, setSpot] = useState({ x: "54%", y: "30%" });
  const assetCards = [
    { code: "KEY", theme: "games", visual: "STEAM / EPIC", title: "PC & Console Game Keys", body: "Steam, Epic, EA, Ubisoft", detail: "Documented game keys for PC and console platforms, with invoice-backed origin, region clarity, and replacement terms before listing." },
    { code: "DLC", theme: "dlc", visual: "EXPANSION", title: "DLC & Expansion Packs", body: "add-ons, passes, expansions", detail: "Downloadable content, season passes, and expansion packs reviewed against publisher, platform, region, and entitlement rules." },
    { code: "OS", theme: "software", visual: "LICENSE", title: "Software & OS Licenses", body: "Windows, Office, tools", detail: "Windows, Office, antivirus, Adobe, Corel, and design tools only when supplier authorization, invoices, and resale rights are supportable." },
    { code: "GFT", theme: "gift", visual: "VOUCHER", title: "Gift Cards & Vouchers", body: "PSN, Xbox, Nintendo, Razer", detail: "PlayStation, Xbox, Nintendo, Razer Gold, iTunes, and Google Play vouchers gated by source, region, fraud risk, and redemption policy." },
    { code: "SUB", theme: "sub", visual: "ACCESS", title: "Subscription Top-ups", body: "streaming, gaming, cloud", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass, and cloud upgrades reviewed for source, territory, and activation constraints." },
    { code: "COIN", theme: "currency", visual: "POINTS", title: "In-game Currency & Goods", body: "V-Bucks, Robux, points", detail: "V-Bucks, Robux, COD Points, FIFA Points, gems, skins, and emotes only where transfer, platform rules, and delivery are explicit." },
    { code: "EVT", theme: "event", visual: "LIVE", title: "eSports & Event Access", body: "tickets, meet-and-greets", detail: "Digital tickets, virtual meet-and-greets, and event access require verified issuer rights, clear date constraints, and supportable delivery." },
    { code: "ART", theme: "art", visual: "PROOF", title: "Digital Art & Collectibles", body: "verified, traceable editions", detail: "Limited digital art and NFT-linked collectibles only when provenance, rights, edition limits, and blockchain proof are traceable." },
    { code: "EDU", theme: "edu", visual: "LEARN", title: "E-learning & E-books", body: "courses, books, audiobooks", detail: "Udemy, Coursera, MasterClass vouchers, DRM-free e-books, audiobooks, and license transfers reviewed before distribution." },
    { code: "WEB", theme: "web", visual: "CLOUD", title: "Domains & Cloud Assets", body: "domains, storage upgrades", detail: "Clean-transfer domain names plus Dropbox, Google Drive, and iCloud upgrades, verified for ownership, transfer path, and account safety." }
  ];
  const workflowSteps = [
    { kicker: "Source intake", title: "Documented origin", body: "Supplier identity, invoice path, ownership proof, replacement policy, and category risk are recorded before capital is committed." },
    { kicker: "Validation gate", title: "Rights, region, and platform review", body: "Resale permission, activation territory, redemption constraints, fraud exposure, and support risk are checked before publishing." },
    { kicker: "Controlled release", title: "Distribution-ready lot", body: "Only traceable inventory with clear delivery, pricing, support notes, and audit trail can move toward buyers." }
  ];

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
                    <span className="asset-medal" aria-label="Verified stamp">
                      <span className="asset-medal-core">Verified</span>
                    </span>
                  </div>
                  <div className="asset-visual" aria-hidden="true">
                    <span>{card.visual}</span>
                  </div>
                  <div className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-bone">{card.title}</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-bone/68">{card.body}</div>
                </div>
                <div className="asset-face asset-face-back">
                  <div className="text-2xl font-semibold tracking-[-0.045em] text-bone">{card.title}</div>
                  <p className="mt-4 text-sm leading-6 text-bone/72">{card.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="mission-panel mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center sm:p-12">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-flare">Mission</div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-bone sm:text-6xl">{copy.mission.title}</h2>
          </div>
          <p className="text-lg leading-8 text-bone/70 sm:text-xl">{copy.mission.body}</p>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="workflow-panel mx-auto max-w-5xl p-8 sm:p-12">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-flare">Digital inventory</div>
            <h2 className="mt-2 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-6xl">Inventory we can validate.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-bone/68">
              Every category moves through the same control path before Kaliplay treats it as distributable inventory.
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
                    <span />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-24 sm:px-6">
        <div className="cta-panel mx-auto grid max-w-7xl gap-8 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="cta-kicker">{copy.pages.contact.eyebrow}</div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-bone sm:text-6xl">{copy.pages.contact.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-bone/68">
              {copy.pages.contact.body}
            </p>
          </div>
          <div className="contact-panel rounded-[8px] p-5">
            <ContactRequestForm />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
