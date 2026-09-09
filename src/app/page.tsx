"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Lightbulb,
  Menu,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const valueCards = [
  { title: "Innovation", description: "Nous explorons les technologies pertinentes pour proposer des solutions réellement adaptées, pas juste à la mode.", icon: Lightbulb },
  { title: "Excellence", description: "Chaque livrable est pensé pour durer : code propre, architecture solide, documentation claire.", icon: Sparkles },
  { title: "Fiabilité", description: "Des engagements tenus, des délais respectés, une communication claire du premier au dernier jour.", icon: ShieldCheck },
  { title: "Satisfaction client", description: "Nous mesurons notre réussite à la vôtre : un accompagnement qui continue après la mise en production.", icon: Check },
];

const serviceCards = [
  { number: "01", title: "Développement web", description: "Sites vitrines, plateformes et applications web performantes et évolutives.", meta: "Web", icon: Code2 },
  { number: "02", title: "Développement d'applications", description: "Applications mobiles et métiers conçues autour de vos usages réels.", meta: "Mobile & SaaS", icon: MonitorSmartphone },
  { number: "03", title: "Solutions digitales", description: "Digitalisation de vos processus internes et de votre relation client.", meta: "Transformation", icon: Globe },
  { number: "04", title: "Automation", description: "Automatisation des tâches répétitives pour gagner du temps et réduire les erreurs.", meta: "Workflow", icon: Workflow },
  { number: "05", title: "Infographie et design", description: "Identité visuelle et supports graphiques cohérents avec votre image de marque.", meta: "Branding", icon: Sparkles },
  { number: "06", title: "Maintenance informatique", description: "Suivi technique régulier pour garder vos systèmes stables et à jour.", meta: "Support", icon: ShieldCheck },
  { number: "07", title: "Réseaux et systèmes", description: "Conception et sécurisation d'infrastructures réseau adaptées à votre taille.", meta: "Infrastructure", icon: Cpu },
  { number: "08", title: "Conseil technologique et audit", description: "Diagnostic indépendant de votre existant et recommandations concrètes.", meta: "Stratégie", icon: Lightbulb },
];

const whyItems = [
  "Solutions sur mesure",
  "Technologies modernes",
  "Équipe professionnelle",
  "Respect des délais",
  "Excellent rapport qualité/prix",
];

const projects = [
  { category: "Sites web", cat: "web", number: "01", title: "Plateforme vitrine corporate", description: "Refonte complète d'un site institutionnel, orientée conversion et rapidité.", thumb: "linear-gradient(135deg, #fdeded 0%, #fff 100%)" },
  { category: "Applications", cat: "app", number: "02", title: "Application de gestion ressources humaines", description: "Outil métier sur mesure pour le suivi de paie et de stocks en temps réel.", thumb: "linear-gradient(135deg, #f3f2f0 0%, #fdeded 100%)" },
  { category: "Solutions digitales", cat: "digital", number: "03", title: "Automatisation de processus", description: "Digitalisation d'un flux métier auparavant géré manuellement, avec tableau de bord.", thumb: "linear-gradient(135deg, #fdeded 0%, #f7f6f5 100%)" },
  { category: "Sites web", cat: "web", number: "05", title: "Boutique en ligne", description: "Plateforme e-commerce avec gestion de catalogue et paiement intégré.", thumb: "linear-gradient(135deg, #fff 0%, #fdeded 100%)" },
  { category: "Applications", cat: "app", number: "06", title: "Application mobile de suivi", description: "App mobile pour le suivi d'interventions terrain avec notifications en temps réel.", thumb: "linear-gradient(135deg, #fdeded 0%, #f3f2f0 100%)" },
];

