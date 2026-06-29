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
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-fog bg-fog shadow-sm">
      {!isLoaded ? <PlaceholderContent title={title} category={category} /> : null}
      <img
        src={src}
        alt={`Aperçu du projet ${title}`}
        loading={priority ? "eager" : "lazy"}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
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
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-fog bg-slate shadow-sm">
      <PlaceholderContent title={title} category={category} />
    </div>
  );
}

function PlaceholderContent({ title, category }: { title: string; category?: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,63,50,0.34),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(47,125,79,0.26),transparent_28%),linear-gradient(135deg,#27384A_0%,#181818_52%,#FFF7E8_180%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/80 backdrop-blur">
          <Layers3 className="h-3.5 w-3.5 text-tomato" />
          {category ?? "Projet web"}
        </div>
        <div className="rounded-full border border-white/12 bg-white/10 p-2 text-white/70 backdrop-blur">
          <ImageIcon className="h-4 w-4" />
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid gap-4 sm:grid-cols-[1fr_150px] sm:items-end">
        <div>
          <div className="mb-4 flex gap-2">
            <span className="h-2 w-12 rounded-full bg-tomato" />
            <span className="h-2 w-7 rounded-full bg-basil" />
            <span className="h-2 w-16 rounded-full bg-white/25" />
          </div>
          <p className="max-w-[18rem] font-display text-2xl font-black leading-tight text-white">{title}</p>
          <p className="mt-2 font-mono text-xs font-semibold uppercase text-white/50">Capture à intégrer</p>
        </div>
        <div className="hidden rounded-md border border-white/12 bg-white/10 p-4 text-white shadow-sm backdrop-blur sm:block">
          <MonitorSmartphone className="mb-5 h-7 w-7 text-tomato" />
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
