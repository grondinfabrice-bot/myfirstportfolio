import { SectionHeader } from "@/components/SectionHeader";
import { UserRound } from "lucide-react";

const aboutBlocks = [
  {
    eyebrow: "Parcours",
    title: "D'où je viens",
    body: [
      "Je suis basé à La Réunion. Mon point de départ, c'est le design graphique, le multimédia et une culture visuelle construite autant par l'image que par le son.",
      "Je suis aussi beatmaker Boom Bap / hip-hop 90s. Cette culture m'a appris le sens du rythme, de la coupe juste, de la texture et du détail qui donne du caractère sans surcharger.",
      "Avant de parler technologie, je regarde donc la forme, l'ambiance, la lisibilité et la façon dont un projet donne envie d'être compris.",
    ],
  },
  {
    eyebrow: "Sensibilité",
    title: "Ce que cette culture apporte à mon travail",
    body: [
      "Le design graphique m'aide à composer des écrans lisibles. La musique m'aide à sentir le tempo d'une page : ce qu'on voit d'abord, ce qu'on découvre ensuite, ce qui doit respirer.",
      "J'aime partir d'une intuition encore brute et lui donner une forme compréhensible. Pas forcément plus spectaculaire, mais mieux rangée, plus lisible, plus facile à utiliser.",
      "Cette attention se retrouve dans les détails : hiérarchie visuelle, mots choisis, enchaînement des sections, états d'interface, cohérence entre l'univers et l'usage réel.",
    ],
  },
  {
    eyebrow: "Fabrication",
    title: "Ce que je construis aujourd'hui",
    body: [
      "Aujourd'hui, je développe des sites web, des applications web, des dashboards, des automatisations et des outils avec IA cadrée. Mais je ne les aborde pas comme une simple liste de services.",
      "Pour moi, chaque projet doit répondre à une situation concrète : présenter une activité, vendre mieux, suivre des données, réduire des tâches répétitives, guider un utilisateur ou rendre une décision plus simple.",
      "Mon approche relie direction artistique, interface, logique métier, données, automatisation, IA et passage en production. L'idée est que le projet puisse vivre ailleurs que dans une maquette.",
    ],
  },
  {
    eyebrow: "Méthode",
    title: "Comment je travaille avec un client",
    body: [
      "Je commence par clarifier ce qui doit être construit, pourquoi, pour qui, et dans quel ordre. Cette étape évite de produire trop vite une interface jolie mais confuse.",
      "Ensuite, je trie les priorités pour construire une première version sobre : assez simple pour être lancée, assez solide pour être testée, assez lisible pour être améliorée.",
      "Le travail continue avec les retours, les ajustements, les contenus, les données et la base technique. J'aime les projets qui avancent par versions nettes, sans perdre le fil de l'usage réel.",
    ],
  },
];

const portraitTags = ["Design graphique", "Boom Bap", "Web", "Automatisation", "IA cadrée"];

const sideNotes = [
  {
    label: "Base",
    text: "La Réunion, avec une pratique pensée pour travailler aussi bien localement qu'à distance.",
  },
  {
    label: "Posture",
    text: "Écouter, cadrer, fabriquer, puis améliorer sans transformer le projet en usine à gaz.",
  },
  {
    label: "Fil rouge",
    text: "Un regard graphique, une logique d'usage et une attention à ce qui se passe après la maquette.",
  },
];

const closingPoints = [
  "regard graphique",
  "culture créative",
  "compréhension des usages",
  "fabrication web",
  "logique technique",
  "souci du concret",
];

export default function AboutPage() {
  return (
    <section className="bg-paper pt-11 pb-16 md:pt-[76px] md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <SectionHeader
            eyebrow="À propos"
            title="Qui est derrière Fabrik Automates ?"
            description="Un atelier personnel à la croisée du design graphique, de la culture Boom Bap, du multimédia et du développement web utile."
            tone="balanced"
          />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">
            Je ne vois pas Fabrik Automates comme une simple vitrine technique. C'est une façon de fabriquer des projets
            web avec un regard créatif, une méthode lisible et le souci de livrer quelque chose qui tient dans la vraie
            vie.
          </p>

          <div className="mt-9 grid max-w-4xl gap-5">
            {aboutBlocks.map((block, index) => (
              <article key={block.title} className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
                      {block.eyebrow}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-black leading-tight text-ink">{block.title}</h2>
                  </div>
                  <span className="font-mono text-sm font-black text-slate/35">0{index + 1}</span>
                </div>
                <div className="mt-4 space-y-4 text-base leading-7 text-graphite md:text-[1.0625rem]">
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-fog bg-slate p-5 text-white shadow-sm md:p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
              Ce que je veux apporter
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/75">
              Fabrik Automates combine plusieurs couches qui se répondent. Pas pour faire plus compliqué, mais pour
              construire des projets plus justes dès le départ.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {closingPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 font-mono text-xs font-semibold text-white/85"
                >
                  {point}
                </span>
              ))}
            </div>
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
                <p className="font-display text-2xl font-black text-ink">Portrait d'atelier</p>
                <p className="mt-2 font-mono text-xs font-bold uppercase text-tomato">Basé à La Réunion</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2 px-2">
                  {portraitTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-fog bg-cream px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.04em] text-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {sideNotes.map((note) => (
              <div key={note.label} className="rounded-2xl border border-fog bg-cream p-5 shadow-sm">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">{note.label}</p>
                <p className="mt-3 text-sm leading-6 text-graphite">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
