"use client";

import Hero from "@/app/pages/Hero";
import Intention from "@/app/pages/Intention";
import Hints from "@/app/pages/Hints";
import Contact from "@/app/pages/Contact";

export default function Home() {
  

  return (
    <main className="min-h-screen bg-[#030303] relative overflow-x-hidden font-old-standard scroll-smooth">
      {/* Premium Gradient Background */}
      <div className="fixed inset-0 bg-linear-to-br from-[#030303] via-[#080808] to-[#0C0C0C] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,130,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Section */}
     

      <Hero />
      <Intention />
      <Hints />
      <Contact />
    </main>
  );
}