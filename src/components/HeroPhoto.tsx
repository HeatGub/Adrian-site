import Image from "next/image";
import { Container } from "@/components/Container"

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
        sizes="100vw"
        className={`object-cover ${focalClassName}`}
      />

      {overlayText && (
        <div className="absolute inset-0 z-10 flex items-center mt-10 text-left">
          <Container>
            <div className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-(--text-primary) ${overlayClassName}`}>
              {overlayText}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
