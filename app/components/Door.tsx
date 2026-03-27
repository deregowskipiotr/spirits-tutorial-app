"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface DoorProps {
  isOpen: boolean;
  onOpen: () => void;
  imageUrl?: string;
}

export default function Door({ isOpen, onOpen, imageUrl }: DoorProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    if (!isOpen && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      onOpen();
    }
  };

  return (
    <div className="relative w-[280px] h-[420px] group font-old-standard" style={{ perspective: "2000px" }}>
      <audio ref={audioRef} src="/assets/ElevenLabs_scary_door_squaking_open.mp3" preload="auto" />

      {/* Cinematic Copper Light Spill (Behind the door) */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: isOpen ? 0.6 : 0,
          scaleX: isOpen ? 1 : 0,
        }}
        transition={{ duration: 3.0, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-y-0 left-0 w-full origin-left bg-linear-to-r from-brand-accent/40 via-brand-accent/10 to-transparent blur-3xl pointer-events-none z-0"
      />

      {/* Door Frame / Depth */}
      <motion.div 
        animate={{ opacity: isOpen ? 0.2 : 0.8 }}
        className="absolute inset-0 border-px border-brand-accent/20 rounded-lg shadow-inner z-10 pointer-events-none" 
      />

      {/* The Swinging Door Leaf */}
      <motion.div
        initial={{ rotateY: 0, translateZ: 0 }}
        animate={{ 
          rotateY: isOpen ? -115 : 0,
          translateZ: isOpen ? 10 : 0,
          filter: isOpen ? "brightness(0.3)" : "brightness(1)"
        }}
        transition={{ 
          duration: 3.0, 
          ease: [0.22, 1, 0.36, 1], // Cinematic heavy ease
        }}
        onClick={handleOpen}
        className="relative w-full h-full cursor-pointer z-20"
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
        }}
      >
        {/* Door Face */}
        <div className="absolute inset-0 backface-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Temple Door"
              className="w-full h-full object-cover rounded-md shadow-2xl border border-brand-accent/20"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-b from-neutral-900 to-black rounded-md shadow-2xl flex items-center justify-center border border-brand-accent/30">
              <span className="text-brand-accent/20 text-[10px] tracking-[0.4em] font-light uppercase">Sanctum</span>
            </div>
          )}
          
          {/* Realistic Copper Details (Hinges) - Scaled */}
          <div className="absolute left-1 top-8 w-1 h-8 bg-brand-accent/40 rounded-sm shadow-sm" />
          <div className="absolute left-1 bottom-8 w-1 h-8 bg-brand-accent/40 rounded-sm shadow-sm" />
          
          {/* "Unlock the Temple" Jumping Hint */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block text-3xl filter drop-shadow-[0_0_8px_rgba(201,126,90,0.5)]"
              >
                🗝️
              </motion.div>
              <motion.span 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-brand-accent/60 text-[10px] tracking-[0.2em] mt-14 md:mt-0 font-light uppercase whitespace-nowrap"
              >
                Unlock the Temple
              </motion.span>
            </motion.div>
          )}
        </div>

        {/* Door Edge (Thickness) */}
        <div 
          className="absolute top-0 bottom-0 right-1 w-2.5 bg-amber-950/90 border-l border-amber-600/20" 
          style={{ 
            transform: "rotateY(90deg) translateZ(1px)",
            transformOrigin: "right"
          }}
        />
      </motion.div>
    </div>
  );
}
