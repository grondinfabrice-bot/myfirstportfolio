"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/projets", label: "Projets mijotés" },
  { href: "/competences", label: "Fabrique" },
  { href: "/lab", label: "Lab" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fog bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display text-base font-black tracking-normal text-ink"
          onClick={closeMenu}
        >
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
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-fog bg-cream px-4 py-2 text-sm font-bold text-ink shadow-sm transition hover:border-tomato hover:text-tomato md:hidden"
          aria-label={isMenuOpen ? "Fermer le menu principal" : "Ouvrir le menu principal"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          Menu
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`border-t border-fog bg-paper px-5 py-4 shadow-sm md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        aria-label="Navigation mobile"
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-bold text-ink transition hover:bg-cream hover:text-tomato"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
