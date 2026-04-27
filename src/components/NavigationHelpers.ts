export type Locale = "en" | "pl";

export interface NavLinkDef {
  slug: string;       // URL segment, "" = home
  labelEn: string;
  labelPl: string;
}

export const NAV_LINKS: NavLinkDef[] = [
  { slug: "",           labelEn: "HOME",         labelPl: "STRONA GŁÓWNA"},
  { slug: "biography",  labelEn: "BIOGRAPHY",    labelPl: "BIOGRAFIA"    },
  { slug: "news-press", labelEn: "NEWS & PRESS", labelPl: "NEWS & PRESS" },
  { slug: "media",      labelEn: "MEDIA",        labelPl: "MEDIA"        },
  { slug: "duo",        labelEn: "DUO+",         labelPl: "DUO+"         },
  { slug: "contact",    labelEn: "CONTACT",      labelPl: "KONTAKT"      },
];

/** Build the full locale-prefixed href for a slug. */
export function buildHref(locale: Locale, slug: string): string {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/** Derive locale from pathname. */
export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith("/pl") ? "pl" : "en";
}

/** Swap locale in a pathname while keeping the rest of the path. */
export function switchLocale(pathname: string, next: Locale): string {
  return pathname.replace(/^\/(en|pl)/, `/${next}`);
}