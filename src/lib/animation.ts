/**
 * animation.ts — single source of truth for all motion tokens.
 *
 * Design rules
 *  • Easing: EXPO_OUT for content reveals (fast start, gentle landing)
 *  • Duration: 0.55 s base, 0.35 s fast, 0.75 s slow
 *  • Respect `prefers-reduced-motion` via useReducedMotion() in components
 *  • Variant factories accept a `custom` delay (seconds) so each element
 *    can have a personalised stagger without duplicating variants.
 */

import { type Transition, type Variants } from 'framer-motion';

// ─── Easing curves ────────────────────────────────────────────────────────────

/** Decelerates sharply — great for reveals entering from below */
export const EASE_OUT_EXPO  = [0.16, 1, 0.3, 1]  as const;
/** Smooth in-out — good for image/card transitions */
export const EASE_IN_OUT    = [0.4,  0, 0.2, 1]   as const;
/** Slight overshoot — subtle bounce on interactive elements */
export const EASE_BACK_OUT  = [0.34, 1.56, 0.64, 1] as const;

// ─── Duration tokens ─────────────────────────────────────────────────────────

export const DUR_FAST  = 0.3;
export const DUR_BASE  = 0.55;
export const DUR_SLOW  = 0.72;

// ─── Reusable transition presets ─────────────────────────────────────────────

export const txBase: Transition = {
  type    : 'tween',
  ease    : EASE_OUT_EXPO,
  duration: DUR_BASE,
};

export const txFast: Transition = {
  type    : 'tween',
  ease    : EASE_OUT_EXPO,
  duration: DUR_FAST,
};

export const txSlow: Transition = {
  type    : 'tween',
  ease    : EASE_IN_OUT,
  duration: DUR_SLOW,
};

export const txSpring: Transition = {
  type     : 'spring',
  stiffness: 300,
  damping  : 24,
  mass     : 0.8,
};

// ─── Variant factories ────────────────────────────────────────────────────────
// Each `visible` state is a factory (custom = delay in seconds).
// Usage:  <motion.div custom={0.2} variants={fadeUp} />

/** Fade + rise from below */
export const fadeUp: Variants = {
  hidden : { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity   : 1,
    y         : 0,
    transition: { ...txBase, delay },
  }),
};

/** Plain opacity fade */
export const fadeIn: Variants = {
  hidden : { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity   : 1,
    transition: { ...txBase, delay },
  }),
};

/** Slide in from the left */
export const slideLeft: Variants = {
  hidden : { opacity: 0, x: -48 },
  visible: (delay: number = 0) => ({
    opacity   : 1,
    x         : 0,
    transition: { ...txBase, delay },
  }),
};

/** Slide in from the right */
export const slideRight: Variants = {
  hidden : { opacity: 0, x: 48 },
  visible: (delay: number = 0) => ({
    opacity   : 1,
    x         : 0,
    transition: { ...txBase, delay },
  }),
};

/** Scale up from slightly smaller */
export const scaleIn: Variants = {
  hidden : { opacity: 0, scale: 0.88 },
  visible: (delay: number = 0) => ({
    opacity   : 1,
    scale     : 1,
    transition: { ...txBase, delay },
  }),
};

// ─── Stagger orchestration ────────────────────────────────────────────────────

/** Container: delays each direct motion-child by `staggerChildren` seconds */
export const staggerContainer: Variants = {
  hidden : {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren  : 0.06,
    },
  },
};

/** Individual item inside a stagger container */
export const staggerItem: Variants = {
  hidden : { opacity: 0, y: 22 },
  visible: {
    opacity   : 1,
    y         : 0,
    transition: txBase,
  },
};

// ─── Page-level hero entrance ─────────────────────────────────────────────────

/** Used for the above-the-fold hero — plays immediately on mount */
export const heroContainer: Variants = {
  hidden : {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren  : 0.05,
    },
  },
};

export const heroItem: Variants = {
  hidden : { opacity: 0, y: 32 },
  visible: {
    opacity   : 1,
    y         : 0,
    transition: { type: 'tween', ease: EASE_OUT_EXPO, duration: 0.65 },
  },
};
