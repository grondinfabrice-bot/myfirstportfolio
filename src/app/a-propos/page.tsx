import { SectionHeader } from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeader eyebrow="À propos" title="Une pratique entre image, musique et produit web." />
        <div className="mt-8 space-y-6 text-lg leading-8 text-graphite">
          <p>
            Je suis basé à La Réunion. Je viens du design graphique, de la musique Boom Bap / hip-hop 90s et du
            multimédia.
          </p>
          <p>
            Je développe aujourd'hui des applications web modernes, utiles et visuelles pour créateurs, marques,
            commerces, projets indépendants et outils métiers.
          </p>
          <p>
            Mon approche mélange direction artistique, interface utilisateur, logique métier, données et déploiement.
            L'objectif n'est pas seulement de faire un joli site, mais de construire un produit clair, pratique et
            évolutif.
          </p>
        </div>
      </div>
    </section>
  );
}
