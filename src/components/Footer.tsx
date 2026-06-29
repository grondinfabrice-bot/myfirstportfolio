import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate/20 bg-slate text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="font-display text-lg font-black">Fabrik Automates</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
            Sites, apps & automatisations bien mijotés. Interfaces propres, workflows utiles, agents IA bien cadrés.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/70 md:justify-end">
          <Link href="/projets" className="hover:text-white">
            Projets
          </Link>
          <Link href="/competences" className="hover:text-white">
            Fabrique
          </Link>
          <Link href="/lab" className="hover:text-white">
            Lab technique
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
