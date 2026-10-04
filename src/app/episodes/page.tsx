import type { Metadata } from "next";
import { episodes, seasons } from "@/lib/episodes";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Squiggle } from "@/components/Doodles";

export const metadata: Metadata = { title: "Episodes" };

export default function EpisodesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
      <p className="font-hand text-2xl text-orange">every conversation so far</p>
      <h1 className="font-display text-5xl font-extrabold md:text-6xl">Episodes</h1>
      <Squiggle className="mt-1 h-3 w-44 text-orange" />
      {seasons.map((s) => {
        const eps = episodes.filter((e) => e.season === s.number);
        return (
          <div key={s.number} id={`season-${s.number}`} className="mt-14">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b-2 border-ink pb-3">
              <span className="rounded-full bg-orange px-3 py-0.5 font-display text-sm font-bold text-paper">Season {s.number}</span>
              <h2 className="font-display text-3xl font-extrabold">{s.name}</h2>
              <p className="w-full text-muted md:w-auto">{s.description}</p>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {eps.map((ep) => <EpisodeCard key={ep.slug} ep={ep} />)}
            </div>
          </div>
        );
      })}
    </section>
  );
}
