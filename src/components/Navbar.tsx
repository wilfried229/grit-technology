"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertises", href: "/expertises" },
  { label: "Services", href: "/services" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Notre approche", href: "/notre-approche" },
  { label: "Pourquoi GRIT", href: "/pourquoi-grit" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={isScrolled ? "grit-header scrolled" : pathname === "/" ? "grit-header home-header" : "grit-header"}>
        <div className="wrap nav-inner">
          {/* LOGO */}
          <Link href="/" className="grit-logo" aria-label="GRIT CONSULTING accueil">
            <span className="grit-logo-mark" aria-hidden="true">
              <span className="grit-logo-orbit">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <path d="M 50,10 A 40,40 0 1,1 10,50" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </svg>
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <path d="M 50,10 A 40,40 0 1,1 10,50" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </svg>
                <span className="grit-logo-core" />
              </span>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <span className="grit-logo-word">GRIT</span>
                <span className="grit-logo-dot">.</span>
              </span>
              <span className="grit-logo-tagline">Engineering Smart Infrastructure</span>
            </span>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="links" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "nav-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-right">
            <Link href="/contact" className="btn btn-red btn-sm">
              Parler de votre projet
            </Link>
            <button
              type="button"
              className={isMenuOpen ? "menu-btn open" : "menu-btn"}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={isMenuOpen ? "mobile-nav open" : "mobile-nav"}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-red btn-sm" onClick={() => setIsMenuOpen(false)}>
          Parler de votre projet
        </Link>
      </div>
    </>
  );
}
