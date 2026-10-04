import type { Metadata } from "next";
import { hosts, site } from "@/lib/site";
import { HostCard } from "@/components/HostCard";
import { Bench, Squiggle } from "@/components/Doodles";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6">
      <p className="font-hand text-2xl text-orange">so what is this?</p>
      <h1 className="font-display text-5xl font-extrabold md:text-6xl">About The Bench</h1>
      <Squiggle className="mt-1 h-3 w-48 text-orange" />
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        <p>{site.description}</p>
        <p>
          Every founder has a moment where they had to make a call with no playbook. We sit them down and
          slow that moment down: what they saw, what they weighed, and what they&apos;d tell someone
          about to make the same call.
        </p>
      </div>
      <Bench className="my-12 w-44 text-ink/80" />
      <h2 className="font-display text-3xl font-extrabold">The hosts</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {hosts.map((h) => <HostCard key={h.name} host={h} />)}
      </div>
    </section>
  );
}
