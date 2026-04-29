export const metadata = {
  title: "Home",
  description: "Official website of Adrian Stanciu",
  alternates: {
    canonical: "/en",
    languages: {
      pl: "/pl",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto";
import { Section } from "@/components/Section";
import { ImageTextBlock } from "@/components/ImageTextBlock";

export default function ENPage() {
  return (
    <main>
      <HeroPhoto src="/images/slide1.jpg" alt="test" overlayText="HOME" />
      <Section>
        <ImageTextBlock
          imageSrc={"/images/slide1.jpg"}
          imageAlt="Adrian"
          imageSide="left"
        >
          <p className="text-lg tracking-wider">
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit. Quisque et placerat dolor. Maecenas pharetra malesuada eros,
            sed finibus nulla porttitor sed.
            <br />
            <br />
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit. Quisque et placerat dolor. Maecenas pharetra malesuada eros,
            sed finibus nulla porttitor sed.
          </p>
        </ImageTextBlock>
        <ImageTextBlock
          imageSrc={"/images/slide1.jpg"}
          imageAlt="Adrian"
          imageSide="right"
        >
          <p className="text-lg tracking-wider">
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit. Quisque et placerat dolor. Maecenas pharetra malesuada eros,
            sed finibus nulla porttitor sed.
            <br />
            <br />
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit. Quisque et placerat dolor. Maecenas pharetra malesuada eros,
            sed finibus nulla porttitor sed.
          </p>
        </ImageTextBlock>
      </Section>
      <Section className="bg-(--bg-secondary)">
        <ImageTextBlock
          imageSrc={"/images/slide1.jpg"}
          imageAlt="Adrian"
          imageSide="left"
        >
          <p className="text-lg tracking-wider">
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit. Quisque et placerat dolor. Maecenas pharetra malesuada eros,
            sed finibus nulla porttitor sed.
          </p>
        </ImageTextBlock>
      </Section>
    </main>
  );
}
