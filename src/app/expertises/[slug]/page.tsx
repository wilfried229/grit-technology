import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { expertises } from "@/lib/expertises";

export function generateStaticParams() {
  return expertises.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const expertise = expertises.find((item) => item.slug === params.slug);
  return {
    title: expertise ? `${expertise.shortTitle} | GRIT CONSULTING` : "Expertise | GRIT CONSULTING",
  };
}

export default function ExpertiseDetail({ params }: { params: { slug: string } }) {
  const expertise = expertises.find((item) => item.slug === params.slug);

  if (!expertise) {
    notFound();
  }

  const Icon = expertise.icon;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/expertises" className="expertise-card-cta" style={{ marginBottom: "24px" }}>
            <ArrowLeft size={14} /> Toutes nos expertises
          </Link>
          <span className="section-tag">Domaine {expertise.number}</span>
          <h1 className="page-hero-title">{expertise.title}</h1>
          <p className="page-hero-desc">{expertise.desc}</p>
        </div>
      </section>

      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="expertise-card" style={{ maxWidth: "900px", margin: "-24px auto 0", position: "relative" }}>
            <div className="ic-wrap"><Icon size={28} /></div>
            <h2 style={{ fontSize: "1.6rem", margin: "24px 0 20px" }}>Ce que nous réalisons</h2>
            <ul style={{ display: "grid", gap: "14px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {expertise.points.map((point) => (
                <li key={point} style={{ alignItems: "flex-start" }}><span>{point}</span></li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-red" style={{ marginTop: "32px" }}>
              Parler de votre projet <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
