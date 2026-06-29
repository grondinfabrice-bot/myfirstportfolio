import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper pt-11 pb-24 md:pt-[76px]">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-mono text-sm font-bold uppercase text-tomato">404</p>
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
