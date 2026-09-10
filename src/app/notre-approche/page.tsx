"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  FileSearch,
  Truck,
  Layers,
  Wrench,
  GraduationCap,
  Headphones,
  ArrowRight,
} from "lucide-react";

const approachSteps = [
  {
    num: "01",
    icon: FileSearch,
    title: "Études & Ingénierie Préparatoire",
    desc: "Diagnostic initial exhaustif, analyse des risques, modélisation technique 3D/plans d'exécution et élaboration de l'architecture cible adaptée aux contraintes réelles du site.",
  },
  {
    num: "02",
    icon: Truck,
    title: "Approvisionnement & Fourniture",
    desc: "Sélection rigoureuse des équipements certifiés auprès de partenaires mondiaux de premier rang, logistique sécurisée et conformité stricte aux spécifications normatives.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Intégration & Pré-assemblage",
    desc: "Configuration en atelier, pré-câblage des armoires électriques, programmation des briques logicielles, recettes en usine (FAT) pour garantir un déploiement sans accroc.",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Installation & Mise en Service",
    desc: "Déploiement sur site par des techniciens qualifiés, raccordements, essais fonctionnels sous tension, tests de charge et recettes finales d'acceptation (SAT).",
  },
  {
    num: "05",
    icon: GraduationCap,
    title: "Formation & Autonomisation",
    desc: "Programmes de formation structurés pour les équipes d'exploitation locales, simulation de pannes, transmission des bonnes pratiques et transfert documentaire complet.",
  },
  {
    num: "06",
    icon: Headphones,
    title: "Support & MCO Proactif",
    desc: "Assistance technique réactive, télé-monitoring continu des équipements, maintenance préventive planifiée et fourniture pérenne des pièces de rechange.",
  },
];

export default function NotreApproche() {
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
          <span className="section-tag">Méthodologie opérationnelle</span>
          <h1 className="page-hero-title">Notre parcours en 6 étapes</h1>
          <p className="page-hero-desc">
            Une méthodologie rigoureuse, éprouvée sur des chantiers critiques, garantissant la conformité, la sécurité et la pérennité de chaque installation.
          </p>
        </div>
      </section>

      {/* ── PARCOURS 6 ÉTAPES ── */}
      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          {/* Ruban synthétique façon flow sur desktop */}
          <div className="approach-flow reveal" style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
            {["Études", "Fourniture", "Intégration", "Installation", "Formation", "Support"].map((step, idx, arr) => (
              <div key={step} style={{ display: "inline-flex", alignItems: "center" }}>
                <span className="flow-step">{step}</span>
                {idx < arr.length - 1 && <span className="flow-arrow">→</span>}
              </div>
            ))}
          </div>

          <div className="approach-grid reveal-stagger reveal">
            {approachSteps.map(({ num, icon: Icon, title, desc }) => (
              <div className="approach-step" key={num}>
                <div className="approach-step-num">Étape {num}</div>
                <div className="approach-step-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "64px",
              textAlign: "center",
              background: "var(--gray-50)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "48px 32px",
            }}
          >
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "12px" }}>
              Prêt à cadrer votre projet avec notre méthodologie ?
            </h3>
            <p style={{ color: "var(--muted)", maxWidth: "600px", margin: "0 auto 28px" }}>
              Notre équipe d'ingénieurs intervient dès la phase d'étude préliminaire pour concevoir une architecture pérenne.
            </p>
            <Link href="/contact" className="btn btn-red">
              Démarrer un diagnostic <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
