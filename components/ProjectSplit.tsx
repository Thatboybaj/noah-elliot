import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageAsset, ProjectSection } from "@/lib/content";
import { Reveal } from "./Reveal";

type Props = {
  lead: { heading: string; body: ReactNode };
  columns: [ProjectSection, ProjectSection];
  image: ImageAsset;
};

/**
 * Case-study block: lead text and two short columns on the left, a tall image
 * bleeding off the right edge (laptop and up). Stacked on smaller screens.
 */
export function ProjectSplit({ lead, columns, image }: Props) {
  return (
    <section className="pt-[72px] laptop:pt-0">
      <div className="flex flex-col gap-3 pl-[var(--gutter)] laptop:grid laptop:grid-cols-2 laptop:items-center laptop:gap-8">
        <div className="flex flex-col gap-8 pr-[var(--gutter)] laptop:gap-[220px] laptop:pr-0 laptop:pt-24">
          <Reveal y={20} className="flex max-w-[561px] flex-col gap-6">
            <h2 className="t-heading">{lead.heading}</h2>
            <div className="t-detail">{lead.body}</div>
          </Reveal>
          <div className="flex flex-col gap-8 laptop:grid laptop:grid-cols-2">
            {columns.map((col) => (
              <Reveal key={col.heading} y={20} className="flex flex-col gap-6">
                <h3 className="t-heading">{col.heading}</h3>
                <p className="t-detail">{col.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="relative mr-[var(--gutter)] aspect-[366/423] overflow-hidden laptop:mr-0 laptop:aspect-[692/800]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 24px)"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function ProcessList({ steps }: { steps: { label: string; text: string }[] }) {
  return (
    <ul className="list-disc pl-4 marker:text-text-primary tablet:pl-[19px]">
      {steps.map((s) => (
        <li key={s.label}>
          {s.label}: {s.text}
        </li>
      ))}
    </ul>
  );
}
