"use client";

import { usePathname } from "next/navigation";
import BaseLayout from "@/components/BaseLayout";
import NotFoundContent from "@/components/NotFoundContent";

export default function NotFound() {
  const pathname = usePathname();
  const isPL = pathname?.startsWith("/pl");

  return (
    <BaseLayout lang={isPL ? "pl" : "en"}>
      <NotFoundContent />
    </BaseLayout>
  );
}