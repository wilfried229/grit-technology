import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Expertises", href: "/expertises" },
  { label: "Services", href: "/services" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        {/* BRAND */}
        <div>
          <div className="grit-logo footer-logo" style={{ flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="grit-logo-word">GRIT</span>
              <span className="grit-logo-dot">.</span>
              <span className="grit-logo-word">CONSULTING</span>
            </div>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9a9a9a", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              Engineering Smart Infrastructure
            </span>
          </div>
          <p className="foot-desc" style={{ marginTop: "20px" }}>
            Conception, intégration et maintenance de solutions technologiques pour les infrastructures intelligentes en Afrique.
          </p>
          <div className="footer-social" style={{ marginTop: "20px" }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              LinkedIn
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4>Navigation</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* EXPERTISES */}
        <div>
          <h4>Expertises</h4>
          <ul>
            <li><Link href="/expertises">Mobilité intelligente</Link></li>
            <li><Link href="/expertises">Infrastructures CFO/CFA</Link></li>
            <li><Link href="/expertises">Automatisation & SCADA</Link></li>
            <li><Link href="/expertises">Sûreté électronique</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+22896283965" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={13} style={{ color: "#E31B23", flexShrink: 0 }} />
                Togo : +228 96 28 39 65
              </a>
            </li>
            <li>
              <a href="tel:+22901669557380" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={13} style={{ color: "#E31B23", flexShrink: 0 }} />
                Bénin : +229 01 66 95 57 38
              </a>
            </li>
            <li>
              <a href="tel:+22651275252" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={13} style={{ color: "#E31B23", flexShrink: 0 }} />
                Burkina : +226 51 27 52 52
              </a>
            </li>
            <li>
              <a href="mailto:contact@grit-technology.com" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={13} style={{ color: "#E31B23", flexShrink: 0 }} />
                contact@grit-technology.com
              </a>
            </li>
            <li>
              <a href="https://www.grit-technology.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Globe size={13} style={{ color: "#E31B23", flexShrink: 0 }} />
                www.grit-technology.com
              </a>
            </li>
          </ul>
          {/* WhatsApp */}
          <a
            href="https://wa.me/22896283965"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#25D366", color: "#fff", borderRadius: "999px",
              padding: "10px 18px", fontWeight: 700, fontSize: "0.82rem",
              marginTop: "16px", transition: "background .2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} GRIT CONSULTING. Tous droits réservés.</span>
        <span>Engineering Smart Infrastructure</span>
      </div>
    </footer>
  );
}
