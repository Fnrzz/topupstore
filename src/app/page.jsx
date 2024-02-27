import Hero from "@/components/pages/Hero";
import HowToTopup from "@/components/pages/HowToTopup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-[40px] px-[20px] gap-[100px]">
      <Hero />
      <HowToTopup />
    </main>
  );
}
