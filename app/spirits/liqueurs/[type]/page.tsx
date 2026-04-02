// app/spirits/liqueurs/[type]/page.tsx

import SpiritTypeView from "@/app/components/SpiritTypeView";
import { liqueurData } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(liqueurData).map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const data = liqueurData[type];
  
  return {
    title: data ? `${data.title} Liqueur Collection | Sanctum` : "Liqueur Collection | Sanctum",
    description: data ? data.description : "Explore our curated collection of fine liqueurs.",
  };
}

export default async function LiqueurTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const data = liqueurData[type];
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-brand-accent">Product Not Found</h1>
          <Link href="/spirits/liqueurs" className="text-gray-400 hover:text-white transition-colors">
            Back to Liqueur Collection
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <SpiritTypeView 
      data={data} 
      categoryName="Liqueur" 
      categoryPath="/spirits/liqueurs" 
    />
  );
}
