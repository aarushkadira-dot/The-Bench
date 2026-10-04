// Fill in the empty links when they're ready — empty links are hidden automatically.
export const site = {
  name: "The Bench",
  tagline: "How the best actually think.",
  description:
    "Every season, Rohan and Aarush pull people from one world onto the bench and break down the calls behind what they do — the bets, the mistakes, and the thinking you can steal.",
  contactEmail: "aarush.kadira@gmail.com", // form submissions are emailed here (via FormSubmit)
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
