import Link from "next/link";
import { ArrowRight, ServerCog, TerminalSquare } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  showLabGateway?: boolean;
};

export function ProjectGrid({ projects, showLabGateway = false }: ProjectGridProps) {
  const visibleProjects = showLabGateway
    ? projects.filter((project) => project.slug !== "lab-vps-infrastructure")
    : projects;

  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-stretch xl:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      {showLabGateway ? <LabGatewayCard /> : null}
    </div>
  );
}

function LabGatewayCard() {
  return (
    <article className="group flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-slate/15 bg-ink text-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/40 hover:shadow-soft md:col-span-2 xl:col-span-3 xl:grid xl:grid-cols-[0.85fr_1.15fr]">
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(255,247,232,0.12),rgba(47,125,79,0.18))] p-5 md:p-6">
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative flex items-center justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-cream/15 bg-cream/10 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.06em] text-cream/85">
            Lab technique
          </span>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-tomato/25 bg-tomato/15 text-tomato">
            <ServerCog className="h-5 w-5" />
          </span>
        </div>
        <div className="relative mt-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-cream/50">Coulisses</p>
            <h3 className="mt-2 font-display text-[1.8rem] font-black leading-[1.02] text-cream">
              La preuve technique est rangée au Lab
            </h3>
          </div>
          <TerminalSquare className="hidden h-10 w-10 shrink-0 text-basil sm:block" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6 xl:justify-center">
        <p className="max-w-2xl grow text-sm leading-6 text-cream/75 xl:grow-0">
          Les fiches ci-dessus restent centrées sur les réalisations. Pour voir comment les projets tiennent en ligne,
          le Lab détaille serveur, domaines, HTTPS, processus, logs et maintenance.
        </p>
        <div className="mt-6 border-t border-cream/10 pt-5">
          <Link
            href="/lab"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/15 bg-cream px-5 py-2.5 text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-tomato hover:bg-tomato hover:text-white focus-visible:outline-basil"
          >
            Explorer le Lab
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
