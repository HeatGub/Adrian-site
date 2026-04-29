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
import { BackgroundImageSection } from "@/components/BackgroundImageSection";

export default function ENPage() {
  return (
    <main>
      <HeroPhoto src="/images/slide1.jpg" alt="test" overlayText="BIOGRAPHY" />
      <BackgroundImageSection imageSrc="/images/biografia1.jpg" imageAlt="EN">
        <p>
          Adrian Stanciu was born in Iaşi, Romania, into a family with a long
          musical tradition. At the age of six, he began taking violin lessons
          and then started playing the viola when he was fourteen. Adrian’s
          first teacher, and one of the most demanding, was his father,
          Constantin Stanciu.
        </p>
        <p>
          Adrian is a graduate of the “George Enescu” University of Music in
          Iaşi and the University of Music and Performing Arts in Vienna, where
          he graduated with special distinctions and awards for his outstanding
          achievements. During his studies, his musical talent was recognized,
          as he was awarded numerous international artistic scholarships, like
          the Yehudi Menuhin Scholarship (2011) and ECMA (2012) or NASOM – The
          New Austrian Sound of Music (2015). He perfected his skills during his
          Master’s classes under the watchful eyes of outstanding professors and
          prominent personalities of the music world, namely Johannes Meissel
          (Artis-Quartet), Günter Pichler, Hatto Beyerle and Gerhard Schulz
          (Alban Berg Quartet), Dan Prelipcean (Voces Quartet), Ivri Gitlis,
          András Keller (Keller Quartet), Hariolf Schlichtig (Cherubini Quartet)
          and Miguel da Silva (Quatuor Ysaÿe).
        </p>
        <p>
          Adrian is the winner of many awards as a soloist and violist of
          “Giocoso String Quartet”. The most notable are: 1st prize in the
          “George Georgescu” International Competition in Tulcea (Romania) in
          2003 and in 2004, 2nd prize in the “Mozart” International Competition
          in Cluj-Napoca (Romania, 2006), 3rd prize in the “Ch. Hennen”
          competition in Heerlen (Netherlands, 2009), Alban Berg Prize, Krenek
          Prize and Artis Prize in the “ISA-Wettbewerb” competition in Reichenau
          (Austria, 2011), Grand Prix of the Festival “Aix-en-Provence” (France,
          2012), 1st prize in the “Windisch” Competition (2014) in Vienna, 2nd
          prize and Audience Award “Peter Druce” and the “Musica Viva Australia”
          Award in the “Melbourne International Chamber Music Competition”
          (2015), and “Jeunesses Musicales Special Prize” at the world-renowned
          ARD International Music Competition in Munich (2016). In 2022, in
          cooperation with Trio Lontano, Adrian has been nominated for the 2022
          International Classical Music Awards (ICMA) – one of the most
          prestigious classical music awards in the world, in the Chamber Music
          category.
        </p>
        <p>
          Adrian Stanciu collaborates with many excellent conductors and
          ensembles as a soloist and orchestral musician. He has performed in
          the largest concert halls in Europe, South America, and Australia,
          including Wigmore Hall in London, Beethoven Haus in Bonn, Grand
          Théâtre de Bordeaux, Romanian Athenaeum in Bucharest, Musikverein and
          Konzerthaus in Vienna, and Melbourne Recital Centre. His artistic
          achievements are crowned with many recordings for radio, television,
          and CDs.
        </p>
      </BackgroundImageSection>

      {/* <ContactForm language="en"/> */}
    </main>
  );
}
