"use client";

import { motion } from "framer-motion";

export default function Intention() {
  return (
    <section id="intention" className="relative min-h-[80vh] py-32 flex flex-col items-center justify-center border-t border-brand-accent/5 overflow-hidden font-old-standard">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,126,90,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 engraved-pattern opacity-[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
        >
          {/* Animated Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-8"
          >
            <span className="text-white opacity-90 uppercase">Our</span>{" "}
            <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(201,126,90,0.2)]">VISION</span>
          </motion.h1>
          
          {/* Animated Divider */}
          <motion.div 
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: 64 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
             className="h-px bg-brand-accent/30 mx-auto mb-12" 
          />
          
          {/* Animated Body Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-2xl font-extralight tracking-wide italic leading-relaxed max-w-3xl mx-auto"
          >
            &ldquo;This repository is born from twenty years of immersion in the liquid arts. 
            We seek to bridge the gap between simple consumption and the profound understanding of craftsmanship.&rdquo;
          </motion.p>
          
          {/* Subtle Accent Mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 2 }}
            className="mt-16 text-brand-accent/20 text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            — Established in the Sanctum —
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
