import Image from "next/image";
import Hero from "./components/Home/Hero";
import FoodSection from "./components/Home/FoodSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <FoodSection />
    </main>
  );
}
