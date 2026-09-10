"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Route,
  SquareParking,
  Building2,
  Landmark,
  PiggyBank,
  Factory,
  Pickaxe,
  Hospital,
  Anchor,
  Plane,
  Radio,
  ArrowRight,
} from "lucide-react";

const secteursData = [
  {
    icon: Route,
    title: "Routes & Autoroutes",
    image: "/images/secteurs/autoroutes.jpg",
    desc: "Gares de péage ouvertes/fermées, barrières automatiques grande vitesse, détection de surcharge (WIM), signalisation dynamique et corridors connectés.",
  },
  {
    icon: SquareParking,
    title: "Parkings & Hubs de mobilité",
    image: "/images/secteurs/parkings.jpg",
    desc: "Guidage dynamique à la place, contrôle d'accès par lecture de plaque ANPR, bornes de paiement multicanal (Cashless, Mobile Money) et gestion des abonnements.",
  },
  {
    icon: Building2,
    title: "Smart Cities & Collectivités",
    image: "/images/secteurs/smart-cities.jpg",
    desc: "Éclairage public intelligent, vidéosurveillance urbaine centralisée, capteurs environnementaux et centres de commandement unifiés pour les métropoles.",
  },
  {
    icon: Landmark,
    title: "Administrations & Bâtiments publics",
    image: "/images/secteurs/administrations.jpg",
    desc: "Gestion technique de bâtiment (GTB/GTC), sûreté électronique renforcée, contrôle d'accès biométrique haut débit et sécurisation des données d'infrastructures.",
  },
  {
    icon: PiggyBank,
    title: "Secteur Bancaire & Financier",
    image: "/images/secteurs/banques.jpg",
    desc: "Systèmes de sûreté anti-intrusion certifiés, surveillance vidéo avec analyse comportementale, contrôle d'accès aux zones de coffres et continuité d'énergie sans coupure.",
  },
  {
    icon: Factory,
    title: "Industrie & Manufactures",
    image: "/images/secteurs/industrie.jpg",
    desc: "Supervision SCADA des processus industriels, télégestion d'équipements distants, distribution électrique de forte puissance et sécurité des opérateurs.",
  },
  {
    icon: Pickaxe,
    title: "Mines, Carrières & Énergie",
    image: "/images/secteurs/mines.svg",
    desc: "Automatismes durcis en environnements sévères, pesage dynamique de convois lourds, réseaux radio/fibre distants et sécurité périmétrique avancée.",
  },
  {
    icon: Hospital,
    title: "Hôpitaux & Secteur de la Santé",
    image: "/images/secteurs/hopitaux.svg",
    desc: "Sécurisation de l'alimentation électrique critique des blocs opératoires, détection incendie de haute sensibilité, gestion d'accès aux zones stériles et pharmacie.",
  },
  {
    icon: Anchor,
    title: "Ports & Terminaux maritimes",
    image: "/images/secteurs/ports.svg",
    desc: "Contrôle des flux de camions et conteneurs, lecture OCR/ANPR sur portiques, supervision des accès aux quais et vidéosurveillance maritime.",
  },
  {
    icon: Plane,
    title: "Aéroports & Zones aéroportuaires",
    image: "/images/secteurs/aeroports.svg",
    desc: "Systèmes de sûreté conformes aux exigences OACI, guidage véhicule côté piste, distribution d'énergie sécurisée et monitoring centralisé.",
  },
  {
    icon: Radio,
    title: "Télécoms & Datacenters",
    image: "/images/secteurs/telecoms.svg",
    desc: "Alimentation continue (onduleurs, groupes, solaire hybride), climatisation de précision, surveillance environnementale et contrôle d'accès physique aux baies.",
  },
];

export default function Secteurs() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="wrap">
          <span className="section-tag">Domaines d'application</span>
          <h1 className="page-hero-title">Secteurs d'intervention stratégiques</h1>
          <p className="page-hero-desc">
            Chaque secteur dispose de ses propres contraintes opérationnelles, de sécurité et d'ingénierie. Découvrez nos réponses technologiques ciblées.
          </p>
        </div>
      </section>

      {/* ── GRILLE DES SECTEURS AVEC IMAGES DÉDIÉES ── */}
      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="secteurs-grid reveal-stagger reveal">
            {secteursData.map(({ icon: Icon, title, image, desc }) => (
              <div className="secteur-card" key={title}>
                {/* Vignette visuelle cadrée */}
                <div className="secteur-img-wrap">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="secteur-img-badge">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Corps de texte */}
                <div className="secteur-body">
                  <div className="secteur-label">{title}</div>
                  <p className="secteur-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "72px",
              background: "linear-gradient(135deg, var(--dark) 0%, #172439 100%)",
              borderRadius: "20px",
              padding: "48px 40px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <span className="section-tag" style={{ color: "rgba(227,27,35,0.9)", marginBottom: "8px" }}>
                Votre secteur requiert des solutions spécifiques ?
              </span>
              <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, margin: "8px 0" }}>
                Bénéficiez d'une architecture conçue sur-mesure pour votre filière
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", margin: 0 }}>
                Nos spécialistes sectoriels étudient les contraintes réglementaires et techniques propres à votre industrie.
              </p>
            </div>
            <Link href="/contact" className="btn btn-red">
              Consulter un expert sectoriel <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
