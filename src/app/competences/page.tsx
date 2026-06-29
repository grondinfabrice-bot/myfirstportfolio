import { SectionHeader } from "@/components/SectionHeader";
import { SkillBlock } from "@/components/SkillBlock";
import { skillBlocks } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Compétences"
          title="Des blocs de compétences reliés à des usages concrets."
          description="Frontend, backend, déploiement, design et produit travaillent ensemble pour créer des sites et applications qui tiennent debout."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillBlocks.map((block) => (
            <SkillBlock key={block.title} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
