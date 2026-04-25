'use client';

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const isEN = pathname.startsWith("/en");

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">
        {isEN ? "Page not found" : "Strona nie została znaleziona"}
      </p>
    </div>
  );
}