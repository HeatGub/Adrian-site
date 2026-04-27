import Image from "next/image";

type HeroPhotoProps = {
  src: string;
  alt: string;
  focalClassName?: string;
  overlayText?: string;
  overlayClassName?: string;
};

export function HeroPhoto({
  src,
  alt,
  focalClassName = "object-[center_10%]",
  overlayText,
  overlayClassName = "",
}: HeroPhotoProps) {
  return (
    <div
      className="
        relative w-full overflow-hidden
        h-80
        sm:h-100
        md:h-140
        lg:h-180
        xl:h-240
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className={`object-cover ${focalClassName}`}
      />

      {overlayText && (
        <div
          className={`
            absolute
            left-[10%]
            top-[50%]
            -translate-y-1/2
            z-10
            text-6xl
            ${overlayClassName}
          `}
        >
          {overlayText}
        </div>
      )}
    </div>
  );
}
