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

export default function PLPage() {
  return (
    <>
      <HeroPhoto src="/images/naglowek4.jpg" alt="test" overlayText="DUO+" focalClassName="object-[center_40%]"/>
      <main className="py-8 bg-(image:--bg-gradient-tertiary)">
        <Container>
          <ImageTextBlock
            imageSrc="/images/DUO2zm.jpg"
            imageAlt="duo+"
            imageSide="right"
            textClassName="leading-normal"
          >
            <div className="space-y-4">
              <p>
                Choć Magdalena pochodzi z Polski, a Adrian z Rumunii, to jednak
                ich drogi się zeszły. Muzycy poznali się w Wiedniu, gdzie oboje
                studiowali.
              </p>
              <p>
                Jakiś czas po pierwszym spotkaniu młodzi ludzie stanęli na
                ślubnym kobiercu, więc i wspólne muzykowanie stało się czymś
                oczywistym.
              </p>
              <p>Powstanie DUO+ było rzeczą naturalną.</p>
              <p>
                Małżeństwo bowiem już od początków wspólnego koncertowania
                zapraszało do współpracy różnych artystów.
              </p>
              <p>
                Sopranistka i altowiolista występują z towarzyszeniem takich
                instrumentów jak na przykład fortepian, akordeon, gitara czy
                wiolonczela, umożliwiając publiczności delektowanie się różnymi
                paletami kolorystycznymi muzyki.
              </p>
              <p>
                Repertuar DUO+ jest bardzo ciekawy i niepowtarzalny, a znajdują
                się w nim zarówno oryginalnie skomponowane, jak i zaaranżowane
                specjalnie dla muzyków utwory.
              </p>
              <p className="pt-4 text-lg text-center font-(family-name:--font-primary) font-light">
                „Z Muzyką jest jak z Miłością – jeśli ją poczujesz, trafi prosto
                do twojego serca.”
              </p>
              <p className="text-lg font-(family-name:--font-primary) text-right italic">
                — M. & A. Stanciu
              </p>
            </div>
          </ImageTextBlock>
        </Container>
        <ContactForm language="pl" header="SKONTAKTUJ SIĘ Z NAMI" />
      </main>
    </>
  );
}
