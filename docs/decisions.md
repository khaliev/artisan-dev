# Registre des Décisions & État du Projet

## Statut global : PRÊT POUR MISE EN LIGNE

> Note : les projets Éco-Habitat / CLI Data Artisan ainsi que le parcours
> professionnel (experience YAML + bios À propos) restent à finaliser par
> l'auteur. La structure et les traductions sont en place.

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

---

## Tâche 07 — Contenu réel & traductions finales [TERMINÉE]

### État & Avancement
- **`src/data/site.ts` mis à jour** avec l'identité réelle : auteur « Adlan KHALIEV », email `adlan.khaliev@tuta.io`, GitHub `github.com/khaliev`, LinkedIn `linkedin.com/in/khaliev`.
- **Nouveau projet réel : DEZAL CONSTRUCTION** (entreprise de maçonnerie générale & rénovation à Reims), ajouté en FR/EN/RU (`translationKey: "dezal"`), avec `demoUrl → https://www.dezal.fr/`, cover + galerie utilisant les vraies images du site client.
- **Cohérence des `translationKey` vérifiée** dans les 3 langues pour toutes les collections (projets, blog, playground) : aucune page orpheline.
- **39 pages statiques** générées au build (depuis 36 à la tâche 06).

### Reste à faire par l'auteur
- Remplacer le contenu des projets Éco-Habitat et CLI Data Artisan (exemples).
- Remplacer le parcours professionnel (fichiers YAML `experience/` + bios/FAQ des pages À propos).

### Décisions d'architecture prises
1. **Contenu non inventé** : conformément à la contrainte GEO, seules les informations fournies par l'auteur ou observables sur le site client ont été utilisées. Les champs optionnels médias des autres projets sont conservés tels quels (modification différée par l'auteur).

---

## Tâche 08 — Redesign : professionnel, moderne et vivant [TERMINÉE]

### État & Avancement
- **`src/styles/tokens.css` réécrit** comme source unique du design :
  - Palettes **chaudes** : ivoire `#FAF7F0` (light) / charbon doux `#191714` (dark), conformes WCAG AA (contrastes vérifiés).
  - Accent **teal** `#0E7A6E` (light) / `#2DD4BF` (dark), couleur d'énergie secondaire **ambre** `#B45309` / `#F5B73D` (≤10 % de la surface, règle 60/30/10).
  - Échelle typographique élargie (`--text-6xl`/`--text-7xl`), `letter-spacing: -0.02em`, `clamp(2.5rem → 4.5rem)` pour le hero.
  - Ombres chaudes (`--shadow-sm/md/lg/hover`), radius 12-16px, transitions 150-250ms `ease-out`, règle globale `prefers-reduced-motion`.
- **Nouveau composant `Hero.astro`** (utilisé sur les 3 homepages) : titre XXL orienté valeur, sous-titre avec disponibilité (alternance sept. 2026 + missions freelance), badge « Disponible » à **point vert pulsant**, fond vivant CSS-only (grille de points + halo animé), 2 CTA contrastés, preuves.
- **Homepages FR/EN/RU restructurées** : alternance des fonds de section, **CTA final inversé à fond accent**, sections en `data-reveal` (fade-up au scroll), en-têtes de section avec label mono accentué.
- **Cartes modernisées** (`ProjectCard`, `ArticleCard`, `PlaygroundCard`) : bordure + ombre douce au repos, **élévation au hover** (`translateY(-4px)` + ombre + bordure accent), flèche `→` animée, radius 16px. **Placeholder dégradé** (initiales mono + motif de points) pour les cartes sans image — plus jamais de bloc gris vide.
- **`CTAButton`** : élévation + glow au hover, état `:active` visible.
- **Footer refondu en colonnes** (marque, navigation localisée, contact, localisation) + barre de copyright ; traductions ajoutées aux 3 fichiers i18n.
- **Header poli** : liens à soulignement animé, monogramme `A` en logo, toggle thème avec icônes soleil/lune.
- **Favicon rebrandé** (dégradé teal + ambre, « A » mono).
- **39 pages statiques** générées au build, aucune régression fonctionnelle.

### Décisions d'architecture prises
1. **Direction artistique** : warm editorial + tech net (type Linear/Vercel), avec **teal** comme accent principal et **ambre** comme touche d'énergie — le rouge/ambre ne dépasse jamais ~10 % de la surface.
2. **Zéro lib d'animation** : animations en CSS pur (`@keyframes`, `color-mix`) + un **IntersectionObserver** minimal dans `BaseLayout` pour les fade-up. `prefers-reduced-motion` désactive tout.
3. **Couleurs chaudes AA** : l'ivoire/le charbon remplacent le slate/gris froid ; chaque paire texte/fond a été vérifiée (≥ 4.5:1).
4. **Aucun touché** aux routes, i18n, collections, schémas, SEO, hreflang, JSON-LD, sitemap.

