# Registre des Décisions & État du Projet

## Tâche 01 — Bootstrap du projet [TERMINÉE]
- **Astro 7 (v7.2.2) + TypeScript strict** initialisé.
- Routage i18n natif pour FR, EN, RU (15 pages).
- Config des collections dans `src/content.config.ts`.
- Design system CSS tokens avec thèmes clair/sombre.

---

## Tâche 02 — Collection Projets [TERMINÉE]

### État & Avancement
- **Composant `ProjectCard.astro`** implémenté avec gestion conditionnelle des médias (mode carte textuelle si `coverImage` est absente).
- **Pages Listing Projets** pour chaque langue (`/projets/`, `/en/projects/`, `/ru/proekty/`) avec grille responsive, filtrage par langue et tri avec mise en avant des projets `featured`.
- **Pages de Détail Dynamiques (`[slug].astro`)** créées pour FR, EN et RU avec gestion stricte de la règle `optional_media_rule` :
  - Masquage automatique du bloc image si `coverImage` absente.
  - Masquage automatique de la galerie d'images si `gallery` absente.
  - Integration iframe responsive YouTube si `youtubeUrl` présent (sinon bloc masqué).
  - Boutons Démo / Repo conditionnels.
- **Entrées de données de test (6 fichiers MD)** :
  - `eco-habitat-grand-est` (FR, EN, RU) : Projet complet avec image, galerie, vidéo YouTube, démo & repo.
  - `cli-data-artisan` (FR, EN, RU) : Projet minimaliste sans image, sans vidéo, sans liens pour valider l'absence de blocs cassés.
- **21 pages statiques au total** générées lors du build.

### Décisions d'architecture prises
1. **Identifiants d'entrée unifiés (`generateId`)** : Configuration du loader `glob()` avec `generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, '')` afin d'autoriser des slugs identiques partagés entre les langues tout en garantissant des identifiants d'entrées uniques.
2. **Rendu conditionnel strict** : Aucun élément conteneur HTML vide n'est rendu lorsque les médias optionnels sont absents, évitant tout problème d'espacement ou d'accessibilité.
