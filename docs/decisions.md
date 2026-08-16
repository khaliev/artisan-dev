# Registre des Décisions & État du Projet

## Tâche 01 — Bootstrap du projet [TERMINÉE]
- **Astro 7 (v7.2.2) + TypeScript strict** initialisé.
- Routage i18n natif pour FR, EN, RU (15 pages).
- Config des collections dans `src/content.config.ts`.
- Design system CSS tokens avec thèmes clair/sombre.

---

## Tâche 02 — Collection Projets [TERMINÉE]
- Composant `ProjectCard.astro` avec affichage conditionnel propre.
- Listings et pages de détail dynamiques multilingues (FR, EN, RU).
- Respect de la règle `optional_media_rule`.

---

## Tâche 03 — Design System & Thèmes [TERMINÉE]
- Tokens CSS, thèmes clair/sombre conformes WCAG AA sans noir/blanc pur.
- Composants atomiques (`Tag`, `Badge`, `CTAButton`, `ArticleCard`, `PlaygroundCard`, `Timeline`).

---

## Tâche 04 — SEO technique, Local SEO & GEO [TERMINÉE]
- Composant `<SEO.astro>` avec Open Graph, Twitter Cards et `hreflang` (`x-default`).
- Générateurs JSON-LD pour `Person`, `FAQPage` et `BlogPosting`.
- Section GEO et bloc Local SEO rédigé naturellement sur les pages principales.

---

## Tâche 05 — Blog / Journal [TERMINÉE]

### État & Avancement
- **Mise en page éditoriale** des listings de blog (`/blog/`, `/en/blog/`, `/ru/blog/`) à l'aide d'une liste épurée avec le composant `ArticleCard.astro`.
- **Pages de Détail Dynamiques d'Articles (`[slug].astro`)** pour FR, EN et RU :
  - Métadonnées complètes : Auteur, date de publication, date de mise à jour, catégorie, temps de lecture.
  - **Table des Matières (TOC)** automatique générée à partir des ancres de titres (`headings`).
  - Intégration conditionnelle des vidéos YouTube et des images de couverture.
  - **Section "Articles liés"** suggérant 2 articles similaires de la même langue.
  - Injection du schéma JSON-LD `BlogPosting` enrichi.
- **Flux RSS Officiel (`/rss.xml`)** configuré via `@astrojs/rss`.
- **6 Fichiers Markdown d'Exemple** créés (2 articles × 3 langues) :
  - *Pourquoi et comment adopter Astro pour le développement web éco-conçu* (Article complet long-form).
  - *L'accessibilité WCAG 2.2 au cœur de l'artisanat numérique* (Note de journal courte).
- **27 pages statiques au total** générées lors du build.

### Décisions d'architecture prises
1. **Ligne de lecture confortable** : Restriction de la largeur maximale du corps de texte d'article à 720px avec typographie agrandie pour un confort de lecture optimal.
2. **RSS unifié et trié** : Inclusion de tous les articles publiés dans le flux RSS principal `/rss.xml` ordonnés par date de publication récente.

---

## Tâche 06 — Expérience & Atelier [TERMINÉE]

### État & Avancement
- **Collection `experience`** alimentée par 2 fichiers YAML dans `src/content/experience/` (poste actuel + précédent).
- **Pages À propos (FR/EN/RU)** refactorisées pour lire la collection via `getCollection('experience')` au lieu de données en dur. Tri automatique : postes actuels en premier, puis `dateStart` décroissant.
- **`Timeline.astro`** enrichi d'une prop `locale` pour adapter le label "Présent / Present / Настоящее время" selon la langue.
- **Collection `playground`** alimentée par 9 fichiers MD (3 items × 3 langues) :
  - *Thème sombre adaptatif sans JavaScript* (experiment)
  - *Composant Card accessible avec focus visible* (component)
  - *Mesurer le poids carbone d'une page web* (lab-note)
- **Pages listing Atelier** (`/atelier/`, `/en/playground/`, `/ru/masterskaya/`) : grille CSS auto-fill + filtres par `type` en JS vanilla minimal (aucun framework).
- **Pages détail Atelier** : 3 répertoires `[slug].astro` (FR/EN/RU) avec rendu Markdown, champs optionnels safe, badge type accent, lien retour localisé.
- **36 pages statiques** générées au build (depuis 27 à la tâche 05).

### Décisions d'architecture prises
1. **Contenu d'expérience centralisé** : les fichiers YAML dans `experience/` sont la source unique de vérité pour les 3 pages About — plus de duplication entre langues.
2. **Filtre JS minimaliste** : le filtre par type est implémenté en ~15 lignes de JS natif sur `data-type` attributes — aucune lib, aucun bundle supplémentaire.
3. **Badge type accentué** : sur les pages détail Atelier, le badge de type utilise `var(--color-accent)` (bordure + texte) au lieu du badge neutre des projets, pour renforcer le ton "lab" de l'Atelier.

