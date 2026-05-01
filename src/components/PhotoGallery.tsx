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
  const [visible, setVisible] = useState(false);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (!visible) setActiveIndex(null);
  }, [visible]);

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
      <Container className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8 lg:py-12">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => {
              setActiveIndex(index);
              requestAnimationFrame(() => setVisible(true));
            }}
            className="group relative aspect-square overflow-hidden cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-(--text-primary) text-4xl font-light">
                <MagnifyingGlassIcon className="w-12 h-12 text-(--text-secondary)"/>
              </span>
            </div>
          </button>
        ))}
      </Container>

      {activeIndex !== null && (
        <div
          onClick={closeModal}
          onTransitionEnd={handleTransitionEnd}
          style={{ transition: "opacity 300ms ease", opacity: visible ? 1 : 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-(--text-primary) text-5xl sm:text-6xl lg:text-7xl z-50 hover:text-(--accent-primary) transition hover:scale-110 active:scale-95 cursor-pointer"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 md:left-4 lg:left-6 text-(--text-primary) text-5xl sm:text-6xl lg:text-7xl z-50 hover:text-(--accent-primary) transition hover:scale-110 active:scale-95 cursor-pointer rounded-full"
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              transition: "transform 300ms ease, opacity 300ms ease",
              transform: visible ? "scale(1)" : "scale(0.95)",
              opacity: visible ? 1 : 0,
            }}
            className="relative w-[99vw] h-[99vh]"
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="99vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 md:right-4 lg:right-6 text-(--text-primary) text-5xl sm:text-6xl lg:text-7xl z-50 hover:text-(--accent-primary) transition hover:scale-110 active:scale-95 cursor-pointer rounded-full"
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

function MagnifyingGlassIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="28"
        cy="28"
        r="16"
        stroke="currentColor"
        strokeWidth="4"
      />
      <line
        x1="39.5"
        y1="39.5"
        x2="54"
        y2="54"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        cx="23"
        cy="23"
        r="3"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );
}