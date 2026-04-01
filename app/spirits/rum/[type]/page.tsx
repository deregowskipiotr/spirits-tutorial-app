"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { rumData } from "@/app/data";



const ImageWithPlaceholder = ({ src, alt }: { src: string; alt: string }) => {
  // Simple placeholder if image doesn't exist yet
  if (!src || src === '') {
    return (
      <div className="w-full h-full min-h-[350px] lg:min-h-[450px] rounded-[4px] border border-brand-accent/20 bg-white/5 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <span className="text-brand-accent/40 text-[10px] uppercase tracking-[0.2em] relative z-10 transition-transform duration-500 group-hover:scale-110">
          Image Placeholder
        </span>
        <div className="absolute inset-0 engraved-pattern opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-[450px] rounded-[4px] overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-brand-accent/30 opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

export default function RumTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);
  const data = rumData[type];

  // Handle case where type doesn't exist
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <Link href="/spirits/rum" className="text-brand-accent hover:underline">
            Back to Rum Collection
          </Link>
        </div>
      </main>
    );
  }
  
  
  
  return (
    <main className="min-h-screen bg-[#030303] text-white font-old-standard overflow-x-hidden pt-24 pb-32">
      {/* Background styling based on other spirits pages */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,126,90,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 engraved-pattern opacity-[0.02] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-24 lg:mb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            <span className="text-white uppercase">{data.title}</span>{" "}
            <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(201,126,90,0.2)] text-5xl">Collection</span>
          </h1>
          
          <div className="w-24 h-px bg-brand-accent/30 mx-auto mb-10" />
          
          <p className="text-gray-400 text-lg md:text-xl font-extralight tracking-wide max-w-2xl mx-auto italic leading-relaxed opacity-80">
            Every drop tells a story of pristine origins and meticulous filtration. 
            Uncover the subtle nuances that elevate this spirit beyond the ordinary.
          </p>
        </motion.div>

        {/* Rows Container */}
        <div className="space-y-32 lg:space-y-48">
          {data.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                section.imagePosition === 'left' ? '' : ''
              }`}
            >
            {section.imagePosition === 'left' ? (
              <>
                <div className="order-1 lg:order-1 h-full">
                  <ImageWithPlaceholder src={section.image} alt={`${data.title} - Section ${section.id}`} />
               </div>
               <div className="order-2 lg:order-2">
                 <p className="text-gray-300 font-light leading-relaxed tracking-wide text-lg opacity-90">
                   {section.text}
                 </p>
               </div>
              </>
            ) : (
              <>
                <div className="order-2 lg:order-1">
                  <p className="text-gray-300 font-light leading-relaxed tracking-wide text-lg opacity-90">
                    {section.text}
                  </p>
                </div>
                <div className="order-1 lg:order-2 h-full">
                  <ImageWithPlaceholder src={section.image} alt={`${data.title} - Section ${section.id}`} />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

        {/* Footer Link Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-32 lg:mt-48 flex justify-end"
        >
          <Link href="/spirits/rum">
            <button 
              type="button"
              className="flex items-center gap-3 hover:gap-5 text-brand-accent/60 hover:text-brand-accent transition-all duration-300 text-[10px] uppercase tracking-[0.2em] group cursor-pointer font-bold"
            >
               <FiArrowLeft className="text-sm" /> Back to Rum Products
            </button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
