import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { episodes, formatDate, getEpisode } from "@/lib/episodes";
import { EpisodeCard } from "@/components/EpisodeCard";
import { ListenLinks } from "@/components/ListenLinks";
import { CurlyArrow } from "@/components/Doodles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return episodes.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ep = getEpisode((await params).slug);
  return ep ? { title: `Ep. ${ep.number}: ${ep.title}`, description: ep.summary } : {};
}

export default async function EpisodePage({ params }: Props) {
  const ep = getEpisode((await params).slug);
  if (!ep) notFound();
  const others = episodes.filter((e) => e.slug !== ep.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
      <Link href="/episodes" className="text-sm font-medium hover:text-orange">← All episodes</Link>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-sun px-3 py-0.5 font-display text-sm font-bold">Episode {ep.number}</span>
        <span className="text-xs uppercase tracking-widest text-muted">{formatDate(ep.date)}</span>
      </div>
      <h1 className="mt-3 font-display text-5xl font-extrabold leading-tight md:text-6xl">{ep.guest}</h1>
      <p className="font-hand text-3xl text-orange">founder of {ep.company}</p>

      <div className="mt-8 aspect-video overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-[8px_8px_0_var(--color-ink)]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${ep.youtubeId}`}
          title={ep.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-display text-2xl font-bold">About this episode</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">{ep.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ep.tags.map((t) => (
              <span key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium">#{t}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-hand text-2xl">listen on</h2>
          <ListenLinks className="mt-2 md:flex-col md:items-start" />
        </div>
      </div>

      {ep.mentalModel && (
        <aside className="relative mt-12 rounded-2xl border-2 border-dashed border-orange bg-paper p-6">
          <CurlyArrow className="absolute -top-10 right-6 w-20 rotate-12 text-orange" />
          <p className="font-hand text-2xl text-orange">steal this thinking</p>
          <h2 className="font-display text-2xl font-extrabold">{ep.mentalModel.name}</h2>
          <p className="mt-2 text-muted">{ep.mentalModel.description}</p>
        </aside>
      )}

      {others.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl font-extrabold">Keep listening</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => <EpisodeCard key={o.slug} ep={o} />)}
          </div>
        </section>
      )}
    </article>
  );
}
