"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const serviceSteps = [
  {
    step: "01",
    title: "Conseil & Cadrage Stratégique",
    desc: "Analyse des besoins opérationnels, audit de l'infrastructure existante, faisabilité technique, estimation budgétaire et définition de la feuille de route.",
    details: [
      "Audits techniques et diagnostics de vulnérabilité",
      "Définition des spécifications fonctionnelles et techniques (CCTP)",
      "Analyse de rentabilité et retour sur investissement (ROI)",
    ],
  },
  {
    step: "02",
    title: "Études & Ingénierie Détaillée",
    desc: "Conception architecturale, calculs de dimensionnement (bilan de puissance, topologies réseaux), plans d'implantation, schémas de principe et sélection des équipements.",
    details: [
      "Plans d'exécution CFO/CFA, schémas unifilaires et synoptiques",
      "Dimensionnement énergétique (onduleurs, secours, solaire)",
      "Architecture logicielle et modélisation des flux de données",
    ],
  },
  {
    step: "03",
    title: "Intégration & Déploiement Terrain",
    desc: "Approvisionnement certifié, câblage, installation des équipements, programmation des automates/systèmes, paramétrage réseau et tests d'intégration en conditions réelles.",
    details: [
      "Montage, raccordement et mise en armoire industrielle",
      "Programmation des contrôleurs, automates (PLC) et superviseurs (SCADA)",
      "Recette technique en usine (FAT) et sur site (SAT)",
    ],
  },
  {
    step: "04",
    title: "Formation & Transfert de Compétences",
    desc: "Accompagnement au changement, formation pratique des exploitants et des techniciens de maintenance, remise de la documentation technique complète (DOE).",
    details: [
      "Sessions de formation pratique sur site et en atelier",
      "Manuels d'exploitation et procédures de conduite d'urgence",
      "Remise du Dossier des Ouvrages Exécutés (DOE)",
    ],
  },
  {
    step: "05",
    title: "Maintenance & Support Proactif",
    desc: "Garantie de continuité opérationnelle à travers des contrats de maintenance préventive et corrective (MCO), astreinte technique 24/7 et réapprovisionnement en pièces de rechange.",
    details: [
      "Contrats de Maintenance Opérationnelle (MCO) avec SLA garantis",
      "Monitoring à distance et interventions d'urgence sur site",
      "Gestion de stock de pièces critiques et maintenance prédictive",
    ],
  },
];

export default function Services() {
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
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="wrap">
          <span className="section-tag">Notre cycle de service</span>
          <h1 className="page-hero-title">Un accompagnement de bout en bout</h1>
          <p className="page-hero-desc">
            De l'audit préliminaire à la maintenance en condition opérationnelle, nous sécurisons chaque étape de vos projets technologiques.
          </p>
        </div>
      </section>

      {/* ── TIMELINE VERTICALE 5 ÉTAPES ── */}
      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="services-timeline reveal">
            {serviceSteps.map(({ step, title, desc, details }) => (
              <div className="timeline-step" key={step}>
                <div className="timeline-dot">{step}</div>
                <div className="timeline-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <ul
                    style={{
                      marginTop: "14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      listStyle: "none",
                      paddingLeft: 0,
                    }}
                  >
                    {details.map((d, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "0.9rem",
                          color: "var(--dark)",
                          fontWeight: 500,
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "var(--red)",
                            flexShrink: 0,
                          }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <Link href="/contact" className="btn btn-red">
              Discuter d'un projet de service <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
