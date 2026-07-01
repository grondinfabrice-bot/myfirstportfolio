import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const orientationCards = [
  {
    eyebrow: "Projets",
    title: "Voir les preuves",
    description: "Réalisations, concepts et outils qui montrent ce qui a déjà été construit ou cadré.",
    href: "/projets",
    cta: "Explorer les projets",
  },
  {
    eyebrow: "Fabrique",
    title: "Comprendre la méthode",
    description: "Cadrage, design, données, automatisation et construction d'une première version exploitable.",
    href: "/competences",
    cta: "Voir la fabrique",
  },
  {
    eyebrow: "Lab",
    title: "Vérifier la solidité",
    description: "Mise en ligne, domaines, HTTPS, données, logs et maintenance de base.",
    href: "/lab",
    cta: "Ouvrir le Lab",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="home-intro-section section-breath-compact bg-paper">
        <div className="site-container">
          <div className="home-scroll-reveal max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
              Point de départ
            </p>
            <h2 className="mt-3 font-display text-[2rem] font-black leading-[1.08] text-ink md:text-[2.65rem] lg:text-5xl">
              Une idée, un usage, une première version qui peut être testée.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite md:text-[1.0625rem]">
              Fabrik Automates aide à transformer un besoin métier ou un projet créatif en interface compréhensible,
              avec assez de méthode pour avancer sans tout figer dès le départ.
            </p>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section className="section-breath bg-paper">
        <div className="site-container">
          <SectionHeader
            eyebrow="Où aller ensuite"
            title="Choisissez l'entrée qui vous aide le plus."
            description="L'accueil reste volontairement court : les pages internes prennent le relais selon ce que vous voulez vérifier."
            tone="balanced"
          />
          <div className="section-stack grid gap-5 md:grid-cols-3">
            {orientationCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">{card.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-black leading-tight text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-black text-slate transition hover:text-tomato"
                >
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
