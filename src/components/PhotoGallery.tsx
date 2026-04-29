"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Container } from "@/components/Container";


type GalleryImage = {
  src: string;
  alt: string;
};

type PhotoGalleryProps = {
  galleryImages: GalleryImage[];
};

export function PhotoGallery({ galleryImages }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }, [galleryImages.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, closeModal, prevImage, nextImage]);

  return (
    <>
    <Container className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(index)}
            className="
              group
              relative
              aspect-square
              overflow-hidden
              cursor-pointer
            "
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="
                object-cover
                transition duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                transition
                flex items-center justify-center
              "
            >
              <span className="text-(--text-primary) text-4xl font-light">
                +
              </span>
            </div>
          </button>
        ))}
      </Container>

      {activeIndex !== null && (
        <div
          onClick={closeModal}
          className="
            fixed inset-0 z-50
            bg-black/90
            flex items-center justify-center
            animate-in fade-in duration-300
          "
        >
          <button
            onClick={closeModal}
            className="
              absolute top-6 right-6
              text-(--text-primary) text-4xl z-50
              hover:text-(--accent-primary)
              transition
            "
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="
              absolute left-6
              text-(--text-primary) text-6xl z-50
              hover:text-(--accent-primary)
              transition
            "
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-[90vw]
              h-[85vh]
              animate-in zoom-in-95 duration-300
            "
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              absolute right-6
              text-(--text-primary) text-6xl z-50
              hover:text-(--accent-primary)
              transition
            "
          >
            ›
          </button>

          <div className="absolute bottom-6 text-(--text-primary) tracking-wide">
            {activeIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
