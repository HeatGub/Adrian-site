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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen">
        <Navbar />
        <main className="text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
