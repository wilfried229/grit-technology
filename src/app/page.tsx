"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Car, Zap, Cpu, ShieldCheck, ArrowRight,
  Code2, Workflow, Globe, ChevronRight,
} from "lucide-react";

const expertisesPreview = [
  {
    number: "01", icon: Car, title: "Mobilité intelligente",
    desc: "Péage Free Flow, ANPR/LPR, stationnement intelligent, gestion centralisée des recettes.",
  },
  {
    number: "02", icon: Zap, title: "Infrastructures électriques",
    desc: "CFO/CFA, distribution BT, onduleurs, groupes électrogènes, photovoltaïque.",
  },
  {
    number: "03", icon: Cpu, title: "Automatisation & Supervision",
    desc: "PLC / SCADA, contrôle-commande, télégestion, monitoring et hypervision.",
  },
  {
    number: "04", icon: ShieldCheck, title: "Sûreté & Sécurité incendie",
    desc: "Vidéosurveillance IP, contrôle d'accès biométrique, détection incendie adressable.",
  },
];

const secteurs = [
  "Routes & Autoroutes", "Parkings", "Smart Cities", "Administrations publiques",
  "Banques", "Industrie", "Mines", "Hôpitaux",
];

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          HERO — PLEIN ÉCRAN
      ════════════════════════════════════════ */}
      <section className="hero" id="top" style={{ background: "linear-gradient(160deg, #060d1f 0%, #0f1e3a 60%, #0a1628 100%)", position: "relative", overflow: "hidden" }}>
        {/* Réseau tech SVG */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}
          viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grille de circuits */}
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#E31B23" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="#4a90d9" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="#E31B23" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="700" stroke="#4a90d9" strokeWidth="0.5" />
          <line x1="500" y1="0" x2="500" y2="700" stroke="#E31B23" strokeWidth="0.5" />
          <line x1="800" y1="0" x2="800" y2="700" stroke="#4a90d9" strokeWidth="0.5" />
          <line x1="1100" y1="0" x2="1100" y2="700" stroke="#E31B23" strokeWidth="0.5" />
          {/* Noeuds */}
          {[[200,200],[500,200],[800,200],[1100,200],[200,400],[500,400],[800,400],[1100,400],[200,600],[500,600],[800,600]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="#E31B23" opacity="0.8" />
          ))}
          {/* Lignes diagonales */}
          <line x1="200" y1="200" x2="500" y2="400" stroke="#E31B23" strokeWidth="1" opacity="0.6" />
          <line x1="500" y1="200" x2="800" y2="400" stroke="#4a90d9" strokeWidth="1" opacity="0.6" />
          <line x1="800" y1="200" x2="1100" y2="400" stroke="#E31B23" strokeWidth="1" opacity="0.6" />
          <line x1="200" y1="400" x2="500" y2="600" stroke="#4a90d9" strokeWidth="1" opacity="0.6" />
          <line x1="500" y1="400" x2="800" y2="600" stroke="#E31B23" strokeWidth="1" opacity="0.6" />
          {/* Cercle décoratif */}
          <circle cx="900" cy="140" r="120" stroke="#E31B23" strokeWidth="1" opacity="0.3" />
          <circle cx="900" cy="140" r="80" stroke="#4a90d9" strokeWidth="0.8" opacity="0.2" />
          <circle cx="900" cy="140" r="6" fill="#E31B23" opacity="0.9" />
        </svg>

        <div className="wrap hero-grid" style={{ position: "relative", zIndex: 2 }}>
          <div>
            <span className="hero-eyebrow" style={{ background: "rgba(227,27,35,0.15)", borderColor: "rgba(227,27,35,0.3)", color: "#ff6b6b" }}>
              Engineering Smart Infrastructure
            </span>
            <h1 className="hero-title" style={{ color: "#ffffff" }}>
              Construisons les{" "}
              <span style={{ color: "#E31B23" }}>infrastructures intelligentes</span>{" "}
              de demain.
            </h1>
            <p className="hero-slogan" style={{ color: "rgba(255,255,255,0.85)" }}>
              Engineering Smart Infrastructure
            </p>
            <p className="hero-desc" style={{ color: "rgba(255,255,255,0.6)" }}>
              Nous concevons, intégrons et maintenons des solutions technologiques fiables pour les
              infrastructures critiques, les bâtiments et les systèmes de mobilité intelligente.
            </p>
            <div className="hero-actions">
              <Link href="/expertises" className="btn btn-red">
                Découvrir nos solutions
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Parler de votre projet
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <svg className="rings" viewBox="0 0 500 460" fill="none">
              <circle cx="250" cy="230" r="170" stroke="rgba(227,27,35,0.2)" strokeWidth="1.5" />
              <circle cx="250" cy="230" r="120" stroke="rgba(74,144,217,0.2)" strokeWidth="1.5" />
              <circle cx="250" cy="230" r="70" stroke="rgba(227,27,35,0.15)" strokeWidth="1" />
              <circle cx="250" cy="230" r="7" fill="#E31B23" />
              <path d="M250 60 L390 150 L390 320 L250 400 L110 320 L110 150 Z" stroke="#E31B23" strokeWidth="1.2" fill="none" opacity="0.35" />
              {[[250,60],[390,150],[390,320],[250,400],[110,320],[110,150]].map(([cx,cy],i) => (
                <circle key={i} cx={cx} cy={cy} r="5" fill="rgba(227,27,35,0.7)" />
              ))}
            </svg>

            <div className="card-float card-a" style={{ background: "rgba(6,13,31,0.85)", border: "1px solid rgba(227,27,35,0.3)", color: "#fff" }}>
              <div className="ic" style={{ background: "rgba(227,27,35,0.2)", color: "#E31B23" }}><Car size={20} /></div>
              <div>
                <div className="t1" style={{ color: "#fff" }}>Mobilité</div>
                <div className="t2" style={{ color: "rgba(255,255,255,0.5)" }}>Free Flow & ANPR</div>
              </div>
            </div>
            <div className="card-float card-b" style={{ background: "rgba(6,13,31,0.85)", border: "1px solid rgba(74,144,217,0.3)", color: "#fff" }}>
              <div className="ic" style={{ background: "rgba(74,144,217,0.15)", color: "#4a90d9" }}><Cpu size={20} /></div>
              <div>
                <div className="t1" style={{ color: "#fff" }}>PLC / SCADA</div>
                <div className="t2" style={{ color: "rgba(255,255,255,0.5)" }}>Automatisation</div>
              </div>
            </div>
            <div className="card-float card-c" style={{ background: "rgba(6,13,31,0.85)", border: "1px solid rgba(227,27,35,0.3)", color: "#fff" }}>
              <div className="ic" style={{ background: "rgba(227,27,35,0.2)", color: "#E31B23" }}><ShieldCheck size={20} /></div>
              <div>
                <div className="t1" style={{ color: "#fff" }}>Sûreté</div>
                <div className="t2" style={{ color: "rgba(255,255,255,0.5)" }}>Sécurité incendie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          QUI SOMMES-NOUS
      ════════════════════════════════════════ */}
      <section id="about" style={{ background: "#fff" }}>
        <div className="wrap about-consulting-grid">
          <div className="about-consulting-text reveal">
            <span className="section-tag">Qui sommes-nous</span>
            <h2>L'ingénierie technologique au service de la performance</h2>
            <p>
              GRIT CONSULTING est une société d'ingénierie et d'intégration technologique spécialisée
              dans les infrastructures intelligentes, la mobilité et les systèmes de sûreté électronique
              en Afrique.
            </p>
            <p>
              Nous accompagnons les organisations publiques et privées dans la{" "}
              <strong>conception</strong>, le <strong>déploiement</strong>, l'<strong>intégration</strong>{" "}
              et la <strong>maintenance</strong> de solutions technologiques fiables, adaptées aux réalités
              opérationnelles du terrain.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/a-propos" className="btn btn-red">
                En savoir plus sur GRIT CONSULTING
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="about-visual-box reveal">
            <div className="about-visual-tags">
              <span className="about-tag" style={{ top: "12%", left: "8%" }}>🏗️ Conception</span>
              <span className="about-tag" style={{ top: "30%", right: "6%" }}>⚡ Déploiement</span>
              <span className="about-tag" style={{ top: "55%", left: "4%" }}>🔗 Intégration</span>
              <span className="about-tag" style={{ bottom: "14%", right: "10%" }}>🛠️ Maintenance</span>
              <span className="about-tag" style={{ top: "72%", left: "28%" }}>🏙️ Smart City</span>
            </div>
            <svg viewBox="0 0 300 280" fill="none" style={{ width: "220px", opacity: 0.6 }}>
              <circle cx="150" cy="140" r="100" stroke="#E31B23" strokeWidth="1.5" opacity="0.4" />
              <circle cx="150" cy="140" r="60" stroke="#0f1e3a" strokeWidth="1.5" opacity="0.3" />
              <circle cx="150" cy="140" r="20" fill="#E31B23" opacity="0.15" />
              <circle cx="150" cy="140" r="8" fill="#E31B23" />
              <line x1="150" y1="40" x2="150" y2="140" stroke="#E31B23" strokeWidth="1.5" opacity="0.5" />
              <line x1="150" y1="140" x2="238" y2="190" stroke="#0f1e3a" strokeWidth="1.5" opacity="0.5" />
              <line x1="150" y1="140" x2="62" y2="190" stroke="#E31B23" strokeWidth="1.5" opacity="0.5" />
              <circle cx="150" cy="40" r="5" fill="#E31B23" />
              <circle cx="238" cy="190" r="5" fill="#0f1e3a" />
              <circle cx="62" cy="190" r="5" fill="#E31B23" />
            </svg>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EXPERTISES APERÇU
      ════════════════════════════════════════ */}
      <section style={{ background: "var(--gray-50)" }}>
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="section-tag" style={{ justifyContent: "center" }}>Nos expertises</span>
            <h2>Des solutions technologiques conçues pour les infrastructures modernes</h2>
            <p>Quatre domaines d'expertise complémentaires pour répondre à l'ensemble de vos enjeux.</p>
          </div>

          <div className="expertise-grid reveal-stagger reveal">
            {expertisesPreview.map(({ number, icon: Icon, title, desc }) => (
              <div className="expertise-card" key={title}>
                <span className="card-number">{number}</span>
                <div className="ic-wrap"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>{desc}</p>
                <Link href="/expertises" className="expertise-card-cta">
                  Découvrir <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link href="/expertises" className="btn btn-outline">
              Voir toutes nos expertises <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTEURS APERÇU
      ════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="section-tag" style={{ justifyContent: "center" }}>Secteurs d'intervention</span>
            <h2>Des solutions pour les secteurs stratégiques</h2>
          </div>
          <div className="secteurs-grid reveal-stagger reveal">
            {secteurs.map((s) => (
              <div className="secteur-card-mini" key={s}>
                <div className="secteur-icon">
                  <Globe size={20} />
                </div>
                <div className="secteur-label">{s}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/secteurs" className="btn btn-outline">
              Voir tous les secteurs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA DARK
      ════════════════════════════════════════ */}
      <section className="cta-dark">
        <div className="wrap cta-dark-inner reveal">
          <span className="section-tag" style={{ justifyContent: "center", color: "rgba(227,27,35,0.8)" }}>
            Un projet d'infrastructure intelligente ?
          </span>
          <h2>Construisons ensemble votre solution.</h2>
          <p>
            Parlons de vos besoins et construisons ensemble une solution adaptée à vos enjeux opérationnels.
          </p>
          <div className="cta-dark-actions">
            <Link href="/contact" className="btn btn-red">
              Démarrer une discussion <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
