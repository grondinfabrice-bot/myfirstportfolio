import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { LabCard } from "@/components/LabCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBlock } from "@/components/SkillBlock";
import { labItems, skillBlocks } from "@/data/skills";

const creationTypes = [
  {
    title: "Sites web",
    description: "Présences en ligne claires, rapides, responsive et prêtes à évoluer.",
  },
  {
    title: "Applications web",
    description: "Comptes utilisateurs, données, logique métier, médias et parcours robustes.",
  },
  {
    title: "Dashboards métiers",
    description: "Suivi de ventes, marges, produits, objectifs et indicateurs utiles au quotidien.",
  },
  {
    title: "Automatisations",
    description: "Workflows propres pour réduire les tâches répétitives et sécuriser les étapes clés.",
  },
  {
    title: "Agents IA",
    description: "Assistants cadrés, reliés à vos contenus et conçus pour des usages précis.",
  },
];

const homeLabItems = labItems.slice(0, 6);

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />

      <section className="section-breath bg-paper">
        <div className="site-container">
          <SectionHeader
            eyebrow="Ce que je fabrique"
            title="Des sites, apps et automatisations qui servent le quotidien."
            description="Le design sert la compréhension, la technique sert l'usage, et chaque décision doit aider le projet à avancer sans bruit."
            tone="balanced"
          />
          <div className="section-stack grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {creationTypes.map((type) => (
              <div key={type.title} className="rounded-2xl border border-fog bg-cream p-6 shadow-sm">
                <h3 className="font-display text-xl font-black text-ink">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-breath bg-cream">
        <div className="site-container">
          <SectionHeader
            eyebrow="Fabrique"
            title="Une approche hybride : design, produit, code et automatisation."
            description="Je mélange culture visuelle, logique métier, données et déploiement pour fabriquer des outils utiles, pas seulement de beaux écrans."
            tone="balanced"
          />
          <div className="section-stack grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillBlocks.map((block) => (
              <SkillBlock key={block.title} {...block} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-breath-compact bg-paper">
        <div className="site-container">
          <SectionHeader
            eyebrow="Ma recette de fabrication"
            title="Comprendre, dessiner, construire, automatiser, améliorer."
            description="Je clarifie l'objectif, je priorise le parcours, je conçois l'interface, puis je relie le front, les données, les automatisations et le déploiement."
            tone="balanced"
          />
          <div className="section-stack grid gap-5 md:grid-cols-5">
            {["Comprendre", "Dessiner", "Construire", "Automatiser", "Améliorer"].map((step, index) => (
              <div key={step} className="rounded-2xl bg-slate p-6 text-white">
                <p className="font-mono text-sm font-bold text-tomato">0{index + 1}</p>
                <h3 className="mt-4 font-display text-2xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-breath bg-cream">
        <div className="site-container">
          <SectionHeader
            eyebrow="Lab technique"
            title="Un atelier qui assume aussi l'infrastructure."
            description="Le lab montre la capacité à livrer et maintenir : hébergement, domaines, HTTPS, processus Node, workflow GitHub et diagnostic."
            tone="balanced"
          />
          <div className="section-stack grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded-2xl bg-slate p-6 text-white shadow-soft">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">VPS réel</p>
              <p className="mt-4 font-display text-3xl font-black leading-tight">Du repo GitHub jusqu'au serveur.</p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Cette partie montre la capacité à livrer et maintenir des projets web, pas seulement à les maquettiser.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {homeLabItems.map((item) => (
                <LabCard key={item} title={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-breath-compact bg-paper">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">À propos</p>
            <h2 className="mt-3 font-display text-[2rem] font-black leading-[1.08] text-ink md:text-[2.65rem] lg:text-5xl">
              Un regard visuel, une logique produit, une envie de fabriquer utile.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite md:text-[1.0625rem]">
              Basé à La Réunion, je développe des sites, applications web, dashboards et automatisations. Mon approche
              mélange direction artistique, logique métier, données, IA cadrée et déploiement.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
