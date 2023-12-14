"use client";

import BoardGames from "@/components/landing-page/board-games";
import Comics from "@/components/landing-page/comics";
import GalleryNFT from "@/components/landing-page/gallerie-nft";
import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Comics />
      <BoardGames />
      <GalleryNFT />
    </main>
  );
}
