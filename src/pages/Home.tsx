import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Sparkles,
  Shield,
  TrendingUp,
  Award,
  Quote,
  Building2,
  Trees,
  Factory,
  Home,
  Briefcase,
} from "lucide-react";

import heroImage from "@/assets/hero-villa.jpg";
import {
  PROPERTIES,
  SERVICES,
  STATS,
  LOCATIONS,
} from "@/lib/data";

import { PropertyCard } from "@/components/site/PropertyCard";

import CountUp from "react-countup";
import FadeUp from "@/components/animations/FadeUp";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <FeaturedProperties />
      <ServicesGrid />
      <WhyHosur />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 min-h-[100svh] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury villa in Hosur at twilight"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />

<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.18), rgba(0,0,0,0.48))",
  }}
/>

<div
  className="absolute inset-0 opacity-40"
  style={{
    background:
      "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.55) 100%)",
  }}
/>

      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: "var(--gradient-radial-gold)",
        }}
      />

      {/* Floating Glow */}
      <div
        className="absolute left-1/2 top-1/3 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(212,175,55,0.5), rgba(255,255,255,0.05))",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Trusted in Hosur since 2003
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.65)] sm:text-6xl md:text-7xl lg:text-8xl">
              Find Premium <br />
              Properties in{" "}
              <span className="text-gradient-gold">
                Hosur
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-lg">
              Residential · Commercial · Industrial ·
              Investment. A curated marketplace of verified
              properties across the Hosur–Bangalore growth
              corridor.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/properties"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.03]"
              >
                Browse Properties

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium transition-all hover:bg-white/10"
              >
                Book Consultation
              </Link>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4}>
          <SearchBar />
        </FadeUp>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <div className="mt-12 mb-10">
      <div className="rounded-3xl glass-strong p-3 shadow-glass sm:p-4">
        <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr_1fr_auto]">
          <Field label="Location">
            <select className="w-full bg-transparent text-sm outline-none">
              <option className="bg-background">
                All Locations
              </option>

              {LOCATIONS.map((location) => (
                <option
                  key={location}
                  className="bg-background"
                >
                  {location}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Property Type">
            <select className="w-full bg-transparent text-sm outline-none">
              {[
                "Any",
                "Villa",
                "Plot",
                "Commercial",
                "Industrial",
                "Farm",
              ].map((type) => (
                <option
                  key={type}
                  className="bg-background"
                >
                  {type}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Budget">
            <select className="w-full bg-transparent text-sm outline-none">
              {[
                "Any",
                "Under ₹25L",
                "₹25L – ₹1Cr",
                "₹1Cr – ₹5Cr",
                "₹5Cr+",
              ].map((budget) => (
                <option
                  key={budget}
                  className="bg-background"
                >
                  {budget}
                </option>
              ))}
            </select>
          </Field>

          <Link
            to="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.03]"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white/5 px-4 py-2.5">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>

      <div className="mt-0.5">{children}</div>
    </div>
  );
}

function TrustStrip() {
  const icons = [Award, Building2, Home, Shield];

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => {
          const Icon = icons[i];

          return (
            <FadeUp
              key={s.label}
              delay={i * 0.1}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:border-gold/20 hover:shadow-luxe">
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(212,175,55,0.12), transparent 45%)",
                  }}
                />

                <div className="relative">
                  <Icon className="h-6 w-6 text-gold" />

                  <div className="mt-8 font-display text-5xl font-medium text-gradient-gold">
                    {s.value.includes("%") ? (
                      <>
                        <CountUp
                          end={parseInt(s.value)}
                          duration={2.5}
                        />
                        %
                      </>
                    ) : (
                      <>
                        <CountUp
                          end={parseInt(
                            s.value.replace("+", "")
                          )}
                          duration={2.5}
                          separator=","
                        />
                        +
                      </>
                    )}
                  </div>

                  <div className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeUp>
        <SectionHeading
          eyebrow="Featured Listings"
          title="Handpicked premium properties"
          subtitle="A curated selection of luxury villas, gated plots and high-yield commercial spaces."
        />
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROPERTIES.map((property, i) => (
          <FadeUp
            key={property.id}
            delay={i * 0.1}
          >
            <PropertyCard p={property} />
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.2}>
        <div className="mt-12 flex justify-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-all hover:bg-white/10"
          >
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}

function ServicesGrid() {
  const icons = [
    Home,
    Building2,
    Briefcase,
    Factory,
    Trees,
    Building2,
    Briefcase,
    TrendingUp,
    Building2,
    Sparkles,
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeUp>
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end real estate, done right"
          subtitle="From sourcing to closing — we handle every step with transparency and care."
        />
      </FadeUp>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = icons[i] ?? Home;

          return (
            <FadeUp
              key={service.title}
              delay={i * 0.05}
            >
              <div className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe">
                <div
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "var(--gradient-radial-gold)",
                  }}
                />

                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

function WhyHosur() {
  const stats = [
    {
      k: "Tata Electronics",
      v: "₹14,000 Cr Hub",
      d: "iPhone manufacturing facility powering Hosur growth.",
    },
    {
      k: "STRR Corridor",
      v: "Direct Bangalore Link",
      d: "Satellite Town Ring Road boosting connectivity & demand.",
    },
    {
      k: "SIPCOT Industrial",
      v: "3 Major Phases",
      d: "Hub for global manufacturing & logistics tenants.",
    },
    {
      k: "Property Appreciation",
      v: "18–24% YoY",
      d: "Highest growth corridor in South India real estate.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "var(--gradient-radial-gold)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why Invest in Hosur"
                title="The next Bangalore is already here."
                subtitle="Hosur is South India's fastest growing investment destination — driven by Tata Electronics, SIPCOT, STRR and Bangalore's unstoppable expansion."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/properties"
                  className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-luxe"
                >
                  Explore Investment Plots
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full glass px-6 py-3 text-sm font-medium"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s, i) => (
              <FadeUp
                key={s.k}
                delay={i * 0.1}
              >
                <div
                  className={`rounded-2xl glass p-6 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe ${
                    i % 2 ? "sm:translate-y-6" : ""
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </div>

                  <div className="mt-2 font-display text-2xl text-gradient-gold">
                    {s.v}
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "I purchased a villa plot through Hosur All Property in 2019 — its value has tripled. Their advice was invaluable.",
      n: "Karthik R.",
      r: "Investor, Bangalore",
    },
    {
      q: "Genuinely transparent and professional. They helped us secure DTCP-approved land near SIPCOT in days.",
      n: "Priya & Anand",
      r: "Homebuyers, Hosur",
    },
    {
      q: "From documentation to registration, the team handled everything end-to-end. Truly premium service.",
      n: "Mohan S.",
      r: "NRI Client, Singapore",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeUp>
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by 500+ families & investors"
        />
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {quotes.map((testimonial, i) => (
          <FadeUp
            key={testimonial.n}
            delay={i * 0.1}
          >
            <figure className="rounded-2xl glass p-8 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe">
              <Quote className="h-7 w-7 text-gold" />

              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                "{testimonial.q}"
              </blockquote>

              <figcaption className="mt-6 border-t hairline pt-4">
                <div className="font-display text-lg">
                  {testimonial.n}
                </div>

                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {testimonial.r}
                </div>
              </figcaption>
            </figure>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 shadow-luxe sm:p-14">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: "var(--gradient-radial-gold)",
            }}
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium leading-tight sm:text-5xl">
                Ready to find your{" "}
                <span className="text-gradient-gold">
                  next address?
                </span>
              </h2>

              <p className="mt-4 text-muted-foreground">
                Speak with our advisors today — get
                verified listings, market insights and
                exclusive previews.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-luxe"
              >
                Book Site Visit
              </Link>

              <a
                href="tel:+919500391129"
                className="rounded-full glass px-6 py-3 text-sm font-medium"
              >
                Call +91 95003 91129
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-gold" />
        {eyebrow}
      </div>

      <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}