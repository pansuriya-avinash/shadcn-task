/**
 * tailwind.config.ts
 *
 * Deliberately minimal — all colors, radius tokens, and shadow tokens are
 * declared in globals.css via `@theme inline`, which is the Tailwind v4
 * CSS-first approach.  Only things that cannot be expressed in CSS live here.
 */

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  /** Class-based dark mode, driven by ThemeProvider adding `.dark` to <html> */
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /**
       * Accordion open / close keyframes used by shadcn/ui Accordion.
       * Kept here because keyframe definitions belong in JS config rather
       * than in globals.css when they reference Radix CSS custom properties.
       */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [tailwindcssAnimate],
};

export default config;
