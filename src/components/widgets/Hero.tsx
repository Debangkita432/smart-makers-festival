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

export const HeroParallax = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) => {
  const firstRow = images.slice(0, 5);
  const secondRow = images.slice(5, 10);
  const thirdRow = images.slice(10, 15);
  const ref = React.useRef(null);
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
    useTransform(scrollYProgress, [0, 1], [isMobile ? -300 : -900, isMobile ? 300 : 900]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [isMobile ? -300 : -900, isMobile ? -500 : -1200]),
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
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -220 : -600, isMobile ? 180 : 400]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="-z-10 h-auto overflow-x-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-full"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {/* Row 1 */}
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 mb-10 px-4 sm:px-8 md:px-16 overflow-visible w-full">
          {firstRow.map((image, index) => (
            <ImageCard image={image} translate={translateX} key={index} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 mb-10 px-4 sm:px-8 md:px-16 overflow-visible w-full">
          {secondRow.map((image, index) => (
            <ImageCard image={image} translate={translateXReverse} key={index} />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div className="flex flex-row space-x-4 sm:space-x-10 md:space-x-20 px-4 sm:px-8 md:px-16 overflow-visible w-full">
          {thirdRow.map((image, index) => (
            <ImageCard image={image} translate={translateX} key={index} />
          ))}
        </motion.div>
      </motion.div>

      {/* Add Large Bottom Spacer */}
      <div className="h-[8vh] sm:h-[15vh] md:h-[30vh] lg:h-[40vh]" />
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
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className={cn(
          "pt-20 text-center text-5xl md:text-6xl lg:text-9xl text-[#00bfff]",
          orbitronFont.className
        )}
      >
        Smart Maker Festival 2025
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className={cn("mt-2 text-center text-xl md:text-4xl", orbitronFont.className)}
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
  image: {
    src: string;
    alt: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="w-[12rem] sm:w-[18rem] md:w-[22rem] flex-shrink-0 origin-left"
    >
      <div className="w-full aspect-square relative rounded-lg overflow-hidden shadow-md">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized={image.src.includes("githubusercontent.com")}
          className="object-cover object-center rounded-lg"
        />
      </div>
    </motion.div>
  );
};
