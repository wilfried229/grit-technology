"use client";

import { useEffect, useState } from "react";

const projects = [
  { category: "Sites web", cat: "web", number: "01", title: "Plateforme vitrine corporate", description: "Refonte complète d'un site institutionnel, orientée conversion et rapidité.", thumb: "linear-gradient(135deg, #fdeded 0%, #fff 100%)" },
  { category: "Applications", cat: "app", number: "02", title: "Application de gestion ressources humaines", description: "Outil métier sur mesure pour le suivi de paie et de stocks en temps réel.", thumb: "linear-gradient(135deg, #f3f2f0 0%, #fdeded 100%)" },
  { category: "Solutions digitales", cat: "digital", number: "03", title: "Automatisation de processus", description: "Digitalisation d'un flux métier auparavant géré manuellement, avec tableau de bord.", thumb: "linear-gradient(135deg, #fdeded 0%, #f7f6f5 100%)" },
  { category: "Sites web", cat: "web", number: "05", title: "Boutique en ligne", description: "Plateforme e-commerce avec gestion de catalogue et paiement intégré.", thumb: "linear-gradient(135deg, #fff 0%, #fdeded 100%)" },
  { category: "Applications", cat: "app", number: "06", title: "Application mobile de suivi", description: "App mobile pour le suivi d'interventions terrain avec notifications en temps réel.", thumb: "linear-gradient(135deg, #fdeded 0%, #f3f2f0 100%)" },
];

const projectFilters = [
  { label: "Tous", category: null },
  { label: "Sites web", category: "web" },
  { label: "Applications", category: "app" },
  { label: "Solutions digitales", category: "digital" },
];

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const visibleProjects = projects.filter((project) => {
    const filter = projectFilters.find((f) => f.label === activeFilter);
    return !filter?.category || project.cat === filter.category;
  });

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
          <span className="section-tag">Nos réalisations</span>
          <h1 className="page-hero-title">Des projets, des résultats concrets</h1>
          <p className="page-hero-desc">
            Un aperçu des types de projets que nous menons — chaque réalisation est le fruit d'un travail sur mesure.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio">
        <div className="wrap">
          {/* Filtres */}
          <div className="filters reveal" role="tablist" aria-label="Filtrer les réalisations">
            {projectFilters.map((filter) => (
              <button
                type="button"
                className={activeFilter === filter.label ? "filter-btn active" : "filter-btn"}
                key={filter.label}
                role="tab"
                aria-selected={activeFilter === filter.label}
                onClick={() => setActiveFilter(filter.label)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grille projets */}
          <div className="portfolio-grid reveal-stagger">
            {visibleProjects.map((project) => (
              <div className="project-card" key={project.title} data-cat={project.cat}>
                <div className="project-thumb" style={{ background: project.thumb }}>
                  <span className="project-cat">{project.category}</span>
                  <span className="mono">{project.number}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="/contact" className="project-link">
                    Voir le projet
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

