import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { projectCategories, projects } from "@/data/projects";

export default function ProjectsPage() {
  const visibleCategories = projectCategories.filter((category) => category !== "Lab technique");

  return (
    <section className="page-breath bg-paper">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <SectionHeader
            eyebrow="Projets mijotés"
            title="Réalisations, concepts et outils passés par l'atelier."
            description="Une sélection courte pour sentir les usages, les ambiances et les preuves concrètes derrière chaque projet."
            tone="balanced"
          />
          <div className="soft-page-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm" style={{ animationDelay: "80ms" }}>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
              Lecture rapide
            </p>
            <p className="mt-3 text-sm leading-6 text-graphite">
              Chaque carte indique ce que le projet raconte : l'usage visé, le contexte humain et ce qu'il démontre.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 md:mt-9">
          {visibleCategories.map((category, index) => (
            <span
              key={category}
              className="soft-page-reveal rounded-full border border-fog bg-cream px-4 py-2 font-mono text-sm font-bold text-slate shadow-sm"
              style={{ animationDelay: `${120 + index * 55}ms` }}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="section-stack">
          <ProjectGrid projects={projects} showLabGateway showProof />
        </div>
      </div>
    </section>
  );
}
