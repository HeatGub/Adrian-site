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

export default function ENPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Adrian Stanciu</h1>
      <p className="mt-4">English version of the website</p>
    </main>
  );
}