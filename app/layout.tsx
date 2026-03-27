import type { Metadata } from "next";
import { Inter, Old_Standard_TT } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ['300', '400', '500', '600', '700'],
});

const oldStandard = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-old-standard",
  weight: ['400', '700'],
});

import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Soul of Spirits | The Sanctum",
  description: "A premium repository of artisanal spirits knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${oldStandard.variable} font-body antialiased bg-[#030303] text-gray-200 overflow-x-hidden`}>
        <Navbar />
        {children}
        <div 
          className="fixed inset-0 opacity-[0.03] pointer-events-none z-50"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C97E5A 0px, #C97E5A 1px, transparent 1px, transparent 12px)",
          }}
        />
      </body>
    </html>
  );
}