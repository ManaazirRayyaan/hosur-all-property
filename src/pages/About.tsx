import { Award, Users, MapPin, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Our Story</div>
        <h1 className="mt-3 font-display text-5xl font-medium leading-tight sm:text-6xl">
          Hosur's most trusted <span className="text-gradient-gold">real estate</span> name — since 2003.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          For over two decades, Hosur All Property has helped thousands of families,
          investors and businesses find the right property in the Hosur–Bangalore corridor.
          We combine deep local expertise with a transparent, customer-first approach —
          so every transaction feels effortless and assured.
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { i: Award, k: "22+ years", v: "Local market expertise" },
          { i: Users, k: "500+ families", v: "Helped find a home" },
          { i: MapPin, k: "7 cities", v: "Across Hosur & Bangalore region" },
          { i: Sparkles, k: "100% verified", v: "Every listing we publish" },
        ].map(({ i: Icon, k, v }) => (
          <div key={k} className="rounded-2xl glass p-6 shadow-glass">
            <Icon className="h-5 w-5 text-gold" />
            <div className="mt-4 font-display text-2xl text-gradient-gold">{k}</div>
            <div className="text-sm text-muted-foreground">{v}</div>
          </div>
        ))}
      </div>

      <section className="mt-24">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Leadership</div>
        <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">Led by experience.</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { n: "Mr. A. Narendra Babu", r: "Founder & Managing Director", b: "Two decades of grounded experience across residential, commercial and industrial real estate in Hosur." },
            { n: "Mrs. N. Chandrakala", r: "Director", b: "Leads client relationships, ensuring every family and investor receives transparent, personalised guidance." },
          ].map((p) => (
            <div key={p.n} className="rounded-2xl glass p-8 shadow-glass">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-gold font-display text-3xl font-bold text-gold-foreground shadow-luxe">
                {p.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{p.n}</h3>
              <div className="mt-1 text-xs uppercase tracking-widest text-gradient-gold">{p.r}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-2">
        <div className="rounded-2xl glass p-8 shadow-glass">
          <div className="text-xs uppercase tracking-widest text-gradient-gold">Mission</div>
          <p className="mt-4 font-display text-2xl leading-snug">
            To make every property transaction in Hosur transparent, trustworthy and rewarding — for families and investors alike.
          </p>
        </div>
        <div className="rounded-2xl glass p-8 shadow-glass">
          <div className="text-xs uppercase tracking-widest text-gradient-gold">Vision</div>
          <p className="mt-4 font-display text-2xl leading-snug">
            To be the most trusted premium real estate platform across the entire Hosur–Bangalore corridor.
          </p>
        </div>
      </section>
    </div>
  );
}
