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

import HomePageTemplate from "@/components/HomePageTemplate";
import { HomePageTemplateProps } from "@/components/HomePageTemplate";
import { DuoButton } from "@/components/DuoButton";

export const homeContentEN: HomePageTemplateProps = {
  photos: [
    { src: "/images/AS5BWzm.jpg", alt: "1", focalClassName:"object-[center_50%]"},
    { src: "/images/slide1-scaled.jpg", alt: "2", focalClassName:"object-[center_30%]"},
    { src: "/images/slide2.jpg", alt: "3", focalClassName:"object-[center_35%]"},
  ],
  sections: [
    {
      className: "bg-(--bg-secondary)",
      blocks: [
        {
          imageSrc: "/images/gl2.jpg",
          imageAlt: "Adrian",
          imageSide: "left",
          content: (
            <p className="tracking-wider">
              Having had a chance to discover music as a soloist, chamber
              musician, and an orchestra player, I can say that music is not
              just a passion, but it’s the most subtle, refined form of
              expressing emotions and a very special, intimate dialogue between
              the audience and the musician.
            </p>
          ),
        },
        {
          imageSrc: "/images/gl1.jpg",
          imageAlt: "Adrian",
          imageSide: "right",
          content: (
            <p className="tracking-wider">
              Adrian Stanciu collaborates with many excellent conductors and
              ensembles as a soloist and orchestral musician. He has performed
              in the largest concert halls in Europe, South America, and
              Australia, including Wigmore Hall in London, Beethoven Haus in
              Bonn, Grand Théâtre de Bordeaux, Romanian Athenaeum in Bucharest,
              Musikverein and Konzerthaus in Vienna, and Melbourne Recital
              Centre. His artistic achievements are crowned with many recordings
              on the radio, television, and CDs.
            </p>
          ),
        },
      ],
    },

    {
      className: "bg-(--bg-tertiary)",
      blocks: [
        {
          imageSrc: "/images/DUO2zm.jpg",
          imageAlt: "Adrian",
          imageSide: "left",
          content: (
            <>
              <p className="text-2xl tracking-wider">
                Learn more about the other musician from DUO+
              </p>
              <DuoButton label="CLICK HERE"></DuoButton>
            </>
          ),
        },
      ],
    },
  ],
};

export default function ENPage() {
  return <HomePageTemplate {...homeContentEN} />;
}
