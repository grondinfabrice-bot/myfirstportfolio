import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, Bot, Brush, Database, Lightbulb, Rocket, Workflow } from "lucide-react";

const stepStyles = {
  "Produit & cadrage": {
    accent: "bg-[#E7A13A]",
    border: "border-[#E7A13A]/35",
    glow: "shadow-[0_18px_48px_rgba(231,161,58,0.12)]",
    soft: "bg-[#E7A13A]/10 text-[#8A520C]",
    icon: Lightbulb,
  },
  "Design & interface": {
    accent: "bg-[#B85BA7]",
    border: "border-[#B85BA7]/35",
    glow: "shadow-[0_18px_48px_rgba(184,91,167,0.12)]",
    soft: "bg-[#B85BA7]/10 text-[#76336B]",
    icon: Brush,
  },
  "Construction web": {
    accent: "bg-[#3A78C2]",
    border: "border-[#3A78C2]/35",
    glow: "shadow-[0_18px_48px_rgba(58,120,194,0.12)]",
    soft: "bg-[#3A78C2]/10 text-[#254F83]",
    icon: Workflow,
  },
  "Données & logique métier": {
    accent: "bg-basil",
    border: "border-basil/35",
    glow: "shadow-[0_18px_48px_rgba(47,125,79,0.13)]",
    soft: "bg-basil/10 text-basil",
    icon: Database,
  },
  "Automatisations & IA cadrée": {
    accent: "bg-[#19A7B8]",
    border: "border-[#19A7B8]/35",
    glow: "shadow-[0_18px_48px_rgba(25,167,184,0.12)]",
    soft: "bg-[#19A7B8]/10 text-[#14717C]",
    icon: Bot,
  },
  "Préparation à la mise en ligne": {
    accent: "bg-slate",
    border: "border-slate/30",
    glow: "shadow-[0_18px_48px_rgba(39,56,74,0.12)]",
    soft: "bg-slate/10 text-slate",
    icon: Rocket,
  },
};

const workflowSteps = [
  {
    title: "Produit & cadrage",
    description:
      "Je clarifie le besoin, l'usage réel, les publics et les priorités pour transformer une demande ouverte en plan d'action.",
    items: ["Cadrage", "Usage réel", "Priorités", "MVP", "Parcours", "Décisions"],
  },
  {
    title: "Design & interface",
    description:
      "Je pose une direction visuelle, j'organise les écrans et je travaille la lisibilité pour rendre l'expérience simple côté utilisateur.",
    items: ["Direction visuelle", "UI", "Lisibilité", "Responsive", "Typographie", "États"],
  },
  {
    title: "Construction web",
    description:
      "Je construis une interface utilisable, pas une maquette figée : composants cohérents, structure lisible et base facile à faire évoluer.",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Composants", "Structure"],
  },
  {
    title: "Données & logique métier",
    description:
      "Je relie les écrans aux informations utiles : utilisateurs, contenus, statuts, commandes, tableaux, règles simples et parcours métier.",
    items: ["Modèle de données", "Utilisateurs", "Statuts", "Contenus", "Tableaux", "Règles"],
  },
  {
    title: "Automatisations & IA cadrée",
    description:
      "Je cherche les tâches répétitives à alléger, les outils à connecter et les usages IA à cadrer avec des règles et garde-fous simples.",
    items: ["Scénarios", "Webhooks", "Emails", "OpenAI", "Prompts", "Garde-fous"],
  },
  {
    title: "Préparation à la mise en ligne",
    description:
      "Je prépare une base prête à sortir du local : configuration lisible, variables séparées, vérifications et passage possible vers domaine ou serveur.",
    items: ["Recette", "Variables", "Build", "GitHub", "Checklist", "Passage en ligne"],
  },
];

const toolkitFamilies = [
  {
    title: "Produit",
    items: ["Cadrage", "Priorisation", "Parcours utilisateur", "MVP"],
  },
  {
    title: "Interface",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive"],
  },
  {
    title: "Design",
    items: ["Direction artistique", "UI", "Typographie", "Identité visuelle", "Figma"],
  },
  {
    title: "Données",
    items: ["Supabase", "PostgreSQL", "Auth", "Storage", "RLS"],
  },
  {
    title: "Automatisation",
    items: ["Make", "Airtable", "Webhooks", "Emails", "Dashboards"],
  },
  {
    title: "IA",
    items: ["Prompting", "Agents cadrés", "OpenAI", "Recherche documentaire", "Garde-fous"],
  },
  {
    title: "Mise en ligne",
    items: ["GitHub", "Variables d'environnement", "Build", "Domaine", "Checklist"],
  },
];

const desktopOrder = ["lg:order-1", "lg:order-2", "lg:order-3", "lg:order-6", "lg:order-5", "lg:order-4"];

