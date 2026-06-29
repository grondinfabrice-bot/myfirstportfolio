import { SectionHeader } from "@/components/SectionHeader";
import { UserRound } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-paper pt-11 pb-16 md:pt-[76px] md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <SectionHeader eyebrow="À propos" title="Une pratique entre image, produit web et outils utiles." />
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-graphite">
            <p>
              Je suis basé à La Réunion. Je viens du design graphique, de la musique Boom Bap / hip-hop 90s et du
              multimédia.
            </p>
            <p>
              Je développe aujourd'hui des sites, applications web, dashboards et automatisations pour créateurs,
              marques, commerces, projets indépendants et outils métiers.
            </p>
            <p>
              Mon approche mélange direction artistique, interface utilisateur, logique métier, données, agents IA
              cadrés et déploiement. L'objectif n'est pas seulement de faire un joli site, mais de construire un produit
              clair, pratique et évolutif.
            </p>
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
                <p className="font-display text-2xl font-black text-ink">Photo à venir</p>
                <p className="mt-2 font-mono text-xs font-bold uppercase text-tomato">
                  Portrait créatif / situation de travail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
