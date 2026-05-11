import { Section } from "@/components/Section";
import { ImageTextBlock } from "@/components/ImageTextBlock";
import { PhotoSlider } from "@/components/PhotoSlider";
import type { SliderPhoto } from "@/components/PhotoSlider";
import type { Locale } from "@/components/NavigationHelpers";

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
  lang: Locale;
};

export default function HomePageTemplate({
  photos,
  sections,
  lang,
}: HomePageTemplateProps) {
  return (
    <main>
      {/* Hidden SEO Heading */}
      <h1 className="sr-only">
        {lang == "pl"
          ? "Adrian Stanciu – Altowiolista, Solista i Muzyk Orkiestrowy"
          : "Adrian Stanciu – International Violist, Soloist & Orchestral Musician"}
      </h1>
      <PhotoSlider photos={photos} />
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
