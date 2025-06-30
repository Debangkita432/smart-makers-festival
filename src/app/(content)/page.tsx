"use client";

import Lenis from "@/components/shared/lenis";
import { LabIntro } from "@/components/story/intro";
import { HeroParallax } from "@/components/widgets/Hero";

import SponsorCarousel from "@/components/ui/sponsors";
import MapSection from "@/components/ui/mapsection";
import { Team } from "@/components/ui/smfteam";

const images = [
  { alt: "", src: "/Aryabhatta.png" },
  { alt: "", src: "/2.png" },
  { alt: "", src: "/3.png" },
  { alt: "", src: "/4.png" },
  { alt: "", src: "/5.png" },
  { alt: "", src: "/6.png" },
  { alt: "", src: "/7.png" },
  { alt: "", src: "/8.png" },
  { alt: "", src: "/9.png" },
  { alt: "", src: "/10.png" },
  { alt: "", src: "/11.png" },
  { alt: "", src: "/12.png" },
  { alt: "", src: "/13.png" },
  { alt: "", src: "/14.png" },
  { alt: "", src: "/15.png" },
  { alt: "", src: "/16.png" },
];

export default function Home() {
  
  

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col py-0 font-orbitron">
      <Lenis>
        <HeroParallax images={images} />
        <LabIntro />

        {/* 🧩 Spacer to avoid overlap */}
        <div className="mt-10 sm:mt-20" />

        {/* 🧩 Collaborator Carousel */}
        <SponsorCarousel />

        <Team />

        {/* 📍 Map Section */}
        <MapSection />
      </Lenis>
    </main>
  );
}
