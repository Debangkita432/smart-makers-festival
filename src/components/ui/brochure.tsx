import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";

export default function Brochure() {
  return (
    <div className="flex items-center justify-center my-8">
      <Link href="/coming.png" target="_blank" rel="noopener noreferrer">
        <Button
          className={cn(
            "w-full max-w-sm rounded text-xl bg-tiara_red text-white hover:bg-red-600 transition-all ease-in-out hover:scale-125 hover:delay-150",
            tiaraFont.className
          )}
        >
          Download Event Brochure
        </Button>
      </Link>
    </div>
  );
}

