import type { home } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

type Props = { content: (typeof home)["services"] };

/** Numbered services list in a right-hand column over a tinted full-bleed image. */
export function Services({ content }: Props) {
  return (
    <section aria-labelledby="services-heading" className="relative isolate py-[var(--section-y)]">
      <div className="absolute inset-0 -z-10">
        <CoverImage image={content.image} sizes="100vw" overlay="default" />
      </div>

      <div className="container-x flex flex-col gap-14">
        <div className="flex items-center justify-between gap-4">
          <h2 id="services-heading" className="t-body">
            {content.label}
          </h2>
          <TextLink link={content.cta} className="t-body" />
        </div>

        <ol className="flex flex-col gap-8 tablet:ml-auto tablet:w-[405px] tablet:gap-24 desktop:w-[600px]">
          {content.items.map((item, i) => (
            <Reveal as="li" key={item.title} className="flex flex-col gap-8 border-b border-border pb-4">
              <div className="flex flex-col gap-2.5">
                <p className="t-number tabular-nums" aria-hidden>
                  ({String(i + 1).padStart(2, "0")})
                </p>
                <h3 className="t-service">{item.title}</h3>
              </div>
              <p className="t-body text-text-secondary">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
