"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GiChampagneCork } from "react-icons/gi";

const champagneTypes = ["Premium", "Elegant", "Rosé", "Unique"];

export default function ChampagnePage() {
  return (
    <main className="min-h-screen bg-[#030303] font-old-standard overflow-x-hidden text-gray-200">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,126,90,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 engraved-pattern opacity-[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <Link href="/spirits">
          <button 
            type="button"
              className="flex items-center gap-2 pt-2 text-brand-accent/60 hover:text-brand-accent transition-colors duration-300 text-[10px] uppercase tracking-[0.2em] mb-16 group cursor-pointer">
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
              <GiChampagneCork className="text-4xl text-brand-accent" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">CHAMPAGNE</h1>
              <p className="text-brand-accent/60 text-sm uppercase tracking-[0.2em] mt-2">Effervescent Elegance</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-linear-to-r from-brand-accent/30 to-transparent mb-12" />
          
          <p className="text-gray-400 text-xl font-extralight max-w-3xl leading-relaxed italic">
            The height of celebration. Discover the prestigious houses of Epernay and Reims, 
            where centuries-old traditions meet the delicate art of the bubble.
          </p>
        </motion.div>

        {/* Placeholder for Products */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {champagneTypes.map((type, index) => {            
            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + (index * 0.15), ease: "easeOut" }}
              >
                <Link href={`/spirits/champagne/${type.toLowerCase()}`}>
                  <div 
                    className="group h-64 rounded-[4px] p-10 backdrop-blur-xl transition-all duration-700 border border-brand-accent/10 hover:border-brand-accent/40 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(16,14,20,0.9) 0%, rgba(8,6,10,0.95) 100%)",
                    }}
                  >
                    {/* Hover Effect Light */}
                    <div className="absolute inset-0 bg-linear-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                    {/* Engraved pattern on card */}
                    <div className="absolute inset-0 engraved-pattern opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700" />
        
                    <div>                      
                      <h3 className="text-2xl text-white font-light tracking-wide mb-4 group-hover:text-brand-accent transition-colors duration-500">
                        {type}
                      </h3>
                    </div>
        
                    <div className="flex items-center gap-3 text-brand-accent/60 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 group-hover:gap-5 group-hover:text-brand-accent">
                      <span>Explore { type } Collection</span>
                      <FiArrowRight className="text-sm" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
