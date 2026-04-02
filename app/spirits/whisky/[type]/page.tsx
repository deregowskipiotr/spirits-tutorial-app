// app/spirits/whisky/[type]/page.tsx

import SpiritTypeView from "@/app/components/SpiritTypeView";
import { whiskyData } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(whiskyData).map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const data = whiskyData[type];
  
  return {
    title: data ? `${data.title} Whisky Collection | Sanctum` : "Whisky Collection | Sanctum",
    description: data ? data.description : "Explore our exclusive premium whisky collection.",
  };
}

export default async function WhiskyTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const data = whiskyData[type];
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-brand-accent">Product Not Found</h1>
          <Link href="/spirits/whisky" className="text-gray-400 hover:text-white transition-colors">
            Back to Whisky Collection
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <SpiritTypeView 
      data={data} 
      categoryName="Whisky" 
      categoryPath="/spirits/whisky" 
    />
  );
}