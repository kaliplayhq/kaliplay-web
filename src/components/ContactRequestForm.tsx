"use client";

import { ChevronDown, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { getCopy, type Locale } from "@/i18n";

type ContactRequestFormProps = {
  locale: Locale;
  emailTo?: string;
  subjectPrefix?: string;
};

export function ContactRequestForm({ locale, emailTo = "info@kaliplay.com", subjectPrefix = "Kaliplay contact request" }: ContactRequestFormProps) {
  const text = getCopy(locale).form;
  const partyTypes = text.parties;
  const [party, setParty] = useState(partyTypes[0]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${subjectPrefix} - ${party}`);
    const body = encodeURIComponent(`Party type: ${party}\nEmail: ${email}\n\nMessage:\n${message}`);
    setSent(true);
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form grid gap-4" onSubmit={submitRequest}>
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-bone">{text.title}</h2>
      <label className="grid gap-2 text-sm font-semibold text-bone/72">
        {text.party}
        <span className="select-shell">
          <select required value={party} onChange={(event) => setParty(event.target.value)} className="contact-select">
            {partyTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <ChevronDown size={18} aria-hidden="true" />
        </span>
      </label>

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

      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-ember px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-blacktop shadow-glow transition hover:bg-flare">
        {text.send}
        <Send size={18} />
      </button>
      {sent ? <div className="rounded-[8px] border border-pulse/40 bg-pulse/10 px-4 py-3 text-sm font-semibold text-pulse">{text.prepared}</div> : null}
    </form>
  );
}
