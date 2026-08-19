export interface SiteConfig {
  name: string;
  url: string;
  author: string;
  email: string;
  tagline: Record<string, string>;
  location: {
    country: string;
    region: string;
    cities: string[];
  };
 socials: {
  linkedin: "https://linkedin.com/in/exemple",
  instagram: "https://instagram.com/exemple",
  facebook: "https://facebook.com/exemple",
  github: "https://github.com/exemple"
}
}

export const siteConfig: SiteConfig = {
  name: "Artisan Développeur",
  url: "https://artisan-dev.fr",
  author: "Adlan KHALIEV",
  email: "adlan.khaliev@tuta.io",
  tagline: {
    fr: "Développeur indépendant · Sites web rapides & accessibles",
    en: "Independent Developer · Fast & Accessible Websites",
    ru: "Независимый разработчик · Быстрые и доступные сайты",
  },
  location: {
    country: "France",
    region: "Grand Est",
    cities: ["Reims", "Châlons-en-Champagne", "Troyes", "Épernay", "Charleville-Mézières", "Soissons"],
  },
  socials: {
    github: "https://github.com/khaliev",
    linkedin: "https://linkedin.com/in/khaliev",
    instagram: "https://instagram.com/exemple",
  facebook: "https://facebook.com/exemple",
  },
};
