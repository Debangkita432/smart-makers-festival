"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const topImages = [
  "/coming.png",
  "/coming.png",
  "/coming.png",
  "/coming.png",
  "/coming.png",
  "/coming.png",
];

const bottomImages = [
  "/coming.png",
  "/coming.png",
  "/coming.png",
  "/coming.png",
  "/coming.png",
];

const PictureGallery: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(300);
  const [cardHeight, setCardHeight] = useState(200);

  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(280);
        setCardHeight(180);
      } else if (window.innerWidth < 1024) {
        setCardWidth(300);
        setCardHeight(200);
      } else {
        setCardWidth(320);
        setCardHeight(220);
      }
    };

    updateCardSize();
    window.addEventListener("resize", updateCardSize);
    return () => window.removeEventListener("resize", updateCardSize);
  }, []);

  const handleImageClick = (src: string) => {
    const win = window.open(src, "_blank");
    win?.focus();
  };

  return (
    <div className="my-20 overflow-hidden relative w-full space-y-16">
      {/* Heading */}
      <div className="w-full flex justify-center items-center pt-10 sm:pt-20">
        {/* <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl text-white text-center leading-snug px-4",
            orbitronFont.className
          )}
        >
          Glimpses from Previous Editions
        </h2> */}
      </div>

      {/* Top Carousel */}
      <div className="overflow-x-hidden relative">
        <ul
          className="flex animate-scrollLeft gap-8"
          style={{
            width: "max-content",
            animationDuration: "80s",
          }}
        >
          {[...topImages, ...topImages].map((src, index) => (
            <li
              key={`top-${index}`}
              style={{
                minWidth: `${cardWidth}px`,
                height: `${cardHeight}px`,
              }}
            >
              <button
                onClick={() => handleImageClick(src)}
                className="w-full h-full transition-all duration-500 hover:scale-[1.05] cursor-pointer"
              >
                <div className="w-full h-full backdrop-blur-md bg-white/10 border border-white rounded-xl shadow-xl hover:shadow-2xl hover:border-l-[#00bfff] hover:border-r-[#00bfff] hover:border-t-transparent hover:border-b-transparent overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={cardWidth}
                    height={cardHeight}
                    className="object-cover w-full h-full rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Carousel */}
      <div className="overflow-x-hidden relative">
        <ul
          className="flex animate-scrollRight gap-8"
          style={{
            width: "max-content",
            animationDuration: "80s",
          }}
        >
          {[...bottomImages, ...bottomImages].map((src, index) => (
            <li
              key={`bottom-${index}`}
              style={{
                minWidth: `${cardWidth}px`,
                height: `${cardHeight}px`,
              }}
            >
              <button
                onClick={() => handleImageClick(src)}
                className="w-full h-full transition-all duration-500 hover:scale-[1.05] cursor-pointer"
              >
                <div className="w-full h-full backdrop-blur-md bg-white/10 border border-white rounded-xl shadow-xl hover:shadow-2xl hover:border-l-[#00bfff] hover:border-r-[#00bfff] hover:border-t-transparent hover:border-b-transparent overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={cardWidth}
                    height={cardHeight}
                    className="object-cover w-full h-full rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scrollLeft {
          animation: scrollLeft linear infinite;
        }

        .animate-scrollRight {
          animation: scrollRight linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PictureGallery;
