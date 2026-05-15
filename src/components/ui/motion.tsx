/**
 * motion.tsx — reusable scroll-reveal & animation wrapper components.
 *
 * All components:
 *  ✓ Respect `prefers-reduced-motion` (fall through to "visible" immediately)
 *  ✓ Trigger once when the element enters the viewport (IntersectionObserver)
 *  ✓ Support an optional `delay` prop (seconds) for sequencing siblings
 *  ✓ Forward a `className` prop so they integrate seamlessly with Tailwind
 *  ✓ Are fully tree-shakeable — import only what you use
 */

'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from 'framer-motion';

import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from '@/lib/animation';

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface AnimateProps {
  children   : React.ReactNode;
  /** Tailwind / CSS class(es) applied to the wrapper div */
  className ?: string;
  /** Seconds to delay the animation start (for manual sibling sequencing) */
  delay     ?: number;
  /** IntersectionObserver root margin — negative values trigger earlier */
  margin    ?: string;
}

// ─── Internal hook ────────────────────────────────────────────────────────────

function useReveal(margin = '-80px 0px') {
  const ref     = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView  = useInView(ref, { once: true, margin: margin as any });
  const reduced = useReducedMotion();
  // If user prefers reduced motion, skip to the visible state immediately.
  const animate = (reduced || inView) ? 'visible' : 'hidden';
  return { ref, animate } as const;
}

// ─── Scroll-reveal primitives ─────────────────────────────────────────────────

/** Fades the element up from 28 px below when it enters the viewport */
export function FadeUp({
  children, className, delay = 0, margin,
}: AnimateProps) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      custom={delay}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Plain opacity fade on viewport entry */
export function FadeIn({
  children, className, delay = 0, margin,
}: AnimateProps) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      custom={delay}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Slides the element in from the left */
export function SlideLeft({
  children, className, delay = 0, margin,
}: AnimateProps) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      custom={delay}
      variants={slideLeft}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Slides the element in from the right */
export function SlideRight({
  children, className, delay = 0, margin,
}: AnimateProps) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      custom={delay}
      variants={slideRight}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scales the element up from 88 % on viewport entry */
export function ScaleIn({
  children, className, delay = 0, margin,
}: AnimateProps) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      custom={delay}
      variants={scaleIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger orchestration ────────────────────────────────────────────────────

/**
 * Wraps a list of `<StaggerItem>` children and drives their staggered entrance.
 * Apply your grid/flex layout classes via `className`.
 */
export function StaggerContainer({
  children, className, margin,
}: AnimateProps) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual item inside a `<StaggerContainer>`.
 * Inherits its `initial` / `animate` state from the parent via variant
 * propagation — do **not** pass `initial` or `animate` here.
 */
export function StaggerItem({
  children, className,
}: Pick<AnimateProps, 'children' | 'className'>) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Generic variant wrapper ──────────────────────────────────────────────────

/** Escape hatch — supply your own variant object */
export function AnimateIn({
  children, className, delay = 0, margin, variants,
}: AnimateProps & { variants: Variants }) {
  const { ref, animate } = useReveal(margin);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      custom={delay}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
