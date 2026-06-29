import { CheckCircle2 } from "lucide-react";

type LabCardProps = {
  title: string;
};

export function LabCard({ title }: LabCardProps) {
  return (
    <article className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
      <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
      <p className="font-semibold text-ink">{title}</p>
    </article>
  );
}
