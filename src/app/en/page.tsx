export const metadata = {
  title: "Home",
  description: "Official website of Adrian Stanciu",
  alternates: {
    canonical: "/en",
    languages: {
      pl: "/pl",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto"

export default function ENPage() {
  return (
    <main>
      <HeroPhoto src="/images/slide1.jpg" alt="test" overlayText="HOME"/>
      <h1 className="text-4xl font-bold">Adrian Stanciu</h1>
      <p className="mt-4">English version</p>
    </main>
  );
}