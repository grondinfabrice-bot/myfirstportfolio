import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-sm font-bold uppercase text-clay">404</p>
        <h1 className="mt-4 text-5xl font-black text-ink">Page introuvable</h1>
        <p className="mt-4 text-graphite">Cette page n'existe pas ou n'est plus disponible.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-clay"
        >
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
