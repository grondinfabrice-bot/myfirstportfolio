import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { StatusBadge } from "./StatusBadge";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
  showProof?: boolean;
  revealIndex?: number;
};

const projectMoods: Record<
  string,
  {
    accent: string;
    glow: string;
    wash: string;
    motif: string;
    note: string;
  }
> = {
  krealink: {
    accent: "#2F7D4F",
    glow: "rgba(47, 125, 79, 0.16)",
    wash: "rgba(47, 125, 79, 0.09)",
    motif: "réseau local",
    note: "Pensé pour rendre visibles les créateurs et les liens qui existent déjà sur le terrain.",
  },
  "champion-wkn": {
    accent: "#D8A642",
    glow: "rgba(216, 166, 66, 0.18)",
    wash: "rgba(232, 63, 50, 0.1)",
    motif: "impact sportif",
    note: "Le défi ici : poser une présence officielle qui garde l'énergie du combat sans perdre en crédibilité.",
  },
  "passkomand-manager": {
    accent: "#3A78C2",
    glow: "rgba(58, 120, 194, 0.15)",
    wash: "rgba(58, 120, 194, 0.08)",
    motif: "pilotage",
    note: "Ce projet montre comment transformer des suivis dispersés en décisions plus lisibles.",
  },
  boombapchopshop: {
    accent: "#8B5A2B",
    glow: "rgba(139, 90, 43, 0.18)",
    wash: "rgba(24, 24, 24, 0.08)",
    motif: "grain boom bap",
    note: "Pensé comme une boutique de beats avec du grain, des licences claires et une vraie identité sonore.",
  },
  scanvs: {
    accent: "#19A7B8",
    glow: "rgba(25, 167, 184, 0.16)",
    wash: "rgba(25, 167, 184, 0.08)",
    motif: "scan rapide",
    note: "Le défi ici : réduire une comparaison technique à un geste simple en situation d'achat.",
  },
  "terre-sauvage": {
    accent: "#6F7B3E",
    glow: "rgba(111, 123, 62, 0.17)",
    wash: "rgba(111, 123, 62, 0.09)",
    motif: "matière outdoor",
    note: "Ce projet installe une matière de marque avant la boutique : textile, île, nature et présence brute.",
  },
  "kaza-reza": {
    accent: "#B85BA7",
    glow: "rgba(184, 91, 167, 0.15)",
    wash: "rgba(184, 91, 167, 0.08)",
    motif: "planning studio",
    note: "Pensé pour fluidifier les réservations studio sans passer par des messages éparpillés.",
  },
};

const defaultMood = {
  accent: "#E83F32",
  glow: "rgba(232, 63, 50, 0.14)",
  wash: "rgba(232, 63, 50, 0.08)",
  motif: "atelier",
  note: "Ce projet montre une façon concrète de relier usage, interface et fabrication.",
};

export function ProjectCard({ project, showProof = false, revealIndex = 0 }: ProjectCardProps) {
  const detailUrl = project.detailUrl;
  const mood = projectMoods[project.slug] ?? defaultMood;
  const warmCardStyle = showProof
    ? ({
        "--project-accent": mood.accent,
        "--project-glow": mood.glow,
        "--project-wash": mood.wash,
        animationDelay: `${revealIndex * 110}ms`,
      } as CSSProperties)
    : undefined;

  return (
    <article
      className={`group flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-fog bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/30 hover:shadow-soft ${
        showProof ? "project-card-warm soft-page-reveal" : ""
      }`}
      style={warmCardStyle}
    >
      {detailUrl ? (
        <Link href={detailUrl} className="project-card-media block bg-paper/55 p-2 focus-visible:outline-basil">
          <ProjectImage src={project.images[0]} title={project.title} category={project.category} />
        </Link>
      ) : (
        <div className="project-card-media bg-paper/55 p-2">
          <ProjectImage src={project.images[0]} title={project.title} category={project.category} />
        </div>
      )}
      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        {showProof ? (
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <span className="project-card-orbit" />
            <span className="project-card-mark" />
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-tomato/20 bg-tomato/10 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.06em] text-tomato">
            {project.category}
          </span>
          <StatusBadge>{project.status}</StatusBadge>
          {showProof ? (
            <span className="project-card-motif inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.06em]">
              {mood.motif}
            </span>
          ) : null}
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
          {showProof ? (
            <p className="mt-4 rounded-xl border border-fog bg-paper/65 p-4 text-sm leading-6 text-graphite">
              <span className="font-bold text-ink">À retenir : </span>
              {mood.note}
            </p>
          ) : null}
          {showProof ? (
            <div className="project-card-proof mt-4 rounded-xl border border-fog bg-paper/75 p-4">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-tomato">
                Ce que ça démontre
              </p>
              <p className="mt-2 text-sm leading-6 text-slate">{project.demonstrates}</p>
            </div>
          ) : null}
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
