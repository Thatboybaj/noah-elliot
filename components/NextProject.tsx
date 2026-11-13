import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Teaser for the following case study: label, title and meta beside a rounded image. */
export function NextProject({ project }: { project: Project }) {
  const href = `/project/${project.slug}`;
  return (
    <section aria-labelledby="next-heading" className="py-[var(--section-y)] tablet:py-14">
      <Reveal className="container-x flex flex-col gap-8 tablet:flex-row">
        <Link href={href} className="group flex flex-col justify-end gap-8 tablet:flex-1">
          <h2 id="next-heading" className="t-heading text-text-muted">
            Next Project
          </h2>
          <div className="flex flex-col gap-4">
            <p className="t-next-title transition-opacity duration-300 group-hover:opacity-60">{project.title}</p>
            <div className="flex flex-col gap-1">
              <p className="t-body">{project.role}</p>
              <p className="t-detail tabular-nums">{project.date}</p>
            </div>
          </div>
        </Link>
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden
          className="relative block aspect-[680/628] overflow-hidden rounded-card tablet:flex-1"
        >
          <Image
            src={project.teaser.src}
            alt=""
            fill
            sizes="(min-width: 810px) 50vw, calc(100vw - 24px)"
            className="object-cover"
          />
        </Link>
      </Reveal>
    </section>
  );
}
