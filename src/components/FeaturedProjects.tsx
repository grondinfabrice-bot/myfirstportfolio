import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProjects() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Projets phares"
            title="Des projets qui montrent la partie visible et la partie technique."
            description="Plateforme communautaire, dashboard métier, boutique digitale : chaque projet raconte une façon de résoudre un vrai besoin."
          />
          <Link href="/projets" className="inline-flex items-center gap-2 font-bold text-ink hover:text-clay">
            Tous les projets
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </div>
    </section>
  );
}
