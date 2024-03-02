"use client";
import Dukungan from "@/components/pages/Dukungan";
import Hero from "@/components/pages/Hero";
import Kemudahan from "@/components/pages/Kemudahan";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <main className="flex min-h-screen flex-col lg:px-[40px] px-[20px] gap-[100px]">
      <Hero />
      <Dukungan />
      <Kemudahan />
    </main>
  );
}
