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
    <section className="section-breath bg-slate text-white">
      <div className="site-container grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Contact</p>
          <h2 className="mt-3 font-display text-[2rem] font-black leading-[1.08] md:text-[2.65rem] lg:text-5xl">
            Vous avez un point de départ, même incomplet ?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            Envoyez ce que vous avez : une idée, un lien, une capture, une difficulté ou une envie d'amélioration. On
            clarifie ensuite ce qui est utile, réaliste et prioritaire.
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
          <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
            Ce que vous pouvez m'envoyer
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {contactStarters.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/8 p-4">
                <p className="font-display text-lg font-black leading-tight text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
