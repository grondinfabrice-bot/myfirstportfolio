import Link from "next/link";
import { Mail } from "lucide-react";

const contactStarters = [
  {
    title: "Idée",
    description: "Même encore floue.",
  },
  {
    title: "Blocage",
    description: "Technique, visuel ou organisationnel.",
  },
  {
    title: "Lien",
    description: "Site, outil, maquette ou exemple.",
  },
  {
    title: "Capture",
    description: "Pour montrer ce qui coince.",
  },
  {
    title: "Routine",
    description: "Une tâche à simplifier.",
  },
  {
    title: "Question",
    description: "Pour cadrer avant de construire.",
  },
];

export function ContactSection() {
  return (
    <section className="bg-paper pt-8 pb-16 text-white md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
      <div className="site-container">
        <div className="mx-auto max-w-5xl rounded-2xl bg-slate px-5 py-8 shadow-soft md:px-8 md:py-10 lg:px-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Contact</p>
              <h2 className="mt-3 font-display text-[1.85rem] font-black leading-[1.08] md:text-[2.35rem] lg:text-[2.75rem]">
                Vous avez un point de départ, même incomplet ?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                Envoyez ce que vous avez : une idée, un lien, une capture, une difficulté ou une envie d'amélioration.
                On clarifie ensuite ce qui est utile, réaliste et prioritaire.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-tomato px-5 py-3 text-sm font-bold text-white transition hover:bg-cream hover:text-ink"
              >
                <Mail className="h-4 w-4" />
                Ouvrir le formulaire
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {contactStarters.map((item) => (
                <span
                  key={item.title}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-bold text-white/55"
                  title={item.description}
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
