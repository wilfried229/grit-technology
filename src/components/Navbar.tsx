"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImage from "../../affiche_grit_technologie_v2.png";

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
            <Image src={logoImage} alt="GRIT" className="grit-logo-image" priority />
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
