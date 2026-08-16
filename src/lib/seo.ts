import { siteConfig } from '../data/site';
import { LOCALES, getLocalizedPath, getPageKeyFromPathname, type Locale } from './i18n';

export interface HreflangLink {
  rel: string;
  hreflang: string;
  href: string;
}

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${siteConfig.url}${cleanPath}`;
}

export function getHreflangLinks(pathname: string): HreflangLink[] {
  const pageKey = getPageKeyFromPathname(pathname);
  const links: HreflangLink[] = [];

  // Generate hreflang for all supported locales
  for (const locale of LOCALES) {
    const localizedPath = getLocalizedPath(pageKey, locale);
    links.push({
      rel: 'alternate',
      hreflang: locale,
      href: `${siteConfig.url}${localizedPath}`,
    });
  }

  // x-default points to French version (default locale)
  const defaultPath = getLocalizedPath(pageKey, 'fr');
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${siteConfig.url}${defaultPath}`,
  });

  return links;
}
