import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { projectCategories, projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <SectionHeader
            eyebrow="Projets"
            title="Réalisations, concepts et lab technique."
            description="Une sélection de plateformes, dashboards, sites de marque, idées MVP et expérimentations serveur. Chaque projet met en avant la même exigence : partir d'un besoin clair, concevoir une interface lisible et garder une base technique évolutive."
          />
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-bold uppercase text-clay">Lecture rapide</p>
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
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm"
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
