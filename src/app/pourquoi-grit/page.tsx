"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const whyPoints = [
  {
    num: "01",
    title: "Expertise pointue en infrastructures critiques",
    desc: "Une maîtrise approfondie et reconnue des technologies de péage (Free Flow, ANPR), de contrôle-commande industriel (SCADA/PLC) et de distribution d'énergie sécurisée.",
  },
  {
    num: "02",
    title: "Approche d'ingénierie globale de bout en bout",
    desc: "Un interlocuteur unique responsable de l'ensemble de la chaîne : du conseil stratégique et études d'exécution jusqu'à la maintenance opérationnelle 24/7.",
  },
  {
    num: "03",
    title: "Ancrage panafricain & réactivité terrain",
    desc: "Des équipes mobiles et implantées au Togo, au Bénin et au Burkina Faso, capables d'intervenir rapidement sur site et de comprendre parfaitement les réalités environnementales.",
  },
  {
    num: "04",
    title: "Indépendance technologique & solutions sur-mesure",
    desc: "Nous sélectionnons en toute impartialité les technologies matérielles et logicielles les plus performantes, sans dépendance exclusive, pour répondre exactement à votre besoin.",
  },
  {
    num: "05",
    title: "Engagement ferme sur la pérennité et la continuité de service",
    desc: "Transfert méthodique de compétences pour autonomiser vos équipes locales, approvisionnement sécurisé en pièces de rechange et maintien en condition opérationnelle (MCO).",
  },
];

export default function PourquoiGrit() {
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
          <span className="section-tag">Notre valeur ajoutée</span>
          <h1 className="page-hero-title">Pourquoi choisir GRIT CONSULTING ?</h1>
          <p className="page-hero-desc">
            L'alliance d'une exigence d'ingénierie internationale et d'une maîtrise éprouvée des opérations sur le terrain africain.
          </p>
        </div>
      </section>

      {/* ── 5 BLOCS ARGUMENTAIRES + VISUEL PREMIUM ── */}
      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="why-consulting-layout">
            {/* Blocs de gauche */}
            <div className="why-blocks reveal">
              {whyPoints.map(({ num, title, desc }) => (
                <div className="why-block" key={num}>
                  <div className="why-block-num">{num}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Panneau visuel premium de droite */}
            <div className="why-visual-box reveal">
              <span
                style={{
                  display: "inline-block",
                  color: "#ff6b6b",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Performance opérationnelle
              </span>

              <div className="why-visual-stat">
                <div className="big">100%</div>
                <div className="lbl">D'engagement sur la conformité des livrables et la sécurité</div>
              </div>

              <div className="why-visual-stat">
                <div className="big">3+</div>
                <div className="lbl">Pays d'implantation directe : Togo, Bénin, Burkina Faso</div>
              </div>

              <div className="why-visual-stat">
                <div className="big">24/7</div>
                <div className="lbl">Capacité d'astreinte et de support opérationnel continu</div>
              </div>

              <div style={{ marginTop: "36px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  Vous recherchez un partenaire solide pour sécuriser le déploiement de vos infrastructures technologiques ?
                </p>
                <Link href="/contact" className="btn btn-red" style={{ width: "100%", justifyContent: "center" }}>
                  Discuter de votre projet <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
