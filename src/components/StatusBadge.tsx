type StatusBadgeProps = {
  children: React.ReactNode;
};

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-basil/20 bg-basil/10 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.05em] text-basil">
      {children}
    </span>
  );
}
