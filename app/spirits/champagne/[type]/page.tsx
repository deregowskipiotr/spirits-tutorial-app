// app/spirits/champagne/[type]/page.tsx

import SpiritTypeView from "@/app/components/SpiritTypeView";
import { champagneData } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(champagneData).map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const data = champagneData[type];
  
  return {
    title: data ? `${data.title} Champagne Collection | Sanctum` : "Champagne Collection | Sanctum",
    description: data ? data.description : "Explore our prestigious collection of French Champagne.",
  };
}

export default async function ChampagneTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const data = champagneData[type];
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-brand-accent">Product Not Found</h1>
          <Link href="/spirits/champagne" className="text-gray-400 hover:text-white transition-colors">
            Back to Champagne Collection
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <SpiritTypeView 
      data={data} 
      categoryName="Champagne" 
      categoryPath="/spirits/champagne" 
    />
  );
}
