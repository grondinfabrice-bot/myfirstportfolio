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
import { labItems } from "@/data/skills";
import { getProjectBySlug } from "@/data/projects";

const clientBenefits = [
  {
    title: "Mise en ligne propre",
    description: "Un projet accessible avec un vrai domaine, une configuration claire et des redirections propres.",
    icon: Globe2,
  },
  {
    title: "Sécurité de base",
    description: "HTTPS, certificats, configuration serveur et bonnes pratiques pour éviter les fondations bancales.",
    icon: ShieldCheck,
  },
  {
    title: "Stabilité",
    description: "Apps Node/Next.js suivies avec PM2, redémarrage maîtrisé et diagnostic possible.",
    icon: MonitorCheck,
  },
  {
    title: "Données structurées",
    description: "Supabase, PostgreSQL, Auth et Storage pour construire des projets plus utiles qu'une simple vitrine.",
    icon: Database,
  },
  {
    title: "Maintenance",
    description: "Logs, sauvegardes, commandes utiles et méthode pour comprendre ce qui bloque.",
    icon: Wrench,
  },
  {
    title: "Évolutivité",
    description: "Une base organisée pour ajouter progressivement des fonctionnalités sans tout casser.",
    icon: RefreshCw,
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Construire en local",
    description: "Pages, composants, données de test, ajustements UI.",
    icon: HardDrive,
  },
  {
    step: "02",
    title: "Versionner avec GitHub",
    description: "Historique clair, sauvegarde du code, corrections traçables.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Déployer sur VPS",
    description: "Serveur Ubuntu, Nginx, PM2 et configuration multi-sites.",
    icon: ServerCog,
  },
  {
    step: "04",
    title: "Brancher le domaine",
    description: "DNS, redirections www/non-www, HTTPS avec Certbot.",
    icon: Globe2,
  },
  {
    step: "05",
    title: "Surveiller et améliorer",
    description: "Logs, erreurs, sauvegardes, corrections et évolutions.",
    icon: MonitorCheck,
  },
];

const realSituations = [
  {
    title: "Un domaine ne pointe pas au bon endroit",
    description: "Diagnostic DNS, vérification des enregistrements A/CNAME, test avec dig, correction Nginx.",
  },
  {
    title: "Une app Next.js doit rester en ligne",
    description: "Lancement avec PM2, sauvegarde du process, redémarrage automatique après reboot.",
  },
  {
    title: "Plusieurs sites sur un même VPS",
    description: "Organisation des dossiers, configuration Nginx multi-sites, logs séparés, certificats HTTPS.",
  },
  {
    title: "Une base Supabase doit rester propre",
    description: "Tables, contraintes, relations, vues, Auth, Storage et règles d'accès.",
  },
];

const terminalCommands = ["nginx -t", "pm2 status", "certbot renew --dry-run", "git pull", "npm run build"];

const currentStack = [
  "Ubuntu",
  "Nginx",
  "Certbot",
  "PM2",
  "Next.js",
  "Supabase",
  "PostgreSQL",
  "GitHub",
  "Cloudflare",
  "Stripe",
  "Resend",
];

