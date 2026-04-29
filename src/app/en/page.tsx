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

export default function ENPage() {
  return (
    <main>
      <HeroPhoto src="/images/slide1.jpg" alt="test" overlayText="HOME" />
      <Section>
        <p className="text-lg tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          placerat dolor. Maecenas pharetra malesuada eros, sed finibus nulla
          porttitor sed. In scelerisque pulvinar est, vitae tincidunt purus
          consequat vestibulum. In vitae ex velit. Etiam ornare aliquam elit,
          sed ullamcorper velit convallis in. Ut venenatis nisi sed sapien
          consequat scelerisque. Maecenas ac metus aliquam, sagittis eros
          facilisis, ultricies orci. Cras id finibus libero. Ut placerat
          volutpat quam, id pharetra elit hendrerit vel. Sed porta viverra enim
          et porta. Vestibulum quis volutpat nisl, quis tincidunt felis. Fusce
          quis elementum felis. Nulla laoreet euismod dolor ut auctor. Aenean in
          turpis id augue vestibulum bibendum. Donec congue ullamcorper lectus
          id porttitor. Quisque varius metus at interdum imperdiet. Sed mattis
          vel arcu vel sollicitudin. Mauris at varius orci. Aenean luctus lacus
          ante, sodales scelerisque arcu aliquam sit amet. Curabitur vitae
          congue eros. Mauris feugiat quam eleifend, sodales enim ut, euismod
          tellus. Mauris semper imperdiet vehicula. Maecenas sagittis elit ut
          orci blandit ultricies.
        </p>
      </Section>
       <Section className="bg-(--bg-secondary)">
        <p className="text-lg tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          placerat dolor. Maecenas pharetra malesuada eros, sed finibus nulla
          porttitor sed. In scelerisque pulvinar est, vitae tincidunt purus
          consequat vestibulum. In vitae ex velit. Etiam ornare aliquam elit,
          sed ullamcorper velit convallis in. Ut venenatis nisi sed sapien
          consequat scelerisque. Maecenas ac metus aliquam, sagittis eros
          facilisis, ultricies orci. Cras id finibus libero. Ut placerat
          volutpat quam, id pharetra elit hendrerit vel. Sed porta viverra enim
          et porta. Vestibulum quis volutpat nisl, quis tincidunt felis. Fusce
          quis elementum felis. Nulla laoreet euismod dolor ut auctor. Aenean in
          turpis id augue vestibulum bibendum. Donec congue ullamcorper lectus
          id porttitor. Quisque varius metus at interdum imperdiet. Sed mattis
          vel arcu vel sollicitudin. Mauris at varius orci. Aenean luctus lacus
          ante, sodales scelerisque arcu aliquam sit amet. Curabitur vitae
          congue eros.
        </p>
      </Section>
    </main>
  );
}
