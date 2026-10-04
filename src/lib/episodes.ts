export type Episode = {
  number: number;
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
    number: 2,
    slug: "tuna-uskudar-provenance",
    guest: "Tuna Uskudar",
    company: "Provenance",
    title: "Tuna Uskudar — Provenance",
    date: "2026-08-14",
    youtubeId: "F5rXTDwLLlA",
    summary:
      "Rohan and Aarush sit down with Tuna Uskudar to discuss his startup, Provenance, his advice for other founders, and stories from his journey.",
    tags: ["Startups", "Finance", "AI"],
  },
  {
    number: 1,
    slug: "benjamin-chan-mythos",
    guest: "Benjamin Chan",
    company: "Mythos",
    title: "Benjamin Chan — Mythos",
    date: "2026-08-10",
    youtubeId: "DkdqPAk7eO8",
    summary:
      "The inaugural episode of The Bench. Rohan and Aarush sit down with Benjamin Chan to discuss his startup, Mythos, and his advice for other founders.",
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
