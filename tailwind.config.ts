import type { Config } from "tailwindcss";

/**
 * TOY HAULER INSURANCE — Adventure / Outdoors design system (Worker B, GLM 5.2).
 *
 * Brand direction (blueprint §8): deep forest-green primary (outdoors, trails),
 * sandy tan / desert-khaki secondary (Glamis / sand-dunes), chrome-steel accent
 * (trailer hardware), clean white/sand canvas (open, airy, approachable), bold
 * adventure-style headings. Mood: "rugged but approachable — Polaris/Can-Am
 * marketing, not extreme off-road."
 *
 * This is the canonical DESIGN-SYSTEM light-trust pattern with a forest-green
 * signature: light sandy body, dark forest peak sections (Stats/CTA/Footer),
 * amber CTA (highest-converting on warm-light bg), layered depth on peaks.
 *
 * Two layers:
 *  1. NEW adventure tokens (forest brand, amber CTA, steel chrome, desert tan,
 *     sandy canvas). Used by the premium restyled sections.
 *  2. LEGACY ALIASES (forest-green / ember-orange / warm-white / bark / timber /
 *     muted / border) mapped onto the adventure palette so every C-owned page
 *     file that still references the framing template's old class names re-themes
 *     cohesively WITHOUT being edited.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Adventure foundation (light, sandy, airy) ──────────────────────
        canvas: "#F9F7F2", // warm sandy off-white page bg (desert khaki tint)
        card: "#FFFFFF", // clean white elevated surface
        panel: "#F1EBE0", // warm recessed surface (FAQ rows, sub-panels)
        ink: "#1A2620", // primary text — deep forest-tinted near-black
        "ink-soft": "#33433A", // secondary heading text
        muted: "#5E6B62", // body / secondary text (sage-gray, ≈5.4:1 on canvas)
        line: "#E2DACC", // borders (warm sand)
        "line-soft": "#EFE9DE", // hairline dividers

        // ── Brand: deep forest green (signature hue — identity) ────────────
        // Standard monotonic ramp (50 lightest → 900 darkest). Brand is the
        // identity + dark-section fill; CTA (amber) is the action.
        brand: {
          DEFAULT: "#1F4A2E",
          bright: "#3A8A52", // lighter stop for gradients / icon hover
          ink: "#12331E", // deepest forest — Stats/CTA/Footer peaks
          50: "#EDF4EF",
          100: "#D2E5DA",
          200: "#A7CBB4",
          300: "#76AE89",
          400: "#4A9066",
          500: "#2E7447",
          600: "#1F4A2E", // DEFAULT
          700: "#193E26",
          800: "#12331E", // ink
          900: "#0B2014",
        },

        // ── CTA: amber (highest-converting on warm-light bg) ───────────────
        cta: {
          DEFAULT: "#E8821A",
          dark: "#C2690B",
          soft: "#FCE7CF",
        },

        // ── Chrome: steel (trailer hardware / hitch accent) ────────────────
        chrome: {
          DEFAULT: "#5C6E7D",
          bright: "#8A99A6",
          soft: "#DCE2E7",
          600: "#4A5963",
        },

        // ── Tan: desert khaki (secondary warm accent) ──────────────────────
        tan: {
          DEFAULT: "#C2A06A",
          bright: "#D8BC88",
          soft: "#F3E9D8",
          ink: "#6B5532",
        },

        // ── LEGACY ALIASES (framing template → adventure) ──────────────────
        // forest-green happens to map to our actual forest brand. ember-orange
        // → amber CTA. warm-white → sandy canvas. bark → forest-ink text.
        "forest-green": {
          DEFAULT: "#1F4A2E", // → brand forest
          dark: "#193E26",
          50: "#EDF4EF", // → light forest tint (readable soft fills)
          light: "#3A8A52",
        },
        "ember-orange": {
          DEFAULT: "#E8821A", // → amber CTA
          dark: "#C2690B",
          light: "#F0943A",
        },
        "warm-white": "#F9F7F2", // → sandy canvas
        bark: {
          DEFAULT: "#1A2620", // → forest-ink (dark text stays dark on light)
          light: "#33433A",
        },
        timber: {
          DEFAULT: "#6B5532", // → desert tan-ink (warm accent text)
          light: "#8A6F45",
        },
        border: "#E2DACC", // → sand line (muted already defined above)
      },
      fontFamily: {
        // CSS vars set by next/font in src/lib/fonts.ts (Archivo + Inter).
        heading: ["var(--font-heading)", "Archivo", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,38,32,.05)",
        card: "0 1px 2px rgba(26,38,32,.05), 0 12px 32px -14px rgba(26,38,32,.14)",
        "card-hover":
          "0 4px 10px rgba(26,38,32,.07), 0 28px 52px -18px rgba(31,74,46,.22)",
        cta: "0 14px 30px -10px rgba(232,130,26,.45)",
        float: "0 26px 70px -28px rgba(26,38,32,.28)",
        steel: "0 14px 34px -12px rgba(92,110,125,.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
