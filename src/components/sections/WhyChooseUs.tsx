import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

// Toy-hauler-correct reasons (template copy was a framing find-replace).
const REASONS = [
  {
    title: "RV Specialists, Not Generalists",
    desc: "We know the difference between a fifth-wheel toy hauler and a Class A motorhome — and why the rear garage changes everything about how your policy should be written.",
  },
  {
    title: "Specialty RV Markets",
    desc: "Access to Progressive specialty RV, National General, Foremost, and Good Sam-rated markets that actually underwrite toy haulers — not standard auto carriers that undervalue them.",
  },
  {
    title: "We Cover the Toys Too",
    desc: "The ATVs, UTVs, and motorcycles in your garage usually need their own OHV policies. We layer hauler coverage + separate toy policies so you’re insured on the trail, not just in storage.",
  },
  {
    title: "Same-Day Certificates",
    desc: "A campground or rental platform needs proof of insurance by tomorrow? We issue ACORD certificates and additional-insured endorsements the same day.",
  },
  {
    title: "Licensed in All 50 States",
    desc: "Full-timer domiciled in South Dakota, weekend warrior in California, snowbird chasing dunes — we bind coverage exactly where you roam.",
  },
  {
    title: "Claims Advocacy",
    desc: "When a loss happens, we’re in your corner — not a carrier call center that has never heard of a ramp door or a Polaris RZR.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-float ring-1 ring-line">
              <Image
                src="/images/agent-handshake.webp"
                alt="Insurance agent reviewing toy hauler coverage documents with owners at a campsite"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-ink/45 via-brand/10 to-transparent" />
            </div>
            {/* Floating credential chip */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-card rounded-2xl shadow-card ring-1 ring-line px-5 py-4 flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand text-white">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-ink text-lg leading-none">20+ yrs</p>
                <p className="font-body text-xs text-muted mt-1">50-state licensed</p>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="eyebrow mb-3">Why CCA</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink font-extrabold mb-4 tracking-tight">
                The specialty insurer for{" "}
                <span className="text-brand">toy hauler owners</span>
              </h2>
              <p className="font-body text-lg text-muted leading-relaxed mb-8">
                We&rsquo;re not a generalist agency guessing at toy hauler values at claim time.
                We know what a garage section is, we know the OHV coverage gap, and we know the
                markets built to underwrite this niche.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand/10 ring-1 ring-brand/20 flex items-center justify-center mt-0.5">
                      <BadgeCheck className="w-4 h-4 text-brand" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-ink text-[0.95rem] mb-1">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