const testimonials = [
  { name: "A. Koffi", initials: "AK", role: "Directrice, secteur commerce", quote: "Une équipe réactive qui a bien compris nos contraintes. Le projet a été livré dans les temps, avec un vrai suivi après la mise en ligne." },
  { name: "M. Dossou", initials: "MD", role: "Responsable IT, PME industrielle", quote: "Grit Technologie a pris le temps de comprendre notre activité avant de proposer une solution. Le résultat est simple à utiliser et solide techniquement." },
  { name: "C. Bada", initials: "CB", role: "Coordinateur digital, organisation non lucrative", quote: "La qualité du conseil et de l’exécution nous a vraiment rassuré. Nous avons eu une vraie relation de confiance, étape par étape." },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("Tous");

  const projectFilters = [
    { label: "Tous", category: null },
    { label: "Sites web", category: "web" },
    { label: "Applications", category: "app" },
    { label: "Solutions digitales", category: "digital" },
  ];

  const visibleProjects = projects.filter((project) => {
    const activeFilter = projectFilters.find((filter) => filter.label === activeProjectFilter);
    return !activeFilter?.category || project.cat === activeFilter.category;
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const revealItems = document.querySelectorAll(".reveal, .reveal-stagger");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="grit-page">
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>

      <header className={isScrolled ? "grit-header scrolled" : "grit-header"}>
        <div className="wrap nav-inner">
          <a href="#top" className="grit-logo" aria-label="Grit Technologie accueil">
            <span className="grit-logo-mark" aria-hidden="true">
              <span className="grit-logo-orbit">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <path
                    d="M 50,10 A 40,40 0 1,1 10,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <path
                    d="M 50,10 A 40,40 0 1,1 10,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="grit-logo-core" />
              </span>
            </span>
            <span className="grit-logo-word">GRIT</span>
            <span className="grit-logo-dot">.</span>
            <span className="grit-logo-word">TECHNOLOGIE</span>
          </a>

          <nav className="links" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <a href="#contact" className="btn btn-red btn-sm">
              Demander un devis
            </a>
            <button
              type="button"
              className={isMenuOpen ? "menu-btn open" : "menu-btn"}
              id="menuBtn"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={isMenuOpen ? "mobile-nav open" : "mobile-nav"} id="mobileNav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-red btn-sm" onClick={() => setIsMenuOpen(false)}>
          Demander un devis
        </a>
      </div>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <span className="hero-eyebrow">Enterprise technology & digital systems</span>
              <h1 className="hero-title">
                GRIT <span className="brand">TECHNOLOGIE</span>
              </h1>
              <p className="hero-slogan">Des systèmes numériques conçus pour la performance, la fiabilité et la croissance durable.</p>
              <p className="hero-desc">
                Grit Technologie accompagne les entreprises dans leur transformation numérique avec des solutions sur mesure en développement, infrastructure, automatisation et conseil stratégique.
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-red">
                  Découvrir nos services
                </a>
                <a href="#contact" className="btn btn-outline">
                  Nous contacter
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustration de services techniques">
              <svg className="rings" viewBox="0 0 500 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250" cy="230" r="170" stroke="#ECEBE9" strokeWidth="1.5" />
                <circle cx="250" cy="230" r="120" stroke="#ECEBE9" strokeWidth="1.5" />
                <circle cx="250" cy="230" r="6" fill="#E31B23" />
                <path d="M250 110 L340 180 L340 300 L250 350 L160 300 L160 180 Z" stroke="#E31B23" strokeWidth="1.4" fill="none" opacity="0.5" />
                <circle cx="250" cy="110" r="4" fill="#171717" />
                <circle cx="340" cy="180" r="4" fill="#171717" />
                <circle cx="340" cy="300" r="4" fill="#171717" />
                <circle cx="250" cy="350" r="4" fill="#171717" />
                <circle cx="160" cy="300" r="4" fill="#171717" />
                <circle cx="160" cy="180" r="4" fill="#171717" />
              </svg>

              <div className="card-float card-a">
                <div className="ic">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="t1">Infrastructure</div>
                  <div className="t2">Réseaux & systèmes</div>
                </div>
              </div>

              <div className="card-float card-b">
                <div className="ic">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="t1">Développement</div>
                  <div className="t2">Web & applications</div>
                </div>
              </div>

              <div className="card-float card-c">
                <div className="ic">
                  <Workflow size={20} />
                </div>
                <div>
                  <div className="t1">Automation</div>
                  <div className="t2">Processus optimisés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap about-grid">
            <div className="about-text reveal">
              <span className="section-tag">À propos</span>
              <h2>Votre partenaire technologique</h2>
              <p>
                Grit Technologie accompagne les organisations dans leur transformation numérique, avec une conviction simple : la technologie doit servir des objectifs concrets, pas l'inverse.
              </p>
              <p>
                Notre équipe conçoit des solutions sur mesure — du développement logiciel à l'infrastructure réseau — en gardant toujours en vue la fiabilité, la sécurité et la capacité à grandir dans la durée.
              </p>
            </div>

            <div className="value-grid reveal-stagger reveal">
              {valueCards.map(({ title, description, icon: Icon }) => (
                <div className="value-card" key={title}>
                  <div className="ic">
                    <Icon size={18} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="section-tag" style={{ justifyContent: "center" }}>Nos services</span>
              <h2>Des solutions technologiques complètes</h2>
              <p>De la conception à la maintenance, une offre pensée pour couvrir l'ensemble de vos besoins technologiques.</p>
            </div>

            <div className="service-grid reveal-stagger reveal">
              {serviceCards.map(({ number, title, description, meta, icon: Icon }) => (
                <div className="service-card" key={title}>
                  <div className="ic">
                    <Icon size={18} />
                  </div>
                  <div className="service-index">{number}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-meta">{meta}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why">
          <div className="wrap why-grid">
            <div className="why-visual reveal" aria-hidden="true">
              <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="120" r="70" stroke="#E31B23" strokeWidth="1.5" opacity="0.6" />
                <circle cx="150" cy="120" r="40" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
                <circle cx="150" cy="120" r="6" fill="#E31B23" />
                <path d="M40 260 L110 220 L170 260 L260 200" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
                <circle cx="40" cy="260" r="5" fill="#fff" />
                <circle cx="110" cy="220" r="5" fill="#fff" />
                <circle cx="170" cy="260" r="5" fill="#fff" />
                <circle cx="260" cy="200" r="5" fill="#E31B23" />
              </svg>
            </div>

            <div>
              <span className="section-tag">Pourquoi nous choisir</span>
              <h2>Pourquoi choisir Grit Technologie ?</h2>
              <div className="why-list">
                {whyItems.map((label) => (
                  <div className="why-item" key={label}>
                    <div className="check">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="label">{label}</span>
                  </div>
                ))}
              </div>

              <div className="stats-row">
                <div className="stat"><div className="num" data-count="50">10</div><div className="lbl">Projets réalisés</div></div>
                <div className="stat"><div className="num" data-count="30">10</div><div className="lbl">Clients satisfaits</div></div>
                <div className="stat"><div className="num" data-count="99" data-suffix="%">10</div><div className="lbl">Satisfaction</div></div>
                <div className="stat"><div className="num" data-static="24/7">24/7</div><div className="lbl">Assistance</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="section-tag" style={{ justifyContent: "center" }}>Nos réalisations</span>
              <h2>Des projets, des résultats concrets</h2>
              <p>Un aperçu des types de projets que nous menons — chaque réalisation est le fruit d'un travail sur mesure.</p>
            </div>

            <div className="filters reveal" role="tablist" aria-label="Filtrer les réalisations">
              {projectFilters.map((filter) => (
                <button
                  type="button"
                  className={activeProjectFilter === filter.label ? "filter-btn active" : "filter-btn"}
                  key={filter.label}
                  role="tab"
                  aria-selected={activeProjectFilter === filter.label}
                  onClick={() => setActiveProjectFilter(filter.label)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="portfolio-grid reveal-stagger">
              {visibleProjects.map((project) => (
                <div className="project-card" key={project.title} data-cat={project.cat}>
                  <div className="project-thumb" style={{ background: project.thumb }}>
                    <span className="project-cat">{project.category}</span>
                    <span className="mono">{project.number}</span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href="#contact" className="project-link">
                      Voir le projet
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="section-tag" style={{ justifyContent: "center" }}>Témoignages</span>
              <h2>Ce que nos clients en disent</h2>
              <p>Exemples de retours clients — à personnaliser avec vos propres témoignages.</p>
            </div>

            <div className="testi-grid reveal-stagger reveal">
              {testimonials.map((item) => (
                <div className="testi-card" key={item.name}>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg key={`${item.name}-${index}`} viewBox="0 0 20 20">
                        <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 7.5l6.4-.6z" />
                      </svg>
                    ))}
                  </div>
                  <p className="testi-text">« {item.quote} »</p>
                  <div className="testi-person">
                    <div className="avatar">{item.initials}</div>
                    <div>
                      <div className="name">{item.name}</div>
                      <div className="role">{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact-panel">
              <div>
                <span className="section-tag" style={{ color: "#ffe2d9" }}>Un projet en tête ?</span>
                <h2>
                  Faisons-le <span className="brand-light">avancer.</span>
                </h2>
              </div>

              <div className="contact-copy">
                <p>
                  Parlez-nous de votre enjeu. Une première discussion peut clarifier le bon cap et débloquer votre prochaine étape.
                </p>
                <a href="mailto:contact@grit-technology.com" className="contact-link">
                  contact@grit-technology.com
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <div>
            <div className="grit-logo footer-logo">
              <span className="grit-logo-word">GRIT</span>
              <span className="grit-logo-dot">.</span>
              <span className="grit-logo-word">TECHNOLOGIE</span>
            </div>
            <p className="foot-desc">
              Grit Technologie accompagne les organisations dans la conception et la mise en place de solutions numériques efficaces, durables et orientées résultats.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <ArrowUpRight size={14} />
              </a>
              <a href="#" aria-label="X">
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              {navItems.slice(0, 3).map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Expertises</h4>
            <ul>
              <li><a href="#services">Développement web</a></li>
              <li><a href="#services">Applications</a></li>
              <li><a href="#services">Automation</a></li>
              <li><a href="#services">Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@grit-technology.com">contact@grit-technology.com</a></li>
              <li><a href="tel:+22896283965">+228 96 28 39 65</a></li>
              <li><a href="#">Togo, Burkina Faso</a></li>
            </ul>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Grit Technologie</span>
          <span>Tous droits réservés</span>
        </div>
      </footer>
    </div>
  );
}
