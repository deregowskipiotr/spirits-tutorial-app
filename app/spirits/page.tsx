"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "../data";
import { FiArrowRight } from "react-icons/fi";




export default function SpiritsPage() {

  return (
    <main id="spirits" className="min-h-screen bg-[#030303] font-old-standard overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-linear-to-br from-[#0c0a0d] via-[#050505] to-[#0a080c] pointer-events-none" />
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 engraved-pattern" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-24 lg:mb-32"
        >
          <div className="inline-block px-4 py-1 border border-brand-accent/20 rounded-full mb-8">
            <span className="text-brand-accent/60 text-[10px] uppercase tracking-[0.2em] font-light">The Hoard</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            <span className="text-white">SOUL OF</span>{" "}
            <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(201,126,90,0.2)]">SPIRITS</span>
          </h1>
          
          <div className="w-24 h-px bg-brand-accent/30 mx-auto mb-12" />
          
          <p className="text-gray-400 text-lg md:text-xl font-extralight tracking-wide max-w-2xl mx-auto italic leading-relaxed opacity-80">
            Twenty years of expertise. Premium collections of craftsmanship, 
            history, and the liquid soul behind the world&apos;s finest distillations.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + (index * 0.15), ease: "easeOut" }}
              >
                <Link href={`/spirits/${category.slug}`}>
                  <div 
                    className="group h-[380px] rounded-[4px] p-10 backdrop-blur-xl transition-all duration-700 border border-brand-accent/10 hover:border-brand-accent/40 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(16,14,20,0.9) 0%, rgba(8,6,10,0.95) 100%)",
                    }}
                  >
                    {/* Hover Effect Light */}
                    <div className="absolute inset-0 bg-linear-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Engraved pattern on card */}
                    <div className="absolute inset-0 engraved-pattern opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700" />

                    <div>
                      <div className="w-16 h-16 rounded-full border border-brand-accent/20 flex items-center justify-center mb-8 group-hover:border-brand-accent/50 transition-colors duration-500">
                        <Icon className="text-3xl text-brand-accent/60 group-hover:text-brand-accent transition-colors duration-500" />
                      </div>
                      
                      <h3 className="text-2xl text-white font-light tracking-wide mb-4 group-hover:text-brand-accent transition-colors duration-500">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm font-extralight leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-brand-accent/60 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 group-hover:gap-5 group-hover:text-brand-accent">
                      <span>Explore Collection</span>
                      <FiArrowRight className="text-sm" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Return */}
        <div className="mt-32 text-center">
          <Link href="/">
            <button 
              type="button"
              className="text-gray-500 hover:text-brand-accent/80 text-[10px] font-light uppercase py-2 transition-colors duration-500 cursor-pointer tracking-[0.2em] flex items-center gap-4 mx-auto">
              <span className="w-8 h-px bg-gray-800" />
              Return to Sanctum
              <span className="w-8 h-px bg-gray-800" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
