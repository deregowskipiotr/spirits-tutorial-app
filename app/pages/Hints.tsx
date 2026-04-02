"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { hints } from "../data";



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export default function Hints() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(hints.map(h => h.category)))];
  const filteredHints = activeCategory === "All" 
    ? hints 
    : hints.filter(h => h.category === activeCategory);

  return (
    <section id="hints" className="relative min-h-screen py-32 flex flex-col items-center justify-center border-t border-brand-accent/5 overflow-hidden font-old-standard">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6">
        
        {/* Header Section - Sequential Title -> Subtitle */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8"
          >
            <span className="text-white">CONNOISSEUR&apos;S</span>{" "}
            <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(201,126,90,0.2)]">GUIDE</span>
          </motion.h1>
          
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: 96 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="h-px bg-brand-accent/30 mx-auto mb-12" 
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-xl font-extralight tracking-wide max-w-2xl mx-auto italic leading-relaxed opacity-80"
          >
            Navigation through the spirit world requires more than a map; it requires a palate. 
            Here you will find the subtle whispers that guide you toward the soul of every bottle.
          </motion.p>
        </div>

        {/* Category Filter - Appears after description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2 rounded-full text-[11px] uppercase tracking-widest transition-all duration-500 font-light border cursor-pointer
                ${activeCategory === category 
                  ? "border-brand-accent/40 bg-brand-accent/10 text-brand-accent" 
                  : "border-white/5 bg-transparent text-gray-400 hover:border-brand-accent/20 hover:text-brand-accent/80"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid - Precise Staggered entry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout" initial={true}>
            {filteredHints.map((hint, index) => {
              const Icon = hint.icon;
              return (
                <motion.div
                  layout
                  key={hint.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.1 + (index * 0.12), 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="h-[380px]"
                >
                  <div 
                    className="group h-full rounded-sm p-10 backdrop-blur-xl transition-all duration-700 border border-brand-accent/20 hover:border-brand-accent/60 shadow-2xl flex flex-col justify-between relative overflow-hidden cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, rgba(12,10,13,0.8) 0%, rgba(8,6,8,0.9) 100%)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(201, 126, 90, 0.1)"
                    }}
                  >
                    {/* Hover Effect Light */}
                    <div className="absolute inset-0 bg-linear-to-br from-brand-accent/5 via-brand-accent/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Engraved pattern on card */}
                    <div className="absolute inset-0 engraved-pattern opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent/50 group-hover:bg-brand-accent/5 transition-all duration-500">
                          <Icon className="text-3xl text-brand-accent/60 group-hover:text-brand-accent transition-colors duration-500" />
                        </div>
                        <div className="inline-block px-3 py-1 rounded-sm text-[9px] font-bold tracking-widest uppercase bg-transparent text-brand-accent/70 border border-brand-accent/20 group-hover:border-brand-accent/40 group-hover:text-brand-accent transition-all duration-500">
                          {hint.category}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl text-white font-light tracking-wide pt-6 mb-8 group-hover:text-brand-accent transition-colors duration-500">
                        {hint.title}
                      </h3>
                      
                      <p className="text-gray-400 pt-8 text-sm font-extralight leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {hint.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

