"use client";

import { ChevronDown, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type ContactRequestFormProps = {
  emailTo?: string;
  subjectPrefix?: string;
  title?: string;
};

const partyTypes = ["Supplier", "Publisher", "Marketplace", "Digital asset partner", "Buyer", "Other"];

export function ContactRequestForm({ emailTo = "info@kaliplay.com", subjectPrefix = "Kaliplay contact request", title = "Please tell us about you." }: ContactRequestFormProps) {
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
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-bone">{title}</h2>
      <label className="grid gap-2 text-sm font-semibold text-bone/72">
        Party type
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
        Send request
        <Send size={18} />
      </button>
      {sent ? <div className="rounded-[8px] border border-pulse/40 bg-pulse/10 px-4 py-3 text-sm font-semibold text-pulse">Request prepared. Your email client should open to send it to info@kaliplay.com.</div> : null}
    </form>
  );
}
