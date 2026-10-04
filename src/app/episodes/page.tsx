import type { Metadata } from "next";
import { episodes } from "@/lib/episodes";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Squiggle } from "@/components/Doodles";

export const metadata: Metadata = { title: "Episodes" };

export default function EpisodesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
      <p className="font-hand text-2xl text-orange">every conversation so far</p>
      <h1 className="font-display text-5xl font-extrabold md:text-6xl">Episodes</h1>
      <Squiggle className="mt-1 h-3 w-44 text-orange" />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((ep) => <EpisodeCard key={ep.slug} ep={ep} />)}
      </div>
    </section>
  );
}
