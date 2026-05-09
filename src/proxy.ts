import { NextRequest, NextResponse } from "next/server";

const locales = ["pl", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Parse "pl,en-US;q=0.9,en;q=0.8" → [["pl", 1], ["en", 0.9], ...]
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, q] = part.trim().split(";q=");
      return {
        lang: lang.trim().toLowerCase().slice(0, 2),
        q: q ? parseFloat(q) : 1.0,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferred) {
    if (locales.includes(lang as Locale)) {
      return lang as Locale;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Redirect /about → /en/about (or /pl/about)
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};