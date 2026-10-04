import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Work with us" };

const options = [
  { title: "Sponsor an episode", body: "Reach an audience of ambitious young professionals and builders." },
  { title: "Collaborate", body: "Cross-overs, events, and joint content with other creators." },
  { title: "Press & speaking", body: "Interviews, panels, and anything else." },
];

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6">
      <p className="font-hand text-2xl text-orange">let&apos;s build something</p>
      <h1 className="font-display text-5xl font-extrabold md:text-6xl">Work with us</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {options.map((o) => (
          <div key={o.title} className="rounded-2xl border-2 border-ink bg-paper p-5 shadow-[5px_5px_0_var(--color-ink)]">
            <h2 className="font-display text-xl font-bold">{o.title}</h2>
            <p className="mt-2 text-sm text-muted">{o.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 max-w-2xl">
        <ContactForm
          subject="Working with The Bench"
          cta="Get in touch →"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "org", label: "Company / organization" },
            { name: "message", label: "What did you have in mind?", textarea: true, required: true },
          ]}
        />
      </div>
    </section>
  );
}
