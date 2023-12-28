"use client";

import Artist from "@/components/landing-page/artist";
import BoardGames from "@/components/landing-page/board-games";
import Comics from "@/components/landing-page/comics";
import FAQ from "@/components/landing-page/faq";
import GalleryNFT from "@/components/landing-page/gallerie-nft";
import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Comics />
      <BoardGames />
      <GalleryNFT />
      <Artist />
      <FAQ />
    </main>
  );
}
