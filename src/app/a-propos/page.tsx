"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function APropos() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="wrap">
          <span className="section-tag">À propos de nous</span>
          <h1 className="page-hero-title">Ingénierie &amp; Intégration d'infrastructures intelligentes</h1>
          <p className="page-hero-desc">
            GRIT CONSULTING conçoit, intègre et maintient des technologies de pointe pour moderniser et sécuriser durablement les infrastructures en Afrique.
          </p>
        </div>
      </section>

      {/* ── PRÉSENTATION COMPLÈTE ── */}
      <section id="about" style={{ background: "#fff" }}>
        <div className="wrap about-consulting-grid">
          <div className="about-consulting-text reveal">
            <span className="section-tag">Qui sommes-nous</span>
            <h2>Une ingénierie agile dédiée aux défis critiques</h2>
            <p>
              <strong>GRIT CONSULTING</strong> est un acteur de référence spécialisé dans le conseil, l’ingénierie et l’intégration de solutions technologiques à haute valeur ajoutée. 
            </p>
            <p>
              Face à l’accélération urbaine et aux exigences croissantes de connectivité, nous accompagnons les gestionnaires d'infrastructures, les institutions publiques, les industriels et les opérateurs de transport dans le déploiement de systèmes intelligents.
            </p>
            <p>
              De la mobilité connectée (péage Free Flow, lecture automatique de plaques ANPR/LPR) à la distribution électrique sécurisée (CFO/CFA), en passant par l’automatisation industrielle (PLC/SCADA) et la sûreté globale, nous garantissons des solutions robustes adaptées aux contraintes opérationnelles locales.
            </p>
            <div style={{ marginTop: "28px" }}>
              <Link href="/contact" className="btn btn-red">
                Échanger avec un expert <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="about-visual-box reveal">
            <div className="about-visual-tags">
              <span className="about-tag" style={{ top: "10%", left: "6%" }}>🏗️ Conception &amp; Études</span>
              <span className="about-tag" style={{ top: "32%", right: "6%" }}>⚡ Énergie &amp; CFO/CFA</span>
              <span className="about-tag" style={{ top: "54%", left: "4%" }}>🔗 Intégration &amp; SCADA</span>
              <span className="about-tag" style={{ bottom: "12%", right: "8%" }}>🛠️ Maintien Opérationnel</span>
              <span className="about-tag" style={{ top: "74%", left: "24%" }}>🛡️ Sûreté Électronique</span>
            </div>
            <svg viewBox="0 0 300 280" fill="none" style={{ width: "230px", opacity: 0.65 }}>
              <circle cx="150" cy="140" r="105" stroke="#E31B23" strokeWidth="1.5" opacity="0.4" />
              <circle cx="150" cy="140" r="65" stroke="#0f1e3a" strokeWidth="1.5" opacity="0.3" />
              <circle cx="150" cy="140" r="22" fill="#E31B23" opacity="0.15" />
              <circle cx="150" cy="140" r="8" fill="#E31B23" />
              <line x1="150" y1="35" x2="150" y2="140" stroke="#E31B23" strokeWidth="1.5" opacity="0.5" />
              <line x1="150" y1="140" x2="242" y2="192" stroke="#0f1e3a" strokeWidth="1.5" opacity="0.5" />
              <line x1="150" y1="140" x2="58" y2="192" stroke="#E31B23" strokeWidth="1.5" opacity="0.5" />
              <circle cx="150" cy="35" r="5" fill="#E31B23" />
              <circle cx="242" cy="192" r="5" fill="#0f1e3a" />
              <circle cx="58" cy="192" r="5" fill="#E31B23" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / VALEURS ── */}
      <section style={{ background: "var(--gray-50)", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="section-tag" style={{ justifyContent: "center" }}>Notre ADN</span>
            <h2>Vision, Mission &amp; Valeurs</h2>
            <p>Les principes cardinaux qui guident nos interventions quotidiennes sur le continent.</p>
          </div>

          <div className="vmv-grid reveal-stagger reveal">
            {/* Vision */}
            <div className="vmv-card vision">
              <h3>Notre Vision</h3>
              <p>
                Devenir le partenaire panafricain de référence en ingénierie d'infrastructures intelligentes, en accélérant la transition vers des villes connectées, des réseaux de transport fluides et des écosystèmes industriels autonomes et durables.
              </p>
            </div>

            {/* Mission */}
            <div className="vmv-card mission">
              <h3>Notre Mission</h3>
              <p>
                Délivrer des solutions technologiques intégrées, fiables et pérennes. Nous transformons les défis complexes d'infrastructure en systèmes performants, en alliant ingénierie de précision, maîtrise des coûts et support terrain sans faille.
              </p>
            </div>

            {/* Valeurs */}
            <div className="vmv-card valeurs">
              <h3 style={{ color: "var(--red)" }}>Nos Valeurs</h3>
              <div className="valeurs-list">
                <div className="valeur-item">
                  <span><strong>Excellence technique :</strong> Rigueur d'ingénierie et respect des normes internationales.</span>
                </div>
                <div className="valeur-item">
                  <span><strong>Pragmatisme terrain :</strong> Des solutions conçues pour les réalités opérationnelles locales.</span>
                </div>
                <div className="valeur-item">
                  <span><strong>Engagement &amp; Intégrité :</strong> Transparence absolue et respect rigoureux des délais.</span>
                </div>
                <div className="valeur-item">
                  <span><strong>Pérennité :</strong> Accompagnement dans la durée, transfert de compétences et maintenance proactive.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

