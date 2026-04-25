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

export default function PLPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Adrian Stanciu</h1>
      <p className="mt-4">Polska wersja strony</p>
    </main>
  );
}