type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-bold uppercase text-clay">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black leading-tight text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-graphite md:text-lg">{description}</p> : null}
    </div>
  );
}
