"use client";

import { ImageIcon, Layers3, MonitorSmartphone } from "lucide-react";
import { useState } from "react";

type ProjectImageProps = {
  src?: string;
  title: string;
  category?: string;
  priority?: boolean;
};

export function ProjectImage({ src, title, category, priority = false }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return <Placeholder title={title} category={category} />;
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-fog bg-paper shadow-sm">
      {!isLoaded ? <PlaceholderContent title={title} category={category} /> : null}
      <img
        src={src}
        alt={`Aperçu du projet ${title}`}
        loading={priority ? "eager" : "lazy"}
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.015] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function Placeholder({ title, category }: { title: string; category?: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-fog bg-slate shadow-sm">
      <PlaceholderContent title={title} category={category} />
    </div>
  );
}

function PlaceholderContent({ title, category }: { title: string; category?: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#27384A_0%,#1F2935_48%,#181818_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#E83F32_0%,#E83F32_38%,#2F7D4F_38%,#2F7D4F_62%,rgba(255,255,255,0.22)_62%)]" />
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/80 backdrop-blur">
          <Layers3 className="h-3.5 w-3.5 text-tomato" />
          {category ?? "Projet web"}
        </div>
        <div className="rounded-full border border-white/15 bg-white/10 p-2 text-white/70 backdrop-blur">
          <ImageIcon className="h-4 w-4" />
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid gap-4 sm:grid-cols-[1fr_150px] sm:items-end">
        <div>
          <div className="mb-4 flex gap-2" aria-hidden="true">
            <span className="h-2 w-12 rounded-full bg-tomato" />
            <span className="h-2 w-7 rounded-full bg-basil" />
            <span className="h-2 w-16 rounded-full bg-white/25" />
          </div>
          <p className="max-w-[18rem] font-display text-2xl font-black leading-tight text-white">{title}</p>
          <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
            Aperçu projet
          </p>
        </div>
        <div className="hidden rounded-md border border-white/15 bg-white/10 p-4 text-white shadow-sm backdrop-blur sm:block">
          <MonitorSmartphone className="mb-5 h-7 w-7 text-tomato" aria-hidden="true" />
          <div className="space-y-2">
            <div className="h-2.5 rounded-full bg-white/75" />
            <div className="h-2.5 w-3/4 rounded-full bg-white/35" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </>
  );
}
