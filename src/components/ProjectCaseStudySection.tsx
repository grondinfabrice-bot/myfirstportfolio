type ProjectCaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ProjectCaseStudySection({ title, children }: ProjectCaseStudySectionProps) {
  return (
    <section className="border-t border-fog py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[280px_1fr] md:px-8">
        <h2 className="font-display text-xl font-black text-ink">{title}</h2>
        <div className="text-base leading-7 text-graphite">{children}</div>
      </div>
    </section>
  );
}
