"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { ContactRequestForm } from "@/components/ContactRequestForm";
import { SiteFrame } from "@/components/SiteFrame";
import type { HomeCopy, Locale } from "@/i18n";

type StoreGateProps = {
  locale: Locale;
  copy: HomeCopy;
};

export function StoreGate({ locale, copy }: StoreGateProps) {
  const [requestOpen, setRequestOpen] = useState(false);
  const [loginError, setLoginError] = useState(false);

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError(true);
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
              Store login
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.06em] text-bone sm:text-7xl">Sign in to Kaliplay Store.</h1>

            <div className="mt-10 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[8px] border border-white/10 bg-black/45 p-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] border border-ember/60 bg-ember/10 text-flare shadow-glow">
                  <LockKeyhole size={24} />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-bone">Registered already?</h2>
                <form className="mt-6 grid gap-4" onSubmit={submitLogin}>
                  <label className="grid gap-2 text-sm font-semibold text-bone/72">
                    Email
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="rounded-[8px] border border-white/10 bg-black/60 px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-bone/72">
                    Password
                    <input
                      required
                      type="password"
                      placeholder="Password"
                      className="rounded-[8px] border border-white/10 bg-black/60 px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
                    />
                  </label>
                  {loginError ? <div className="rounded-[8px] border border-ember/40 bg-ember/10 px-4 py-3 text-sm font-semibold text-flare">Invalid credentials.</div> : null}
                  <button type="submit" className="w-full rounded-[8px] bg-ember px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:bg-flare">
                    Login
                  </button>
                </form>
              </div>

              <div className="rounded-[8px] border border-ember/40 bg-[linear-gradient(135deg,rgba(255,42,0,0.16),rgba(0,229,255,0.08),rgba(0,0,0,0.62))] p-5 shadow-glow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] border border-pulse/60 bg-pulse/10 text-pulse shadow-cyan">
                  <Mail size={24} />
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-bone">Need access?</h2>
                <p className="mt-3 text-sm leading-6 text-bone/62">Request access as a supplier, marketplace, partner, or buyer.</p>
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
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/78 px-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Request access">
            <div className="store-modal w-full max-w-xl rounded-[8px] p-6 shadow-2xl sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-flare">Request access</div>
                </div>
                <button type="button" onClick={() => setRequestOpen(false)} className="rounded-[8px] border border-white/10 px-3 py-2 text-sm text-bone/60 transition hover:text-bone">
                  Close
                </button>
              </div>

              <div className="mt-6">
                <ContactRequestForm subjectPrefix="Kaliplay store access request" />
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </SiteFrame>
  );
}
