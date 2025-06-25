"use client";

import Container from "@/components/shared/container";
import { LinkProps } from "@/components/ui/hover/link";
import { useEffect, useState } from "react";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Brochure from "@/components/ui/brochure";
import Guest from "@/components/ui/guest";

export default function EventsPage() {
  const [categories, setCategories] = useState<LinkProps[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
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

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full border-b border-white/20 py-8 cursor-default group"
          >
            <div
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-bold text-white transition-all duration-700 ease-in-out group-hover:scale-[1.03] group-hover:animate-glow-wave group-hover:text-[#00bfff]",
                orbitronFont.className
              )}
            >
              {category.heading}
            </div>
            <div className="text-white/70 mt-2 text-sm sm:text-base">
              {category.subheading}
            </div>

            <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Brochure />
      <Guest />
    </>
  );
}
