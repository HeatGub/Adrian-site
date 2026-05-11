export default function StructuredData({ lang }: { lang: string }) {
  const isPl = lang === "pl";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adrian Stanciu",
    "url": "https://adrian-stanciu.vercel.app", 
    "image": "https://adrian-stanciu.vercel.app/images/AS5BWzm.jpg",
    "jobTitle": isPl ? "Altowiolista, Solista, Muzyk Orkiestrowy" : "Violist, Soloist, Orchestral Musician",
    "description": isPl 
      ? "Adrian Stanciu to wszechstronny altowiolista występujący jako solista, kameralista oraz muzyk orkiestrowy w prestiżowych salach koncertowych na całym świecie." 
      : "Adrian Stanciu is a versatile violist performing as a soloist, chamber musician, and orchestral player in prestigious concert halls worldwide.",
    "knowsAbout": [
      "Classical Music",
      "Viola Performance",
      "Chamber Music",
      "Orchestral Performance",
      "Solo Performance"
    ],
    "workLocation": [
      { "@type": "City", "name": "Vienna" },
      { "@type": "City", "name": "Bucharest" },
      { "@type": "City", "name": "London" },
      { "@type": "City", "name": "Melbourne" },
      { "@type": "City", "name": "Bonn" }
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Music and Performing Arts Vienna" 
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}