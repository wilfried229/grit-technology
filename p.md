# Refonte complète — GRIT CONSULTING

## Objectif

Rebranding total de **Grit Technologie → GRIT CONSULTING** avec une nouvelle architecture de site orientée ingénierie d'infrastructure intelligente.

---

## Nouvelle structure des pages

| Route | Page | Contenu |
|---|---|---|
| `/` | **Accueil** | Hero + Qui sommes-nous (aperçu) + Expertises (aperçu) + Secteurs + CTA |
| `/a-propos` | **À propos** | Présentation complète + Vision / Mission / Valeurs |
| `/expertises` | **Expertises** | 4 domaines : Mobilité, Électrique, Automatisation, Sûreté |
| `/services` | **Services** | Timeline 5 étapes : Conseil → Études → Intégration → Formation → Maintenance |
| `/secteurs` | **Secteurs** | Grille des 11 secteurs d'intervention avec hover |
| `/notre-approche` | **Notre approche** | Parcours 6 étapes : Études → Fourniture → Intégration → Installation → Formation → Support |
| `/pourquoi-grit` | **Pourquoi GRIT** | 5 blocs argumentaires + visuel premium |
| `/contact` | **Contact** | Formulaire complet + coordonnées (Togo, Bénin, Burkina Faso) + WhatsApp |

---

## Composants partagés à mettre à jour

### [MODIFY] `Navbar.tsx`
- Nouveau logo : **GRIT CONSULTING** + sous-titre *Engineering Smart Infrastructure*
- 8 liens de navigation mis à jour
- CTA : **Parler de votre projet** (lien vers `/contact`)

### [MODIFY] `Footer.tsx`
- Branding : GRIT CONSULTING / Engineering Smart Infrastructure
- Téléphones : Togo, Bénin, Burkina Faso
- Email + WhatsApp + réseaux sociaux

### [MODIFY] `layout.tsx`
- Nouveau `<title>` : *GRIT CONSULTING | Engineering Smart Infrastructure*
- Nouvelle `<description>` et keywords (Afrique, ANPR, PLC SCADA, Free Flow…)

### [MODIFY] `globals.css`
- Nouveaux styles : `.expertise-card`, `.services-timeline`, `.secteurs-grid`, `.approach-steps`, `.vision-mission`, `.contact-form`

---

## Pages à créer / modifier

### [MODIFY] `page.tsx` — Accueil
- Hero plein écran avec visuel tech (SVG réseau de lignes)
- Section "Qui sommes-nous" (2 colonnes)
- Aperçu des 4 expertises (cards)
- Grille secteurs (aperçu)
- Section CTA sombre premium

### [MODIFY] `a-propos/page.tsx`
- Présentation GRIT CONSULTING complète
- Section Vision / Mission / Valeurs (3 colonnes)

### [NEW] `expertises/page.tsx`
- 4 grandes cartes interactives avec icônes + liste de contenu + CTA

### [MODIFY] `services/page.tsx`
- Timeline verticale animée 5 étapes

### [NEW] `secteurs/page.tsx`
- Grille 11 secteurs avec effets hover

### [NEW] `notre-approche/page.tsx`
- Parcours graphique 6 étapes animé

### [NEW] `pourquoi-grit/page.tsx`
- 5 blocs argumentaires sur fond premium

### [MODIFY] `contact/page.tsx`
- Formulaire complet (7 champs)
- Bloc coordonnées 4 pays/contacts
- Bouton WhatsApp

---

## Vérification

- `npm run dev` pour tester toutes les routes
- Contrôle responsive mobile / desktop
- Vérification du lien actif dans la navbar

> [!NOTE]
> Les anciennes pages `/realisations` et `/temoignages` seront conservées mais retirées du menu. Elles peuvent être supprimées plus tard si tu le souhaites.
