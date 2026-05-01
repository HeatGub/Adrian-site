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
import { ContactForm } from "@/components/ContactForm";
import { ImageTextBlock } from "@/components/ImageTextBlock";
import { Container } from "@/components/Container";

export default function ENPage() {
  return (
    <>
      <HeroPhoto src="/images/naglowek4.jpg" alt="test" overlayText="DUO+" focalClassName="object-[center_40%]"/>
      <main className="py-8 bg-(image:--bg-gradient-tertiary)">
        <Container>
          <ImageTextBlock
            imageSrc="/images/DUO2zm.jpg"
            imageAlt="duo+"
            imageSide="right"
            textClassName="leading-normal md:leading-normal"
          >
            <div className="space-y-4">
              <p>
                Although Magdalena grew up in Poland and Adrian in Romania,
                music brought them together. Their paths crossed when the two
                were studying music at a university in Vienna, Austria.
              </p>
              <p>
                Only a few years after they first met, the young couple stood
                together on the altar, and from there, making music together
                felt like the natural and obvious thing to do.
              </p>
              <p>And so, with lots of enthusiasm, they created DUO+.</p>
              <p>
                Since their very first concerts, the couple invited various
                artists and musicians to perform with them.
              </p>
              <p>
                Magda, the soprano, and Adrian, the violist, regularly include
                other musicians to play alongside them on instruments such as
                the piano, accordion, guitar, and cello so that their
                performances enable the audience to experience a diverse musical
                palette.
              </p>
              <p>
                The DUO+ repertoire is very captivating and intriguing, as it
                includes original compositions and arrangements especially
                written for the DUO+.
              </p>
              <p className="pt-4 text-lg text-center font-(family-name:--font-primary) font-light">
                “Music is like love – if you feel it, it goes straight into your
                heart.”
              </p>
              <p className="text-lg font-(family-name:--font-primary) text-right italic">
                — M. & A. Stanciu
              </p>
            </div>
          </ImageTextBlock>
        </Container>
        <ContactForm language="en" header="CONTACT US" />
      </main>
    </>
  );
}
