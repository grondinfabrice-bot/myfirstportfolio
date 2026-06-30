import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProjects() {
  return (
    <section className="section-breath bg-cream">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Projets mijotés"
            title="Des outils concrets, pensés côté usage et côté technique."
            description="Plateforme communautaire, dashboard métier, boutique digitale : chaque projet montre une manière de transformer un besoin en interface claire."
            tone="balanced"
          />
          <Link href="/projets" className="inline-flex items-center gap-2 font-bold text-ink hover:text-tomato">
            Tous les projets
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="section-stack">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </div>
    </section>
  );
}
