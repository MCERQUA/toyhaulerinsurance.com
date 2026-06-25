import { ShieldCheck, Award, MapPin, Clock, PackageCheck } from "lucide-react";

// Dark forest credentials ribbon — tan/amber icons on deep forest.
const ITEMS = [
  { icon: ShieldCheck, text: "A.M. Best A+ Rated Carriers" },
  { icon: Award, text: "Founded 2005" },
  { icon: MapPin, text: "Licensed All 50 States" },
  { icon: Clock, text: "Same-Day Quotes & Certificates" },
  { icon: PackageCheck, text: "Garage Contents Covered" },
];

export function TrustBar() {
  return (
    <section className="relative bg-brand-ink overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-800 via-brand-ink to-brand-800" />
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="relative container-xl py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {ITEMS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-tan-bright flex-shrink-0" strokeWidth={2.2} />
              <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-wide text-white/95 whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