export default function SkillsPage() {
  return (
    <section className="page-breath bg-paper">
      <div className="site-container">
        <SectionHeader
          eyebrow="Fabrique"
          title="Comment le travail est construit."
          description="Cette page montre ma méthode de conception et de construction : cadrer, dessiner, structurer, automatiser quand cela sert le projet, puis préparer une base prête à sortir du local."
          tone="balanced"
        />

        <div className="section-stack">
          <div className="relative rounded-[1.5rem] bg-cream/25 py-2 md:py-4">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-slate/20 md:block lg:hidden" aria-hidden="true" />
            <div
              className="absolute left-[12%] right-[12%] top-[9.25rem] hidden h-0.5 rounded-full bg-slate/25 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute left-[12%] right-[12%] bottom-[9.25rem] hidden h-0.5 rounded-full bg-slate/25 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute right-[12%] top-[9.25rem] hidden h-[calc(100%-18.5rem)] w-0.5 rounded-full bg-slate/25 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute right-[12%] top-1/2 hidden h-8 w-8 translate-x-[15px] -translate-y-1/2 rounded-full border border-slate/20 bg-cream shadow-sm ring-4 ring-paper lg:flex lg:items-center lg:justify-center"
              aria-hidden="true"
            >
              <span className="h-0 w-0 translate-y-0.5 border-x-[6px] border-t-[9px] border-x-transparent border-t-slate/55" />
            </div>
            <div className="absolute right-[12%] top-[9.25rem] hidden h-3 w-3 translate-x-[5px] -translate-y-[5px] rounded-full bg-cream ring-4 ring-paper lg:block" aria-hidden="true">
              <span className="block h-full w-full rounded-full bg-tomato/70" />
            </div>
            <div className="absolute right-[12%] bottom-[9.25rem] hidden h-3 w-3 translate-x-[5px] translate-y-[5px] rounded-full bg-cream ring-4 ring-paper lg:block" aria-hidden="true">
              <span className="block h-full w-full rounded-full bg-basil/80" />
            </div>
            <div
              className="absolute right-[10.7%] top-[8.85rem] hidden h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-slate/45 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute right-[13.1%] bottom-[8.85rem] hidden h-0 w-0 border-y-[7px] border-r-[10px] border-y-transparent border-r-slate/45 lg:block"
              aria-hidden="true"
            />

            <div className="relative grid gap-8 md:gap-9 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16">
              {workflowSteps.map((step, index) => {
                const style = stepStyles[step.title as keyof typeof stepStyles];
                const Icon = style.icon;

                return (
                  <article
                    key={step.title}
                    className={`competence-workflow-card group relative min-h-[17.5rem] rounded-2xl border bg-cream p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/25 hover:shadow-soft md:p-7 ${style.border} ${desktopOrder[index]}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute -left-2 top-8 h-4 w-4 rounded-full bg-cream shadow-[0_0_0_6px_rgba(255,247,232,0.95)] ring-2 ring-slate/15 md:-left-2 lg:left-1/2 lg:top-[-0.55rem] lg:-translate-x-1/2">
                      <span className={`block h-full w-full rounded-full ${style.accent} competence-workflow-node`} />
                    </div>

                    {index < workflowSteps.length - 1 ? (
                      <div
                        className="absolute left-[-1px] top-[5rem] h-[calc(100%+2rem)] border-l-2 border-dashed border-slate/25 md:left-[-1px] lg:hidden"
                        aria-hidden="true"
                      />
                    ) : null}

                    {index < 2 ? (
                      <div className="absolute right-[-2.2rem] top-[8.65rem] hidden items-center lg:flex" aria-hidden="true">
                        <span className="h-0.5 w-8 bg-slate/45" />
                        <span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-slate/45" />
                      </div>
                    ) : null}

                    {index > 2 && index < 5 ? (
                      <div className="absolute left-[-2.2rem] top-[8.65rem] hidden items-center lg:flex" aria-hidden="true">
                        <span className="h-0 w-0 border-y-[5px] border-r-[8px] border-y-transparent border-r-slate/45" />
                        <span className="h-0.5 w-8 bg-slate/45" />
                      </div>
                    ) : null}

                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.soft}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">
                          Étape {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-1 font-display text-2xl font-black leading-tight text-ink">{step.title}</h2>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-graphite">{step.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.items.slice(0, 6).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-fog bg-paper/80 px-2.5 py-1 font-mono text-[0.68rem] font-semibold leading-none text-slate"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Boîte à outils</p>
              <h2 className="mt-2 font-display text-2xl font-black leading-tight text-ink">
                Des familles de briques, pas une liste pour impressionner.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-graphite">
              Les outils changent selon le projet. Ce qui compte, c'est de savoir quelle famille sert le besoin :
              produit, interface, design, données, automatisation, IA ou passage en ligne.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {toolkitFamilies.map((family) => (
              <article key={family.title} className="rounded-xl border border-fog bg-paper/80 p-4">
                <h3 className="font-display text-lg font-black leading-tight text-ink">{family.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {family.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-fog bg-cream px-2.5 py-1 font-mono text-[0.68rem] font-semibold leading-none text-slate"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-fog bg-paper p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Détails techniques</p>
              <p className="mt-2 text-sm leading-6 text-graphite">
                Ici, je garde la mise en ligne au niveau méthode. Les détails serveur, DNS, HTTPS, processus,
                logs et maintenance sont volontairement rangés dans le Lab.
              </p>
            </div>
            <Link
              href="/lab"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-fog bg-cream px-5 py-2.5 text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-tomato hover:text-tomato"
            >
              Voir le Lab
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
