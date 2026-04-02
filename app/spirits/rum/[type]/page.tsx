// app/spirits/rum/[type]/page.tsx

import SpiritTypeView from "@/app/components/SpiritTypeView";
import { rumData } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(rumData).map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const data = rumData[type];
  
  return {
    title: data ? `${data.title} Rum Collection | Sanctum` : "Rum Collection | Sanctum",
    description: data ? data.description : "Explore our exclusive Caribbean rum collection.",
  };
}

export default async function RumTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const data = rumData[type];
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-brand-accent">Product Not Found</h1>
          <Link href="/spirits/rum" className="text-gray-400 hover:text-white transition-colors">
            Back to Rum Collection
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <SpiritTypeView 
      data={data} 
      categoryName="Rum" 
      categoryPath="/spirits/rum" 
    />
  );
}
