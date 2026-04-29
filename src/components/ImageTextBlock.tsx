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
        flex flex-col md:flex-row items-center gap-10 md:gap-16 py-8
        ${!imageFirst ? "md:flex-row-reverse" : ""}
        ${className}
      `}
    >
      <div className={`relative w-full max-w-sm aspect-3/4 shrink-0 ${imageClassName}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      <div
        className={`
          flex-1 flex items-center
          text-justify
          ${textClassName}
        `}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}