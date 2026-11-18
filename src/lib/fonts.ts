import localFont from "next/font/local";

// Adventure typography (blueprint §8): bold outdoors-brand headings
// (Archivo — rugged-but-modern grotesque, "Polaris/Can-Am marketing" feel) +
// clean readable body (Inter). Archivo is statically weighted → reliable with
// next/font. Export names + CSS vars are unchanged from the template so
// layout.tsx and the `font-heading` / `font-body` Tailwind families keep working
// untouched.
export const headingFont = localFont({
  src: [
    { path: "./fonts/Archivo-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Archivo-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Archivo-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Archivo-variable.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Archivo-variable.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
