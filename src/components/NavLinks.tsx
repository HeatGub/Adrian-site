"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { NAV_LINKS, localeFromPath, type Locale } from "./NavigationHelpers";

interface NavLinksProps {
  /** Extra classes on the wrapping <nav>. */
  wrapperClassName?: string;
  /** Passed to every NavItem as className. */
  itemClassName?: string;
  /** Passed to every NavItem as activeClassName. */
  activeClassName?: string;
  /** Passed to every NavItem as inactiveClassName. */
  inactiveClassName?: string;
  /** Called on each link click (e.g. to close mobile menu). */
  onLinkClick?: () => void;
  /** Override locale; auto-detected from pathname if omitted. */
  locale?: Locale;
}

export default function NavLinks({
  wrapperClassName = "flex items-center gap-8",
  itemClassName = "text-xs tracking-[0.18em] font-medium",
  activeClassName,
  inactiveClassName,
  onLinkClick,
  locale: localeProp,
}: NavLinksProps) {
  const pathname = usePathname();
  const locale = localeProp ?? localeFromPath(pathname);

  return (
    <nav className={wrapperClassName}>
      {NAV_LINKS.map((link) => (
        <NavItem
          key={link.slug}
          slug={link.slug}
          label={locale === "pl" ? link.labelPl : link.labelEn}
          className={itemClassName}
          activeClassName={activeClassName}
          inactiveClassName={inactiveClassName}
          onClick={onLinkClick}
          locale={locale}
        />
      ))}
    </nav>
  );
}
