import { Section } from "@/components/Section";
import { ImageTextBlock } from "@/components/ImageTextBlock";
import { PhotoSlider } from "@/components/PhotoSlider";
import type { SliderPhoto } from "@/components/PhotoSlider"

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
  photos: SliderPhoto[];
  sections: SectionData[];
};

export default function HomePageTemplate({ photos, sections }: HomePageTemplateProps) {
  return (
    <main>
      <PhotoSlider photos={photos}/>
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
