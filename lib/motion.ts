import type { Transition } from "motion/react";

/**
 * Motion tokens read from the reference's Framer appear/in-view config.
 * Every entrance uses the same tween: 0.8s, cubic-bezier(0.8, 0, 0.56, 1).
 */
export const ease = {
  /** Framer's entrance curve on the reference (slow start, soft landing). */
  reveal: [0.8, 0, 0.56, 1] as const,
  /** Hovers and small state changes. */
  out: [0.16, 1, 0.3, 1] as const,
};

export const duration = {
  reveal: 0.8,
  revealShort: 0.6,
  hover: 0.3,
  menu: 0.45,
};

export const revealTransition = (delay = 0, d = duration.reveal): Transition => ({
  type: "tween",
  ease: ease.reveal,
  duration: d,
  delay,
});

/** Fraction of an element that must be visible before it reveals. */
export const inViewAmount = 0.15;
