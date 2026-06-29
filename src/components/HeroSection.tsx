import Link from "next/link";
import { ArrowRight, Bot, Server, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(39,56,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(39,56,74,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-start gap-12 px-5 pt-11 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-[76px] md:pb-24">
        <div className="relative">
          <p className="font-mono text-sm font-bold uppercase text-tomato">
            Une fabrique de sites, d'apps et d'automatisations utiles
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.98] text-ink md:text-7xl">
            Fabrik Automates
          </h1>
          <p className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-slate md:text-5xl">
            Sites, apps & automatisations bien mijotés.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
            Je conçois des sites web, applications métier, dashboards et agents IA pour simplifier le quotidien des
            créateurs, indépendants et petites entreprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 rounded-full bg-tomato px-5 py-3 text-sm font-bold text-white transition hover:bg-slate"
            >
              Voir les projets
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-fog bg-cream/70 px-5 py-3 text-sm font-bold text-ink transition hover:border-tomato hover:text-tomato"
            >
              Parler de mon projet
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-fog bg-cream p-4 shadow-soft">
            <div className="rounded-xl bg-slate p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs uppercase text-white/50">Atelier technique</p>
                  <p className="mt-1 font-bold">Design + Dev + Automatisation</p>
                </div>
                <Sparkles className="h-6 w-6 text-tomato" />
              </div>
              <div className="mt-5 grid gap-3">
                {["Sites web propres", "Dashboards métier", "Agents IA cadrés"].map((item) => (
                  <div key={item} className="rounded-lg bg-white/8 p-4">
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-fog/70 p-4">
                <p className="font-display text-3xl font-black text-ink">5</p>
                <p className="text-sm text-graphite">formats fabriqués</p>
              </div>
              <div className="rounded-xl bg-basil p-4 text-white">
                <Server className="mb-3 h-5 w-5" />
                <p className="text-sm font-semibold">Moins de copier-coller, plus de cerveau disponible.</p>
              </div>
              <div className="col-span-2 rounded-xl border border-fog bg-paper p-4 text-slate">
                <Bot className="mb-3 h-5 w-5 text-tomato" />
                <p className="text-sm font-semibold">Interfaces propres, workflows utiles, agents IA bien cadrés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
