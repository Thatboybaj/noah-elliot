import Image from "next/image";
import type { home } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

type Props = { content: (typeof home)["about"] };

/**
 * "Behind the Work": portrait + four short paragraphs.
 * Desktop: portrait and text side by side, pushed to the right.
 * Tablet/laptop: full-width landscape crop with the text below. Phone: portrait crop.
 */
export function About({ content }: Props) {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-12 py-[var(--section-y)]">
      <div className="container-x flex flex-col gap-14 tablet:gap-28 desktop:gap-24">
        <h2 id="about-heading" className="t-body">
          {content.label}
        </h2>

        <div className="flex flex-col gap-8 tablet:gap-3 desktop:flex-row desktop:justify-end desktop:gap-8">
          <Reveal
            as="figure"
            className="relative aspect-[366/456] w-full overflow-hidden tablet:aspect-[976/897] desktop:aspect-auto desktop:h-[699px] desktop:w-[562px] desktop:shrink-0"
          >
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(min-width: 1440px) 562px, calc(100vw - 48px)"
              className="object-cover"
            />
          </Reveal>

          <div className="flex flex-col items-start gap-8 desktop:w-[562px]">
            {content.paragraphs.map((p) => (
              <Reveal key={p.slice(0, 16)} y={20} className="t-body max-w-[443px]">
                <p>{p}</p>
              </Reveal>
            ))}
            <TextLink link={content.cta} className="t-body" />
          </div>
        </div>
      </div>
    </section>
  );
}
