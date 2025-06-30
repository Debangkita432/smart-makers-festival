"use client";

import Container from "@/components/shared/container";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Brochure from "@/components/ui/brochure";
import Guest from "@/components/ui/guest";
import Timeline from "@/components/ui/timeline";

export default function EventsPage() {
  return (
    <>
      {/* Heading */}
      <Container className="mx-auto pt-32">
        <div
          className={cn(
            "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-fit text-center duration-500",
            orbitronFont.className
          )}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#00bfff]">
            Timeline
          </h1>
        </div>
      </Container>

      {/* Timeline section */}
      <Timeline />

      {/* Brochure download button */}
      <Brochure />

      {/* Team/Guest section */}
      <Guest />
    </>
  );
}
