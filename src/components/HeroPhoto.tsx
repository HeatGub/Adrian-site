import Image from "next/image";
import { Container } from "@/components/Container";

type HeroPhotoProps = {
  src: string;
  alt: string;
  srcSmall?: string;
  altSmall?: string;
  variant?: "small" | "large";
  focalClassName?: string;
  focalClassNameSmall?: string;
  overlayText?: string;
  overlayClassName?: string;
};

export function HeroPhoto({
  src,
  alt,
  srcSmall,
  altSmall,
  variant = "small",
  focalClassName = "object-[center_10%]",
  focalClassNameSmall,
  overlayText,
  overlayClassName = "",
}: HeroPhotoProps) {
  const smallStyle = "h-80 sm:h-100 md:h-120 lg:h-160 xl:h-180";
  const largeStyle = "h-80 sm:h-100 md:h-140 lg:h-200 xl:h-240";
  const selectedStyle = variant === "large" ? largeStyle : smallStyle;

  return (
    <div className={`relative w-full overflow-hidden ${selectedStyle}`}>
      {srcSmall ? (
        <>
          {/* Mobile / Small screens */}
          <Image
            src={srcSmall}
            alt={altSmall ?? alt}
            fill
            priority
            sizes="100vw"
            className={`object-cover lg:hidden ${
              focalClassNameSmall ?? focalClassName
            }`}
          />

          {/* Medium+ screens */}
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className={`object-cover hidden lg:block ${focalClassName}`}
          />
        </>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${focalClassName}`}
        />
      )}

      {overlayText && (
        <div className="absolute inset-0 z-10 flex items-center mt-10 text-left">
          <Container>
            <div
              className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-(--text-primary) ${overlayClassName}`}
            >
              {overlayText}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
