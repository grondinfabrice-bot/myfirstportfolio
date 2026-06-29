import Link from "next/link";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="text-sm font-bold uppercase text-clay">Contact</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Un site, une app, un outil métier ?</h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            On peut partir d'une idée brute, d'un besoin concret ou d'un projet déjà en cours. L'objectif : construire
            quelque chose d'utile, beau et techniquement solide.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-clay hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Ouvrir le formulaire
          </Link>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/6 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {["Application web", "Site vitrine", "Dashboard", "E-commerce", "Identité visuelle", "Déploiement VPS"].map(
              (item) => (
                <div key={item} className="rounded-md bg-white/8 p-4 text-sm font-semibold">
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
