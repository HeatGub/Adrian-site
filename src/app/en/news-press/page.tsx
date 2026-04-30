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
import { ReviewBlock } from "@/components/ReviewBlock";
import Image from "next/image";

export default function ENPage() {
  return (
    <main>
      <HeroPhoto
        src="/images/naglowek2-1.jpg"
        alt="test"
        overlayText="NEWS & PRESS"
      />
      <Section className="py-4 bg-(--bg-secondary)">
        <h1 className="text-center text-4xl tracking-wider pb-4">REVIEWS</h1>
        <Image
          src="/images/CCF30042022_0001.jpg"
          alt="article"
          width={1712}
          height={200}
          className="w-full h-auto"
        />
        <ReviewBlock
          originalQuote="Altowiolista Adrian Stanciu oczarował publiczność czwartkowego koncertu Filharmonii Kameralnej, grając w duecie z greckim wiolonczelistą Christosem Grimpasem koncert Antonio Vivaldiego."
          translatedQuote="The violist Adrian Stanciu charmed the audience of the Thursday Chamber Philharmonic concert by playing Double Concerto by Antonio Vivaldi with the Greek cellist Christos Grimpas."
          author="Wojciech Chamryk"
          translatedFrom="translation from Polish"
        />
        <ReviewBlock
          originalQuote="Vielfältig sind die Komponenten: gewisser romantischer Gestus, Motiv-Vielfalt in Variationen, Dissonanzen, Sondaraufgaben der Bratsche (hervorragend mit bezaubernden Klang), (…) Alles wurde in höchster Präzision geboten und hinterließ einen großen Eindruck."
          translatedQuote="The elements are diverse: a certain romantic gesture, a variety of motifs in variations, dissonances, and special tasks for the viola (outstanding with an enchanting sound), (…) Everything was offered with the highest precision and left a great impression."
          author="Siegfried Kouba"
          translatedFrom="translation from German"
        />
        <ReviewBlock
          originalQuote="Posiadanie w orkiestrze muzyków-wirtuozów, potrafiących również udźwignąć ciężar gry solistycznej na najwyższym poziomie, jest ogromnym atutem."
          translatedQuote="Having musical virtuosos in the orchestra, who are also able to bear the burden of solo playing at the highest level, is a great asset."
          author="Wojciech Chamryk"
          translatedFrom="translation from Polish"
        />
        <ReviewBlock
          originalQuote="Tym razem można było posłuchać całości i była to prawdziwa uczta, mistrzowski pokaz kameralistyki na najwyższym poziomie."
          translatedQuote="You could listen to the whole thing and it was a real treat, a masterclass performance at the highest level."
          author="Wojciech Chamryk"
          translatedFrom="translation from Polish"
        />
        <ReviewBlock
          originalQuote="Es war beeindruckend zu hören, mit welcher rhythmischen und klanglichen Raffinesse man etwa Maurice Ravels Streichquartett op. 35 spielte. Das war nahe dran am sprichwörtlichen großen Wurf, vor allem das rauschhafte Finale."
          translatedQuote="It was impressive to hear the rhythmic and tonal sophistication with which Maurice Ravel’s String Quartet op. 35 was played. It was close to the proverbial great success, especially the intoxicating Finale."
          author="Guido Krawinkel"
          translatedFrom="translation from German"
          bottomBorder={false}
        />
      </Section>
    </main>
  );
}
