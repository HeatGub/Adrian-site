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
  { src: "/images/s1.jpg", alt: "Adrian PL" },
  { src: "/images/retuszzm.jpg", alt: "Adrian PL" },
  { src: "/images/gl1.jpg", alt: "Adrian PL" },
  { src: "/images/AS2.jpg", alt: "Adrian PL" },
  { src: "/images/AS3-2zm.jpg", alt: "Adrian PL" },
  { src: "/images/AS4BWzm.jpg", alt: "Adrian PL" },
  { src: "/images/naglowek1.jpg", alt: "Adrian PL" },
  { src: "/images/AS5zm.jpg", alt: "Adrian PL" },
  { src: "/images/Credit-photo-Simon-Buchou-86zm.jpg", alt: "Adrian PL" },
  { src: "/images/DSC_0036zm-1.jpg", alt: "Adrian PL" },
  { src: "/images/DSC_0056zm-1.jpg", alt: "Adrian PL" },
  { src: "/images/DSC_0065zm.jpg", alt: "Adrian PL" },
];

export default function PLPage() {
  return (
    <main>
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
