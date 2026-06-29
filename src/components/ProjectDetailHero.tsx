import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { StatusBadge } from "./StatusBadge";
import { TechBadge } from "./TechBadge";

type ProjectDetailHeroProps = {
  project: Project;
};

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-clay">{project.category}</p>
          <h1 className="mt-4 text-5xl font-black leading-tight text-ink md:text-7xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-8 text-graphite">{project.summary}</p>
          <div className="mt-6">
            <StatusBadge>{project.status}</StatusBadge>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.slice(0, 6).map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
        <ProjectImage src={project.images[0]} title={project.title} category={project.category} priority />
      </div>
    </section>
  );
}
