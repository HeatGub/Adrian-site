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

export default function PLPage() {
  return (
    <main>
      <HeroPhoto
        src="/images/slide1.jpg"
        alt="test"
        overlayText="NEWS & PRESS"
      />
      <Section className="py-4">
        <ReviewBlock
          originalQuote="Altowiolista Adrian Stanciu oczarował publiczność czwartkowego koncertu Filharmonii Kameralnej, grając w duecie z greckim wiolonczelistą Christosem Grimpasem koncert Antonio Vivaldiego."
          author="Wojciech Chamryk"
        />
        <ReviewBlock
          originalQuote="Vielfältig sind die Komponenten: gewisser romantischer Gestus, Motiv-Vielfalt in Variationen, Dissonanzen, Sondaraufgaben der Bratsche (hervorragend mit bezaubernden Klang), (…) Alles wurde in höchster Präzision geboten und hinterließ einen großen Eindruck."
          translatedQuote="Komponenty są różnorodne: pewien romantyczny gest, różnorodność motywów w wariacjach, dysonanse, szczególne partie altówki (zagrane wybitnie, czarującym dźwiękiem), (…) Wszystko zostało zaoferowane z najwyższą precyzją i wywarło ogromne wrażenie."
          author="Siegfried Kouba"
          translatedFrom="tłum. z niemieckiego"
        />
        <ReviewBlock
          originalQuote="Posiadanie w orkiestrze muzyków-wirtuozów, potrafiących również udźwignąć ciężar gry solistycznej na najwyższym poziomie, jest ogromnym atutem."
          author="Wojciech Chamryk"
        />
        <ReviewBlock
          originalQuote="Tym razem można było posłuchać całości i była to prawdziwa uczta, mistrzowski pokaz kameralistyki na najwyższym poziomie."
          author="Wojciech Chamryk"
        />
        <ReviewBlock
          originalQuote="Es war beeindruckend zu hören, mit welcher rhythmischen und klanglichen Raffinesse man etwa Maurice Ravels Streichquartett op. 35 spielte. Das war nahe dran am sprichwörtlichen großen Wurf, vor allem das rauschhafte Finale."
          translatedQuote="Imponującym było usłyszeć wyrafinowanie rytmiczne i tonalne, z jakim zagrano Kwartet smyczkowy op. 35 Maurica Ravela. To było bliskie przysłowiowemu wielkiemu sukcesowi, zwłaszcza upajający finał."
          author="Guido Krawinkel"
          translatedFrom="tłum. z niemieckiego"
        />
      </Section>
    </main>
  );
}
