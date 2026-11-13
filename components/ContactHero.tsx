import type { contactPage } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

type Props = { content: typeof contactPage };

/** Single-screen contact page: heading, note, email, and social links under a rule. */
export function ContactHero({ content }: Props) {
  return (
    <section className="relative isolate flex min-h-svh flex-col pb-14 pt-[120px] tablet:pb-[120px] tablet:pt-[180px]">
      <div className="absolute inset-0 -z-10">
        <CoverImage image={content.image} sizes="100vw" preload overlay="default" />
      </div>

      <div className="container-x flex flex-1 flex-col justify-between gap-14 tablet:gap-[180px]">
        <div className="flex flex-col gap-8">
          <Reveal trigger="appear" delay={0.2}>
            <h1 className="t-display max-w-[653px]">{content.heading}</h1>
          </Reveal>
          <Reveal trigger="appear" delay={0.2} className="tablet:self-end">
            <p className="t-body tablet:max-w-[441px]">{content.summary}</p>
          </Reveal>
          <Reveal trigger="appear" delay={0.2} y={15} className="flex flex-col items-start gap-2">
            <p className="t-body">{content.email}</p>
            <TextLink link={content.cta} className="t-body" />
          </Reveal>
        </div>

        <Reveal trigger="appear" delay={0.3} y={15} className="flex flex-col gap-4">
          <Divider />
          <ul className="flex flex-wrap gap-x-[27px] gap-y-2 tablet:justify-end" aria-label="Social links">
            {content.socials.map((link) => (
              <li key={link.href}>
                <TextLink link={link} variant="dim" className="t-body" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
