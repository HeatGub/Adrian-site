export const metadata = {
  title: "Strona główna",
  description: "Oficjalna strona Adriana Stanciu",
  alternates: {
    canonical: "/pl",
    languages: {
      en: "/en",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto"

export default function PLPage() {
  return (
    <main>
      <HeroPhoto src="/images/slide1.jpg" alt="test" overlayText="STONGA GŁOWNA"/>
      <h1 className="text-4xl font-bold">Adrian Stanciu</h1>
      <p className="mt-4">Wersja polska</p>
    </main>
  );
}