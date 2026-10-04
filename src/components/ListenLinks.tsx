import { site } from "@/lib/site";

const labels: Record<keyof typeof site.links, string> = {
  youtube: "YouTube",
  spotify: "Spotify",
  apple: "Apple Podcasts",
  instagram: "Instagram",
};

export function ListenLinks({ className, dark }: { className?: string; dark?: boolean }) {
  const entries = (Object.keys(labels) as (keyof typeof labels)[]).filter((k) => site.links[k]);
  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {entries.map((k) => (
        <a
          key={k}
          href={site.links[k]}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            dark ? "border-cream/30 hover:border-orange hover:text-orange" : "border-ink hover:bg-ink hover:text-cream"
          }`}
        >
          {labels[k]} ↗
        </a>
      ))}
    </div>
  );
}
