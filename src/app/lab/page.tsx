import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  GitBranch,
  Globe2,
  HardDrive,
  HeartHandshake,
  MonitorCheck,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import { LabCard } from "@/components/LabCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ViewportReveal } from "@/components/ViewportReveal";
import { labItems } from "@/data/skills";
import { getProjectBySlug } from "@/data/projects";

const clientBenefits = [
  {
    title: "Publication maîtrisée",
    description: "Un projet qui sort du local, répond sur son domaine et garde une configuration lisible.",
    icon: Globe2,
  },
  {
    title: "Sécurité de base",
    description: "Certificats HTTPS, redirections et vérifications simples pour éviter les bases fragiles.",
    icon: ShieldCheck,
  },
  {
    title: "Stabilité",
    description: "Process applicatif suivi, relance maîtrisée et diagnostic possible quand quelque chose bloque.",
    icon: MonitorCheck,
  },
  {
    title: "Données structurées",
    description: "Base, accès et stockage pensés pour rester exploitables après la mise en ligne.",
    icon: Database,
  },
  {
    title: "Maintenance",
    description: "Logs, sauvegardes et gestes de contrôle pour comprendre plus vite ce qui coince.",
    icon: Wrench,
  },
  {
    title: "Évolutivité",
    description: "Une base technique assez lisible pour corriger ou faire évoluer sans repartir de zéro.",
    icon: RefreshCw,
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Code local",
    description: "Build, dépendances, variables et vérifications avant sortie.",
    icon: HardDrive,
  },
  {
    step: "02",
    title: "Dépôt GitHub",
    description: "Historique lisible, sauvegarde du code, corrections traçables.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Serveur / hébergement",
    description: "VPS Ubuntu, Nginx, dossiers de site et process applicatif.",
    icon: ServerCog,
  },
  {
    step: "04",
    title: "Domaine + HTTPS",
    description: "DNS, redirections, certificat Certbot et contrôle navigateur.",
    icon: Globe2,
  },
  {
    step: "05",
    title: "Vérifier / maintenir",
    description: "Logs, erreurs, sauvegardes, relances et corrections.",
    icon: MonitorCheck,
  },
];

const realSituations = [
  {
    title: "Configurer un domaine",
    description: "Vérifier les enregistrements, les redirections et la configuration Nginx.",
  },
  {
    title: "Relancer une application",
    description: "Contrôler PM2, relancer correctement et garder le process disponible après reboot.",
  },
  {
    title: "Comprendre pourquoi un site ne répond pas",
    description: "Lire les logs, tester Nginx, vérifier le build et isoler l'erreur.",
  },
  {
    title: "Connecter une base de données",
    description: "Contrôler Supabase, Auth, Storage, variables et règles d'accès.",
  },
];

const terminalCommands = [
  "idea.check()",
  "prototype.ready",
  "build: in progress",
  "test -> refine -> deploy",
  "status: experimental",
];

const benefitStatuses = ["publish", "https", "watch", "data", "logs", "scale"];
const situationStatuses = ["dns.test", "pm2.watch", "logs.read", "db.link"];

const currentStack = [
  "Ubuntu",
  "Nginx",
  "Certbot",
  "DNS",
  "HTTPS",
  "PM2",
  "Supabase",
  "PostgreSQL",
  "Auth",
  "Storage",
  "RLS",
  "GitHub",
  "Cloudflare",
  "Stripe",
  "Resend",
  "Webhooks",
  "Cron",
  "Logs",
  "Backups",
];

