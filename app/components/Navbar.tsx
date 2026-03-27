"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Intersection Observer for active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "intention", "hints", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Intention", href: "/#intention" },
    { name: "Hints", href: "/#hints" },
    { name: "Contact", href: "/#contact" },
    { name: "Spirits", href: "/spirits" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/spirits") return pathname.startsWith("/spirits");
    if (pathname !== "/") return false;
    return activeSection === href.split("#")[1];
  };

  const menuVariants = {
    closed: { opacity: 0, y: -20, filter: "blur(10px)" },
    open: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 font-old-standard border-b ${
          scrolled 
            ? "py-4 bg-[#030303]/40 backdrop-blur-xl border-brand-accent/10" 
            : "py-8 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo - PD */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <Link 
              href="/#home" 
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="group cursor-pointer"
            >
              <span className="text-3xl md:text-4xl text-white tracking-widest font-light group-hover:text-brand-accent italic transition-colors duration-500">P</span>
              <span className="text-3xl md:text-4xl text-brand-accent tracking-widest font-light group-hover:text-white -ml-1 italic transition-colors duration-500">D</span>
            </Link>
          </motion.div>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
              >
                <Link 
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.2em] font-light transition-all duration-500 hover:text-brand-accent relative pb-1 group ${
                    isLinkActive(link.href) ? "text-brand-accent" : "text-gray-400"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-brand-accent/40 transition-transform duration-500 origin-left ${
                    isLinkActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Button (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <Link href="/spirits">
              <button className="px-8 py-3 bg-white/5 hover:bg-brand-accent/10 backdrop-blur-xl border border-brand-accent/20 hover:border-brand-accent/50 rounded-md text-[9px] text-white tracking-[0.3em] font-bold uppercase transition-all duration-700 cursor-pointer active:scale-95">
                MEMBERS ACCESS
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="lg:hidden text-brand-accent/80 text-2xl p-2 cursor-pointer"
          >
            <FiMenu />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-60 bg-[#030303]/95 backdrop-blur-2xl flex flex-col font-old-standard"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between px-6 py-8">
               <Link 
                 href="/#home" 
                 onClick={(e) => {
                   setIsOpen(false);
                   if (pathname === "/") {
                     e.preventDefault();
                     window.scrollTo({ top: 0, behavior: "smooth" });
                   }
                 }} 
                 className="text-3xl text-white tracking-widest font-light"
               >
                P<span className="text-brand-accent">D</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-brand-accent text-3xl p-2 cursor-pointer"
              >
                <FiX />
              </button>
            </div>

            {/* Overlay Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-light tracking-[0.3em] uppercase transition-colors ${
                      isLinkActive(link.href) ? "text-brand-accent" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Overlay Footer Button */}
            <div className="p-8 pb-16">
              <Link href="/spirits" onClick={() => setIsOpen(false)}>
                <button className="w-full py-5 bg-brand-accent/10 border border-brand-accent/30 rounded-md text-sm text-white tracking-[0.4em] font-light uppercase">
                  ENTER THE HOARD
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
