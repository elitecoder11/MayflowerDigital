"use client";

import { useState } from "react";

const navLinks = [
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Packages", href: "#packages" },
  { label: "Projects", href: "#portfolio" },
  { label: "How We Work", href: "#how-it-works" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-6 lg:px-12">
        <button
          onClick={scrollToTop}
          className="font-display text-lg font-bold tracking-tight text-white hover:text-sky-400 transition"
        >
          Mayflower Digital
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="lg:hidden border-t border-white/10 bg-slate-900 py-4 px-6"
          aria-label="Main"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 text-sm font-medium text-slate-300 hover:text-white transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
