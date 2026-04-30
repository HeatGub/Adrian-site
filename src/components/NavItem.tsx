"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildHref, localeFromPath, type Locale } from "./NavigationHelpers";

interface NavItemProps {
  slug: string;
  label: string;
  /** Classes applied to every state. */
  className?: string;
  /** Classes applied only when the link is active. Merged with className. */
  activeClassName?: string;
  /** Classes applied only when the link is inactive. Merged with className. */
  inactiveClassName?: string;
  onClick?: () => void;
  /** Override locale detection (useful if you already have it). */
  locale?: Locale;
}

export default function NavItem({
  slug,
  label,
  className = "",
  activeClassName = "text-(--accent-primary)",
  inactiveClassName = "text-(--text-secondary) hover:text-(--accent-primary)",
  onClick,
  locale: localeProp,
}: NavItemProps) {
  const pathname = usePathname();
  const locale = localeProp ?? localeFromPath(pathname);
  const href = buildHref(locale, slug);

  const isActive =
    slug === ""
      ? pathname === `/${locale}` || pathname === `/${locale}/`
      : pathname === href || pathname.startsWith(`${href}/`);

  const stateClass = isActive ? activeClassName : inactiveClassName;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-colors duration-200 md:text-center px-2 ${className} ${stateClass}`}
    >
      {label}
    </Link>
  );
}
