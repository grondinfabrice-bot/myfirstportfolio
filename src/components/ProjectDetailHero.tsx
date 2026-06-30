import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { StatusBadge } from "./StatusBadge";
import { TechBadge } from "./TechBadge";

type ProjectDetailHeroProps = {
  project: Project;
};

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="bg-paper pt-9 pb-14 md:pt-16 md:pb-20 lg:pt-18">
      <div className="site-container grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
            {project.category}
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-tight text-ink md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
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
