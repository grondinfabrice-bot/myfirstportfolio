import { TechBadge } from "./TechBadge";

type SkillBlockProps = {
  title: string;
  description: string;
  items: string[];
};

export function SkillBlock({ title, description, items }: SkillBlockProps) {
  return (
    <article className="rounded-2xl border border-fog bg-cream p-6 shadow-sm">
      <h3 className="font-display text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-graphite">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
    </article>
  );
}
