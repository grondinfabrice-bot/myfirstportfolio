import { LabCard } from "@/components/LabCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { labItems } from "@/data/skills";
import { getProjectBySlug } from "@/data/projects";

export default function LabPage() {
  const labProject = getProjectBySlug("lab-vps-infrastructure");

  return (
    <section className="page-breath bg-paper">
      <div className="site-container">
        <SectionHeader
          eyebrow="Lab technique"
          title="Infrastructure, déploiement et outils prêts à servir."
          description="Cette partie montre la capacité à faire vivre un projet après la maquette : serveur, HTTPS, DNS, processus Node, GitHub, diagnostic et amélioration continue."
          tone="balanced"
        />
        <div className="section-stack grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {labItems.map((item) => (
            <LabCard key={item} title={item} />
          ))}
        </div>
        {labProject ? (
          <div className="mt-10 max-w-xl md:mt-12">
            <ProjectCard project={labProject} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
