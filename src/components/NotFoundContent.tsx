"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFoundContent() {
  const pathname = usePathname();
  const isPL = pathname.startsWith("/pl");

  return (
    <main className="flex pt-14 min-h-120 lg:min-h-160 items-center justify-center bg-(image:--bg-gradient-secondary) px-6 text-(--text-secondary)">
      <section className="max-w-xl text-center">
        <h1 className="mt-6 text-3xl font-light tracking-wide md:text-3xl text-(--text-primary)">
          {isPL ? "Wygląda na to, że ta strona nie istnieje." : "This page doesn't seem to exist."}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-(--text-secondary)/60">
          {isPL ? "Link może być nieaktualny albo strona została przeniesiona." : "The link may be outdated or the page may have been moved."}
        </p>
        <Link
          href={isPL ? "/pl" : "/en"}
          className="group mt-10 inline-flex items-center gap-3 border border-(--border-default)/40 bg-(--bg-secondary) px-8 py-4 text-xs uppercase tracking-[0.35em] text-(--text-secondary) backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-(--text-primary)"
        >
          <span>{isPL ? "Powrót na Stronę Główną" : "Back to Home"}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </section>
    </main>
  );
}