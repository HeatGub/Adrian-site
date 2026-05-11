import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Nunito } from "next/font/google";

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
  weight: ["400", "700"],
});

const secondary = Nunito({
  subsets: ["latin"],
  variable: "--font-secondary",
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
});

export default function BaseLayout({ 
  children, 
  lang 
}: {
  children: React.ReactNode; 
  lang: string;
}) {
  return (
    <html lang={lang} className={`${primary.variable} ${secondary.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}