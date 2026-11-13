import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ProjectStack } from "@/components/ProjectStack";
import { Services } from "@/components/Services";
import { ServicesList, SplitHero } from "@/components/SplitHero";
import { Statement } from "@/components/Statement";
import { home, projects } from "@/lib/content";

export default function HomePage() {
  const { hero } = home;
  return (
    <>
      <main id="main">
        <SplitHero
          image={hero.image}
          heading={hero.heading}
          aside={<ServicesList items={hero.services} />}
          cta={hero.cta}
          intro={hero.intro}
          wordmark={hero.wordmark}
        />
        <Statement text={home.statement} />
        <ProjectStack projects={projects} />
        <About content={home.about} />
        <Services content={home.services} />
      </main>
      <Footer />
    </>
  );
}
