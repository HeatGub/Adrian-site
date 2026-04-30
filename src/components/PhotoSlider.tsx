"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type SliderPhoto = {
  src: string;
  alt: string;
  focalClassName?: string;
};

export type PhotoSliderProps = {
  photos: SliderPhoto[];
};

export function PhotoSlider({ photos }: PhotoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
  }, [photos.length]);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    startTimer();
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  return (
    <div className="group relative w-full overflow-hidden h-90 sm:h-110 md:h-140 lg:h-180 xl:h-240">
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`
            absolute inset-0 object-cover
            transition-opacity duration-1000 ease-in-out
            ${photo.focalClassName ?? "object-[center_10%]"}
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      <button
        onClick={prevPhoto}
        className="
            absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-black/30 hover:bg-black/50
            text-(--text-primary) rounded-full
            p-1.5 md:p-2
            hover:scale-105 active:scale-98
        "
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      </button>

      <button
        onClick={nextPhoto}
        className="
            absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-black/30 hover:bg-black/50
            text-(--text-primary) rounded-full
            p-1.5 md:p-2
            hover:scale-105 active:scale-98
        "
        aria-label="Next photo"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
      </button>
    </div>
  );
}

function ChevronLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
