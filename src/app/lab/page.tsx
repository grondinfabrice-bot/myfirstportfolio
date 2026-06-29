import { LabCard } from "@/components/LabCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { labItems } from "@/data/skills";
import { getProjectBySlug } from "@/data/projects";

export default function LabPage() {
  const labProject = getProjectBySlug("lab-vps-infrastructure");

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Lab technique"
          title="Infrastructure, déploiement et outils prêts à servir."
          description="Cette partie montre la capacité à faire vivre un projet après la maquette : serveur, HTTPS, DNS, processus Node, GitHub, diagnostic et amélioration continue."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {labItems.map((item) => (
            <LabCard key={item} title={item} />
          ))}
        </div>
        {labProject ? (
          <div className="mt-12 max-w-xl">
            <ProjectCard project={labProject} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
