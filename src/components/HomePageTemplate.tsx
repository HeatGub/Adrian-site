import { HeroPhoto } from "@/components/HeroPhoto";
import { Section } from "@/components/Section";
import { ImageTextBlock } from "@/components/ImageTextBlock";

export type Block = {
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
  content: React.ReactNode;
};

export type SectionData = {
  className?: string;
  blocks: Block[];
};

export type HomePageTemplateProps = {
  hero: {
    src: string;
    alt: string;
    overlayText: string;
  };
  sections: SectionData[];
};
export default function HomePageTemplate({
  hero,
  sections,
}: HomePageTemplateProps) {
  return (
    <main>
      <HeroPhoto
        src={hero.src}
        alt={hero.alt}
        overlayText={hero.overlayText}
      />

      {sections.map((section, i) => (
        <Section key={i} className={section.className}>
          {section.blocks.map((block, j) => (
            <ImageTextBlock
              key={j}
              imageSrc={block.imageSrc}
              imageAlt={block.imageAlt}
              imageSide={block.imageSide}
            >
              {block.content}
            </ImageTextBlock>
          ))}
        </Section>
      ))}
    </main>
  );
}