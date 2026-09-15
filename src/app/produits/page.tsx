import Link from "next/link";
import { ArrowRight, Box, Code2, Server } from "lucide-react";

const products = [
  {
    icon: Code2,
    title: "Logiciels & plateformes",
    description: "Nous intégrons et déployons des logiciels métiers adaptés à vos opérations, pour piloter vos péages, parkings, stocks, ressources humaines et flottes.",
    items: [
      "TMAX : gestion des péages",
      "GMAX : gestion des parkings",
      "TELEXIA S-Manager : gestion de stock",
      "TELEXIA HR-Manager : gestion des ressources humaines",
      "TELEXIA F-Manager : gestion de flotte",
    ],
  },
  {
    icon: Server,
    title: "Informatique & réseaux",
    description: "Des équipements fiables pour construire une infrastructure informatique performante et disponible.",
    items: ["Serveurs, postes et équipements réseau", "Baies, fibre optique et câblage structuré", "Onduleurs et solutions de sauvegarde"],
  },
  {
    icon: Box,
    title: "Matériels de terrain",
    description: "Nous fournissons les équipements nécessaires au déploiement de vos installations technologiques et de sûreté.",
    items: ["Caméras, contrôle d'accès et détection incendie", "Automates, capteurs et instrumentation", "Équipements électriques et accessoires"],
  },
];

export default function Produits() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="section-tag">Solutions disponibles</span>
          <h1 className="page-hero-title">Nos produits</h1>
          <p className="page-hero-desc">
            Des logiciels et matériels sélectionnés pour équiper, piloter et sécuriser vos infrastructures.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="expertise-grid">
            {products.map(({ icon: Icon, title, description, items }) => (
              <article className="expertise-card" key={title}>
                <div className="ic-wrap"><Icon size={24} /></div>
                <h2 style={{ fontSize: "1.25rem", margin: "20px 0 12px" }}>{title}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{description}</p>
                <ul style={{ marginTop: "20px" }}>
                  {items.map((item) => <li key={item}><span>{item}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link href="/contact" className="btn btn-red">
              Demander une solution <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
