import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudySection } from "@/components/ProjectCaseStudySection";
import { ProjectDetailHero } from "@/components/ProjectDetailHero";
import { ProjectImage } from "@/components/ProjectImage";
import { TechBadge } from "@/components/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Étude de cas`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailHero project={project} />

      <ProjectCaseStudySection title="Résumé">
        <p>{project.description}</p>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Rôle">
        <div className="flex flex-wrap gap-2">
          {project.role.map((role) => (
            <TechBadge key={role}>{role}</TechBadge>
          ))}
        </div>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Problème">
        <p>{project.problem}</p>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Solution">
        <p>{project.solution}</p>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Fonctionnalités">
        <ul className="grid gap-3 md:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="rounded-xl bg-cream p-4 font-semibold text-ink">
              {feature}
            </li>
          ))}
        </ul>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Stack technique">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Captures">
        <div className="grid gap-5 md:grid-cols-2">
          {(project.images.length ? project.images : [undefined]).map((image, index) => (
            <ProjectImage key={`${project.slug}-${index}`} src={image} title={project.title} category={project.category} />
          ))}
        </div>
      </ProjectCaseStudySection>

      <ProjectCaseStudySection title="Apprentissages">
        <ul className="space-y-3">
          {project.learnings.map((learning) => (
            <li key={learning} className="rounded-xl border border-fog bg-cream p-4">
              {learning}
            </li>
          ))}
        </ul>
      </ProjectCaseStudySection>
    </>
  );
}
