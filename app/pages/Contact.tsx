"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-32 flex flex-col items-center justify-center border-t border-brand-accent/5">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(201,126,90,0.2)]">CONTACT</span>
          </h1>
          
          <div className="w-16 h-px bg-brand-accent/30 mx-auto mb-10" />
          
          <p className="text-gray-400 text-lg md:text-xl font-extralight tracking-wide italic leading-relaxed opacity-80">
            For those who wish to discuss the finer points of distillation or heritage. 
            Reach out via the channels below to begin a deeper conversation.
          </p>
        </motion.div>
      </div>
      
      {/* Footer Polish */}
      <div className="absolute bottom-12 w-full text-center">
           <span className="text-brand-accent/20 text-[10px] tracking-[0.6em] font-light uppercase">Soul of Spirits &copy; 2026</span>
      </div>
    </section>
  );
}