export default function LabPage() {
  const labProject = getProjectBySlug("lab-vps-infrastructure");

  return (
    <section className="page-breath bg-paper">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:items-end">
          <div className="max-w-3xl lab-reveal">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">
              Lab technique
            </p>
            <h1 className="mt-3 font-display text-[2.25rem] font-black leading-[1.04] text-ink md:text-[3.1rem] lg:text-6xl">
              Le Lab, c'est l'arrière-cuisine technique.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-graphite md:text-[1.0625rem]">
              Ici, je documente les briques qui permettent à un projet de vivre après la maquette : serveur, domaines,
              HTTPS, déploiement, bases de données, automatisations et diagnostics.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-graphite md:text-base">
              Le Lab ne remplace pas les projets : il montre l'envers du décor technique, là où se jouent le
              déploiement, les domaines, le HTTPS, les bases de données et la stabilité.
            </p>
            <p className="mt-4 max-w-xl text-sm font-bold leading-6 text-slate md:text-base">
              Un beau site, c'est bien. Un site qui reste en ligne, sécurisé et maintenable, c'est mieux.
            </p>
          </div>

          <div className="lab-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6" style={{ animationDelay: "120ms" }}>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-tomato/20 bg-tomato/10 text-tomato">
                <TerminalSquare className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato">Atelier serveur</p>
                <p className="mt-1 text-sm font-semibold text-ink">Déployer, surveiller, corriger.</p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-slate/15 bg-ink p-4 font-mono text-xs text-cream shadow-sm">
              {terminalCommands.map((command) => (
                <p key={command} className="flex gap-2 py-1.5">
                  <span className="text-basil">$</span>
                  <span>{command}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <section className="section-stack lab-reveal" style={{ animationDelay: "180ms" }}>
          <SectionHeader
            eyebrow="Bénéfices client"
            title="Ce que ça change quand la technique est propre."
            description="Le Lab traduit les sujets serveur en résultats concrets : moins de bricolage invisible, plus de stabilité et une base prête à évoluer."
            tone="balanced"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {clientBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-2xl border border-fog bg-cream p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/30 hover:shadow-soft md:p-6"
                  style={{ animationDelay: `${240 + index * 70}ms` }}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-basil/20 bg-basil/10 text-basil transition group-hover:border-tomato/25 group-hover:bg-tomato/10 group-hover:text-tomato">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-black leading-tight text-ink">{benefit.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-graphite">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-stack lab-reveal" style={{ animationDelay: "260ms" }}>
          <SectionHeader
            eyebrow="Du local au site en ligne"
            title="Un parcours clair, pas une boîte noire."
            description="Chaque projet suit une chaîne de fabrication lisible : construire, versionner, déployer, brancher le domaine, puis surveiller."
            tone="balanced"
          />
          <div className="relative mt-8 grid gap-5 md:grid-cols-5">
            <div className="absolute left-8 top-8 hidden h-px w-[calc(100%-4rem)] bg-tomato/25 md:block" />
            {timelineSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="relative rounded-2xl border border-fog bg-cream p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-basil/30 hover:shadow-soft"
                >
                  <div className="absolute -left-3 top-8 h-[calc(100%+1.25rem)] w-px bg-tomato/25 md:hidden" aria-hidden="true" />
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
                    <ArrowRight className="absolute -right-3 top-10 hidden h-5 w-5 text-tomato md:block" />
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-stack grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="lab-reveal" style={{ animationDelay: "320ms" }}>
            <SectionHeader
              eyebrow="Situations réelles"
              title="Des problèmes concrets, pas seulement des mots techniques."
              description="Le Lab sert aussi à garder une méthode de diagnostic quand un domaine, une app ou une base de données ne se comporte pas comme prévu."
              tone="balanced"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {realSituations.map((situation) => (
                <article
                  key={situation.title}
                  className="rounded-2xl border border-fog bg-cream p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tomato/30 hover:shadow-soft"
                >
                  <CheckCircle2 className="h-5 w-5 text-basil" />
                  <h2 className="mt-4 font-display text-xl font-black leading-tight text-ink">{situation.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-graphite">{situation.description}</p>
                </article>
              ))}
            </div>
          </div>

          {labProject ? (
            <aside className="lab-reveal rounded-2xl border border-fog bg-cream p-5 shadow-sm md:p-6" style={{ animationDelay: "380ms" }}>
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
                Mise en place d'un environnement VPS complet pour héberger plusieurs sites, gérer les domaines,
                sécuriser les accès HTTPS et maintenir des apps Node/Next.js en ligne.
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
            title="Les outils que j'utilise pour faire tenir les projets debout."
            description="Une boîte à outils pragmatique pour mettre en ligne, connecter les données et garder une base maintenable."
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

        <section className="section-stack lab-reveal rounded-2xl border border-fog bg-cream p-6 shadow-sm md:p-8 lg:p-10" style={{ animationDelay: "520ms" }}>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">Mise en ligne</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight text-ink md:text-4xl">
                Vous avez un projet à mettre en ligne proprement ?
              </h2>
              <p className="mt-4 text-base leading-7 text-graphite">
                Je peux vous aider à clarifier la partie visible, mais aussi les fondations techniques : domaine,
                hébergement, données, automatisations et maintenance.
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
