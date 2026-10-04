"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Field = { name: string; label: string; textarea?: boolean; required?: boolean; type?: string };

// Opens the visitor's email app with the form filled in. Swap for a form backend later if needed.
export function MailForm({ subject, fields, cta }: { subject: string; fields: Field[]; cta: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = fields.map((f) => `${f.label}:\n${data.get(f.name) ?? ""}`).join("\n\n");
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "mt-1 w-full rounded-xl border-2 border-ink bg-paper px-4 py-3 outline-none focus:border-orange focus:shadow-[3px_3px_0_var(--color-orange)]";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="font-display font-bold">{f.label}{f.required && <span className="text-orange"> *</span>}</span>
          {f.textarea ? (
            <textarea name={f.name} required={f.required} rows={5} className={input} />
          ) : (
            <input name={f.name} type={f.type ?? "text"} required={f.required} className={input} />
          )}
        </label>
      ))}
      <button className="rounded-full bg-orange px-7 py-3 font-display font-bold text-paper shadow-[4px_4px_0_var(--color-ink)] hover:bg-orange-dark">
        {cta}
      </button>
      {sent && <p className="font-hand text-2xl text-orange">thanks! your email app should open now.</p>}
    </form>
  );
}
