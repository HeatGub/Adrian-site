export const metadata = {
  title: "Adrian Stanciu | Official Website",
  description: "Explore the world of Adrian Stanciu, a professional violist and musician. Discover concert highlights, chamber music projects like DUO+, and a rich portfolio of international performances.",
  alternates: {
    canonical: "/en",
    languages: {
      "en-US": "/en",
      "pl-PL": "/pl",
    },
  },
};

import HomePageTemplate from "@/components/HomePageTemplate";
import { HomePageTemplateProps } from "@/components/HomePageTemplate";
import { DuoButton } from "@/components/DuoButton";

export const homeContentEN: HomePageTemplateProps = {
  photos: [
    { src: "/images/AS5BWzm.jpg", alt: "Adrian Stanciu playing the viola.", focalClassName:"object-[center_50%]"},
    { src: "/images/slide1-scaled.jpg", alt: "Adrian Stanciu holding a viola.", focalClassName:"object-[center_30%]"},
    { src: "/images/slide2.jpg", alt: "Adrian Stanciu posing with a viola.", focalClassName:"object-[center_35%]"},
  ],
  sections: [
    {
      className: "py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-(image:--bg-gradient-primary)",
      blocks: [
        {
          imageSrc: "/images/gl2.jpg",
          imageAlt: "Adrian Stanciu posing with a viola.",
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
          imageAlt: "Adrian Stanciu posing with a viola against a backdrop of the opera house and concert hall.",
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
      className: "py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-(image:--bg-gradient-tertiary)",
      blocks: [
        {
          imageSrc: "/images/DUO2zm.jpg",
          imageAlt: "Adrian and Magdalena Stanciu - a musical duo posing for a photo together.",
          imageSide: "left",
          content: (
            <>
              <p className="text-2xl tracking-wider font-(family-name:--font-primary) text-(--text-secondary)">
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
