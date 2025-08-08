"use client";

import Container from "@/components/shared/container";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Brochure from "@/components/ui/brochure";

import Timeline from "@/components/ui/timeline";

export default function EventsPage() {
  return (
    <div className="mt-28"> {/* pushes content below the fixed navbar */}
      <Container>
        <h1
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-[#00bfff] duration-500",
            orbitronFont.className
          )}
        >
          Timeline
        </h1>
      </Container>

      <Timeline />

      <Container>
        <Brochure />
      </Container>

     
    </div>
  );
}
