import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ProjectStack } from "@/components/ProjectStack";
import { SplitHero } from "@/components/SplitHero";
import { projects, projectsPage, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
};

export default function ProjectsPage() {
  const { hero } = projectsPage;
  return (
    <>
      <main id="main">
        <SplitHero
          image={hero.image}
          heading={hero.heading}
          aside={<p className="t-body tablet:max-w-[441px]">{hero.summary}</p>}
          cta={hero.cta}
          intro={hero.intro}
          wordmark={hero.wordmark}
        />
        <ProjectStack projects={projects} id="projects" />
      </main>
      <Footer />
    </>
  );
}
