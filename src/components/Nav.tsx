"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Doodles";

const links = [
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/suggest-a-guest", label: "Suggest a guest" },
  { href: "/work-with-us", label: "Work with us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-2xl" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-orange">{l.label}</Link>
            </li>
          ))}
        </ul>
        <button
          className="rounded-full border border-ink px-4 py-1.5 text-sm font-medium md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-line px-4 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)} className="block py-2 font-display text-2xl font-bold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
