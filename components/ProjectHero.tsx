import type { Project } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Divider } from "./Divider";
import { Reveal } from "./Reveal";
import { TextLink } from "./TextLink";

/** Viewport-tall case-study hero: title, right-aligned intro, rule and live link. */
export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative isolate flex flex-col justify-center pb-24 pt-[120px] tablet:min-h-svh tablet:pt-[190px]">
      <div className="absolute inset-0 -z-10">
        <CoverImage image={project.hero} sizes="100vw" preload overlay="default" />
      </div>

      <div className="container-x flex flex-col gap-14 desktop:gap-[120px]">
        <div className="flex flex-col gap-14">
          <Reveal trigger="appear" delay={0.2}>
            <h1 className="t-display max-w-[653px]">{project.title}</h1>
          </Reveal>
          <Reveal trigger="appear" delay={0.2} className="tablet:self-end">
            <p className="t-body tablet:max-w-[441px]">{project.intro}</p>
          </Reveal>
        </div>
        <Reveal trigger="appear" delay={0.2} y={15} className="flex flex-col gap-4">
          <Divider />
          <TextLink link={project.livePreview} className="t-body self-start tablet:self-end" />
        </Reveal>
      </div>
    </section>
  );
}
