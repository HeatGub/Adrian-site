import "./globals.css";
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen">
        <LanguageSwitcher/>
        {children}
      </body>
    </html>
  );
}