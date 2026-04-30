import Image from "next/image";
import { Section } from "@/components/Section";

type BackgroundImageSectionProps = {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
};

export function BackgroundImageSection({
  imageSrc,
  imageAlt,
  children,
  className = "",
}: BackgroundImageSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="
            object-cover
            object-center
            blur-[2px]
            brightness-[0.25]
            saturate-[0.7]
            scale-105
          "
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <Section
        className={`relative z-20 py-8 lg:py-16 font-light font-(family-name:--font-secondary) tracking-wide leading-loose lg:text-lg`}
      >
        <div className="space-y-6">{children}</div>
      </Section>
    </section>
  );
}
