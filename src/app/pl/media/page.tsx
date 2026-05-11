export const metadata = {
  title: "Media",
  description: "Zobacz galerię zdjęć i portfolio Adriana Stanciu – fotografie koncertowe oraz oficjalne portrety altowiolisty.",
  alternates: {
    canonical: "/pl/media",
    languages: {
      "en-US": "/en/media",
      "pl-PL": "/pl/media",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto";
import { PhotoGallery } from "@/components/PhotoGallery";

export const galleryImages = [
  { src: "/images/s1.jpg", alt: "Adrian Stanciu żwawo grający na altówce." },
  { src: "/images/retuszzm.jpg", alt: "Adrian Stanciu grający solówkę z nut." },
  { src: "/images/gl1.jpg", alt: "Adrian Stanciu pozujący z altówką na tle opery i filharmonii." },
  { src: "/images/AS2.jpg", alt: "Adrian Stanciu przyglądający się swojej altówce w świetle żarówek." },
  { src: "/images/AS3-2zm.jpg", alt: "Adrian Stanciu trzymający altówkę, spoglądający na świat okiem muzyka." },
  { src: "/images/AS4BWzm.jpg", alt: "Adrian Stanciu trzymający altówkę na ramieniu." },
  { src: "/images/naglowek1.jpg", alt: "Adrian Stanciu pozujący z altówką na studyjnym tle." },
  { src: "/images/AS5zm.jpg", alt: "Adrian Stanciu grający na altówce, na studyjnym tle." },
  { src: "/images/Credit-photo-Simon-Buchou-86zm.jpg", alt: "Adrian Stanciu podczas koncertu z innymi muzykami, na zdjęciu Simona Buchou." },
  { src: "/images/DSC_0036zm-1.jpg", alt: "Adrian Stanciu podczas koncertu, w pobliżu widowni." },
  { src: "/images/DSC_0056zm-1.jpg", alt: "Adrian Stanciu podczas koncertu orkiestrowego." },
  { src: "/images/DSC_0065zm.jpg", alt: "Adrian Stanciu podczas koncertu, grający w pierwszym rzędzie." },
];

export default function PLPage() {
  return (
    <main className="bg-(image:--bg-gradient-tertiary)">
      <HeroPhoto
        src="/images/AS5zm.jpg"
        alt="Adrian Stanciu grający na altówce, na studyjnym tle."
        srcSmall="/images/naglowek2-1.jpg"
        altSmall="Adrian Stanciu trzymający altówkę, spoglądający na świat okiem muzyka."
        overlayText="MEDIA"
        focalClassName="object-[center_40%]"
        focalClassNameSmall="object-[center_0%]"
      />
      <PhotoGallery galleryImages={galleryImages} />
    </main>
  );
}
