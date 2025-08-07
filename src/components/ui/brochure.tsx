import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";
import useSound from "@/hooks/sound"; // <-- Import sound hook

export default function Brochure() {
  const playSound = useSound("/sound/smf.mp3"); // <-- Initialize sound

  return (
    <div className="w-full flex justify-center my-8 px-4">
      <a
        href="https://drive.google.com/uc?export=download&id=1O6ot6hHVfVGTee-7SNqV84s8DNgG4NHR"
        target="_blank"
        rel="noopener noreferrer"
        onClick={playSound}
      >
        <Button
          className={cn(
            "px-6 py-3 text-sm sm:px-12 sm:py-5 sm:text-lg font-semibold rounded-[1rem]",
            "bg-[#001f4d] text-white hover:bg-[#000d26]",
            "shadow-[0_0_15px_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.4)]",
            orbitronFont.className
          )}
        >
          Download Event Brochure
        </Button>
      </a>
    </div>
  );
}
