"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole, Mail, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale } from "@/i18n";

type StoreGateProps = {
  locale: Locale;
  copy: HomeCopy;
};

const partyTypes = ["Supplier", "Publisher", "Marketplace", "Digital asset partner", "Buyer", "Other"];

export function StoreGate({ locale, copy }: StoreGateProps) {
  const [requestOpen, setRequestOpen] = useState(false);
  const [party, setParty] = useState(partyTypes[0]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Kaliplay store access request - ${party}`);
    const body = encodeURIComponent(`Party type: ${party}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${copy.cta.email}?subject=${subject}&body=${body}`;
  }

  return (
    <SiteFrame locale={locale} copy={copy}>
      <section className="relative min-h-screen px-4 pb-24 pt-32 sm:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(255,42,0,0.34),transparent_30rem),radial-gradient(circle_at_78%_18%,rgba(0,229,255,0.18),transparent_26rem),linear-gradient(180deg,#030303,#050507)]" />
        <div className="mx-auto max-w-5xl">
          <Link href={`/${locale}`} className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-bone/60 transition hover:text-flare">
            <ArrowLeft size={16} />
            {copy.nav.home}
          </Link>

          <div className="store-gate-panel rounded-[8px] p-6 sm:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-pulse/40 bg-pulse/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-pulse">
              <LockKeyhole size={16} />
              Private access
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-7xl">Store access is reviewed.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-bone/70">
              Kaliplay does not run public checkout yet. Store access starts with a registration review so inventory, regions, rights, and buyer expectations stay controlled.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[8px] border border-white/10 bg-black/45 p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] border border-ember/60 bg-ember/10 text-flare shadow-glow">
                  <LockKeyhole size={24} />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-bone">Registered already?</h2>
                <p className="mt-3 text-sm leading-6 text-bone/58">Login is reserved for approved accounts. Public registration is intentionally closed.</p>
                <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em] text-bone/52" htmlFor="access-email">
                  Email
                </label>
                <input
                  id="access-email"
                  type="email"
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-[8px] border border-white/10 bg-black/60 px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
                />
                <button
                  type="button"
                  className="mt-4 w-full rounded-[8px] border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-bone/46"
                  aria-disabled="true"
                >
                  Login unavailable
                </button>
              </div>

              <div className="rounded-[8px] border border-ember/40 bg-[linear-gradient(135deg,rgba(255,42,0,0.16),rgba(0,229,255,0.08),rgba(0,0,0,0.62))] p-5 shadow-glow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] border border-pulse/60 bg-pulse/10 text-pulse shadow-cyan">
                  <Sparkles size={24} />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-bone">Need access?</h2>
                <p className="mt-3 text-sm leading-6 text-bone/62">Request review as a supplier, marketplace, partner, or buyer.</p>
                <button
                  type="button"
                  onClick={() => setRequestOpen(true)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-ember px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:scale-[1.01] hover:bg-flare"
                >
                  Request access
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {requestOpen ? (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/78 px-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="request-access-title">
            <div className="store-modal w-full max-w-xl rounded-[8px] p-6 shadow-2xl sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-flare">Contact review</div>
                  <h2 id="request-access-title" className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-bone">
                    Tell us who you are.
                  </h2>
                </div>
                <button type="button" onClick={() => setRequestOpen(false)} className="rounded-[8px] border border-white/10 px-3 py-2 text-sm text-bone/60 transition hover:text-bone">
                  Close
                </button>
              </div>

              <form className="mt-6 grid gap-4" onSubmit={submitRequest}>
                <label className="grid gap-2 text-sm font-semibold text-bone/72">
                  Party type
                  <select
                    required
                    value={party}
                    onChange={(event) => setParty(event.target.value)}
                    className="rounded-[8px] border border-white/10 bg-black px-4 py-3 text-bone outline-none transition focus:border-pulse/70 focus:shadow-cyan"
                  >
                    {partyTypes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-bone/72">
                  Email
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@company.com"
                    className="rounded-[8px] border border-white/10 bg-black px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-bone/72">
                  Message
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us what inventory, access, partnership, or review you need."
                    className="resize-none rounded-[8px] border border-white/10 bg-black px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
                  />
                </label>

                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-ember px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:bg-flare">
                  Prepare request
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </section>
    </SiteFrame>
  );
}
