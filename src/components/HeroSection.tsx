import Link from "next/link";
import { ArrowRight, Server, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
        <div>
          <p className="text-sm font-bold uppercase text-clay">Créateur web basé à La Réunion</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] text-ink md:text-7xl">
            Sites, apps web et outils métiers pensés comme de vrais produits.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
            Je conçois des interfaces claires, des dashboards, des plateformes créatives et des sites de marque avec une
            approche qui relie design, logique métier, données et déploiement VPS.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-clay"
            >
              Voir les projets
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-bold text-ink transition hover:border-clay hover:text-clay"
            >
              Parler d'un projet
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
            <div className="rounded-md bg-ink p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase text-white/50">Portfolio stack</p>
                  <p className="mt-1 font-bold">Design + Dev + VPS</p>
                </div>
                <Sparkles className="h-6 w-6 text-clay" />
              </div>
              <div className="mt-5 grid gap-3">
                {["Next.js / TypeScript", "Supabase / PostgreSQL", "Nginx / PM2 / HTTPS"].map((item) => (
                  <div key={item} className="rounded-md bg-white/8 p-4">
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-md bg-fog p-4">
                <p className="text-3xl font-black text-ink">7</p>
                <p className="text-sm text-graphite">projets intégrés</p>
              </div>
              <div className="rounded-md bg-moss p-4 text-white">
                <Server className="mb-3 h-5 w-5" />
                <p className="text-sm font-semibold">Déploiement serveur inclus dans la vision produit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
