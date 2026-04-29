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
};

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-primary",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geist.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
