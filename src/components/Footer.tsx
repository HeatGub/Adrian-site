"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialLinks from "./SocialLinks";
import { localeFromPath } from "./NavigationHelpers";
import Image from "next/image";
import { Container } from "@/components/Container"

const footerText = {
  "en": "Copyright © 2022 Adrian Stanciu All rights reserved | Design and development:",
  "pl":  "Copyright © 2022 Adrian Stanciu Wszystkie prawa zastrzeżone | Projekt i wykonanie:"
}

export default function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  return (
    <footer className="bg-(--bg-primary) border-t border-(--border-default)/20 pt-12 pb-8">
      <Container className="flex flex-col items-center gap-8">
        {/* Logo */}
        <Link href={`/${locale}`}>
          <Image
            src="/images/logo.png"
            alt="Adrian Stanciu"
            width={72}
            height={52}
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* Nav links + lang switcher */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          <NavLinks
            wrapperClassName="flex flex-wrap justify-center gap-x-8 gap-y-3"
            itemClassName="text-sm tracking-[0.1em] lg:tracking-[0.15em] font-medium"
          />
          <LanguageSwitcher />
        </div>

        {/* Social icons */}
        <SocialLinks />

        {/* Copyright */}
        <p className="text-[11px] tracking-wide text-(--border-default) text-center">
         {locale === 'en'? footerText.en : footerText.pl}
          <a
            href="#"
            className="underline hover:text-(--accent-primary) transition-colors"
          >
            {" "}P.T.
          </a>
        </p>
      </Container>
    </footer>
  );
}
