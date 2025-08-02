import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

export default function Brochure() {
  return (
    <div className="flex items-center justify-center my-8 max-w-4xl mx-auto px-6">
      <div className="ml-20">
                <Button
          asChild
          className={cn(
            "px-6 py-3 text-sm sm:px-12 sm:py-5 sm:text-lg font-semibold rounded-[1rem]",
            "bg-[#001f4d] text-white hover:bg-[#000d26]",
            "shadow-[0_0_15px_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.4)]",
            orbitronFont.className
          )}
        >
        <Link href="/coming.png" target="_blank" rel="noopener noreferrer">
          Download Event Brochure
        </Link>
      </Button>
      </div>
    </div>
  );
}
