import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NextProject } from "@/components/NextProject";
import { ProjectHero } from "@/components/ProjectHero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ProcessList, ProjectSplit } from "@/components/ProjectSplit";
import { getNextProject, getProject, projects, site } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/project/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.title} — ${site.name}`, description: project.intro } : {};
}

export default async function ProjectPage({ params }: PageProps<"/project/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <>
      <main id="main">
        <ProjectHero project={project} />
        <ProjectSplit
          lead={{ heading: project.overview.heading, body: <p>{project.overview.body}</p> }}
          columns={[project.challenge, project.approach]}
          image={project.overviewImage}
        />
        <ProjectShowcase image={project.showcase[0]} phoneCrop="tall" />
        <ProjectSplit
          lead={{ heading: project.process.heading, body: <ProcessList steps={project.process.steps} /> }}
          columns={[project.outcome, project.reflection]}
          image={project.processImage}
        />
        <ProjectShowcase image={project.showcase[1]} />
        {next && <NextProject project={next} />}
      </main>
      <Footer />
    </>
  );
}
