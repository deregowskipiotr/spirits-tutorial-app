"use client";

import { motion } from "framer-motion";

export default function Intention() {
  return (
    <section id="intention" className="relative min-h-screen py-32 flex flex-col items-center justify-center border-t border-brand-accent/5">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(201,126,90,0.2)]">VISION</span>
          </h1>
          
          <div className="w-16 h-px bg-brand-accent/30 mx-auto mb-10" />
          
          <p className="text-gray-400 text-lg md:text-xl font-extralight tracking-wide italic leading-relaxed opacity-80">
            This repository is born from twenty years of immersion in the liquid arts. 
            We seek to bridge the gap between simple consumption and the profound understanding of craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
