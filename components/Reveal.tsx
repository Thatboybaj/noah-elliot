"use client";

import { motion } from "motion/react";
import type { ComponentProps, ElementType, ReactNode } from "react";
import { duration as d, inViewAmount, revealTransition } from "@/lib/motion";

type Props = {
  children: ReactNode;
  /** Starting vertical offset in px (reference uses 40, 20 or 15). */
  y?: number;
  delay?: number;
  duration?: number;
  /** "appear" plays on page load; "inView" plays once when scrolled into view. */
  trigger?: "appear" | "inView";
  as?: "div" | "figure" | "section" | "li" | "header";
  className?: string;
} & Omit<ComponentProps<"div">, "children" | "className">;

const tags: Record<NonNullable<Props["as"]>, ElementType> = {
  div: motion.div,
  figure: motion.figure,
  section: motion.section,
  li: motion.li,
  header: motion.header,
};

/**
 * Fade + slide-up entrance, matching the reference's Framer effects:
 * opacity 0 → 1, translateY(y) → 0, 0.8s cubic-bezier(0.8, 0, 0.56, 1).
 * Content stays readable without JS (see the <noscript> rule on [data-reveal]).
 */
export function Reveal({
  children,
  y = 40,
  delay = 0,
  duration = d.reveal,
  trigger = "inView",
  as = "div",
  className,
  ...rest
}: Props) {
  const Tag = tags[as];
  const target = { opacity: 1, y: 0 };
  return (
    <Tag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      {...(trigger === "appear"
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, amount: inViewAmount } })}
      transition={revealTransition(delay, duration)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
