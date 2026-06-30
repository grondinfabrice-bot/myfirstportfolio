import { SectionHeader } from "@/components/SectionHeader";
import { SkillBlock } from "@/components/SkillBlock";
import { skillBlocks } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section className="page-breath bg-paper">
      <div className="site-container">
        <SectionHeader
          eyebrow="Ce que je fabrique"
          title="Des compétences reliées à des usages concrets."
          description="Frontend, backend, automatisation, design et produit travaillent ensemble pour créer des sites, apps et outils qui tiennent debout."
          tone="balanced"
        />
        <div className="section-stack grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillBlocks.map((block) => (
            <SkillBlock key={block.title} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
