import { Building2, Briefcase, Factory, Home, Sparkles, Trees, TrendingUp } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS = [Home, Building2, Briefcase, Factory, Trees, Building2, Briefcase, TrendingUp, Building2, Sparkles];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Services</div>
        <h1 className="mt-3 font-display text-5xl font-medium leading-tight sm:text-6xl">
          A full-service <span className="text-gradient-gold">real estate</span> partner
        </h1>
        <p className="mt-4 text-muted-foreground">
          From sourcing to closing — every service designed for clarity, trust and results.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[i] ?? Home;
          return (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-luxe">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
