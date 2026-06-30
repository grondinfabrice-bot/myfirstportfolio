type TechBadgeProps = {
  children: React.ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-fog bg-paper/80 px-2.5 py-1 font-mono text-[0.68rem] font-semibold leading-none text-slate">
      {children}
    </span>
  );
}
