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
  const detailUrl = project.detailUrl;

  return (
    <article className="group flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-fog bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/30 hover:shadow-soft">
      {detailUrl ? (
        <Link href={detailUrl} className="block bg-paper/55 p-2 focus-visible:outline-basil">
          <ProjectImage src={project.images[0]} title={project.title} category={project.category} />
        </Link>
      ) : (
        <div className="bg-paper/55 p-2">
          <ProjectImage src={project.images[0]} title={project.title} category={project.category} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-tomato/20 bg-tomato/10 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.06em] text-tomato">
            {project.category}
          </span>
          <StatusBadge>{project.status}</StatusBadge>
        </div>
        <div className="mt-5 grow">
          {detailUrl ? (
            <Link href={detailUrl} className="group/title inline-flex items-start gap-2 focus-visible:outline-basil">
              <h3 className="font-display text-[1.65rem] font-black leading-[1.04] text-ink transition group-hover/title:text-tomato">
                {project.title}
              </h3>
              <ArrowUpRight className="mt-1 h-[1.125rem] w-[1.125rem] shrink-0 text-tomato opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </Link>
          ) : (
            <h3 className="font-display text-[1.65rem] font-black leading-[1.04] text-ink">
              {project.title}
            </h3>
          )}
          <p className="mt-3 min-h-[3rem] text-sm leading-6 text-graphite">{project.summary}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-fog pt-5">
          {detailUrl ? (
            <Link
              href={detailUrl}
              className="inline-flex min-h-10 items-center gap-2 text-sm font-black text-slate transition hover:text-tomato focus-visible:outline-basil"
            >
              Détails
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-fog bg-paper/70 px-4 py-2 text-sm font-bold text-ink transition hover:border-tomato hover:bg-tomato/10 hover:text-tomato focus-visible:outline-basil"
            >
              Voir le projet
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
