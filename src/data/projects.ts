export type ProjectStatus =
  | "MVP en ligne"
  | "Concept / module en cours"
  | "Démo en ligne / évolution e-commerce"
  | "Concept"
  | "Site vitrine / futur e-commerce"
  | "Version 1 propre/pro"
  | "Idée / concept"
  | "Réalisé / apprentissage continu";

export type ProjectCategory =
  | "Application web"
  | "Application métier"
  | "Site vitrine / marque"
  | "E-commerce / vente digitale"
  | "Plateforme communautaire"
  | "Lab technique"
  | "Concept / MVP";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  role: string[];
  features: string[];
  stack: string[];
  learnings: string[];
  images: string[];
  liveUrl?: string;
  detailUrl?: string;
  githubUrl?: string;
};

export const projectCategories: ProjectCategory[] = [
  "Application web",
  "Application métier",
  "Site vitrine / marque",
  "E-commerce / vente digitale",
  "Plateforme communautaire",
  "Lab technique",
  "Concept / MVP",
];

export const projects: Project[] = [
  {
    slug: "krealink",
    title: "Krealink",
    category: "Plateforme communautaire",
    status: "MVP en ligne",
    summary: "Réseau local pour connecter les créateurs de La Réunion.",
    description:
      "Plateforme sociale locale permettant aux créateurs de publier, présenter leur profil et interagir autour de projets créatifs.",
    problem:
      "Les créateurs réunionnais ont souvent une présence dispersée entre réseaux sociaux, bouche-à-oreille et contacts privés. Il manque un espace local pensé pour se présenter, publier et créer des connexions autour de projets concrets.",
    solution:
      "Krealink propose une plateforme communautaire simple, centrée sur les profils, les publications, les médias et les interactions entre créateurs de La Réunion.",
    role: ["Conception produit", "UI", "Frontend", "Backend", "Déploiement"],
    features: [
      "Authentification",
      "Profils utilisateurs",
      "Publications",
      "Médias",
      "Likes",
      "Commentaires",
      "Interface responsive",
      "Modération simple",
    ],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Auth",
      "Storage",
      "VPS Ubuntu",
      "Nginx",
      "PM2",
      "HTTPS",
    ],
    learnings: [
      "Structurer un produit communautaire autour de profils, contenus et interactions.",
      "Relier interface, base de données, authentification et déploiement serveur.",
    ],
    images: ["/images/projects/optimized/krealink.webp"],
    liveUrl: "https://krealink.re",
    detailUrl: "/projets/krealink",
  },
  {
    slug: "champion-wkn",
    title: "Champion WKN",
    category: "Site vitrine / marque",
    status: "Version 1 propre/pro",
    summary: "Site vitrine one-page premium pour un champion du monde WKN de Muay Thai.",
    description:
      "Landing page officielle sombre, brute et premium pensée pour présenter un champion du monde WKN de Muay Thai, valoriser son titre, son parcours, son partenariat principal avec Terre Sauvage et ouvrir la porte à de nouveaux partenaires, médias et organisateurs.",
    problem:
      "Le champion avait besoin d'un support officiel plus fort qu'un simple profil social pour présenter son image, son titre mondial, son parcours et son potentiel de collaboration.",
    solution:
      "Une landing page construite autour d'un message fort : la ceinture est gagnée, l'histoire continue. Le site combine un hero impactant, une palette noire et dorée, des cartes de preuve sportive, une section partenaire, une galerie média, des actualités et un contact orienté médias, marques et organisateurs.",
    role: ["Direction artistique", "UX design", "UI design", "Intégration front-end", "Responsive mobile"],
    features: [
      "Navigation one-page par ancres",
      "Header fixe",
      "Navigation desktop",
      "Menu mobile simple",
      "Boutons CTA",
      "Grilles responsive",
      "Cartes éditoriales",
      "Section partenariat",
      "Section contact claire",
      "Footer",
    ],
    stack: ["Next.js 16.2.9", "TypeScript", "Tailwind CSS", "App Router", "React components", "site-data.ts"],
    learnings: [
      "Construire une vitrine sportive premium sans tomber dans un rendu corporate, amateur ou trop chargé.",
      "Garder une direction artistique sombre, dorée et spectaculaire tout en conservant une interface lisible sur mobile.",
      "Les images actuelles sont des placeholders : les vraies photos, dates, combats, chiffres et contenus officiels seront intégrés dans une prochaine version.",
    ],
    images: ["/images/projects/optimized/champion-wkn.webp"],
    detailUrl: "/projets/champion-wkn",
  },
  {
    slug: "passkomand-manager",
    title: "Passkomand Manager",
    category: "Application métier",
    status: "Concept / module en cours",
    summary: "Dashboard de gestion pour suivre ventes, marges, objectifs et produits.",
    description:
      "Outil de gestion destiné à compléter Passkomand avec suivi de chiffre d'affaires, marges, stocks, dates de péremption et rappels de commande.",
    problem:
      "Une petite activité de commande peut vite devenir difficile à piloter si les ventes, marges, produits et dates de péremption sont suivis à la main ou dans des tableaux dispersés.",
    solution:
      "Passkomand Manager centralise les indicateurs utiles dans un dashboard simple : chiffre d'affaires, marges, produits, objectifs, alertes et rappels.",
    role: ["Conception fonctionnelle", "UX dashboard", "Logique métier", "Base de données"],
    features: [
      "Tableau de bord",
      "Suivi chiffre d'affaires",
      "Calcul de marge",
      "Gestion produits",
      "Alertes péremption",
      "Objectifs",
      "Rappels de commande",
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    learnings: [
      "Transformer des besoins terrain en indicateurs lisibles.",
      "Préparer une architecture de données claire pour un outil métier évolutif.",
    ],
    images: ["/images/projects/optimized/passkomand-manager.webp"],
    liveUrl: "https://passkomand.shop",
    detailUrl: "/projets/passkomand-manager",
  },
  {
    slug: "boombapchopshop",
    title: "BoombapChopShop",
    category: "E-commerce / vente digitale",
    status: "Démo en ligne / évolution e-commerce",
    summary: "Boutique d'instrumentales Boom Bap avec licences numériques.",
    description:
      "Site de vente d'instrumentales hip-hop Boom Bap inspirées des années 90, avec logique de licences, présentation audio et future intégration paiement.",
    problem:
      "Vendre des instrumentales en ligne demande plus qu'une simple page audio : il faut présenter les beats, clarifier les licences, rassurer l'acheteur et préparer la livraison numérique.",
    solution:
      "BoombapChopShop structure une boutique de beats avec catalogue, fiches produits, licences, extraits audio et une base prête pour le paiement et la livraison digitale.",
    role: ["Direction artistique", "Design", "Structure e-commerce", "Base de données", "Déploiement"],
    features: [
      "Catalogue de beats",
      "Fiches produits",
      "Extraits audio",
      "Licences",
      "Panier / paiement futur",
      "Téléchargement de fichiers numériques",
    ],
    stack: ["HTML/CSS", "Next.js possible", "Supabase", "PostgreSQL", "Stripe prévu", "Nginx", "HTTPS"],
    learnings: [
      "Positionner une boutique digitale avec une identité musicale forte.",
      "Penser la vente de fichiers numériques avec licences, audio et paiement.",
    ],
    images: ["/images/projects/optimized/boombapchopshop.webp"],
    liveUrl: "https://boombapchopshop.art",
    detailUrl: "/projets/boombapchopshop",
  },
  {
    slug: "scanvs",
    title: "scanVS",
    category: "Concept / MVP",
    status: "Concept",
    summary: "Application mobile pour comparer deux produits par scan de code-barres.",
    description:
      "Application pensée pour les vendeurs et clients en multimédia / électroménager afin de comparer rapidement deux produits techniquement.",
    problem:
      "Comparer deux produits techniques en magasin prend du temps, surtout quand les informations sont dispersées entre fiches constructeur, sites marchands et arguments commerciaux.",
    solution:
      "scanVS est pensé comme un outil de comparaison rapide par scan de code-barres, avec fiches techniques et aide à la décision.",
    role: ["Idée produit", "UX", "Logique comparative", "Architecture MVP"],
    features: [
      "Authentification",
      "Scan code-barres",
      "Fiches techniques",
      "Comparaison automatique",
      "Aide à la décision rapide",
    ],
    stack: ["Next.js", "React", "Supabase", "API produits", "Base de données technique"],
    learnings: [
      "Réduire une décision complexe à une interface de comparaison rapide.",
      "Imaginer une base technique exploitable par vendeurs et clients.",
    ],
    images: [],
    detailUrl: "/projets/scanvs",
  },
  {
    slug: "terre-sauvage",
    title: "Terre Sauvage",
    category: "Site vitrine / marque",
    status: "Site vitrine / futur e-commerce",
    summary: "Site de marque textile outdoor / streetwear.",
    description:
      "Site visuel pour une marque de vêtements inspirée par la nature, l'île et une esthétique brute/premium.",
    problem:
      "Une marque textile a besoin d'un univers clair, mémorable et crédible avant même d'ajouter une boutique complète.",
    solution:
      "Le site Terre Sauvage pose les bases d'une identité visuelle forte, avec storytelling, présentation de marque, produits et évolution possible vers l'e-commerce.",
    role: ["Direction artistique", "UI", "Intégration", "Déploiement"],
    features: ["Landing page", "Présentation marque", "Produits", "Storytelling", "Futur e-commerce"],
    stack: ["HTML/CSS", "Next.js possible", "Nginx", "HTTPS"],
    learnings: [
      "Construire un univers visuel cohérent autour d'une marque textile.",
      "Préparer une vitrine capable d'évoluer vers l'e-commerce.",
    ],
    images: ["/images/projects/optimized/terresauvage.webp"],
    liveUrl: "https://terresauvage.shop",
    detailUrl: "/projets/terre-sauvage",
  },
  {
    slug: "kaza-reza",
    title: "Kaza Reza",
    category: "Application web",
    status: "Idée / concept",
    summary: "Application de réservation de créneaux pour studio d'enregistrement.",
    description: "Outil permettant à des artistes de réserver des créneaux studio simplement.",
    problem:
      "La réservation de créneaux studio peut vite devenir chaotique lorsqu'elle passe par messages, appels et notes séparées.",
    solution:
      "Kaza Reza propose un système simple de disponibilités, réservation, gestion admin et notifications.",
    role: ["Conception produit", "UX réservation", "Architecture"],
    features: ["Calendrier", "Réservation", "Disponibilités", "Gestion admin", "Notifications"],
    stack: ["Next.js", "Supabase", "PostgreSQL", "Auth"],
    learnings: [
      "Penser un parcours de réservation court et fiable.",
      "Prévoir les besoins admin sans alourdir l'expérience artiste.",
    ],
    images: ["/images/projects/optimized/kaza-reza.webp"],
    detailUrl: "/projets/kaza-reza",
  },
  {
    slug: "lab-vps-infrastructure",
    title: "Lab VPS / Infrastructure",
    category: "Lab technique",
    status: "Réalisé / apprentissage continu",
    summary: "Mise en place d'un environnement VPS complet pour héberger plusieurs sites.",
    description:
      "Configuration d'un serveur Ubuntu avec Nginx, domaines, HTTPS, PM2, GitHub, sauvegardes et monitoring simple.",
    problem:
      "Héberger plusieurs sites et applications demande une base serveur fiable : domaines, HTTPS, reverse proxy, processus Node, logs et sauvegardes.",
    solution:
      "Le lab VPS documente la mise en place d'un environnement Ubuntu avec Nginx, Certbot, PM2, GitHub, DNS, firewall et bonnes pratiques de déploiement.",
    role: ["Administration serveur", "Déploiement", "Diagnostic", "Sécurisation"],
    features: [
      "VPS Ubuntu",
      "Nginx multi-sites",
      "Domaines",
      "DNS",
      "HTTPS avec Certbot",
      "PM2",
      "GitHub SSH",
      "Sauvegardes",
      "Logs",
      "UFW firewall",
    ],
    stack: ["Ubuntu", "Nginx", "Certbot", "PM2", "Git", "GitHub", "DNS", "Cloudflare possible"],
    learnings: [
      "Comprendre la chaîne complète entre code, domaine, serveur et HTTPS.",
      "Diagnostiquer plus vite les problèmes de déploiement et de configuration.",
    ],
    images: [],
    detailUrl: "/projets/lab-vps-infrastructure",
  },
];

export const featuredProjects = projects.filter((project) =>
  ["krealink", "passkomand-manager", "boombapchopshop"].includes(project.slug),
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
