import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { projectCategories, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <SectionHeader
            eyebrow="Projets mijotés"
            title="Réalisations, concepts et outils passés par l'atelier."
            description="Une sélection de plateformes, dashboards, sites de marque, idées MVP et expérimentations serveur. Chaque projet part d'un besoin clair, cherche une interface lisible et garde une base technique évolutive."
          />
          <div className="rounded-2xl border border-fog bg-cream p-5 shadow-sm">
            <p className="font-mono text-sm font-bold uppercase text-tomato">Lecture rapide</p>
            <p className="mt-3 text-sm leading-6 text-graphite">
              Les projets mélangent travaux en ligne, concepts produits et lab d'infrastructure. Le but est de montrer
              autant la réflexion produit que l'exécution visuelle et technique.
            </p>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-fog bg-cream px-4 py-2 font-mono text-sm font-bold text-slate shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
