import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CurlyArrow } from "@/components/Doodles";

export const metadata: Metadata = { title: "Suggest a guest" };

export default function SuggestPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-14 sm:px-6">
      <p className="font-hand text-2xl text-orange">who should we talk to?</p>
      <h1 className="font-display text-5xl font-extrabold md:text-6xl">Suggest a guest</h1>
      <div className="relative">
        <p className="mt-4 text-lg text-muted">
          Know a founder with a story worth breaking down? Yourself counts too. Tell us who they are and
          the one decision you&apos;d want us to ask about.
        </p>
        <CurlyArrow className="absolute -right-24 top-6 hidden w-24 rotate-90 text-orange md:block" />
      </div>
      <div className="mt-10">
        <ContactForm
          subject="Guest suggestion for The Bench"
          cta="Send suggestion →"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "email", label: "Your email", type: "email" },
            { name: "guest", label: "Who should we have on?", required: true },
            { name: "company", label: "What are they building?" },
            { name: "link", label: "Link (LinkedIn, X, website)" },
            { name: "why", label: "Why them? What should we ask?", textarea: true, required: true },
          ]}
        />
      </div>
    </section>
  );
}
