"use client";

import { useState } from "react";
import { CheckCircle2, Clock3, FileText, Gauge, Send, Sparkles } from "lucide-react";

const startingSituations = [
  {
    title: "J'ai une idée pas encore cadrée",
    description: "On clarifie le besoin, les priorités et la première version qui mérite d'être tentée.",
  },
  {
    title: "J'ai quelque chose à améliorer",
    description: "On regarde la structure, les contenus, l'expérience mobile ou ce qui manque de lisibilité.",
  },
  {
    title: "J'ai besoin d'un outil interne",
    description: "On transforme un suivi manuel, un tableau ou une routine en parcours plus pratique.",
  },
  {
    title: "J'ai une tâche répétitive",
    description: "On identifie ce qui peut être simplifié sans créer une mécanique lourde.",
  },
  {
    title: "J'ai un blocage technique",
    description: "On remet à plat un souci de domaine, formulaire, données ou mise en ligne.",
  },
];

const processSteps = [
  {
    title: "Vous expliquez le besoin",
    description:
      "Même brouillon : un contexte, un lien, un problème ou une envie d'amélioration suffit.",
  },
  {
    title: "Je trie avec vous",
    description: "On repère ce qui compte maintenant, ce qui est réaliste, et ce qui peut attendre.",
  },
  {
    title: "On choisit une première étape",
    description: "Le but n'est pas de tout construire d'un coup, mais de poser une suite concrète.",
  },
];

const labelClass = "grid min-w-0 gap-2 text-sm font-bold text-ink";
const fieldClass =
  "min-h-12 w-full min-w-0 rounded-xl border border-fog bg-white px-4 py-3 text-base font-normal leading-6 text-ink outline-none transition placeholder:text-graphite/45 focus:border-tomato md:text-sm";
const selectClass =
  "min-h-12 w-full min-w-0 rounded-xl border border-fog bg-white px-4 py-3 text-base font-normal leading-6 text-ink outline-none transition focus:border-tomato md:text-sm";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="page-breath bg-paper">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
        <div className="grid gap-8">
          <div className="soft-page-reveal max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Contact</p>
            <h1 className="mt-3 font-display text-[2.45rem] font-black leading-[1.02] text-ink md:text-[3.35rem]">
              Démarrons avec ce que vous avez.
            </h1>
            <p className="mt-5 text-base leading-7 text-graphite md:text-[1.0625rem]">
              Pas besoin d'arriver avec un cahier des charges parfait. Une idée, une difficulté, un lien ou quelques
              lignes de contexte suffisent pour lancer la discussion.
            </p>
          </div>

          <div className="soft-page-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6" style={{ animationDelay: "90ms" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tomato/10 text-tomato">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
                  Situations de départ
                </p>
                <h2 className="mt-1 font-display text-2xl font-black leading-tight text-ink">
                  Vous pouvez écrire même si ce n'est pas encore bien rangé.
                </h2>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {startingSituations.map((type, index) => (
                <article
                  key={type.title}
                  className="soft-page-reveal rounded-xl border border-fog bg-paper/80 p-4"
                  style={{ animationDelay: `${140 + index * 80}ms` }}
                >
                  <h3 className="font-display text-lg font-black leading-tight text-ink">{type.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-graphite">{type.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="soft-page-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6" style={{ animationDelay: "180ms" }}>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
              Comment ça se passe
            </p>
            <div className="mt-5 grid gap-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="soft-page-reveal grid gap-3 rounded-xl border border-fog bg-paper/80 p-4 sm:grid-cols-[52px_1fr]"
                  style={{ animationDelay: `${220 + index * 90}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-black leading-tight text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-graphite">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="soft-page-reveal rounded-[1.35rem] border border-fog bg-cream/80 p-3 shadow-soft lg:sticky lg:top-28" style={{ animationDelay: "120ms" }}>
          <form
            className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-7"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="border-b border-fog pb-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Message projet</p>
              <h2 className="mt-2 font-display text-3xl font-black leading-tight text-ink">Racontez le point de départ.</h2>
              <p className="mt-3 text-sm leading-6 text-graphite">
                Plus le contexte est direct, plus je peux vous répondre précisément.
              </p>
            </div>

            <div className="mt-6 grid gap-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Nom
                  <input
                    className={fieldClass}
                    name="name"
                    placeholder="Votre nom"
                    required
                  />
                </label>
                <label className={labelClass}>
                  Email
                  <input
                    className={fieldClass}
                    name="email"
                    placeholder="vous@email.com"
                    type="email"
                    required
                  />
                </label>
              </div>

              <label className={labelClass}>
                Point de départ
                <select className={selectClass} name="type">
                  <option>J'ai une idée à cadrer</option>
                  <option>J'ai déjà quelque chose en ligne</option>
                  <option>J'ai un fonctionnement à simplifier</option>
                  <option>J'ai un outil interne à imaginer</option>
                  <option>J'ai un problème technique à comprendre</option>
                  <option>Je ne sais pas encore quoi demander</option>
                </select>
              </label>

              <div className="grid min-w-0 gap-5 min-[1400px]:grid-cols-3 min-[1400px]:gap-6">
                <label className={labelClass}>
                  État du projet
                  <select className={selectClass} name="status">
                    <option>Idée</option>
                    <option>Déjà en ligne</option>
                    <option>À améliorer</option>
                    <option>Processus interne à simplifier</option>
                  </select>
                </label>
                <div className="grid min-w-0 gap-5 md:grid-cols-2 min-[1400px]:col-span-2 min-[1400px]:gap-6">
                  <label className={labelClass}>
                    Budget optionnel
                    <input className={fieldClass} name="budget" placeholder="Ex : 800-1500 EUR" />
                  </label>
                  <label className={labelClass}>
                    Échéance optionnelle
                    <input className={fieldClass} name="deadline" placeholder="Ex : ce mois-ci" />
                  </label>
                </div>
              </div>

              <label className={`${labelClass} pt-1`}>
                Message
                <textarea
                  className="min-h-44 w-full min-w-0 rounded-xl border border-fog bg-white px-4 py-3 text-base font-normal leading-7 text-ink outline-none transition placeholder:text-graphite/45 focus:border-tomato md:text-sm"
                  name="message"
                  placeholder="Décrivez le contexte, le résultat souhaité, ce qui bloque, les liens ou documents utiles, et ce que vous ne savez pas encore trancher."
                  required
                />
              </label>

              <div className="flex flex-col gap-3 border-t border-fog pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-tomato px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate"
                >
                  <Send className="h-4 w-4" />
                  Envoyer le message
                </button>
                {sent ? (
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-basil">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Message simulé. Connexion email à prévoir ensuite.
                  </p>
                ) : null}
              </div>

              <p className="text-sm leading-6 text-graphite">
                Envoyez ce que vous avez : une idée, une difficulté, une capture, un lien ou une routine qui vous prend trop de temps.
              </p>
            </div>
          </form>

          <div className="grid gap-3 px-2 py-4 text-sm text-graphite sm:grid-cols-3">
            <p className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-tomato" aria-hidden="true" />
              Tri des priorités
            </p>
            <p className="inline-flex items-center gap-2">
              <Gauge className="h-4 w-4 text-basil" aria-hidden="true" />
              Première étape
            </p>
            <p className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate" aria-hidden="true" />
              Réponse concrète
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
