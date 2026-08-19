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

## Tâche 08 — Finitions, Polish & Expérience Utilisateur [TERMINÉE]

### État & Avancement
- **View Transitions natives Astro** : activation de `<ClientRouter />` dans `BaseLayout.astro` avec animation fade fluide (200ms) sur le conteneur principal.
- **Bouton « Retour en haut » (`BackToTop.astro`)** :
  - Positionnement fixe en bas à droite, masqué par défaut.
  - Apparition fluide (fade-in / translateY) après 400px de scroll.
  - Clic déclenchant un `window.scrollTo({ top: 0, behavior: 'smooth' })`.
  - Désactivation gracieuse des transitions sous `prefers-reduced-motion`.
- **Barre de progression de lecture (`ReadingProgress.astro`)** :
  - Barre fine (3px) fixée au sommet du viewport, couleur `--accent`.
  - Calcul dynamique en JS natif basé sur le scroll effectif sur tous les articles de blog (FR, EN, RU).
- **Fil d'Ariane (`Breadcrumb.astro`)** :
  - Intégré sur l'ensemble des pages de détail des 3 langues : Projets (`/projets/[slug]`), Atelier (`/atelier/[slug]`), Blog (`/blog/[slug]`).
  - Hiérarchie claire et accessible (`Accueil > Section > Titre`).
- **Page 404 sur-mesure (`404.astro`)** :
  - Design soigné en accord avec la charte graphique : code 404 mono XXL, message chaleureux et double CTA de redirection.
- **Micro-polish CSS** :
  - `scroll-behavior: smooth` activé sur `html`.
  - Scrollbar personnalisée (Webkit & Firefox) aux couleurs du thème (`--border` / `--accent` / `--bg`).

---

## Tâche 09 — Vérification & Nettoyage Final [TERMINÉE]

### Audit & Contrôles effectués
1. **Validité des builds & SSR** : Toutes les pages statiques sont générées sans erreur ni warning critique.
2. **Parité linguistique complète (FR / EN / RU)** :
   - 100 % des routes de listing et de détail existantes et interconnectées avec les bons liens canoniques et `hreflang`.
   - Tous les labels et métadonnées traduits fidèlement.
3. **Résilience des champs optionnels** :
   - Absence d'image → Rendu impeccable grâce aux générateurs de dégradés et placeholders typographiques.
   - Absence de vidéo / démo / repo → Masquage propre des boutons et des iframes sans espace vide orphelin.
4. **Cohérence bithème (Clair / Sombre)** :
   - Tokens CSS unifiés `--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--accent`, `--cta`, `--success`.
   - Script anti-FOUC inline garantissant l'absence de scintillement.
5. **Footer & Réseaux sociaux** :
   - Affichage dynamique des icônes SVG depuis `site.ts`, masquage automatique des réseaux non renseignés.
6. **Accessibilité & Éco-conception** :
   - Focus visible (`:focus-visible`) sur tous les éléments interactifs.
   - Respect strict de `prefers-reduced-motion` désactivant toutes les animations et transitions superflues.
   - 100 % HTML/CSS/JS natif, zéro dépendance JS superflue côté client.

