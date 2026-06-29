import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { StatusBadge } from "./StatusBadge";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-clay/35 hover:shadow-soft">
      <Link href={`/projets/${project.slug}`} className="block">
        <ProjectImage src={project.images[0]} title={project.title} category={project.category} />
      </Link>
      <div className="flex flex-1 flex-col space-y-5 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-clay/20 bg-clay/10 px-3 py-1 text-xs font-bold uppercase text-clay">
            {project.category}
          </span>
          <StatusBadge>{project.status}</StatusBadge>
        </div>
        <div className="grow">
          <Link href={`/projets/${project.slug}`} className="group/title inline-flex items-center gap-2">
            <h3 className="text-2xl font-black leading-tight text-ink transition group-hover/title:text-clay">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-clay opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>
          <p className="mt-2 text-sm leading-6 text-graphite">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/projets/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white transition hover:bg-clay"
          >
            Voir l'étude de cas
            <ArrowRight className="h-4 w-4" />
          </Link>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-bold text-ink transition hover:border-clay hover:text-clay"
            >
              Voir le site
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
