import Link from "next/link";
import { ArrowRight, Bot, Mail, Server, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(39,56,74,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(39,56,74,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="site-container grid gap-10 pt-9 pb-14 md:min-h-[calc(100svh-69px)] md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-12 md:pt-16 md:pb-22 lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="relative max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
            Une fabrique de sites, d'apps et d'automatisations utiles
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[3.35rem] font-black leading-[0.94] text-ink sm:text-6xl md:text-7xl lg:text-[5.35rem]">
            Fabrik Automates
          </h1>
          <p className="mt-5 max-w-2xl font-display text-2xl font-extrabold leading-[1.08] text-slate sm:text-3xl md:text-[2.45rem]">
            Sites, apps & automatisations bien mijotés.
          </p>
          <p className="mt-6 max-w-[38rem] text-base leading-7 text-graphite sm:text-lg sm:leading-8">
            Je conçois des sites web, applications métier, dashboards et agents IA pour simplifier le quotidien des
            créateurs, indépendants et petites entreprises.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-tomato px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate focus-visible:outline-basil sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Parler de mon projet
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projets"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-fog bg-cream/75 px-6 py-3 text-sm font-bold text-ink transition hover:border-tomato hover:bg-cream hover:text-tomato focus-visible:outline-basil sm:w-auto"
            >
              Voir les projets
            </Link>
          </div>
        </div>
        <div className="relative md:justify-self-end">
          <div className="rounded-2xl border border-fog bg-cream/95 p-3 shadow-soft md:max-w-[29rem]">
            <div className="rounded-xl border border-white/10 bg-slate p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
                    Atelier technique
                  </p>
                  <p className="mt-1 font-display text-xl font-black leading-tight">Design + Dev + Automatisation</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-tomato">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {["Sites web propres", "Dashboards métier", "Agents IA cadrés"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/8 p-4">
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-fog bg-paper p-4">
                <p className="font-display text-3xl font-black text-ink">5</p>
                <p className="text-sm text-graphite">formats fabriqués</p>
              </div>
              <div className="rounded-xl bg-basil p-4 text-white shadow-sm">
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
