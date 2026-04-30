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

import { HeroPhoto } from "@/components/HeroPhoto";
import { PhotoGallery } from "@/components/PhotoGallery";

export const galleryImages = [
  { src: "/images/s1.jpg", alt: "Adrian EN" },
  { src: "/images/retuszzm.jpg", alt: "Adrian EN" },
  { src: "/images/gl1.jpg", alt: "Adrian EN" },
  { src: "/images/AS2.jpg", alt: "Adrian EN" },
  { src: "/images/AS3-2zm.jpg", alt: "Adrian EN" },
  { src: "/images/AS4BWzm.jpg", alt: "Adrian EN" },
  { src: "/images/naglowek1.jpg", alt: "Adrian EN" },
  { src: "/images/AS5zm.jpg", alt: "Adrian EN" },
  { src: "/images/Credit-photo-Simon-Buchou-86zm.jpg", alt: "Adrian EN" },
  { src: "/images/DSC_0036zm-1.jpg", alt: "Adrian EN" },
  { src: "/images/DSC_0056zm-1.jpg", alt: "Adrian EN" },
  { src: "/images/DSC_0065zm.jpg", alt: "Adrian EN" },
];

export default function ENPage() {
  return (
    <main className="bg-(image:--bg-gradient-tertiary)">
      <HeroPhoto
        src="/images/AS5zm.jpg"
        alt="test"
        srcSmall="/images/naglowek2-1.jpg"
        altSmall="test"
        overlayText="MEDIA"
        focalClassName="object-[center_40%]"
        focalClassNameSmall="object-[center_0%]"
      />
      <PhotoGallery galleryImages={galleryImages} />
    </main>
  );
}
