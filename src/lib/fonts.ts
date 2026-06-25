import { Archivo, Inter } from "next/font/google";

// Adventure typography (blueprint §8): bold outdoors-brand headings
// (Archivo — rugged-but-modern grotesque, "Polaris/Can-Am marketing" feel) +
// clean readable body (Inter). Archivo is statically weighted → reliable with
// next/font. Export names + CSS vars are unchanged from the template so
// layout.tsx and the `font-heading` / `font-body` Tailwind families keep working
// untouched.
export const headingFont = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
