import Link from "next/link";
import { episodes, formatDate, getSeason, seasons, thumb } from "@/lib/episodes";
import { hosts, site } from "@/lib/site";
import { EpisodeCard } from "@/components/EpisodeCard";
import { ListenLinks } from "@/components/ListenLinks";
import { HostCard } from "@/components/HostCard";
import { Bench, Circle, CurlyArrow, Squiggle, Star } from "@/components/Doodles";

export default function Home() {
  const [latest, ...rest] = episodes;
  const current = seasons[0];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pt-24">
          <Star className="absolute right-[8%] top-10 hidden w-10 text-orange md:block" />
          <Star className="absolute left-[46%] top-[70%] hidden w-6 text-sun md:block" />
          <p className="font-hand text-2xl text-orange md:text-3xl">a podcast by Rohan &amp; Aarush</p>
          <h1 className="mt-2 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            How the best{" "}
            <span className="relative inline-block">
              actually
              <Circle className="absolute -inset-x-4 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] text-orange" />
            </span>{" "}
            think.
          </h1>
          <Link
            href="/episodes"
            className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-ink bg-paper py-1.5 pl-1.5 pr-4 shadow-[3px_3px_0_var(--color-ink)] hover:border-orange"
          >
            <span className="rounded-full bg-orange px-3 py-0.5 font-display text-sm font-bold text-paper">Season {current.number}</span>
            <span className="font-display font-bold">{current.name}</span>
            <span className="hidden text-sm text-muted sm:inline">— now airing</span>
          </Link>
          <p className="mt-6 max-w-xl text-lg text-muted">{site.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/episodes/${latest.slug}`}
              className="rounded-full bg-orange px-6 py-3 font-display font-bold text-paper shadow-[4px_4px_0_var(--color-ink)] transition hover:bg-orange-dark"
            >
              ▶ Play the latest
            </Link>
            <ListenLinks />
          </div>
          <Bench className="mt-12 w-40 text-ink/80" />
        </div>
      </section>

      {/* Featured latest episode */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <div className="mb-3 flex items-end gap-2">
            <h2 className="font-hand text-3xl md:text-4xl">fresh off the bench</h2>
            <CurlyArrow className="w-16 translate-y-3 text-orange" />
          </div>
          <Link
            href={`/episodes/${latest.slug}`}
            className="group grid overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-[8px_8px_0_var(--color-ink)] transition hover:shadow-[10px_12px_0_var(--color-orange)] md:grid-cols-2"
          >
            <div className="aspect-video overflow-hidden border-b-2 border-ink md:aspect-auto md:border-b-0 md:border-r-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={thumb(latest.youtubeId)} alt="" className="h-full w-full object-cover transition group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <span className="w-fit rounded-full bg-sun px-3 py-0.5 font-display text-sm font-bold">
                Season {latest.season} · Episode {latest.number}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl group-hover:text-orange">
                {latest.guest}
              </h3>
              <p className="font-hand text-2xl text-orange">founder of {latest.company}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest">{getSeason(latest.season).name}</p>
              <p className="mt-3 text-muted">{latest.summary}</p>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted">{formatDate(latest.date)}</p>
              <span className="mt-4 font-display font-bold underline decoration-orange decoration-2 underline-offset-4">
                Read more →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* More episodes */}
      {rest.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-extrabold">More episodes</h2>
              <Squiggle className="mt-1 h-3 w-40 text-orange" />
            </div>
            <Link href="/episodes" className="font-display font-bold hover:text-orange">See all →</Link>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(0, 6).map((ep) => <EpisodeCard key={ep.slug} ep={ep} />)}
          </div>
        </section>
      )}

      {/* Hosts */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-extrabold">Your hosts</h2>
        <p className="font-hand text-2xl text-orange">the two on the bench</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {hosts.map((h) => <HostCard key={h.name} host={h} />)}
        </div>
      </section>

      {/* Suggest CTA */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="relative rounded-3xl bg-orange px-6 py-12 text-paper md:px-12">
          <p className="font-hand text-3xl text-sun">know someone building something?</p>
          <h2 className="mt-1 max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Put someone on the bench.
          </h2>
          <Link
            href="/suggest-a-guest"
            className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-display font-bold text-cream hover:bg-paper hover:text-ink"
          >
            Suggest a guest →
          </Link>
        </div>
      </section>
    </>
  );
}
