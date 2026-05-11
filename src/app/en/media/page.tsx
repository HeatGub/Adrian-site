export const metadata = {
  title: "Media",
  description: "Browse the photo gallery and media portfolio of violist Adrian Stanciu, featuring concert highlights and professional portraits.",
  alternates: {
    canonical: "/en/media",
    languages: {
      "en-US": "/en/media",
      "pl-PL": "/pl/media",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto";
import { PhotoGallery } from "@/components/PhotoGallery";

export const galleryImages = [
  { src: "/images/s1.jpg", alt: "Adrian Stanciu playing the viola with energy." },
  { src: "/images/retuszzm.jpg", alt: "Adrian Stanciu playing a solo from sheet music." },
  { src: "/images/gl1.jpg", alt: "Adrian Stanciu posing with his viola against the backdrop of an opera and philharmonic hall." },
  { src: "/images/AS2.jpg", alt: "Adrian Stanciu examining his viola under the warm glow of light bulbs." },
  { src: "/images/AS3-2zm.jpg", alt: "Adrian Stanciu holding his viola, looking at the world through a musician's eye." },
  { src: "/images/AS4BWzm.jpg", alt: "Adrian Stanciu with his viola resting on his shoulder." },
  { src: "/images/naglowek1.jpg", alt: "Adrian Stanciu posing with his viola against a studio background." },
  { src: "/images/AS5zm.jpg", alt: "Adrian Stanciu playing the viola against a studio background." },
  { src: "/images/Credit-photo-Simon-Buchou-86zm.jpg", alt: "Adrian Stanciu during a concert with other musicians, captured by Simon Buchou." },
  { src: "/images/DSC_0036zm-1.jpg", alt: "Adrian Stanciu performing during a concert, close to the audience." },
  { src: "/images/DSC_0056zm-1.jpg", alt: "Adrian Stanciu during an orchestral concert." },
  { src: "/images/DSC_0065zm.jpg", alt: "Adrian Stanciu playing in the front row during a concert." },
];

export default function ENPage() {
  return (
    <main className="bg-(image:--bg-gradient-tertiary)">
      <HeroPhoto
        src="/images/AS5zm.jpg"
        alt="Adrian Stanciu playing the viola against a studio background."
        srcSmall="/images/naglowek2-1.jpg"
        altSmall="Adrian Stanciu holding his viola, looking at the world through a musician's eye."
        overlayText="MEDIA"
        focalClassName="object-[center_40%]"
        focalClassNameSmall="object-[center_0%]"
      />
      <PhotoGallery galleryImages={galleryImages} />
    </main>
  );
}
