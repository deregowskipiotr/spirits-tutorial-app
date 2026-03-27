"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Door from "@/app/components/Door";
import Intention from "@/app/pages/Intention";
import Hints from "@/app/pages/Hints";
import Contact from "@/app/pages/Contact";

export default function Home() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [droplets, setDroplets] = useState<{
    id: number;
    left: number;
    width: number;
    height: number;
    opacity: number;
    duration: number;
    delay: number;
  }[]>([]);

  useEffect(() => {
    setIsMounted(true);
    // Generate droplets on mount to avoid hydration mismatch and impure useMemo errors
    const newDroplets = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      width: Math.random() * 1.8 + 0.8,
      height: Math.random() * 12 + 6,
      opacity: Math.random() * 0.25 + 0.1,
      duration: Math.random() * 7 + 5,
      delay: Math.random() * 12,
    }));
    setDroplets(newDroplets);
  }, []);

  const handleDoorOpen = () => {
    setIsDoorOpen(true);
  };

  const handleCloseTemple = () => {
    setIsDoorOpen(false);
  };

  const originalSubtitle = "Not all who stand before this door are ready. But for those who seek what lies beyond the ordinary—step forward. What awaits may change what you pour, and why.";
  
  const innerSanctumSubtitle = "You now stand within the inner sanctum. What you discover here is not merely information—it is the accumulated wisdom of two decades. Observe with intention. Taste with purpose.";

  return (
    <main className="min-h-screen bg-[#030303] relative overflow-x-hidden font-old-standard scroll-smooth">
      {/* Premium Gradient Background */}
      <div className="fixed inset-0 bg-linear-to-br from-[#030303] via-[#080808] to-[#0C0C0C] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,130,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col pt-32 lg:pt-0">
        {/* Warm Copper Light from Bottom - Subtle */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-brand-accent/10 to-transparent pointer-events-none" />
        
        {/* Polished Glare Effect */}
        <div className="fixed top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-brand-accent/20 to-transparent" />

        {/* Subtle Falling Droplets */}
        {isMounted && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {droplets.map((drop) => (
              <motion.div
                key={drop.id}
                className="absolute rounded-full"
                initial={{ 
                  left: `${drop.left}%`, 
                  top: -drop.height,
                }}
                animate={{ 
                  top: "100vh",
                }}
                transition={{ 
                  duration: drop.duration,
                  repeat: Infinity,
                  delay: drop.delay,
                  ease: "linear"
                }}
                style={{
                  width: `${drop.width}px`,
                  height: `${drop.height}px`,
                  background: "linear-gradient(180deg, rgba(201,126,90,0.4) 0%, rgba(140,100,40,0.1) 100%)",
                  borderRadius: "50%",
                }}
              />
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.0, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 lg:mb-24 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight relative lg:left-[200px] lg:top-[80px]">
              <span className="text-white/50 text-xl md:text-5xl italic font-extralight uppercase">THE</span>{" "}
              <span className="text-brand-accent/80 drop-shadow-[0_0_15px_rgba(201,126,90,0.4)]">Sanctum</span>
            </h1>
          </motion.div>

          {/* Two Column Layout (Stacked on Mobile) */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
            {/* Left - Subtitle */}
            <motion.div
              key={isDoorOpen ? "inner" : "outer"}
              initial={{ opacity: 0, y: 15, filter: "blur(15px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
              className="flex-1 lg:pt-16 order-2 lg:order-1 text-center lg:text-left"
            >
              <p className="text-gray-300 text-xl md:text-2xl lg:text-3xl leading-normal font-extralight tracking-tight max-w-2xl italic opacity-90 mx-auto lg:mx-0">
                {isDoorOpen ? innerSanctumSubtitle : originalSubtitle}
              </p>
            </motion.div>

            {/* Right - Door and Card Reveal */}
            <div className="flex-1 flex justify-center lg:justify-end relative min-h-[420px] order-1 lg:order-2 w-full">
               {/* Card Layer (Behind) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isDoorOpen ? 1 : 0, 
                  y: isDoorOpen ? 0 : 30,
                  pointerEvents: isDoorOpen ? "auto" : "none" 
                }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="absolute z-0 w-[280px] h-[420px]"
              >
                <div 
                  className="h-full rounded-[4px] p-10 backdrop-blur-xl transition-all duration-500 border border-brand-accent/20 shadow-2xl flex flex-col justify-center relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, rgba(10,8,12,0.85) 0%, rgba(20,15,18,0.9) 100%)",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,126,90,0.2)"
                  }}
                >
                  {/* Metallic border effect */}
                  <div className="absolute inset-0 rounded-[4px] pointer-events-none" style={{
                    background: "linear-gradient(135deg, rgba(201,126,90,0.3) 0%, transparent 30%, transparent 70%, rgba(201,126,90,0.2) 100%)",
                  }} />
                  
                  {/* Engraved pattern */}
                  <div className="absolute inset-0 engraved-pattern" />

                  <p className="relative z-10 text-gray-200 text-center leading-[1.8] mb-12 font-extralight text-sm tracking-wide italic opacity-90">
                    You&apos;ve stepped into a collection built on twenty years of devotion. 
                     Each bottle tells a story. Each story reveals a soul.
                  </p>
                  
                  <Link href="/spirits" className="relative z-10 cursor-pointer">
                    <button className="w-full bg-white/5 hover:bg-brand-accent/10 backdrop-blur-xl text-white py-4 rounded-md transition-all duration-700 text-[10px] font-bold uppercase tracking-wider border border-brand-accent/30 hover:border-brand-accent/60 cursor-pointer active:scale-[0.98] group overflow-hidden relative" type="button">
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-amber-100">ENTER THE HOARD</span>
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                  </Link>
                  
                  <button
                    type="button"
                    onClick={handleCloseTemple}
                    className="relative z-10 w-full mt-10 text-gray-500 hover:text-brand-accent/80 text-[9px] font-light uppercase py-2 transition-colors duration-500 cursor-pointer tracking-wider"
                  >
                    Return to world
                  </button>
                </div>
              </motion.div>

              {/* Door Layer (Front) */}
              <div className={`relative z-10 transition-all duration-1000 ${isDoorOpen ? "pointer-events-none scale-95" : "pointer-events-auto"}`}>
                <Door 
                  isOpen={isDoorOpen} 
                  onOpen={handleDoorOpen}
                  imageUrl="/assets/door.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Sections */}
      <Intention />
      <Hints />
      <Contact />
    </main>
  );
}