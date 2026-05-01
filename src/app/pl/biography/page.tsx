export const metadata = {
  title: "Biografia",
  description: "Official website of Adrian Stanciu",
  alternates: {
    canonical: "/en",
    languages: {
      pl: "/pl",
    },
  },
};

import { HeroPhoto } from "@/components/HeroPhoto";
import { BackgroundImageSection } from "@/components/BackgroundImageSection";

export default function PLPage() {
  return (
    <main>
      <HeroPhoto
        src="/images/naglowek2.jpg"
        alt="test"
        srcSmall="/images/naglowek2-1.jpg"
        altSmall="test"
        overlayText="BIOGRAFIA"
        focalClassName="object-[center_0%]"
        focalClassNameSmall="object-[center_0%]"
      />
      <BackgroundImageSection imageSrc="/images/biografia1.jpg" imageAlt="EN">
        <p>
          Adrian Stanciu urodził się w Jassach w Rumunii, w rodzinie z
          wieloletnią tradycją muzyczną. Już jako sześciolatek pobierał lekcje
          gry na skrzypcach, aby w wieku lat czternastu rozpocząć grę na
          altówce. Jednym z pierwszych i najbardziej wymagających nauczycieli
          Adriana był jego ojciec Constantin Stanciu.
        </p>
        <p>
          Absolwent Uniwersytetu Muzycznego „George Enescu” w Jassach i
          Uniwersytetu Muzyki i Sztuk Scenicznych w Wiedniu. Już podczas
          studiów, które ukończył z wyróżnieniami oraz specjalnymi nagrodami za
          wybitne osiągnięcia, doceniono jego talent muzyczny przyznając mu
          liczne, międzynarodowe stypendia artystyczne m.in. Stypendium Yehudi
          Menuhin (2011), ECMA (2012) czy NASOM – The New Austrian Sound of
          Music (2015).
          <br />
          Zdobywca wielu nagród jako solista oraz altowiolista kwartetu
          smyczkowego. Do najważniejszych należą: I nagroda w Międzynarodowym
          Konkursie „George Georgescu” w Tulczy (Rumunia) w 2003 roku oraz w
          2004 roku, II nagroda w Międzynarodowym Konkursie „Mozart” w
          Kluż-Napoka (Rumunia, 2006), III nagroda w konkursie „Ch. Hennen“ w
          Heerlen (Holandia, 2009), Nagroda Albana Berga, Nagroda Kreneka oraz
          Nagroda Artis w konkursie „ISA-Wettbewerb” w Reichenau (Austria,
          2011), Grand Prix Festiwalu „Aix-en-Provence“ (Francja, 2012), I
          nagroda w Konkursie „Windisch“ (2014) w Wiedniu, II nagroda i Nagroda
          Publiczności „Peter Druce” oraz Nagroda „Musica Viva Australia” w
          Międzynarodowym Konkursie „Melbourne International Chamber Music
          Competition” (2015), nagroda specjalna “Jeunesses Musicales Special
          Prize” w światowej sławy Międzynarodowym Konkursie Muzycznym ARD w
          Monachium (2016). W roku 2022 Adrian we współpracy z Trio Lontano był
          nominowany do International Classical Music Awards (ICMA) – jednej z
          najbardziej prestiżowych nagród w świecie muzyki klasycznej, w
          kategorii Muzyka Kameralna.
          <br />
          Swoje umiejętności doskonalił podczas kursów mistrzowskich pod czujnym
          okiem znakomitych profesorów i pedagogów muzycznych m.in. u Johannesa
          Meissela (Artis-Quartet), Günter Pichlera, Hatto Beyerle i Gerharda
          Schulza (Alban Berg Quartett), Dana Prelipceana (Voces Quartett),
          Ivriego Gitlisa, Andrása Kellera (Keller Quartett), Hariolfa
          Schlichtiga (Cherubini Quartett) i Miguela da Silvy (Quatuor Ysaÿe).
        </p>
        <p>
          Adrian Stanciu współpracuje z wieloma znakomitymi dyrygentami i
          zespołami jako solista oraz muzyk orkiestrowy. Występował w
          największych salach koncertowych Europy, Ameryki Południowej i
          Australii, m.in. Wigmore Hall w Londynie, Beethoven Haus w Bonn, Grand
          Théâtre de Bordeaux, Ateneum Rumuńskim w Bukareszcie, Musikverein i
          Konzerthaus w Wiedniu, Melbourne Recital Centre. Jego dotychczasowy
          dorobek artystyczny wieńczą liczne nagrania dla radia i telewizji oraz
          nagrania płytowe.
        </p>
      </BackgroundImageSection>

      {/* <ContactForm language="en"/> */}
    </main>
  );
}
