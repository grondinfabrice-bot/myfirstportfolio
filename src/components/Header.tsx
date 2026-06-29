import Link from "next/link";

const navItems = [
  { href: "/projets", label: "Projets mijotés" },
  { href: "/competences", label: "Fabrique" },
  { href: "/lab", label: "Lab" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-fog bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 font-display text-base font-black tracking-normal text-ink">
          <img
            src="/brand/fabrik-automates-icon-64.png"
            alt="Fabrik Automates"
            className="h-12 w-12 rounded-full object-cover shadow-sm sm:h-9 sm:w-9"
          />
          <span className="hidden sm:inline">Fabrik Automates</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-graphite md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-tomato">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-tomato px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate"
        >
          Discuter
        </Link>
      </div>
    </header>
  );
}
