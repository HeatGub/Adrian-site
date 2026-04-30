"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import { localeFromPath } from "./NavigationHelpers";

export default function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  const [menuOpen, setMenuOpen] = useState(false);
  const initialDim = 0.4;
  const [dim, setDim] = useState(initialDim); // 40% dimmed

  useEffect(() => {
    const calculateDim = () => {
      const y = window.scrollY;
      const fullDimThreshold = Math.min(y / 256, 1); // in pixels
      const value = initialDim + (1 - initialDim) * fullDimThreshold; // initialDim - 100%
      setDim(value);
    };
    calculateDim();

    window.addEventListener("scroll", calculateDim, { passive: true });

    return () => window.removeEventListener("scroll", calculateDim);
  }, []);

  return (
    <>
      {/* BACKDROP DIM LAYER */}
      <div
        className="fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none transition-colors duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${dim})`,
        }}
      />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-(--border-default)/30">
        <Container className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Adrian Stanciu"
              width={72}
              height={52}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-between flex-1 ml-4 md:ml-2 lg:ml-10 xl:ml-20">
            <NavLinks
              wrapperClassName="flex items-center justify-between flex-1"
              itemClassName="text-sm tracking-[0.01em] sm:tracking-[0.05em] md:tracking-[0.1em] xl:tracking-[0.2em] font-medium"
            />
            <LanguageSwitcher className="ml-4 md:ml-2 lg:ml-10 xl:ml-20"/>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-(--text-primary) transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-(--text-primary) transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-(--text-primary) transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </Container>

        {/* Mobile menu */}
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
    </>
  );
}
