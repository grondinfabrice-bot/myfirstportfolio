import Link from "next/link";

const navItems = [
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences" },
  { href: "/lab", label: "Lab" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-base font-black tracking-normal text-ink">
          Fabrice
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-graphite md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-clay">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay"
        >
          Me contacter
        </Link>
      </div>
    </header>
  );
}
