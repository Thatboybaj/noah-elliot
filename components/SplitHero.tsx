import type { ReactNode } from "react";
import type { ImageAsset, LinkItem } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

type Props = {
  image: ImageAsset;
  heading: string;
  /** Right-aligned block under the heading: the services list or a summary paragraph. */
  aside: ReactNode;
  cta: LinkItem;
  intro: string;
  wordmark: string;
};

/**
 * Tall full-bleed hero used on the home and projects pages:
 * rule + H1, right-aligned aside, underlined CTA, then a right-aligned
 * intro paragraph and the giant wordmark, all over a tinted image.
 */
export function SplitHero({ image, heading, aside, cta, intro, wordmark }: Props) {
  return (
    <section className="relative isolate flex flex-col items-center pb-14 pt-[120px] tablet:pb-[120px] tablet:pt-[280px] desktop:pt-[380px]">
      <div className="absolute inset-0 -z-10">
        <CoverImage image={image} sizes="100vw" preload overlay="default" />
      </div>

      <div className="container-x flex flex-col gap-14 tablet:gap-[144px] desktop:gap-[200px]">
        {/* Block A: heading, aside, CTA */}
        <div className="flex flex-col gap-14 tablet:gap-0">
          <Reveal trigger="appear" delay={0.2} className="flex flex-col gap-4">
            <Divider className="hidden tablet:flex" />
            <h1 className="t-display max-w-[653px]">{heading}</h1>
          </Reveal>
          <div className="flex flex-col gap-8 tablet:gap-14">
            <Reveal trigger="appear" delay={0.2} className="self-end">
              {aside}
            </Reveal>
            <Reveal trigger="appear" delay={0.2} y={15} className="self-start">
              <TextLink link={cta} className="t-body" />
            </Reveal>
          </div>
        </div>

        {/* Block B: intro + wordmark */}
        <div className="flex flex-col gap-14 tablet:gap-[140px] desktop:gap-[240px]">
          <Reveal delay={0.1} duration={0.6} className="flex flex-col items-end gap-4">
            <Divider />
            <p className="t-body w-full tablet:max-w-[443px]">{intro}</p>
          </Reveal>
          <Reveal y={20} delay={0.1} duration={0.6} className="flex flex-col gap-2.5">
            <Divider />
            <h2 className="t-wordmark">{wordmark}</h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesList({ items }: { items: string[] }) {
  return (
    <ul className="t-body flex flex-col" aria-label="Services">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
