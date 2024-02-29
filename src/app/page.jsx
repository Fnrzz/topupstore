"use client";
import Dukungan from "@/components/pages/Dukungan";
import Hero from "@/components/pages/Hero";
import Kemudahan from "@/components/pages/Kemudahan";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:px-[40px] px-[20px] gap-[100px]">
      <Hero />
      <Dukungan />
      <Kemudahan />
    </main>
  );
}
