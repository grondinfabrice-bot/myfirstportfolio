type TechBadgeProps = {
  children: React.ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-fog bg-cream/80 px-3 py-1 font-mono text-xs font-medium text-slate">
      {children}
    </span>
  );
}
