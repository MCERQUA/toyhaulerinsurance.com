import Link from "next/link";
import { PackageX, Bike, TrendingDown, ShieldAlert, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const GAPS = [
  {
    icon: PackageX,
    title: "Garage contents capped at $3K–$5K",
    desc: "Most RV policies give you just $3,000–$5,000 for personal property. Your ATV alone is worth $10,000–$20,000 — the cap is gone before you list three items.",
  },
  {
    icon: Bike,
    title: "Toys uninsured the moment you ride",
    desc: "RV personal property covers items while stored. The second you ride your ATV or UTV out of the garage, you’re uninsured unless it has its own OHV policy.",
  },
  {
    icon: TrendingDown,
    title: "Unit undervalued at claim time",
    desc: "Standard carriers price a toy hauler at actual cash value and lowball MSRP. A $100,000 fifth wheel can settle at a fraction of what it costs to replace.",
  },
  {
    icon: ShieldAlert,
    title: "No full-timer or vacation liability",
    desc: "Living in your hauler or hosting friends at your campsite needs endorsements most standard RV policies skip entirely — until a guest gets hurt.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad bg-panel/70">
      <div className="container-xl">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">The Problem</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink font-extrabold mb-4 tracking-tight">
              A standard RV policy leaves your garage contents exposed.
            </h2>
            <p className="font-body text-lg text-muted leading-relaxed">
              Toy haulers are half living quarters, half cargo hold — and standard RV policies
              were written for the living-quarters half. The gear in your garage, the toys you
              ride, and the way you actually use the rig are quietly left out.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-10">
          {GAPS.map((g, i) => (
            <FadeIn key={g.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-4 bg-card border border-line rounded-2xl p-6 h-full shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/10 ring-1 ring-brand/15 flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-brand" strokeWidth={1.9} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink text-lg mb-1.5 leading-snug">
                    {g.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Outcome callout */}
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl bg-brand-ink px-7 py-8 sm:px-12 sm:py-10 shadow-float">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-cta/15 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-tan-bright mb-2">
                  The real-world result
                </p>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug max-w-2xl">
                  <span className="text-cta-grad">$30,000 of toys</span> can be covered at{" "}
                  <span className="line-through decoration-tan/60">$5,000</span> &mdash; if
                  they&rsquo;re covered at all.
                </p>
              </div>
              <Link
                href="/quote"
                className="inline-flex flex-shrink-0 items-center gap-2 bg-cta text-white px-6 py-3.5 rounded-xl font-body font-bold text-base shadow-cta hover:bg-cta-dark hover:-translate-y-0.5 transition-all"
              >
                See real toy hauler coverage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
