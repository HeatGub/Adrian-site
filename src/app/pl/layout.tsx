import { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  title: "Adrian Stanciu - Altowiolista",
  description: "Oficjalna strona Adriana Stanciu, muzyka i altowiolisty.",
  alternates: {
    canonical: "https://adrian-stanciu.vercel.app/pl",
    languages: { "en-US": "https://adrian-stanciu.vercel.app/en" },
  },
  // ... other metadata
  icons: {
    icon: "/images/logo_new_small.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="pl">{children}</BaseLayout>;
}
