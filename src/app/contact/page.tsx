"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Parlons de ton projet."
          description="Le formulaire est prêt pour le MVP. Il pourra être relié plus tard à Resend ou à une Edge Function Supabase."
        />
        <form
          className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Nom
              <input className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-clay" name="name" required />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input
                className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-clay"
                name="email"
                type="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Type de projet
              <select className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-clay" name="type">
                <option>Application web</option>
                <option>Site vitrine</option>
                <option>Dashboard / outil métier</option>
                <option>E-commerce</option>
                <option>Design / direction artistique</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Message
              <textarea
                className="min-h-36 rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-clay"
                name="message"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-clay"
            >
              <Send className="h-4 w-4" />
              Envoyer
            </button>
            {sent ? <p className="text-sm font-semibold text-teal">Message simulé. Connexion email à prévoir ensuite.</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
