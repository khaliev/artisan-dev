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

## Tâche 04 — SEO technique, Local SEO & GEO (Generative Engine Optimization) [TERMINÉE]

### État & Avancement
- **Composant `<SEO.astro>`** : Centralisation des balises `title`, `meta description`, `canonical`, Open Graph, Twitter Cards, balises `hreflang` multilingues et `x-default` (FR).
- **Générateurs JSON-LD (`src/lib/seo.ts`)** :
  - Données structurées `Person` (Adlan, Reims, Grand Est, France).
  - Données structurées `FAQPage` pour la foire aux questions.
  - Données structurées `BlogPosting` avec `datePublished` et `dateModified`.
- **SEO Local** :
  - Rédaction naturelle d'une section "Zone d'intervention" sur la page d'accueil (Reims, Châlons-en-Champagne, Troyes, Épernay, Charleville-Mézières, Soissons).
  - Aucune duplication de pages par ville.
- **Generative Engine Optimization (GEO)** :
  - Intégration de **phrases définitionnelles claires** dans les 150 premiers tokens des pages d'accueil, À propos et Projets (*"Adlan est un développeur web indépendant basé à Reims..."*).
  - Structure "extraction-friendly" avec paragraphes factuels et autonomes.
  - Composant `FAQ.astro` sémantique basé sur `<details>/<summary>` et intégrant le schéma JSON-LD `FAQPage`.

### Décisions d'architecture prises
1. **Poids des premiers tokens pour les IA** : Placement prioritaire des phrases d'accroche sous forme d'une définition concise dès le sommet du DOM pour maximiser la citation par les moteurs génératifs (ChatGPT, Perplexity, Gemini, Google AI Overviews).
2. **SEO local naturel** : Inclusion des villes cibles intégrée dans une prose naturelle sur la page d'accueil au lieu de listes artificielles de mots-clés.
