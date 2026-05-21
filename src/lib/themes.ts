
export type ThemeMode = "light" | "dark";

export type Theme = ThemeMode | "system";

export interface ThemeTokens {
  "font-sans": string;
  radius: string;
  background: string;
  foreground: string;
  card: string;
  "card-foreground": string;
  "theme-card": string;
  popover: string;
  "popover-foreground": string;
  primary: string;
  "primary-foreground": string;
  secondary: string;
  "secondary-foreground": string;
  muted: string;
  "muted-foreground": string;
  accent: string;
  "accent-foreground": string;
  destructive: string;
  "destructive-foreground": string;
  border: string;
  input: string;
  ring: string;
  "shadow-2xs": string;
  "shadow-xs": string;
  "shadow-sm": string;
  shadow: string;
  "shadow-md": string;
  "shadow-lg": string;
  "shadow-xl": string;
  "shadow-2xl": string;
}

const FONT_SANS =
  '"Outfit", "Outfit Fallback"';

const RADIUS = "0.625rem";

const SHADOWS = {
  "shadow-2xs": "0 1px 3px 0px oklch(0 0 0 / 0.05)",
  "shadow-xs" : "0 1px 3px 0px oklch(0 0 0 / 0.05)",
  "shadow-sm" : "0 1px 3px 0px oklch(0 0 0 / 0.10), 0 1px 2px -1px oklch(0 0 0 / 0.10)",
  shadow      : "0 1px 3px 0px oklch(0 0 0 / 0.10), 0 1px 2px -1px oklch(0 0 0 / 0.10)",
  "shadow-md" : "0 1px 3px 0px oklch(0 0 0 / 0.10), 0 2px 4px -1px oklch(0 0 0 / 0.10)",
  "shadow-lg" : "0 1px 3px 0px oklch(0 0 0 / 0.10), 0 4px 6px -1px oklch(0 0 0 / 0.10)",
  "shadow-xl" : "0 1px 3px 0px oklch(0 0 0 / 0.10), 0 8px 10px -1px oklch(0 0 0 / 0.10)",
  "shadow-2xl": "0 1px 3px 0px oklch(0 0 0 / 0.25)",
} as const satisfies Pick<
  ThemeTokens,
  | "shadow-2xs" | "shadow-xs" | "shadow-sm" | "shadow"
  | "shadow-md"  | "shadow-lg" | "shadow-xl" | "shadow-2xl"
>;

export const lightTokens: ThemeTokens = {
  "font-sans": FONT_SANS,
  radius     : RADIUS,
  ...SHADOWS,

  background: "oklch(0.98 0.010 25.1)", /* hsla(6,  100%, 98%, 1)      */
  foreground: "oklch(0.952 0.022 27.5)", 

  card             : "oklch(1 0 0)",             /* hsl(0, 0%, 100%)            */
  "card-foreground": "oklch(0.18 0.010 29.8)",   /* hsla(9,  19%,  7%, 1)       */
  "theme-card"     : "oklch(0.95 0.019 25.2)",   /* hsla(6,  77%, 95%, 1)       */

  popover             : "oklch(1 0 0)",
  "popover-foreground": "oklch(0.14 0.036 258.5)", /* hsl(222.2, 84%, 4.9%)      */

  primary            : "oklch(0.55 0.220 27.1)",   /* hsla(356, 89%, 44%, 1)     */
  "primary-foreground": "oklch(0.98 0.011 100.5)", /* hsla(53,  47%, 96%, 1)     */

  secondary             : "oklch(0.55 0.220 27.1 / 0.10)", /* hsla(356, 89%, 44%, 0.10) */
  "secondary-foreground": "oklch(0.55 0.220 27.1)",        /* hsla(356, 89%, 44%, 1)   */

  muted            : "oklch(0.449 0.011 17.8)", 
  "muted-foreground": "oklch(0.20 0.071 23.1)", /* hsla(357, 85%, 10%, 1)     */

  accent            : "oklch(0.97 0.007 247.9)", /* hsl(210, 40%, 96.1%)       */
  "accent-foreground": "oklch(0.21 0.040 265.7)", /* hsl(222.2, 47.4%, 11.2%)  */

  destructive            : "oklch(0.64 0.208 25.3)", /* hsl(0, 84.2%, 60.2%)   */
  "destructive-foreground": "oklch(0.98 0.003 247.9)", /* hsl(210, 40%, 98%)   */

  border: "oklch(0.90 0.031 25.3)",  /* hsla(6,  54%, 89%, 1)       */
  input : "oklch(0.93 0.013 255.5)", /* hsl(214.3, 31.8%, 91.4%)    */
  ring  : "oklch(0.55 0.215 262.9)", /* hsl(221.2, 83.2%, 53.3%)    */
};


export const darkTokens: ThemeTokens = {
  "font-sans": FONT_SANS,
  radius     : RADIUS,
  ...SHADOWS,

  background: "oklch(0.14 0.036 258.5)", /* hsl(222.2, 84%, 4.9%)      */
  foreground: "oklch(0.20 0.023 266.7)", 

  card             : "oklch(0.14 0.036 258.5)", /* same as dark background     */
  "card-foreground": "oklch(0.94 0.006 29.5)",  /* hsla(9, 19%, 93%, 1)        */
  "theme-card"     : "oklch(0.23 0.037 27.1)",  /* hsla(6, 40%, 12%, 1)        */

  popover             : "oklch(0.14 0.036 258.5)", /* same as dark background  */
  "popover-foreground": "oklch(0.98 0.003 247.9)", /* same as dark foreground  */

  primary            : "oklch(0.55 0.220 27.1)",
  "primary-foreground": "oklch(0.98 0.011 100.5)",

  secondary             : "oklch(0.55 0.220 27.1 / 0.15)", /* hsla(356, 89%, 44%, 0.15) */
  "secondary-foreground": "oklch(0.71 0.167 18.3)",         /* hsla(356, 89%, 70%, 1)   */

  muted            : "oklch(0.68 0.01 25)", 
  "muted-foreground": "oklch(0.95 0.01 25.37)", 

  accent            : "oklch(0.28 0.037 260.0)", /* same as dark muted          */
  "accent-foreground": "oklch(0.98 0.003 247.9)", /* same as dark foreground    */

  destructive            : "oklch(0.57 0.195 26.1)",  /* hsl(0, 62.8%, 50.6%)  */
  "destructive-foreground": "oklch(0.98 0.003 247.9)", /* same as dark fg       */

  border: "oklch(0.28 0.037 260.0)", /* same as dark muted              */
  input : "oklch(0.28 0.037 260.0)", /* same as dark border             */
  ring  : "oklch(0.49 0.217 264.4)", /* hsl(224.3, 76.3%, 48%)          */
};


export const THEME_TOKENS: Record<ThemeMode, ThemeTokens> = {
  light: lightTokens,
  dark : darkTokens,
};
