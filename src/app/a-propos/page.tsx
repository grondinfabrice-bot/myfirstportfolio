import { SectionHeader } from "@/components/SectionHeader";
import { UserRound } from "lucide-react";

const aboutBlocks = [
  {
    title: "D'où je viens",
    body: [
      "Je suis basé à La Réunion. Mon point de départ, c'est le design graphique, le multimédia et une culture visuelle nourrie par la musique Boom Bap / hip-hop 90s.",
      "J'aime les univers qui ont une texture, une intention, une manière claire de se présenter. Cette sensibilité me suit encore quand je conçois une interface ou un parcours web.",
    ],
  },
  {
    title: "Ce que je construis aujourd'hui",
    body: [
      "Je développe des sites, applications web, dashboards et automatisations pour des créateurs, marques, commerces, projets indépendants et outils métiers.",
      "Selon le besoin, le projet peut prendre la forme d'une vitrine claire, d'un outil interne, d'un tableau de bord, d'une plateforme avec données ou d'un système qui enlève des tâches répétitives.",
    ],
  },
  {
    title: "Comment je travaille",
    body: [
      "Je commence par comprendre le contexte avant de produire des écrans. Qui va utiliser l'outil ? Qu'est-ce qui bloque ? Qu'est-ce qui doit être simple dès la première version ?",
      "Ensuite, je relie direction artistique, interface utilisateur, logique métier, données, IA cadrée et déploiement pour construire quelque chose de cohérent, utilisable et maintenable.",
    ],
  },
  {
    title: "Ce que j'apporte à un projet",
    body: [
      "J'apporte un regard à la fois visuel, produit et technique. Je peux parler identité, parcours, contenu, données, automatisation et mise en ligne sans séparer artificiellement ces sujets.",
      "Mon rôle est de transformer une idée parfois floue en base concrète : plus claire pour le client, plus simple pour l'utilisateur, et plus saine pour la suite du projet.",
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="bg-paper pt-11 pb-16 md:pt-[76px] md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <SectionHeader
            eyebrow="À propos"
            title="Derrière Fabrik Automates, il y a une pratique de terrain."
            description="Une manière de fabriquer qui vient autant de l'image que du web : écouter, cadrer, dessiner, construire, puis mettre en ligne proprement."
            tone="balanced"
          />
          <div className="mt-9 grid max-w-4xl gap-5">
            {aboutBlocks.map((block) => (
              <article key={block.title} className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6">
                <h2 className="font-display text-2xl font-black leading-tight text-ink">{block.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-graphite md:text-[1.0625rem]">
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="w-full max-w-sm lg:ml-auto lg:max-w-none">
          <div className="rounded-2xl border border-fog bg-cream p-3 shadow-soft">
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-xl border border-fog bg-paper text-center">
              <div className="absolute inset-0 opacity-[0.24] [background-image:linear-gradient(rgba(39,56,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(39,56,74,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-fog bg-cream text-slate shadow-sm">
                <UserRound className="h-10 w-10" />
              </div>
              <div className="relative mt-5 px-6">
                <p className="font-display text-2xl font-black text-ink">Portrait en préparation</p>
                <p className="mt-2 font-mono text-xs font-bold uppercase text-tomato">
                  Emplacement réservé au visage derrière l'atelier
                </p>
                <p className="mt-4 text-sm leading-6 text-graphite">
                  Le portfolio assume encore cette zone comme un repère sobre, en attendant une vraie photo de travail
                  cohérente avec l'univers du site.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-fog bg-cream p-5 shadow-sm">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Basé à La Réunion</p>
            <p className="mt-3 text-sm leading-6 text-graphite">
              Je travaille à distance ou en local selon les projets, avec une préférence pour les échanges simples, les
              décisions claires et les versions qui avancent vraiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
