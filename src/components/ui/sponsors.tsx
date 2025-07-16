"use client";

import React, { useEffect, useRef, useState } from "react";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sponsors = [
  "/COMING.png",
  "/COMING.png",
  "/COMING.png",
  "/COMING.png",
  "/COMING.png",
  "/COMING.png",
];

const SponsorCarousel: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [elementsDisplayed, setElementsDisplayed] = useState(5);

  useEffect(() => {
    // Responsive count
    const updateDisplay = () => {
      if (window.innerWidth <= 600) setElementsDisplayed(1);
      else if (window.innerWidth <= 768) setElementsDisplayed(3);
      else setElementsDisplayed(5);
    };

    updateDisplay();
    window.addEventListener("resize", updateDisplay);

    const list = listRef.current;
    if (!list) return;

    // Duplicate for infinite loop
    const existing = Array.from(list.children);
    existing.forEach((child) => {
      list.appendChild(child.cloneNode(true));
    });

    return () => window.removeEventListener("resize", updateDisplay);
  }, []);

  return (
    <section className="my-12">
      <h2
        className={cn(
          "text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6",
          orbitronFont.className
        )}
        style={{ color: "#00bfff" }}
      >
        Previous Year Collaborators
      </h2>

      <div
        className="relative overflow-hidden mx-auto"
        style={{
          ["--marquee-width" as any]: "90vw",
          ["--marquee-height" as any]: "180px",
          ["--marquee-elements-displayed" as any]: elementsDisplayed,
          ["--marquee-element-width" as any]:
            "calc(var(--marquee-width) / var(--marquee-elements-displayed))",
          ["--marquee-animation-duration" as any]: `${sponsors.length * 3}s`,
          width: "var(--marquee-width)",
          height: "var(--marquee-height)",
        }}
      >
        {/* Fading edges */}
        <div
          className="absolute left-0 top-0 h-full z-10 pointer-events-none"
          style={{
            width: "4rem",
            background: "linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 h-full z-10 pointer-events-none"
          style={{
            width: "4rem",
            background: "linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* Sponsor logos carousel */}
        <ul
          ref={listRef}
          className="flex h-full list-none m-0 p-0"
          style={{
            animation: `scrolling var(--marquee-animation-duration) linear infinite`,
          }}
        >
          {sponsors.map((logo, index) => (
            <li
              key={index}
              className="flex items-center justify-center flex-shrink-0 px-6"
              style={{
                width: "var(--marquee-element-width)",
              }}
            >
              <Image
                src={logo}
                alt={`Sponsor ${index + 1}`}
                width={180}
                height={80}
                className="object-contain w-full h-full max-h-[180px]"
                priority={index < elementsDisplayed}
              />
            </li>
          ))}
        </ul>

        {/* Keyframes for animation */}
        <style jsx>{`
          @keyframes scrolling {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                calc(-1 * var(--marquee-element-width) * ${sponsors.length})
              );
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SponsorCarousel;
