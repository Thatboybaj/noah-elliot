"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { useState, type PointerEvent } from "react";
import type { ProjectSummary } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * Full-width project cards that stick to the top of the viewport and stack
 * as you scroll. On mouse devices a 120px "View Project" disc follows the
 * cursor while it is over a card.
 */
export function ProjectStack({ projects, id }: { projects: ProjectSummary[]; id?: string }) {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const track = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    x.set(e.clientX - 60);
    y.set(e.clientY - 60);
  };

  return (
    <section id={id} aria-labelledby="work-heading" className="scroll-mt-12 py-[var(--section-y)]">
      <h2 id="work-heading" className="sr-only">
        Selected work
      </h2>
      <Reveal className="container-x">
        <ul
          className="flex flex-col gap-5"
          onPointerMove={track}
          onPointerEnter={(e) => {
            if (e.pointerType !== "mouse") return;
            track(e);
            setHovering(true);
          }}
          onPointerLeave={() => setHovering(false)}
        >
          {projects.map((project, i) => (
            <li key={project.slug} className="sticky top-0">
              <ProjectCard project={project} preload={i === 0} />
            </li>
          ))}
        </ul>
      </Reveal>

      <AnimatePresence>
        {hovering && (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-40 grid size-[120px] place-items-center rounded-full bg-accent text-accent-text"
            style={{ x, y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <span className="text-base font-normal leading-[1.3] tracking-[-0.02em]">View Project</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, preload }: { project: ProjectSummary; preload?: boolean }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group relative isolate flex h-[350px] items-center justify-center overflow-hidden rounded-card tablet:h-[438px] laptop:h-[561px] desktop:h-[800px]"
    >
      <Image
        src={project.thumbnail.src}
        alt=""
        fill
        sizes="(min-width: 1920px) 1872px, calc(100vw - 48px)"
        preload={preload}
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-overlay-strong" />
      <div className="flex flex-col items-center gap-2.5 px-3 text-center">
        <h3 className="t-card-title">{project.title}</h3>
        <div className="t-body flex flex-col items-center gap-2">
          <p className="w-[150px]">{project.role}</p>
          <p className="tabular-nums">{project.date}</p>
        </div>
      </div>
    </Link>
  );
}
