import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-breath bg-paper">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-tomato md:text-sm">404</p>
        <h1 className="mt-4 font-display text-5xl font-black text-ink">Page introuvable</h1>
        <p className="mt-4 text-graphite">Cette page n'existe pas ou n'est plus disponible.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-tomato px-5 py-3 text-sm font-bold text-white transition hover:bg-slate"
        >
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
