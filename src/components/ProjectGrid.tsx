import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-stretch xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
