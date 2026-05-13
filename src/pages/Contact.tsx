import { Mail, MapPin, Phone, Send } from "lucide-react";
import { CONTACT, LOCATIONS } from "@/lib/data";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
        <h1 className="mt-3 font-display text-5xl font-medium leading-tight sm:text-6xl">
          Let's find your <span className="text-gradient-gold">next property</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Speak with our advisors today. We respond within an hour during business hours.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl glass-strong p-6 shadow-glass sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Full Name" name="name" required />
              <Input label="Phone" name="phone" type="tel" required />
              <Input label="Email" name="email" type="email" />
              <div className="rounded-xl bg-white/5 px-4 py-2.5">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Interested In</div>
                <select className="mt-0.5 w-full bg-transparent text-sm outline-none">
                  {["Residential Plot", "Villa", "Commercial", "Industrial", "Farm Land", "Investment Advice"].map((t) => (
                    <option key={t} className="bg-background">{t}</option>
                  ))}
                </select>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-2.5 sm:col-span-2">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Preferred Location</div>
                <select className="mt-0.5 w-full bg-transparent text-sm outline-none">
                  {LOCATIONS.map((l) => (
                    <option key={l} className="bg-background">{l}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-2.5">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</div>
                <textarea
                  rows={4}
                  className="mt-0.5 w-full resize-none bg-transparent text-sm outline-none"
                  placeholder="Tell us about your requirements…"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSent(true)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.01] sm:w-auto"
            >
              <Send className="h-4 w-4" /> Send Inquiry
            </button>
            {sent && (
              <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm">
                Thank you — our advisor will reach out shortly.
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <Info icon={<Phone className="h-4 w-4 text-gold" />} title="Call Us">
            {CONTACT.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-foreground">{p}</a>
            ))}
          </Info>
          <Info icon={<Mail className="h-4 w-4 text-gold" />} title="Email">
            <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-foreground">{CONTACT.email}</a>
          </Info>
          <Info icon={<MapPin className="h-4 w-4 text-gold" />} title="Office">
            {CONTACT.address}
            <div className="mt-1 text-xs text-muted-foreground">Mon – Sat · 9:30 AM – 7:30 PM</div>
          </Info>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl bg-gradient-gold p-5 text-gold-foreground shadow-luxe"
          >
            <div className="text-xs uppercase tracking-widest opacity-80">Fastest Response</div>
            <div className="mt-1 font-display text-xl font-semibold">Chat on WhatsApp →</div>
          </a>
        </aside>
      </div>
    </div>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block rounded-xl bg-white/5 px-4 py-2.5">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <input {...props} className="mt-0.5 w-full bg-transparent text-sm outline-none" />
    </label>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        {icon} {title}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
