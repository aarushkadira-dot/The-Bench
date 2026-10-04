import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Doodles";
import { ListenLinks } from "./ListenLinks";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="text-3xl" />
          <p className="mt-3 max-w-sm text-sm text-cream/70">{site.description}</p>
        </div>
        <div>
          <h3 className="font-hand text-2xl text-sun">explore</h3>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li><Link href="/episodes" className="hover:text-orange">Episodes</Link></li>
            <li><Link href="/about" className="hover:text-orange">About</Link></li>
            <li><Link href="/suggest-a-guest" className="hover:text-orange">Suggest a guest</Link></li>
            <li><Link href="/work-with-us" className="hover:text-orange">Work with us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-hand text-2xl text-sun">listen</h3>
          <ListenLinks className="mt-3" dark />
        </div>
      </div>
      <p className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {site.name}. Pull up a seat.
      </p>
    </footer>
  );
}
