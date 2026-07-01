import Link from "next/link";
import { Mail } from "lucide-react";

const contactInputs = [
  "Une idée encore floue",
  "Un blocage à clarifier",
  "Une capture ou un lien",
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

            <div className="rounded-xl border border-white/10 bg-white/6 p-4 md:justify-self-end md:p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
                Ce que vous pouvez envoyer
              </p>
              <div className="mt-4 grid gap-3">
                {contactInputs.map((item, index) => (
                  <div key={item} className="grid grid-cols-[2.2rem_1fr] items-start gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                    <span className="font-mono text-xs font-black text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
