"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PiWine } from "react-icons/pi";
import { FiArrowLeft } from "react-icons/fi";

const whiskyTypes = ["Bourbon", "Scotch", "Irish", "Japanese"];

export default function WhiskyPage() {
  return (
    <main className="min-h-screen bg-[#030303] font-old-standard overflow-x-hidden text-gray-200">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,126,90,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 engraved-pattern opacity-[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <Link href="/spirits">
          <button className="flex items-center gap-2 text-brand-accent/60 hover:text-brand-accent transition-colors duration-300 text-[10px] uppercase tracking-[0.4em] mb-16 group">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Hoard
          </button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full border border-brand-accent/20 flex items-center justify-center">
              <PiWine className="text-4xl text-brand-accent" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">WHISKY</h1>
              <p className="text-brand-accent/60 text-sm uppercase tracking-[0.4em] mt-2">Time, Wood, and Tradition</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-linear-to-r from-brand-accent/30 to-transparent mb-12" />
          
          <p className="text-gray-400 text-xl font-extralight max-w-3xl leading-relaxed italic">
            The soul of the grain, captured in wood. Journey through the rugged Highlands, 
            the smoky islands, and the pristine spring waters that define the world&apos;s most revered spirit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            {whiskyTypes.map((type) => (
              <div key={type} className="h-64 border border-white/5 bg-white/2 rounded-[4px] p-10 flex flex-col justify-between relative group overflow-hidden">
                 <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                 <h3 className="text-2xl font-light tracking-wide text-white/40 group-hover:text-brand-accent transition-colors">{type}</h3>
                 <span className="text-white/10 text-[9px] uppercase tracking-[0.5em]">Curated Chapter Coming Soon</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
