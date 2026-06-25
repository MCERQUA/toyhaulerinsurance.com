import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Caravan } from "lucide-react";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

const HIGHLIGHTS = [
  "Hauler + garage contents covered",
  "ATV, UTV & motorcycle options",
  "Same-day quotes & certificates",
];

export function Hero() {
  return (
    <section className="relative bg-canvas pt-28 pb-16 lg:pb-0 overflow-hidden">
      {/* Adventure depth: sandy canvas + forest bloom + amber bloom + faint dots */}
      <div className="absolute top-0 right-0 w-[44rem] h-[44rem] rounded-full bg-brand/8 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[34rem] h-[34rem] rounded-full bg-cta/8 blur-3xl pointer-events-none translate-y-1/3" />
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />

      <div className="container-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="py-6 lg:py-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full pl-2 pr-4 py-1.5 mb-6">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand text-white">
                  <Caravan className="w-3.5 h-3.5" />
                </span>
                <span className="font-body text-sm font-bold uppercase tracking-wide text-brand">
                  Toy Hauler &amp; RV Specialists
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="font-heading text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl text-ink font-extrabold tracking-tight mb-6">
                Coverage for Your RV &amp;{" "}
                <span className="text-adventure">Everything Inside</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-body text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-xl">
                Your toy hauler isn&rsquo;t just an RV &mdash; and your insurance shouldn&rsquo;t
                treat it like one. Specialty coverage for fifth wheels and travel trailers,
                plus the ATVs, UTVs, and motorcycles in your garage. The carriers that get the
                RV lifestyle.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-3 mb-9">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-cta text-white px-7 py-3.5 rounded-xl font-body font-bold text-base shadow-cta hover:bg-cta-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border-2 border-brand text-brand px-7 py-3.5 rounded-xl font-body font-bold text-base hover:bg-brand hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                    <span className="font-body text-sm font-medium text-ink-soft">{h}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} direction="left" className="relative h-[460px] lg:h-[600px] rounded-3xl overflow-hidden shadow-float ring-1 ring-line">
            <Image
              src="/images/hero-main.jpg"
              alt="Fifth wheel toy hauler RV at a mountain campsite with an ATV on the ramp, golden hour"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent" />

            {/* Glass quote-teaser card */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-[20rem] bg-card/90 backdrop-blur-xl rounded-2xl p-5 shadow-card ring-1 ring-line">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  Specialty Toy Hauler Coverage
                </p>
              </div>
              <p className="font-heading font-extrabold text-ink text-base leading-snug mb-1">
                Hauler + Garage Contents + Toys
              </p>
              <p className="font-body text-sm text-muted">
                Fifth wheel, travel trailer &amp; OHV options
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
