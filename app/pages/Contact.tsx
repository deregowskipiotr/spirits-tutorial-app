"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMessageSquare, FiSend, FiUser, FiStar, FiHeart, FiCompass } from "react-icons/fi";
import { quotations } from "../data";

// Unified Form Field Component
interface FormFieldProps {
  icon: React.ElementType;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  isTextarea?: boolean;
}

const FormField = ({ icon: Icon, label, type = "text", value, onChange, placeholder, isTextarea = false }: FormFieldProps) => {
  const Component = isTextarea ? "textarea" : "input";
  
  return (
    <div className="group">
      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-accent/60 mb-3">
        <Icon className="inline mr-2 text-brand-accent/40" />
        {label}
      </label>
      <div className="relative">
        <Component
          type={type}
          value={value}
          onChange={onChange}
          rows={isTextarea ? 4 : undefined}
          className="w-full block bg-transparent py-3 text-white text-sm font-light tracking-wide focus:outline-none resize-none placeholder:text-gray-600 transition-all duration-500 border-0 border-b border-brand-accent/20"
          placeholder={placeholder}
        />
        {/* Decorative line - only visible on focus */}
        <div className="absolute bottom-0 left-0 w-0 h-px bg-brand-accent/60 group-focus-within:w-full transition-all duration-700" />
      </div>
    </div>
  );
};

// Quotation Component
const QuotationCard = ({ quote, author, title, delay }: { quote: string; author: string; title: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative group"
  >
    <div className="relative rounded-sm border border-brand-accent/20 backdrop-blur-xl bg-linear-to-br from-[#0c0a0d]/60 via-[#080608]/60 to-[#0a080c]/60 p-6 transition-all duration-500 hover:border-brand-accent/40">
      
      {/* Decorative quote marks */}
      <div className="absolute top-4 left-4 text-6xl font-serif text-brand-accent/10 group-hover:text-brand-accent/20 transition-all duration-700">
        &ldquo;
      </div>
      
      {/* Inner content */}
      <div className="relative z-10">
        {/* Star rating decoration */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="text-brand-accent/40 text-xs" />
          ))}
        </div>
        
        {/* Quote text */}
        <p className="text-gray-300 text-sm font-light italic leading-relaxed mb-6">
          {quote}
        </p>
        
        {/* Author and title */}
        <div className="border-t border-brand-accent/20 pt-4">
          <p className="text-brand-accent/80 text-xs font-bold tracking-widest uppercase mb-1">
            {author}
          </p>
          <p className="text-gray-500 text-[9px] font-light tracking-widest uppercase">
            {title}
          </p>
        </div>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-accent/0 via-brand-accent/0 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

 

  return (
    <section id="contact" className="relative min-h-screen py-32 flex flex-col items-center justify-center border-t border-brand-accent/5 overflow-hidden">
      
      {/* Title Section - First animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-16"
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

      {/* Two Column Layout - Form and Quotations */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* The "Label" Container with Glassmorphism */}
            <div 
              className="relative rounded-sm border border-brand-accent/20 backdrop-blur-xl bg-linear-to-br from-[#0c0a0d]/80 via-[#080608]/80 to-[#0a080c]/80 p-[2px]"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(201, 126, 90, 0.1)",
                background: "linear-gradient(135deg, rgba(12,10,13,0.8) 0%, rgba(8,6,8,0.9) 100%)"
              }}
            >
              {/* Inner Content */}
              <div className="relative bg-transparent p-8 md:p-10 rounded-sm overflow-hidden">
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-black/20 pointer-events-none" />
                
                {/* Subtle engraved pattern */}
                <div className="absolute inset-0 engraved-pattern opacity-[0.03] pointer-events-none" />
                
                {/* Corner ornaments with glass effect */}
                <div className="absolute top-[2px] left-[2px] w-12 h-12 border-t border-l rounded-sm border-brand-accent/30 backdrop-blur-sm" />
                <div className="absolute top-[2px] right-[2px] w-12 h-12 border-t border-r rounded-sm border-brand-accent/30 backdrop-blur-sm" />
                <div className="absolute bottom-[2px] left-[2px] w-12 h-12 border-b border-l rounded-sm border-brand-accent/30 backdrop-blur-sm" />
                <div className="absolute bottom-[2px] right-[2px] w-12 h-12 border-b border-r rounded-sm border-brand-accent/30 backdrop-blur-sm" />
                
                {/* Radial gradient for depth */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-accent/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Form with Unified Components */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <FormField
                    icon={FiUser}
                    label="Distiller's Mark"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your distinguished name"
                  />
                  
                  <FormField
                    icon={FiMail}
                    label="Correspondence"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@cellar.com"
                  />
                  
                  <FormField
                    icon={FiMessageSquare}
                    label="Your Inquiry"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your tasting preferences or exclusive requests..."
                    isTextarea={true}
                  />
                  
                  {/* Vintage Seal Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full py-4 overflow-hidden rounded-sm border border-brand-accent/20 bg-transparent transition-all duration-500 hover:border-brand-accent/40 cursor-pointer backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 w-0 bg-brand-accent/5 group-hover:w-full transition-all duration-700" />
                      <span className="relative flex items-center justify-center gap-3 text-brand-accent/80 group-hover:text-brand-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                        <FiSend className="text-sm group-hover:translate-x-1 transition-transform duration-500" />
                        Send with Distinction
                      </span>
                    </button>
                  </div>
                  
                  {/* Vintage stamp text */}
                  <div className="text-center pt-3">
                    <p className="text-[8px] font-light tracking-[0.2em] text-gray-600 uppercase">
                      Private & Confidential • Estate Bottled Correspondence
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
            {/* "Label" edge shadow effect */}
            <div className="h-4 bg-linear-to-t from-black/0 to-black/20 w-full -mt-1" />
          </motion.div>

          {/* Right Column - Quotations */}
          <div className="space-y-6 md:space-y-13">
            {quotations.map((quote, index) => (
              <QuotationCard
                key={index}
                quote={quote.quote}
                author={quote.author}
                title={quote.title}
                delay={0.4 + (index * 0.15)}
              />
            ))}
            
            {/* Additional decorative element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center pt-4"
            >
              <div className="hidden md:inline-flex items-center gap-3 text-brand-accent/30 text-[8px] tracking-[0.2em] uppercase">
                <FiCompass className="text-brand-accent/40" />
                <span>Since 1886</span>
                <FiHeart className="text-brand-accent/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Polish */}
      <div className="absolute bottom-12 w-full text-center">
        <span className="text-brand-accent/20 text-[10px] tracking-[0.2em] font-light uppercase">Soul of Spirits &copy; 2026</span>
      </div>
    </section>
  );
}