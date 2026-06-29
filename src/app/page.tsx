import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { LabCard } from "@/components/LabCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBlock } from "@/components/SkillBlock";
import { labItems, skillBlocks } from "@/data/skills";

const creationTypes = [
  {
    title: "Applications web",
    description: "Comptes utilisateurs, données, logique métier, médias et parcours responsive.",
  },
  {
    title: "Sites vitrines premium",
    description: "Marques, artistes et projets indépendants avec une direction artistique claire.",
  },
  {
    title: "Dashboards métiers",
    description: "Suivi de ventes, marges, produits, objectifs et indicateurs utiles au quotidien.",
  },
  {
    title: "Expériences digitales",
    description: "Identité visuelle forte, contenus structurés et évolution possible vers un produit complet.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Ce que je crée"
            title="Des interfaces utiles, pas seulement des écrans décoratifs."
            description="Le design sert la compréhension, la technique sert l'usage, et chaque décision doit aider le projet à avancer."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {creationTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-ink">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Compétences"
            title="Une approche hybride : design, produit, code et serveur."
            description="Je viens du graphisme, de la musique et du multimédia. Aujourd'hui, je transforme cette culture visuelle en produits web structurés."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillBlocks.map((block) => (
              <SkillBlock key={block.title} {...block} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Méthode"
            title="Partir du besoin, construire simple, rendre évolutif."
            description="Je clarifie l'objectif, je priorise le MVP, je conçois l'interface, puis je relie le front, les données et le déploiement."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["Comprendre", "Prototyper", "Développer", "Déployer"].map((step, index) => (
              <div key={step} className="rounded-lg bg-ink p-6 text-white">
                <p className="text-sm font-bold text-clay">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Lab technique"
            title="Un portfolio qui assume aussi l'infrastructure."
            description="Le lab montre la montée en compétence côté serveur : hébergement, domaines, HTTPS, processus Node et workflow GitHub."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded-lg bg-ink p-6 text-white shadow-soft">
              <p className="text-sm font-bold uppercase text-clay">VPS réel</p>
              <p className="mt-4 text-3xl font-black leading-tight">Du repo GitHub jusqu'au serveur.</p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Cette partie montre la capacité à livrer et maintenir des projets web, pas seulement à les maquettiser.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {labItems.map((item) => (
                <LabCard key={item} title={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-clay">À propos</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
              Designer graphique, beatmaker et créateur web.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              Basé à La Réunion, je développe aujourd'hui des applications web modernes, utiles et visuelles. Mon
              approche mélange direction artistique, logique métier, données et déploiement.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
