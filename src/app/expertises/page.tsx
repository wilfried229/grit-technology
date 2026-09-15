"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertises as expertisesList } from "@/lib/expertises";

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
            Sept pôles d'excellence technologique pour concevoir, automatiser et sécuriser vos infrastructures critiques.
          </p>
        </div>
      </section>

      {/* ── GRILLE DES EXPERTISES DÉTAILLÉES ── */}
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
