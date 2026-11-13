import { footer } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

/**
 * Closing panel over a tinted portrait: CTA, three link columns and the
 * wordmark, in a right-hand column (full width on phones).
 */
export function Footer() {
  return (
    <footer className="relative isolate flex flex-col items-center pb-4 pt-8 tablet:pb-6 tablet:pt-14">
      <div className="absolute inset-0 -z-10">
        <CoverImage image={footer.image} sizes="100vw" overlay="light" />
      </div>

      <div className="container-x flex flex-col tablet:items-end">
        <div className="flex w-full flex-col gap-14 tablet:w-[462px] tablet:gap-24 desktop:w-[682px]">
          <Reveal className="flex flex-col items-start gap-3">
            <p className="t-body text-text-muted">{footer.kicker}</p>
            <TextLink link={footer.cta} variant="dim" className="t-number">
              {footer.cta.label}
            </TextLink>
          </Reveal>

          <div className="flex flex-col gap-[300px] desktop:gap-[400px]">
            <Reveal>
              <nav
                aria-label="Footer"
                className="flex flex-wrap gap-4 border-t border-border pt-4 tablet:gap-10"
              >
                {footer.columns.map((col, i) => (
                  <ul key={i} className="flex flex-col gap-[25px]">
                    {col.map((link) => (
                      <li key={link.label}>
                        <TextLink link={link} variant="dim" className="t-nav" />
                      </li>
                    ))}
                  </ul>
                ))}
              </nav>
            </Reveal>

            <Reveal>
              <TextLink
                link={{ label: footer.wordmark, href: "/" }}
                variant="dim"
                className="t-wordmark w-full border-t border-border px-0 pb-0 pt-4"
              >
                <span>{footer.wordmark}</span>
              </TextLink>
            </Reveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
