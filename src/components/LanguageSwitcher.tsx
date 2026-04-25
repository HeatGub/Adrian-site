"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, switchLocale, type Locale } from "./NavigationHelpers";

interface LanguageSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

const FLAGS: Record<Locale, string> = { en: "🇬🇧", pl: "🇵🇱" };
const LABELS: Record<Locale, string> = { en: "English", pl: "Polski" };

export default function LanguageSwitcher({
  className = "text-(--text-secondary) hover:text-(--accent-primary) transition-colors text-xs tracking-widest font-medium",
  showLabel = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const next: Locale = locale === "en" ? "pl" : "en";
  const nextPath = switchLocale(pathname, next);

  return (
    <Link
      href={nextPath}
      className={className}
      title={next === "en" ? "Switch to English" : "Przełącz na polski"}
    >
      {FLAGS[locale]}
      {showLabel && <span className="ml-1.5">{LABELS[locale]}</span>}
    </Link>
  );
}
