"use client";

import { Check, ChevronDown, Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { getCopy, type Locale } from "@/i18n";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type ContactRequestFormProps = {
  locale: Locale;
  emailTo?: string;
  subjectPrefix?: string;
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactRequestForm({ locale, emailTo = "info@kaliplay.com", subjectPrefix = "Kaliplay contact request" }: ContactRequestFormProps) {
  const text = getCopy(locale).form;
  const partyTypes = text.parties;
  const [party, setParty] = useState(partyTypes[0]);
  const [partyOpen, setPartyOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const partyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function close(event: PointerEvent) {
      if (!partyRef.current?.contains(event.target as Node)) setPartyOpen(false);
    }
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Fallback to mailto while no backend endpoint is configured.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`${subjectPrefix} - ${party}`);
      const body = encodeURIComponent(`Party type: ${party}\nEmail: ${email}\n\nMessage:\n${message}`);
      setStatus("success");
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          party,
          email,
          message,
          _replyto: email,
          _subject: `${subjectPrefix} - ${party}`
        })
      });
      if (response.ok) {
        setStatus("success");
        setParty(partyTypes[0]);
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";
  const successText = FORMSPREE_ENDPOINT ? text.success : text.prepared;

  return (
    <form className="contact-form grid gap-4" onSubmit={submitRequest}>
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-bone">{text.title}</h2>
      <div className="grid gap-2 text-sm font-semibold text-bone/72">
        <span id="party-label">{text.party}</span>
        <div ref={partyRef} className="party-dropdown" data-open={partyOpen} onKeyDown={(event) => event.key === "Escape" && setPartyOpen(false)}>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={partyOpen}
            aria-labelledby="party-label"
            className="party-trigger"
            onClick={() => setPartyOpen((open) => !open)}
          >
            <span>{party}</span>
            <ChevronDown size={18} aria-hidden="true" />
          </button>
          {partyOpen ? (
            <ul role="listbox" aria-labelledby="party-label" className="party-list">
              {partyTypes.map((item) => (
                <li
                  key={item}
                  role="option"
                  aria-selected={item === party}
                  tabIndex={0}
                  className="party-option"
                  onClick={() => {
                    setParty(item);
                    setPartyOpen(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setParty(item);
                      setPartyOpen(false);
                    }
                  }}
                >
                  <span>{item}</span>
                  {item === party ? <Check size={16} aria-hidden="true" /> : null}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-bone/72">
        {text.email}
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={text.emailPlaceholder}
          className="rounded-[8px] border border-white/10 bg-black px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-bone/72">
        {text.message}
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={text.messagePlaceholder}
          className="resize-none rounded-[8px] border border-white/10 bg-black px-4 py-3 text-bone outline-none transition placeholder:text-bone/30 focus:border-pulse/70 focus:shadow-cyan"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-ember px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:bg-flare disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? text.sending : text.send}
        <Send size={18} />
      </button>
      {status === "success" ? (
        <div className="rounded-[8px] border border-pulse/40 bg-pulse/10 px-4 py-3 text-sm font-semibold text-pulse">{successText}</div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-[8px] border border-ember/40 bg-ember/10 px-4 py-3 text-sm font-semibold text-flare">{text.error}</div>
      ) : null}
    </form>
  );
}
