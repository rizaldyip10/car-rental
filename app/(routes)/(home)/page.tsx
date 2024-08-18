import CarListSection from "./_components/car-list-section";
import CarList from "./_components/car-list-section";
import Hero from "./_components/hero";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-12">
      <Hero />
      <CarListSection />
    </main>
  );
}
