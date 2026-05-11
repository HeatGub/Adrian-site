export const metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z Adrianem Stanciu w sprawie koncertów, współpracy lub lekcji mistrzowskich.",
  alternates: {
    canonical: "/pl/contact",
    languages: {
      "en-US": "/en/contact",
      "pl-PL": "/pl/contact",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto"
import { ContactForm } from "@/components/ContactForm"

export default function PLPage() {
  return (
    <main className="bg-(image:--bg-gradient-primary) pb-8">
      <HeroPhoto src="/images/naglowek4-1.jpg" alt="Adrian Stanciu trzymający altówkę na ramieniu." overlayText="KONTAKT" focalClassName="object-[center_20%]"/>
      <ContactForm language="pl"/>
    </main>
  );
}