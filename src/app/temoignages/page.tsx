"use client";

import { useEffect } from "react";

const testimonials = [
  { name: "A. Koffi", initials: "AK", role: "Directrice, secteur commerce", quote: "Une équipe réactive qui a bien compris nos contraintes. Le projet a été livré dans les temps, avec un vrai suivi après la mise en ligne." },
  { name: "M. Dossou", initials: "MD", role: "Responsable IT, PME industrielle", quote: "Grit Technologie a pris le temps de comprendre notre activité avant de proposer une solution. Le résultat est simple à utiliser et solide techniquement." },
  { name: "C. Bada", initials: "CB", role: "Coordinateur digital, organisation non lucrative", quote: "La qualité du conseil et de l'exécution nous a vraiment rassuré. Nous avons eu une vraie relation de confiance, étape par étape." },
];

export default function Temoignages() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="wrap">
          <span className="section-tag">Témoignages</span>
          <h1 className="page-hero-title">Ce que nos clients en disent</h1>
          <p className="page-hero-desc">
            Des retours authentiques de nos clients — la satisfaction de nos partenaires est notre meilleure récompense.
          </p>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="testimonials" id="testimonials">
        <div className="wrap">
          <div className="testi-grid reveal-stagger reveal">
            {testimonials.map((item) => (
              <div className="testi-card" key={item.name}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg key={`${item.name}-${index}`} viewBox="0 0 20 20">
                      <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 7.5l6.4-.6z" />
                    </svg>
                  ))}
                </div>
                <p className="testi-text">« {item.quote} »</p>
                <div className="testi-person">
                  <div className="avatar">{item.initials}</div>
                  <div>
                    <div className="name">{item.name}</div>
                    <div className="role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

