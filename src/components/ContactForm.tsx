"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Field = { name: string; label: string; textarea?: boolean; required?: boolean; type?: string };
type Status = "idle" | "sending" | "sent" | "error";

// Submits to FormSubmit, which emails the answers to site.contactEmail.
export function ContactForm({ subject, fields, cta }: { subject: string; fields: Field[]; cta: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { _subject: subject, _template: "table", _captcha: "false" };
    for (const f of fields) payload[f.label] = String(data.get(f.name) ?? "");
    if (data.get("_honey")) return; // bot filled the hidden field
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.contactEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "mt-1 w-full rounded-xl border-2 border-ink bg-paper px-4 py-3 outline-none focus:border-orange focus:shadow-[3px_3px_0_var(--color-orange)]";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border-2 border-ink bg-paper p-8 shadow-[5px_5px_0_var(--color-orange)]">
        <p className="font-hand text-3xl text-orange">got it — thank you!</p>
        <p className="mt-2 text-muted">We read every submission and will reach out if it&apos;s a fit.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 font-display font-bold underline decoration-orange">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
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
      <button
        disabled={status === "sending"}
        className="rounded-full bg-orange px-7 py-3 font-display font-bold text-paper shadow-[4px_4px_0_var(--color-ink)] hover:bg-orange-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : cta}
      </button>
      {status === "error" && (
        <p className="text-sm font-medium text-orange-dark">Something went wrong sending that. Please try again in a minute.</p>
      )}
    </form>
  );
}
