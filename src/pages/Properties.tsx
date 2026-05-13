import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { PROPERTIES } from "@/lib/data";
import { PropertyCard } from "@/components/site/PropertyCard";

const TYPES = ["All", "Villa", "Plot", "Commercial", "Industrial", "Farm"] as const;

export default function PropertiesPage() {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      PROPERTIES.filter((p) => (type === "All" || p.type === type)).filter((p) =>
        q.trim() ? (p.title + p.location).toLowerCase().includes(q.toLowerCase()) : true,
      ),
    [type, q],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Properties</div>
        <h1 className="mt-3 font-display text-5xl font-medium leading-tight sm:text-6xl">
          Discover your next <span className="text-gradient-gold">premium address</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Curated, verified and ready to view. Filter by category to find your perfect match.
        </p>
      </div>

      <div className="mt-10 rounded-2xl glass-strong p-3 shadow-glass">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by location or name…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                  type === t
                    ? "bg-gradient-gold text-gold-foreground"
                    : "bg-white/5 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PropertyCard key={p.id} p={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 rounded-2xl glass p-16 text-center text-muted-foreground">
          No properties match your filters.
        </div>
      )}
    </div>
  );
}
