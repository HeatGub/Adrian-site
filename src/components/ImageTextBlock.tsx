// components/ImageTextBlock.tsx
import Image from "next/image";

type ImageTextBlockProps = {
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  imageClassName?: string;
};

export function ImageTextBlock({
  imageSrc,
  imageAlt,
  imageSide = "left",
  children,
  className = "",
  textClassName = "",
  imageClassName = "",
}: ImageTextBlockProps) {
  const imageFirst = imageSide === "left";

  return (
    <div
      className={`
        flex flex-col lg:flex-row items-center gap-4 md:gap-8 lg:gap-12 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12
        ${!imageFirst ? "lg:flex-row-reverse" : ""}
        ${className}
      `}
    >
      {/* IMAGE WRAPPER */}
      <div
        className={`
          w-full flex justify-center
          ${imageClassName}
        `}
      >
        <div className="relative w-full aspect-3/4 shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* TEXT WRAPPER */}
      <div
        className={`
          w-full
          flex items-center
          text-justify
          leading-relaxed
          md:leading-loose
          font-(family-name:--font-secondary)
          font-light
          lg:text-lg
          ${textClassName}
        `}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
