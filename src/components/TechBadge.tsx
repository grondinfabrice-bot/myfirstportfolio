type TechBadgeProps = {
  children: React.ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium text-graphite">
      {children}
    </span>
  );
}
