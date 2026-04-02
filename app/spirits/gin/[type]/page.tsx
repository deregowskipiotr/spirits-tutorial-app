// app/spirits/gin/[type]/page.tsx

import SpiritTypeView from "@/app/components/SpiritTypeView";
import { ginData } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return Object.keys(ginData).map((type) => ({
    type: type,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const data = ginData[type];
  
  return {
    title: data ? `${data.title} Gin Collection | Sanctum` : "Gin Collection | Sanctum",
    description: data ? data.description : "Explore our multi-layered botanical gin collection.",
  };
}

export default async function GinTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const data = ginData[type];
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-brand-accent">Product Not Found</h1>
          <Link href="/spirits/gin" className="text-gray-400 hover:text-white transition-colors">
            Back to Gin Collection
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <SpiritTypeView 
      data={data} 
      categoryName="Gin" 
      categoryPath="/spirits/gin" 
    />
  );
}
