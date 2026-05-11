import { Metadata } from "next";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  title: {
    default: "Adrian Stanciu - Violist",
    template: "%s | Adrian Stanciu"
  },
  description: "Official website of Adrian Stanciu, professional musician and violist.",
  metadataBase: new URL("https://adrian-stanciu.vercel.app"), // Required for relative image paths
  alternates: {
    canonical: "/en",
    languages: { 
      "pl-PL": "/pl",
      "en-US": "/en" // Self-reference is best practice
    },
  },
  icons: {
    icon: "/images/logo_new_small.png",
  },
  openGraph: {
    title: "Adrian Stanciu | Professional Violist",
    description: "Official website of Adrian Stanciu, professional musician and violist.",
    url: "https://adrian-stanciu.vercel.app/en",
    siteName: "Adrian Stanciu",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adrian Stanciu - Violist performing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Stanciu | Violist",
    description: "Professional musician and violist.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
