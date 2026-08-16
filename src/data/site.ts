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
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Artisan Développeur",
  url: "https://artisan-dev.fr",
  author: "Adlan",
  email: "contact@artisan-dev.fr",
  tagline: {
    fr: "Développeur web indépendant & artisan du numérique",
    en: "Independent Web Developer & Digital Craftsman",
    ru: "Независимый веб-разработчик и цифровой ремесленник",
  },
  location: {
    country: "France",
    region: "Grand Est",
    cities: ["Reims", "Châlons-en-Champagne", "Troyes", "Épernay", "Charleville-Mézières", "Soissons"],
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};
