import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, LOCATIONS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t hairline">
      {/* Top Divider */}
      <div className="gold-divider" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold font-display text-xl font-bold text-gold-foreground shadow-luxe">
                H
              </div>

              <div>
                <div className="font-display text-lg font-semibold">
                  Hosur All Property
                </div>

                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Premium Real Estate · Since 2003
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Hosur's most trusted real estate partner —
              connecting investors and families with verified
              plots, villas, commercial and industrial
              properties across the Hosur–Bangalore growth
              corridor.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient-gold">
              Locations
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {LOCATIONS.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient-gold">
              Reach Us
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {CONTACT.phones.map((phone) => (
                <li
                  key={phone}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {phone}
                </li>
              ))}

              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />

                <span className="break-all">
                  {CONTACT.email}
                </span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Hosur All Property.
            All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <NavLink
              to="/about"
              className="transition-colors hover:text-gold"
            >
              About
            </NavLink>

            <NavLink
              to="/properties"
              className="transition-colors hover:text-gold"
            >
              Properties
            </NavLink>

            <NavLink
              to="/services"
              className="transition-colors hover:text-gold"
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className="transition-colors hover:text-gold"
            >
              Contact
            </NavLink>

            <span className="hidden opacity-30 sm:block">
              •
            </span>

            <NavLink
              to="/privacy-policy"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms-and-conditions"
              className="transition-colors hover:text-gold"
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}