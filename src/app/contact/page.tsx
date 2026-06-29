"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-paper pt-11 pb-16 md:pt-[76px] md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Discutons d'un outil à fabriquer."
          description="Vous avez une tâche répétitive, une idée d'app ou un site à rendre plus intelligent ? On peut partir du besoin réel et en faire quelque chose de propre."
        />
        <form
          className="rounded-2xl border border-fog bg-cream p-6 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Nom
              <input className="rounded-xl border border-fog bg-white px-4 py-3 font-normal outline-none focus:border-tomato" name="name" required />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input
                className="rounded-xl border border-fog bg-white px-4 py-3 font-normal outline-none focus:border-tomato"
                name="email"
                type="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Type de projet
              <select className="rounded-xl border border-fog bg-white px-4 py-3 font-normal outline-none focus:border-tomato" name="type">
                <option>Application web</option>
                <option>Site vitrine</option>
                <option>Dashboard / outil métier</option>
                <option>Automatisation</option>
                <option>Agent IA</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Message
              <textarea
                className="min-h-36 rounded-xl border border-fog bg-white px-4 py-3 font-normal outline-none focus:border-tomato"
                name="message"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-tomato px-5 py-3 text-sm font-bold text-white transition hover:bg-slate"
            >
              <Send className="h-4 w-4" />
              Envoyer
            </button>
            {sent ? <p className="text-sm font-semibold text-basil">Message simulé. Connexion email à prévoir ensuite.</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
