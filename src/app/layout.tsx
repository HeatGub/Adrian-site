export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Adrian Stanciu",
    template: "%s | Adrian Stanciu",
  },
  description: "Official website",
  openGraph: {
    type: "website",
    siteName: "Adrian Stanciu",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
    icons: {
    icon: '/images/logo_new_small.png',
  },
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Nunito} from "next/font/google";

// Tailwind mapping of font weights
// font-thin       → 100
// font-extralight → 200
// font-light      → 300
// font-normal     → 400
// font-medium     → 500
// font-semibold   → 600
// font-bold       → 700
// font-extrabold  → 800
// font-black      → 900

const primary = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-primary",
  style: ["normal", "italic"],
  weight: ["400", "700"]
});

const secondary = Nunito({
  subsets: ["latin"],
  variable: "--font-secondary",
  style: ["normal", "italic"],
  weight: ["300", "400", "700"]
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${primary.variable} ${secondary.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
