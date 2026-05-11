import { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  title: "Adrian Stanciu - Violist",
  description:
    "Official website of Adrian Stanciu, professional musician and violist.",
  alternates: {
    canonical: "https://adrian-stanciu.vercel.app/en",
    languages: { "pl-PL": "https://adrian-stanciu.vercel.app/pl" },
  },
  // ... other metadata
  icons: {
    icon: "/images/logo_new_small.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
