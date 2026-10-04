export type Season = { number: number; name: string; description: string };

// Newest first.
export const seasons: Season[] = [
  {
    number: 1,
    name: "Founders & Ventures",
    description: "Founders and investors on the bets, pivots, and hard calls behind what they're building.",
  },
];

export const getSeason = (n: number) => seasons.find((s) => s.number === n)!;

export type Episode = {
  season: number;
  number: number; // episode number within the season
  slug: string;
  guest: string;
  company: string;
  title: string;
  date: string; // ISO
  youtubeId: string;
  summary: string;
  tags: string[];
  // Optional: the one idea listeners should walk away with.
  mentalModel?: { name: string; description: string };
};

// Newest first.
export const episodes: Episode[] = [
  {
    season: 1,
    number: 2,
    slug: "tuna-uskudar-provenance",
    guest: "Tuna Uskudar",
    company: "Provenance",
    title: "Tuna Uskudar — Provenance",
    date: "2026-08-14",
    youtubeId: "F5rXTDwLLlA",
    summary:
      "Aarush and Rohan sit down with Tuna Uskudar to discuss his startup, Provenance, his advice for other founders, and stories from his journey.",
    tags: ["Startups", "Finance", "AI"],
  },
  {
    season: 1,
    number: 1,
    slug: "benjamin-chan-mythos",
    guest: "Benjamin Chan",
    company: "Mythos",
    title: "Benjamin Chan — Mythos",
    date: "2026-08-10",
    youtubeId: "DkdqPAk7eO8",
    summary:
      "The inaugural episode of The Bench. Aarush and Rohan sit down with Benjamin Chan to discuss his startup, Mythos, and his advice for other founders.",
    tags: ["Startups", "Founders"],
  },
];

export const getEpisode = (slug: string) => episodes.find((e) => e.slug === slug);

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
