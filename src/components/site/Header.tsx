import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-background/70 shadow-glass backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle at top center, rgba(212,175,55,0.08), transparent 60%)",
          }}
        />

        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-gold font-display text-xl font-bold text-gold-foreground shadow-luxe transition-transform duration-500 group-hover:scale-105">
              H
            </div>

            <div>
              <div className="font-display text-lg font-semibold tracking-wide">
                Hosur All Property
              </div>

              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Premium Real Estate
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-gradient-gold transition-all duration-300 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
          <Link
  to="/contact"
  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-white/10"
>
  <Phone className="h-4 w-4 text-gold" />
  Call Now
</Link>

            <Link
              to="/contact"
              className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform duration-300 hover:scale-[1.03]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-xl glass transition-all duration-300 hover:bg-white/10 md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm border-l border-white/10 bg-background/95 p-8 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Top */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-display text-xl font-semibold">
                Menu
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Navigation
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-xl glass"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-12 flex flex-col gap-2">
            {navItems.map((item, i) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group rounded-2xl px-5 py-4 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-gold"
                      : "hover:bg-white/5 hover:text-gold"
                  }`
                }
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Contact Card */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </div>

            <div className="mt-4 text-lg font-medium">
              {CONTACT.phones[0]}
            </div>

            <div className="mt-2 text-sm text-muted-foreground">
              {CONTACT.email}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-luxe"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}