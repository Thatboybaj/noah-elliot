"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

/**
 * Manifesto paragraph whose words light up one by one as it scrolls past.
 * Progress runs from "top of the block at 40 % of the viewport" to "bottom of
 * the block at 40 %", matching the reference; each word fades its color in
 * 0.3s ease-out. Without JS the words simply stay at 50 % white.
 */
export function Statement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const [lit, setLit] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.4", "end 0.4"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setLit(Math.min(words.length, Math.floor(p * (words.length + 1))));
  });

  return (
    <section aria-label="Design philosophy" className="py-[var(--section-y)]">
      <div className="container-x">
        <p ref={ref} className="t-statement">
          {words.map((word, i) => (
            <span
              key={i}
              className="transition-colors duration-300 ease-out"
              style={{ color: i < lit ? "var(--color-text-primary)" : "var(--color-text-muted)" }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
