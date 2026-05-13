import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "@/lib/data";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl glass shadow-glass transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full glass-strong px-3 py-1 text-[10px] font-medium uppercase tracking-widest">
            {p.type}
          </span>
          {p.highlight && (
            <span className="rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-foreground">
              {p.highlight}
            </span>
          )}
        </div>
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-strong opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {p.location}
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting</div>
            <div className="font-display text-2xl text-gradient-gold">{p.price}</div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <Maximize2 className="h-3 w-3" /> {p.size}
          </div>
        </div>
      </div>
    </article>
  );
}
