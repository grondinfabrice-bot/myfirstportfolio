type ProjectCaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ProjectCaseStudySection({ title, children }: ProjectCaseStudySectionProps) {
  return (
    <section className="border-t border-fog py-10 md:py-12 lg:py-14">
      <div className="site-container grid gap-5 md:grid-cols-[260px_1fr] md:gap-6 lg:grid-cols-[280px_1fr]">
        <h2 className="font-display text-xl font-black text-ink">{title}</h2>
        <div className="text-base leading-7 text-graphite">{children}</div>
      </div>
    </section>
  );
}
