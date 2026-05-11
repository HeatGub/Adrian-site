import { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  title: {
    default: "Adrian Stanciu - Altowiolista",
    template: "%s | Adrian Stanciu"
  },
  description: "Oficjalna strona Adriana Stanciu, profesjonalnego muzyka i altowiolisty.",
  metadataBase: new URL("https://adrian-stanciu.vercel.app"),
  alternates: {
    canonical: "/pl",
    languages: { 
      "en-US": "/en",
      "pl-PL": "/pl" 
    },
  },
  openGraph: {
    title: "Adrian Stanciu | Altowiolista",
    description: "Oficjalna strona Adriana Stanciu, profesjonalnego muzyka i altowiolisty.",
    url: "https://adrian-stanciu.vercel.app/pl",
    siteName: "Adrian Stanciu",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adrian Stanciu - Altowiolista",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Stanciu | Altowiolista",
    description: "Profesjonalny muzyk i altowiolista.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="pl">{children}</BaseLayout>;
}
