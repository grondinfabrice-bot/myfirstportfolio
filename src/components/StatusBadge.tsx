type StatusBadgeProps = {
  children: React.ReactNode;
};

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-basil px-3 py-1 font-mono text-xs font-semibold text-white shadow-sm">
      {children}
    </span>
  );
}
