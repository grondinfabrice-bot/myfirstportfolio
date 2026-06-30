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
            description="Une sélection de plateformes, dashboards, sites de marque, idées MVP et outils en cours. Les projets montrent ce qui est visible côté utilisateur. Le Lab montre les fondations techniques qui permettent de les mettre en ligne, les sécuriser et les maintenir."
            tone="balanced"
          />
          <div className="rounded-2xl border border-fog bg-cream p-5 shadow-sm">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
              Lecture rapide
            </p>
            <p className="mt-3 text-sm leading-6 text-graphite">
              Cette vitrine rassemble les réalisations visibles, les outils métier et les concepts produits. L'entrée
              Lab est une passerelle à part pour comprendre les coulisses serveur et déploiement.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 md:mt-9">
          {visibleCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-fog bg-cream px-4 py-2 font-mono text-sm font-bold text-slate shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="section-stack">
          <ProjectGrid projects={projects} showLabGateway />
        </div>
      </div>
    </section>
  );
}
