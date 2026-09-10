"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    pays: "Togo",
    sujet: "Mobilité intelligente",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="wrap">
          <span className="section-tag">Contactez nos équipes</span>
          <h1 className="page-hero-title">Parler de votre projet</h1>
          <p className="page-hero-desc">
            Nos ingénieurs et consultants sont à votre disposition pour analyser vos besoins, planifier une visite de site ou concevoir votre avant-projet.
          </p>
        </div>
      </section>

      {/* ── FORMULAIRE & COORDONNÉES ── */}
      <section style={{ background: "#fff", paddingBottom: "100px" }}>
        <div className="wrap">
          <div className="contact-layout">
            {/* Formulaire (7 champs) */}
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "40px 36px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: "8px" }}>
                Transmettez-nous votre demande
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "0.93rem", marginBottom: "28px" }}>
                Remplissez ce formulaire et notre équipe technique vous recontactera sous 24 à 48 heures.
              </p>

              {submitted ? (
                <div
                  style={{
                    background: "rgba(37, 211, 102, 0.1)",
                    border: "1px solid rgba(37, 211, 102, 0.4)",
                    borderRadius: "var(--radius-sm)",
                    padding: "32px",
                    textAlign: "center",
                  }}
                >
                  <CheckCircle2 size={42} style={{ color: "#25D366", margin: "0 auto 16px" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
                    Message envoyé avec succès
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                    Merci pour votre sollicitation. Un ingénieur d'affaires GRIT CONSULTING reviendra vers vous très rapidement.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Champ 1: Nom complet */}
                  <div className="form-field">
                    <label htmlFor="nom">Nom &amp; Prénom *</label>
                    <input
                      id="nom"
                      type="text"
                      required
                      placeholder="Ex: Jean Koffi"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>

                  {/* Champ 2: Email professionnel */}
                  <div className="form-field">
                    <label htmlFor="email">Email professionnel *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Ex: j.koffi@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Champ 3: Téléphone */}
                  <div className="form-field">
                    <label htmlFor="telephone">Téléphone / Mobile *</label>
                    <input
                      id="telephone"
                      type="tel"
                      required
                      placeholder="Ex: +228 96 28 39 65"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                  </div>

                  {/* Champ 4: Entreprise / Organisation */}
                  <div className="form-field">
                    <label htmlFor="entreprise">Entreprise / Organisation *</label>
                    <input
                      id="entreprise"
                      type="text"
                      required
                      placeholder="Ex: Ministère des Transports / Société X"
                      value={formData.entreprise}
                      onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                    />
                  </div>

                  {/* Champ 5: Pays d'intervention */}
                  <div className="form-field">
                    <label htmlFor="pays">Pays d'intervention *</label>
                    <select
                      id="pays"
                      value={formData.pays}
                      onChange={(e) => setFormData({ ...formData, pays: e.target.value })}
                    >
                      <option value="Togo">Togo</option>
                      <option value="Bénin">Bénin</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                      <option value="Sénégal">Sénégal</option>
                      <option value="Niger">Niger</option>
                      <option value="Mali">Mali</option>
                      <option value="Autre pays">Autre pays</option>
                    </select>
                  </div>

                  {/* Champ 6: Sujet / Domaine d'expertise */}
                  <div className="form-field">
                    <label htmlFor="sujet">Domaine d'intérêt *</label>
                    <select
                      id="sujet"
                      value={formData.sujet}
                      onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                    >
                      <option value="Mobilité intelligente">Mobilité intelligente (Péage, Free Flow, ANPR)</option>
                      <option value="Infrastructures électriques">Infrastructures électriques (CFO/CFA, Onduleurs)</option>
                      <option value="Automatisation & SCADA">Automatisation &amp; Supervision (SCADA, PLC)</option>
                      <option value="Sûreté & Sécurité incendie">Sûreté électronique &amp; Sécurité incendie</option>
                      <option value="Audit & Conseil">Audit technique &amp; Étude de faisabilité</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>

                  {/* Champ 7: Message détaillé */}
                  <div className="form-field full">
                    <label htmlFor="message">Description de votre projet ou besoin *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Précisez le contexte, les objectifs et les délais envisagés..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-field full" style={{ marginTop: "12px" }}>
                    <button type="submit" className="btn btn-red" style={{ width: "100%", justifyContent: "center" }}>
                      Envoyer la demande technique <Send size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bloc coordonnées 4 pays/contacts & WhatsApp */}
            <div className="contact-info-panel">
              {/* Togo */}
              <div className="contact-info-card">
                <h4>Siège Togo</h4>
                <div className="contact-info-item">
                  <MapPin size={16} />
                  <span>Lomé, Togo</span>
                </div>
                <div className="contact-info-item">
                  <Phone size={16} />
                  <a href="tel:+22896283965">+228 96 28 39 65</a>
                </div>
              </div>

              {/* Bénin */}
              <div className="contact-info-card">
                <h4>Bureau Bénin</h4>
                <div className="contact-info-item">
                  <MapPin size={16} />
                  <span>Cotonou, Bénin</span>
                </div>
                <div className="contact-info-item">
                  <Phone size={16} />
                  <a href="tel:+22901669557380">+229 01 66 95 57 38</a>
                </div>
              </div>

              {/* Burkina Faso */}
              <div className="contact-info-card">
                <h4>Bureau Burkina Faso</h4>
                <div className="contact-info-item">
                  <MapPin size={16} />
                  <span>Ouagadougou, Burkina Faso</span>
                </div>
                <div className="contact-info-item">
                  <Phone size={16} />
                  <a href="tel:+22651275252">+226 51 27 52 52</a>
                </div>
              </div>

              {/* Email centralisé */}
              <div className="contact-info-card">
                <h4>Courriel général</h4>
                <div className="contact-info-item">
                  <Mail size={16} />
                  <a href="mailto:contact@grit-technology.com">contact@grit-technology.com</a>
                </div>
              </div>

              {/* Bouton WhatsApp direct */}
              <a
                href="https://wa.me/22896283965"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Échanger sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
