import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { LabCard } from "@/components/LabCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBlock } from "@/components/SkillBlock";
import { skillBlocks } from "@/data/skills";

const creationTypes = [
  {
    title: "Présence claire",
    description: "Une base lisible pour présenter une activité, une offre ou un univers sans perdre le visiteur.",
  },
  {
    title: "Parcours métier",
    description: "Des écrans pensés pour réserver, suivre, comparer, publier, vendre ou piloter une activité.",
  },
  {
    title: "Décision rapide",
    description: "Des informations triées pour voir ce qui compte, repérer les blocages et agir plus vite.",
  },
  {
    title: "Tâches allégées",
    description: "Des étapes répétitives simplifiées quand elles prennent trop de temps ou créent des oublis.",
  },
  {
    title: "Assistance cadrée",
    description: "Des aides précises, reliées au contexte réel, avec des limites claires et un usage identifié.",
  },
];

const homeLabItems = [
  "Mise en ligne",
  "Domaines et redirections",
  "Serveur multi-sites",
  "Processus applicatifs",
  "Données et accès",
  "Logs et maintenance",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />

      <section className="section-breath bg-paper">
        <div className="site-container">
          <SectionHeader
            eyebrow="Ce que je fabrique"
            title="Des formats différents, une même obsession : rendre l'usage évident."
            description="L'accueil sert à vous orienter vite : comprendre ce que l'atelier peut prendre en charge, puis aller vers les preuves, la méthode ou le contact."
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
            title="Une approche hybride : produit, image, parcours et construction."
            description="Je pars du besoin réel, je cherche la forme juste, puis je construis une base exploitable sans multiplier les couches inutiles."
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
            title="Comprendre, dessiner, construire, tester, améliorer."
            description="Je clarifie l'objectif, je priorise le parcours, je conçois l'interface, puis je transforme les choix en version utilisable."
            tone="balanced"
          />
          <div className="section-stack grid gap-5 md:grid-cols-5">
            {["Comprendre", "Dessiner", "Construire", "Tester", "Améliorer"].map((step, index) => (
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
            description="Le Lab regroupe les coulisses techniques : mise en ligne, domaines, serveur, diagnostic et maintenance. L'accueil n'en donne qu'un aperçu."
            tone="balanced"
          />
          <div className="section-stack grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="rounded-2xl bg-slate p-6 text-white shadow-soft">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Coulisses réelles</p>
              <p className="mt-4 font-display text-3xl font-black leading-tight">Ce qui permet au projet de tenir en ligne.</p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Cette partie reste volontairement courte ici : le détail technique vit dans le Lab.
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
              Basé à La Réunion, je viens de l'image, de la musique et du multimédia. Aujourd'hui, je mets cette culture
              de fabrication au service d'outils web concrets, avec une attention particulière au contexte humain.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
