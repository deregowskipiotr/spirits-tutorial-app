// app/spirits/vodka/[type]/page.tsx

import SpiritTypeView from "@/app/components/SpiritTypeView";
import { vodkaData } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(vodkaData).map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const data = vodkaData[type];
  
  return {
    title: data ? `${data.title} Vodka Collection | Sanctum` : "Vodka Collection | Sanctum",
    description: data ? data.description : "Explore our exclusive premium vodka collection.",
  };
}

export default async function VodkaTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const data = vodkaData[type];
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-brand-accent">Product Not Found</h1>
          <Link href="/spirits/vodka" className="text-gray-400 hover:text-white transition-colors">
            Back to Vodka Collection
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <SpiritTypeView 
      data={data} 
      categoryName="Vodka" 
      categoryPath="/spirits/vodka" 
    />
  );
}