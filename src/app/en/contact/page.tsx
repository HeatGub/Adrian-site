export const metadata = {
  title: "Contact",
  description: "Official website of Adrian Stanciu",
  alternates: {
    canonical: "/en",
    languages: {
      pl: "/pl",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto"
import { ContactForm } from "@/components/ContactForm"

export default function ENPage() {
  return (
    <main className="bg-(image:--bg-gradient-primary) pb-8">
      <HeroPhoto src="/images/naglowek4-1.jpg" alt="test" overlayText="CONTACT" focalClassName="object-[center_20%]"/>
      <ContactForm language="en"/>
    </main>
  );
}