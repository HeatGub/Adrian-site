"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "./NavigationHelpers";

export function DuoButton({ label }: { label: string }) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname) as Locale;

  const href = `/${locale}/duo`;

  return (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        px-5 py-2
        my-6
        tracking-[0.18em] font-medium
        border border-(--accent-primary)
        text-(--accent-primary)
        transition-all duration-200
        hover:bg-(--accent-primary)
        hover:text-(--bg-primary)
      "
    >
      {label}
    </Link>
  );
}
