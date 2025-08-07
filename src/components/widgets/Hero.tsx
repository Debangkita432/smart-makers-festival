"use client";

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

// Define type for images
type ImageType = {
  src: string;
  alt: string;
};

// Utility: Split array into chunks
const chunkArray = (arr: ImageType[], size: number): ImageType[][] =>
  arr.reduce(
    (acc: ImageType[][], _, i) =>
      i % size ? acc : [...acc, arr.slice(i, i + size)],
    []
  );

export const HeroParallax = ({
  images,
}: {
  images: ImageType[];
}) => {
  const rows = chunkArray(images, 5); // split into rows of 5
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 200, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [isMobile ? -300 : -900, isMobile ? 300 : 900]
    ),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [isMobile ? -300 : -900, isMobile ? -500 : -1200]
    ),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [isMobile ? 5 : 12, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [isMobile ? 8 : 15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      [isMobile ? -220 : -600, isMobile ? 180 : 400]
    ),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="-z-10 h-auto pb-40 overflow-x-hidden overflow-y-visible antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-full"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col gap-10 px-4 sm:px-8 md:px-16"
      >
        {rows.map((row: ImageType[], rowIndex: number) => (
          <motion.div
            key={rowIndex}
            className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20"
          >
            {row.map((image: ImageType, index: number) => (
              <ImageCard
                image={image}
                translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
                key={index}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <LampContainer />
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className={cn("pt-20 text-center text-xl md:text-4xl")}
      >
        IEM PRESENTS
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className={cn(
          "pt-20 text-center text-5xl md:text-6xl lg:text-9xl font-extrabold text-[#00bfff] drop-shadow-[0_0_25px_rgba(0,191,255,0.7)]",
          orbitronFont.className
        )}
      >
        Smart Maker Festival 2025
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className={cn(
          "mt-2 text-center text-xl md:text-4xl text-gray-300",
          orbitronFont.className
        )}
      >
        redefining technology...
      </motion.h2>
    </>
  );
};

export const ImageCard = ({
  image,
  translate,
}: {
  image: ImageType;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ scale: 1.07, rotate: 1.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-[12rem] sm:w-[18rem] md:w-[22rem] flex-shrink-0 origin-left"
    >
      <div className="relative w-full aspect-square overflow-visible rounded-xl group shadow-lg shadow-[#00bfff]/20 transition-all duration-500">
        {/* Main image */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:blur-[1px]"
        />

        {/* Text overlay (slide-up effect) */}
        <div className="absolute bottom-[-100%] left-0 w-full bg-[#000000a0] text-white text-xs sm:text-sm p-2 text-center group-hover:bottom-0 transition-all duration-500 ease-in-out backdrop-blur-md">
          {image.alt}
        </div>

        {/* Optional blue glow border */}
        <div className="absolute inset-0 rounded-xl border border-[#00bfff]/10 group-hover:border-[#00bfff]/50 group-hover:shadow-[0_0_30px_5px_rgba(0,191,255,0.5)] transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};
