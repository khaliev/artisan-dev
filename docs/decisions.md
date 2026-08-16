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

### État & Avancement
- **Variables CSS & Tokens (`src/styles/tokens.css`)** : Thème clair ivoire chaud / crème (`#F8F5EE` / `#FFFDF8`), thème sombre charbon doux / graphite (`#1C1B1A` / `#262422`), typographie éditoriale (*Newsreader* / *Plus Jakarta Sans* / *JetBrains Mono*), et contours de focus accessibles (WCAG 2.2 AA).
- **Bascule de Thème** : Toggle manuel dans le `Header.astro` avec persistance `localStorage` et script inline anti-FOUC sans flash blanc au rechargement.
- **Bibliothèque de Composants UI Atomiques** :
  - `Tag.astro` : Étiquettes de mots-clés et stack technique avec variantes (`default`, `accent`, `outline`).
  - `Badge.astro` : Badges statutaires (`featured`, `status`, `category`).
  - `CTAButton.astro` : Boutons d'action réutilisables avec gestion des liens externes.
  - `ArticleCard.astro` : Carte d'article de blog avec extrait et temps de lecture.
  - `PlaygroundCard.astro` : Carte pour le laboratoire d'expérimentations.
  - `Timeline.astro` : Frise chronologique pour le parcours et les expériences.
- **Intégration sur les Vues** : Mise à jour de `a-propos.astro`, `ProjectCard.astro` et intégration de la frise chronologique.

### Décisions d'architecture prises
1. **Évite les extrêmes de contraste** : Zéro noir pur (`#000`) et zéro blanc pur (`#fff`) pour une esthétique chaude et un confort de lecture prolongé.
2. **Atomic Design & Modularité** : Séparation stricte des composants réutilisables (`Tag`, `Badge`, `CTAButton`, `Timeline`) pour garantir un code DRY et facile à maintenir.
