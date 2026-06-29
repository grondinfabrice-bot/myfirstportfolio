import Link from "next/link";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-slate py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="font-mono text-sm font-bold uppercase text-tomato">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">
            Une tâche répétitive, une idée d'app, un site à rendre plus intelligent ?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            On peut en faire un outil propre : clair pour les humains, solide côté technique, et prêt à servir au
            quotidien.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-tomato px-5 py-3 text-sm font-bold text-white transition hover:bg-cream hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            Ouvrir le formulaire
          </Link>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/6 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {["Site web", "Application métier", "Dashboard", "Automatisation", "Agent IA", "Déploiement VPS"].map(
              (item) => (
                <div key={item} className="rounded-xl bg-white/8 p-4 text-sm font-semibold">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
