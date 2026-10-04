// Fill in the empty links when they're ready — empty links are hidden automatically.
export const site = {
  name: "The Bench",
  tagline: "How founders actually think.",
  description:
    "Rohan and Aarush pull founders onto the bench and break down the calls behind what they're building — the bets, the mistakes, and the thinking you can steal.",
  contactEmail: "", // e.g. hello@thebenchpod.com — used by the forms
  links: {
    youtube: "https://www.youtube.com/@TheBenchTV-o4u",
    spotify: "",
    apple: "",
    instagram: "",
  },
};

export type Host = { name: string; role: string; photo?: string; bio: string };

export const hosts: Host[] = [
  { name: "Aarush Reddy Kadira", role: "Co-host", photo: "/hosts/aarush.webp", bio: "" },
  { name: "Rohan", role: "Co-host", bio: "" },
];
