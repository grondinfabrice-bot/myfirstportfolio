"use client";

import { useState } from "react";
import { CheckCircle2, Clock3, FileText, Gauge, Send, Sparkles } from "lucide-react";

const starterPrompts = [
  {
    title: "Le contexte",
    description: "Votre activité, votre public, ce qui existe déjà et ce qui vous bloque aujourd'hui.",
  },
  {
    title: "Le résultat attendu",
    description: "Ce que la personne doit comprendre, faire, réserver, acheter, suivre ou recevoir.",
  },
  {
    title: "Les exemples utiles",
    description: "Un lien, une capture, un document, un tableau ou un outil que vous utilisez déjà.",
  },
  {
    title: "Les contraintes",
    description: "Budget, délai, contenu disponible, accès techniques, priorité ou niveau d'urgence.",
  },
  {
    title: "Les zones floues",
    description: "Ce que vous ne savez pas encore décider. C'est souvent là que le cadrage devient utile.",
  },
];

const processSteps = [
  {
    title: "Vous expliquez le besoin",
    description:
      "Même brouillon, même incomplet : une idée, un problème ou une tâche répétitive suffit pour commencer.",
  },
  {
    title: "Je clarifie le parcours",
    description: "Objectif, utilisateurs, priorités, contenus disponibles, points flous et pièges à éviter.",
  },
  {
    title: "On fabrique une première version propre",
    description: "Une base claire, utile, responsive et évolutive, sans usine à gaz.",
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
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Contact</p>
            <h1 className="mt-3 font-display text-[2.45rem] font-black leading-[1.02] text-ink md:text-[3.35rem]">
              Envoyez-moi le début du problème, pas un cahier des charges parfait.
            </h1>
            <p className="mt-5 text-base leading-7 text-graphite md:text-[1.0625rem]">
              Quelques lignes suffisent pour lancer une vraie discussion : le contexte, ce que vous voulez obtenir, ce
              qui bloque et les ressources déjà disponibles.
            </p>
          </div>

          <div className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tomato/10 text-tomato">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
                  Ce que vous pouvez m'envoyer
                </p>
                <h2 className="mt-1 font-display text-2xl font-black leading-tight text-ink">
                  De la matière simple pour commencer proprement.
                </h2>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {starterPrompts.map((type) => (
                <article key={type.title} className="rounded-xl border border-fog bg-paper/80 p-4">
                  <h3 className="font-display text-lg font-black leading-tight text-ink">{type.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-graphite">{type.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
              Comment ça se passe
            </p>
            <div className="mt-5 grid gap-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="grid gap-3 rounded-xl border border-fog bg-paper/80 p-4 sm:grid-cols-[52px_1fr]">
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

        <div className="rounded-[1.35rem] border border-fog bg-cream/80 p-3 shadow-soft lg:sticky lg:top-28">
          <form
            className="rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-7"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="border-b border-fog pb-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Message projet</p>
              <h2 className="mt-2 font-display text-3xl font-black leading-tight text-ink">Posez les premières pièces.</h2>
              <p className="mt-3 text-sm leading-6 text-graphite">
                Plus le message est concret, même imparfait, plus je peux vous répondre utilement.
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
                  <option>J'ai des contenus ou données à organiser</option>
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
                    <option>Processus interne à clarifier</option>
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
                Pas besoin de tout ranger avant d'écrire. Envoyez la matière disponible, je vous aiderai à mettre de l'ordre.
              </p>
            </div>
          </form>

          <div className="grid gap-3 px-2 py-4 text-sm text-graphite sm:grid-cols-3">
            <p className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-tomato" aria-hidden="true" />
              Cadrage clair
            </p>
            <p className="inline-flex items-center gap-2">
              <Gauge className="h-4 w-4 text-basil" aria-hidden="true" />
              Base évolutive
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
