"use client";

import Lenis from "@/components/shared/lenis";
import { LabIntro } from "@/components/story/intro";
import { HeroParallax } from "@/components/widgets/Hero";
import SponsorCarousel from "@/components/ui/sponsors";
import MapSection from "@/components/ui/mapsection";
import { Team } from "@/components/ui/smfteam";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

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
  const registerFormLink = "https://forms.gle/WGzAWP7i4f4G3y6C8"; // <-- Updated Google Form link

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col py-0 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 font-orbitron">
      <Lenis>
        <HeroParallax images={images} />
        <LabIntro />

        {/* Register Now button for mobile and tablet only */}
        <div className="flex justify-center mt-8 mb-4 md:hidden">
          <div className="flex gap-4">
            <Button
              asChild
              className={cn(
                "px-8 py-3 text-base font-semibold rounded-[1rem] w-32",
                "bg-transparent text-white border-2 border-[#001f4d] hover:bg-[#001f4d]/20 hover:border-[#000d26]",
                "shadow-[0_0_10px_2px_rgba(0,31,77,0.3)] hover:shadow-[0_0_20px_4px_rgba(0,31,77,0.6)]",
                "transition-all duration-300 hover:scale-105",
                orbitronFont.className
              )}
            >
              <Link href="/events">Events</Link>
            </Button>
            <Button
              asChild
              className={cn(
                "px-8 py-3 text-sm font-semibold rounded-[1rem] border-2 border-transparent w-32",
                "bg-[#001f4d] text-white hover:bg-[#000d26] hover:border-[#4da6ff]",
                "shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.6)]",
                "transition-all duration-300 hover:scale-105",
                orbitronFont.className
              )}
            >
              <Link href={registerFormLink} target="_blank" rel="noopener noreferrer">
                Register Now
              </Link>
            </Button>
          </div>
        </div>

        {/* 🧩 Spacer to avoid overlap */}
        <div className="mt-10 sm:mt-20" />

        {/* 🧩 Collaborator Carousel */}
        <SponsorCarousel />

        <Team />

        {/*  Map Section */}
        <MapSection />
      </Lenis>
    </main>
  );
}
