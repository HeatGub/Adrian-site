"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import { localeFromPath } from "./NavigationHelpers";
import Image from "next/image";
import { Container } from "@/components/Container"

export default function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-(--border-default)/20">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Adrian Stanciu"
            width={72}
            height={52}
            priority          // load eagerly — it's above the fold
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav + lang switcher */}
        <nav className="hidden md:flex items-center justify-between flex-1 ml-12">
          <NavLinks
            wrapperClassName="flex items-center justify-between flex-1"
            itemClassName="text-xs tracking-[0.18em] font-medium"
          />
          <LanguageSwitcher className="md:ml-12 lg:ml-18" />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-(--text-primary) transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-(--text-primary) transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-(--text-primary) transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </Container>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-(--bg-secondary) border-t border-(--border-default)/20 px-6 py-5">
          <NavLinks
            wrapperClassName="flex flex-col gap-4"
            itemClassName="text-xs tracking-[0.18em] font-medium py-1"
            onLinkClick={() => setMenuOpen(false)}
          />
          <div className="mt-4 pt-4 border-t border-(--border-default)/20">
            <LanguageSwitcher showLabel />
          </div>
        </div>
      )}
    </header>
  );
}
