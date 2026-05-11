import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "zwf1YlA4bFdcIEcF8qd_v8v3Dulxfv4d2ZnlIotzhi0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}