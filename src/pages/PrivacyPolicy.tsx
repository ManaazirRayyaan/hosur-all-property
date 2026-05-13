import {
  ShieldCheck,
  Lock,
  FileText,
  Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      desc:
        "We may collect your name, phone number, email address, property preferences and inquiry details when you contact us through forms, calls or WhatsApp.",
    },
    {
      icon: ShieldCheck,
      title: "How We Use Information",
      desc:
        "Your information is used only for customer support, property consultation, responding to inquiries and improving our services.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      desc:
        "We do not sell, trade or share your personal information with third parties except where required by law.",
    },
    {
      icon: Mail,
      title: "Contact Us",
      desc:
        "For any questions regarding this Privacy Policy, please contact our support team anytime.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "var(--gradient-radial-gold)",
        }}
      />

      <section className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Floating Glow */}
          <div
            className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.8), rgba(255,255,255,0.05))",
            }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Legal & Privacy
            </div>

            <h1 className="mt-8 font-display text-5xl font-medium leading-tight sm:text-6xl lg:text-7xl">
              Privacy{" "}
              <span className="text-gradient-gold">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Your privacy matters to us. Hosur All Property is committed
              to protecting your personal information with transparency,
              security and professionalism.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 glass-strong p-8 shadow-luxe backdrop-blur-2xl sm:p-14">
          {/* Inner Glow */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(212,175,55,0.35), transparent 45%)",
            }}
          />

          <div className="relative grid gap-7 md:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-white/[0.05] hover:shadow-luxe"
                >
                  {/* Card Glow */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(212,175,55,0.15), transparent 45%)",
                    }}
                  />

                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/5">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>

                    <h2 className="mt-6 font-display text-2xl font-semibold">
                      {section.title}
                    </h2>

                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {section.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notice */}
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-gold/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              By using this website, you consent to our privacy practices
              and policies. We may update this Privacy Policy periodically
              to reflect changes in our services and legal obligations.
            </p>

            <div className="mt-5 text-sm">
              Contact:
              <span className="ml-2 text-gold">
                contact@hosurallproperty.com
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:flex-row sm:text-left">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-gold">
                Need Assistance?
              </div>

              <h3 className="mt-2 font-display text-3xl">
                Our advisors are here to help.
              </h3>

              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Reach out anytime for property consultations,
                investment guidance and verified listings across
                Hosur and Bangalore growth corridors.
              </p>
            </div>

            <a
              href="/contact"
              className="rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-gold-foreground shadow-luxe transition-transform hover:scale-[1.03]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}