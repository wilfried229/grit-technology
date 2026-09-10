"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Car, Zap, Cpu, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

const expertisesList = [
  {
    number: "01",
    icon: Car,
    title: "Mobilité intelligente & Systèmes de transport",
    desc: "Solutions intégrées pour optimiser la fluidité du trafic, moderniser les axes autoroutiers et automatiser la collecte des redevances.",
    points: [
      "Systèmes de péage automatisé et barrières haute vélocité",
      "Péage en flux libre (Free Flow) multi-voies sans arrêt",
      "Lecture automatique des plaques d'immatriculation (ANPR / LPR)",
      "Gestion intelligente des parkings et guidage à la place",
      "Systèmes de pesage dynamique en marche (WIM)",
      "Plateformes de gestion centralisée et sécurisée des recettes",
    ],
  },
  {
    number: "02",
    icon: Zap,
    title: "Infrastructures électriques & Énergie",
    desc: "Conception, fiabilisation et déploiement de réseaux de distribution électrique et de secours pour sites stratégiques.",
    points: [
      "Courants Forts (CFO) : Postes HTA/BT, TGBT et armoires de distribution",
      "Courants Faibles (CFA) : Câblage structuré cuivre et fibre optique",
      "Secours énergétique : Onduleurs modulaires (UPS) et groupes électrogènes",
      "Installations solaires photovoltaïques et hybrides connectées",
      "Audit d'efficacité énergétique et qualité des réseaux électriques",
      "Protection contre la foudre et mise à la terre normalisée",
    ],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Automatisation & Supervision industrielle",
    desc: "Contrôle-commande temps réel et monitoring centralisé pour infrastructures critiques et unités de production.",
    points: [
      "Automates programmables industriels (PLC / API) multimarques",
      "Systèmes de supervision et acquisition de données (SCADA / IHM)",
      "Télégestion, télémétrie et protocoles IoT industriels (Modbus, OPC UA)",
      "Régulation thermique, GTB/GTC (Gestion Technique de Bâtiment)",
      "Hypervision unifiée des installations multi-sites",
      "Maintenance prédictive et alertes automatisées en temps réel",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Sûreté électronique & Sécurité incendie",
    desc: "Dispositifs technologiques de haute sécurité garantissant l'intégrité des personnes, des biens et des périmètres sensibles.",
    points: [
      "Vidéosurveillance IP haute définition avec analyse vidéo IA",
      "Contrôle d'accès biométrique, badges RFID et tourniquets sécurisés",
      "Détection intrusion périmétrique et clôtures instrumentées",
      "Systèmes de Sécurité Incendie (SSI) adressables certifiés",
      "Extinction automatique (gaz, brouillard d'eau, sprinklers)",
      "Postes de Commandement et de Sécurité (PCS) centralisés",
    ],
  },
];

export default function Expertises() {
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
          <span className="section-tag">Domaines d'intervention</span>
          <h1 className="page-hero-title">Nos expertises d'ingénierie</h1>
          <p className="page-hero-desc">
            Quatre pôles d'excellence technologique pour concevoir, automatiser et sécuriser vos infrastructures critiques.
          </p>
        </div>
      </section>

      {/* ── GRILLE DES 4 EXPERTISES DÉTAILLÉES ── */}
      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="expertise-grid reveal-stagger reveal">
            {expertisesList.map(({ number, icon: Icon, title, desc, points }) => (
              <div className="expertise-card" key={title} style={{ display: "flex", flexDirection: "column" }}>
                <span className="card-number">{number}</span>
                <div className="ic-wrap">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  {desc}
                </p>
                <ul style={{ marginBottom: "28px", flexGrow: 1 }}>
                  {points.map((pt, idx) => (
                    <li key={idx} style={{ alignItems: "flex-start" }}>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href="/contact" className="expertise-card-cta">
                    Consulter nos ingénieurs <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bannière contact bas de page */}
          <div
            className="reveal"
            style={{
              marginTop: "64px",
              background: "var(--gray-50)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "44px 36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>
                Un besoin spécifique dans l'un de ces domaines ?
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", margin: 0 }}>
                Nos équipes d'ingénierie réalisent l'étude d'avant-projet et le dimensionnement de vos installations.
              </p>
            </div>
            <Link href="/contact" className="btn btn-red">
              Demander une étude technique <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
