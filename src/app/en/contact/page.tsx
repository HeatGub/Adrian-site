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
import { ContactForm } from "@/components/ContactForm"

export default function ENPage() {
  return (
    <main>
      <HeroPhoto src="/images/slide1.jpg" alt="test" overlayText="CONTACT"/>
      <ContactForm language="pl"/>
    </main>
  );
}