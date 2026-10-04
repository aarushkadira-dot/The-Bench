import Image from "next/image";
import { Host } from "@/lib/site";

export function HostCard({ host }: { host: Host }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border-2 border-ink bg-paper p-5 shadow-[5px_5px_0_var(--color-ink)]">
      <div className="relative h-28 w-28 shrink-0 -rotate-3 overflow-hidden rounded-2xl border-2 border-ink bg-sun">
        {host.photo ? (
          <Image src={host.photo} alt={host.name} fill sizes="112px" className="object-cover object-top" />
        ) : (
          <span className="flex h-full items-center justify-center font-display text-4xl font-extrabold">
            {host.name[0]}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-display text-2xl font-bold leading-tight">{host.name}</h3>
        <p className="font-hand text-xl text-orange">{host.role}</p>
        {host.bio && <p className="mt-1 text-sm text-muted">{host.bio}</p>}
      </div>
    </div>
  );
}
