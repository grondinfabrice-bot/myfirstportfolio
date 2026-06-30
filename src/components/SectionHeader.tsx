type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "balanced";
};

export function SectionHeader({ eyebrow, title, description, tone = "default" }: SectionHeaderProps) {
  const isBalanced = tone === "balanced";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={
            isBalanced
              ? "font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm"
              : "font-mono text-sm font-bold uppercase text-tomato"
          }
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={
          isBalanced
            ? "mt-3 font-display text-[2rem] font-black leading-[1.08] text-ink md:text-[2.65rem] lg:text-5xl"
            : "mt-3 font-display text-3xl font-black leading-tight text-ink md:text-5xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p className={isBalanced ? "mt-4 text-base leading-7 text-graphite md:text-[1.0625rem]" : "mt-4 text-base leading-7 text-graphite md:text-lg"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
