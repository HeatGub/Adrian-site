export const metadata = {
  title: "Strona główna",
  description: "Oficjalna strona Adriana Stanciu",
  alternates: {
    canonical: "/pl",
    languages: {
      en: "/en",
    },
  },
};

import HomePageTemplate from "@/components/HomePageTemplate";
import { HomePageTemplateProps } from "@/components/HomePageTemplate";
import { DuoButton } from "@/components/DuoButton";

export const homeContentPL: HomePageTemplateProps = {
  photos: [
    { src: "/images/AS5BWzm.jpg", alt: "1", focalClassName:"object-[center_50%]"},
    { src: "/images/slide1-scaled.jpg", alt: "2", focalClassName:"object-[center_30%]"},
    { src: "/images/slide2.jpg", alt: "3", focalClassName:"object-[center_35%]"},
  ],
  sections: [
    {
      className: "py-8 bg-(image:--bg-gradient-primary)",
      blocks: [
        {
          imageSrc: "/images/gl2.jpg",
          imageAlt: "Adrian",
          imageSide: "left",
          content: (
            <p className="tracking-wider">
              Mając szansę odkryć muzykę jako kameralista, solista i członek
              orkiestry mogę powiedzieć, że kameralistyka to nie tylko pasja,
              ale najbardziej subtelna, wyrafinowana forma muzyki oraz bardzo
              szczególny i intymny dialog pomiędzy publicznością a muzykiem.
            </p>
          ),
        },
        {
          imageSrc: "/images/gl1.jpg",
          imageAlt: "Adrian",
          imageSide: "right",
          content: (
            <p className="tracking-wider">
              Adrian Stanciu współpracuje z wieloma znakomitymi dyrygentami i
              zespołami jako solista oraz muzyk orkiestrowy. Występował w
              największych salach koncertowych Europy, Ameryki Południowej i
              Australii, m.in. Wigmore Hall w Londynie, Beethoven Haus w Bonn,
              Grand Théâtre de Bordeaux, Ateneum Rumuńskim w Bukareszcie,
              Musikverein i Konzerthaus w Wiedniu, Melbourne Recital Centre.
              Jego dotychczasowy dorobek artystyczny wieńczą liczne nagrania dla
              radia i telewizji oraz nagrania płytowe.
            </p>
          ),
        },
      ],
    },

    {
      className: "py-8 bg-(image:--bg-gradient-tertiary)",
      blocks: [
        {
          imageSrc: "/images/DUO2zm.jpg",
          imageAlt: "Adrian",
          imageSide: "left",
          content: (
            <>
              <p className="text-2xl tracking-wider">
                Jeśli chcesz dowiedzieć się czegoś więcej o drugiej osobie z
                DUO+
              </p>
              <DuoButton label="PRZEJDŹ"></DuoButton>
            </>
          ),
        },
      ],
    },
  ],
};

export default function PLPage() {
  return <HomePageTemplate {...homeContentPL} />;
}
