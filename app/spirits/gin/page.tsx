"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GiPlantRoots } from "react-icons/gi";
import { FiArrowLeft } from "react-icons/fi";

const placeholderIndices = [1, 2, 3];

export default function GinPage() {
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
              <GiPlantRoots className="text-4xl text-brand-accent" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">GIN</h1>
              <p className="text-brand-accent/60 text-sm uppercase tracking-[0.4em] mt-2">Botanical Alchemy</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-linear-to-r from-brand-accent/30 to-transparent mb-12" />
          
          <p className="text-gray-400 text-xl font-extralight max-w-3xl leading-relaxed italic">
            Trace the evolution of the juniper spirit from its medicinal origins to the refined complexity 
            of modern artisanal distillations. A landscape of aroma and heritage.
          </p>
        </motion.div>

        {/* Placeholder for Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
          {placeholderIndices.map((i) => (
            <div key={i} className="h-96 border border-white/5 bg-white/2 rounded-[4px] flex items-center justify-center relative group overflow-hidden">
               <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <span className="text-white/20 text-[10px] uppercase tracking-[0.5em] group-hover:text-brand-accent/40 transition-colors">Premium Content Coming Soon</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