export default function LabPage() {
  const labProject = getProjectBySlug("lab-vps-infrastructure");

  return (
    <section className="lab-page page-breath bg-paper">
      <div className="site-container">
        <div className="lab-grid-scan" aria-hidden="true" />
        <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:items-end">
          <div className="max-w-3xl lab-reveal">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
              Lab technique
            </p>
            <h1 className="mt-3 font-display text-[2.25rem] font-black leading-[1.04] text-ink md:text-[3.1rem] lg:text-6xl">
              Ce qui permet aux projets de tenir en ligne.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-graphite md:text-[1.0625rem]">
              Un projet web ne s'arrête pas à une belle interface. Il doit aussi sortir du local, répondre sur son
              domaine, rester surveillable et pouvoir être corrigé quand quelque chose coince.
            </p>
            <p className="mt-4 max-w-xl text-sm font-bold leading-6 text-slate md:text-base">
              Ici : VPS, Nginx, DNS, HTTPS, PM2, GitHub, Supabase, logs et sauvegardes.
            </p>
          </div>

          <div className="lab-console lab-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6" style={{ animationDelay: "120ms" }}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-tomato/20 bg-tomato/10 text-tomato">
                <TerminalSquare className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Atelier serveur</p>
                <p className="mt-1 text-sm font-semibold text-ink">Déployer, surveiller, corriger.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2" aria-hidden="true">
              {["prototype", "test", "build"].map((label) => (
                <span key={label} className="lab-mini-badge">
                  <span className="lab-status-dot" />
                  {label}
                </span>
              ))}
            </div>
            <div className="lab-terminal mt-5 rounded-xl border border-slate/15 bg-ink p-4 font-mono text-xs text-cream shadow-sm" aria-label="Console décorative du Lab">
              {terminalCommands.map((command, index) => (
                <p key={command} className="lab-terminal-line flex gap-2 py-1.5" style={{ animationDelay: `${index * 120}ms` }}>
                  <span className="text-basil">{index === 0 ? "$" : ">"}</span>
                  <span>{command}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <section className="section-stack">
          <SectionHeader
            eyebrow="Bénéfices client"
            title="Ce que ça apporte au projet."
            description="Moins de blocage au moment de publier, une base plus simple à maintenir et des problèmes plus faciles à diagnostiquer."
            tone="balanced"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {clientBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <ViewportReveal key={benefit.title} delay={index * 90}>
                  <article className="lab-module group h-full rounded-2xl border border-fog bg-cream p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/30 hover:shadow-soft md:p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="lab-mini-badge">
                        <span className="lab-status-dot" />
                        {benefitStatuses[index]}
                      </span>
                      <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.08em] text-slate/45">
                        module
                      </span>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-basil/20 bg-basil/10 text-basil transition group-hover:border-tomato/25 group-hover:bg-tomato/10 group-hover:text-tomato">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-black leading-tight text-ink">{benefit.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-graphite">{benefit.description}</p>
                  </article>
                </ViewportReveal>
              );
            })}
          </div>
        </section>

        <section className="section-stack">
          <SectionHeader
            eyebrow="Du local au site en ligne"
            title="Le chemin technique reste lisible."
            description="Du code local au domaine public : dépôt, serveur, Nginx, HTTPS, process applicatif, puis vérifications."
            tone="balanced"
          />
          <div className="lab-timeline relative mt-8 grid gap-5 lg:grid-cols-5">
            <div className="lab-timeline-rail absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] bg-tomato/25 lg:block" />
            {timelineSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <ViewportReveal key={item.step} className="h-full" delay={index * 110}>
                  <article className="lab-module relative h-full rounded-2xl border border-fog bg-cream p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-basil/30 hover:shadow-soft">
                    <div className="absolute -left-3 top-8 h-[calc(100%+1.25rem)] w-px bg-tomato/25 lg:hidden" aria-hidden="true" />
                    <div className="relative z-10 flex items-center gap-3 md:block">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-tomato/25 bg-paper text-tomato shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="md:mt-5">
                        <p className="font-mono text-xs font-black uppercase tracking-[0.08em] text-tomato">Étape {item.step}</p>
                        <h2 className="mt-1 font-display text-xl font-black leading-tight text-ink">{item.title}</h2>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-graphite">{item.description}</p>
                    {index < timelineSteps.length - 1 ? (
                      <ArrowRight className="absolute -right-3 top-10 hidden h-5 w-5 text-tomato lg:block" />
                    ) : null}
                  </article>
                </ViewportReveal>
              );
            })}
          </div>
        </section>

        <section className="section-stack grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="lab-reveal" style={{ animationDelay: "320ms" }}>
            <SectionHeader
              eyebrow="Situations réelles"
              title="Situations que je veux savoir diagnostiquer."
              description="Des cas simples, mais décisifs : publier, relancer, lire une erreur, brancher une base ou comprendre pourquoi un site ne répond pas."
              tone="balanced"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {realSituations.map((situation, index) => (
                <article
                  key={situation.title}
                  className="lab-module rounded-2xl border border-fog bg-cream p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/30 hover:shadow-soft"
                >
                  <span className="lab-mini-badge mb-4">
                    <span className="lab-status-dot" />
                    {situationStatuses[index]}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-basil" />
                  <h2 className="mt-4 font-display text-xl font-black leading-tight text-ink">{situation.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-graphite">{situation.description}</p>
                </article>
              ))}
            </div>
          </div>

          {labProject ? (
            <aside className="lab-module lab-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6" style={{ animationDelay: "380ms" }}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Étude de cas</p>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl font-black leading-tight text-ink">{labProject.title}</h2>
                  <p className="mt-3 inline-flex rounded-full border border-basil/20 bg-basil/10 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.05em] text-basil">
                    {labProject.status}
                  </p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-tomato/20 bg-tomato/10 text-tomato sm:inline-flex">
                  <ServerCog className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-graphite">
                Environnement VPS pour héberger plusieurs sites, isoler les configurations, gérer les domaines, activer
                HTTPS et maintenir les processus applicatifs.
              </p>
              <Link
                href={labProject.detailUrl ?? `/projets/${labProject.slug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate bg-slate px-5 py-2.5 text-sm font-black text-cream shadow-sm transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-basil"
              >
                Voir l'étude de cas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          ) : null}
        </section>

        <section className="section-stack lab-reveal" style={{ animationDelay: "440ms" }}>
          <SectionHeader
            eyebrow="Stack actuelle"
            title="Les briques que j'utilise aujourd'hui."
            description="Une liste courte des outils qui reviennent dans la mise en ligne, la donnée et la maintenance de base."
            tone="balanced"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {labItems.map((item) => (
              <LabCard key={item} title={item} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {currentStack.map((tool) => (
              <span
                key={tool}
                className="inline-flex rounded-full border border-fog bg-cream px-4 py-2 font-mono text-sm font-bold text-slate shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="lab-module section-stack lab-reveal rounded-2xl border border-fog bg-cream p-6 shadow-sm md:p-8 lg:p-10" style={{ animationDelay: "520ms" }}>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Infrastructure</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                Vous avez un projet à héberger ou stabiliser ?
              </h2>
              <p className="mt-4 text-base leading-7 text-graphite">
                Je peux aider à passer du projet local à une version accessible : domaine, hébergement, certificats,
                process, logs, sauvegardes et corrections de mise en ligne.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-tomato px-6 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink focus-visible:outline-basil"
            >
              Parler de mon projet
              <HeartHandshake className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
