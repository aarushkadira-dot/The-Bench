import Link from "next/link";
import { Episode, formatDate, thumb } from "@/lib/episodes";

export function EpisodeCard({ ep }: { ep: Episode }) {
  return (
    <Link
      href={`/episodes/${ep.slug}`}
      className="group block overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-[5px_5px_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[7px_9px_0_var(--color-orange)]"
    >
      <div className="relative aspect-video overflow-hidden border-b-2 border-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumb(ep.youtubeId)} alt="" className="h-full w-full object-cover transition group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-sun px-3 py-0.5 font-display text-sm font-bold">
          S{ep.season} · Ep. {ep.number}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-muted">{formatDate(ep.date)}</p>
        <h3 className="mt-1 font-display text-xl font-bold leading-tight group-hover:text-orange">{ep.guest}</h3>
        <p className="font-hand text-xl text-orange">founder of {ep.company}</p>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{ep.summary}</p>
      </div>
    </Link>
  );
}
