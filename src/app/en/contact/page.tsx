export const metadata = {
  title: "Contact",
  description: "Get in touch with Adrian Stanciu for bookings, collaborations, or masterclass inquiries.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      "en-US": "/en/contact",
      "pl-PL": "/pl/contact",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto"
import { ContactForm } from "@/components/ContactForm"

export default function ENPage() {
  return (
    <main className="bg-(image:--bg-gradient-primary) pb-8">
      <HeroPhoto src="/images/naglowek4-1.jpg" alt="Adrian Stanciu holding a viola on his shoulder." overlayText="CONTACT" focalClassName="object-[center_20%]"/>
      <ContactForm language="en"/>
    </main>
  );
}