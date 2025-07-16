"use client";

import clsx from "clsx";
import { Root, Parallax } from "@bsmnt/scrollytelling";
import Image from "next/image";

import s from "./intro.module.scss";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

export const LabIntro = () => {
  return (
    <Root start="top bottom" end="bottom top" scrub={1.1}>
      <div className={s.container}>
        {/* Heading */}
        <Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: -40, unit: "px" },
          }}
        >
          <div className="text-center text-white space-y-1 px-4 md:px-12">
            <h2
              className={cn(
                s.title,
                "tracking-widest text-[10px] md:text-sm lg:text-base",
                orbitronFont.className
              )}
              style={{ fontWeight: 100 }}
            >
              Unveiling the
            </h2>
            <h2
              className={cn(
                s.title,
                "tracking-widest text-[10px] md:text-sm lg:text-base",
                orbitronFont.className
              )}
              style={{ fontWeight: 100 }}
            >
              Smart Maker Festival
            </h2>
          </div>
        </Parallax>

        {/* Image + Description */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-16 mb-12 px-6">
          <div className="flex justify-center w-full lg:w-1/2">
            <Image
              src="/coming.png"
              alt="Smart Maker Festival 2025 Logo"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 text-white text-sm md:text-lg leading-relaxed">
            <p className="text-center lg:text-left">
              The <strong className="text-[#00BFFF]">SMART Maker Festival 2025</strong> is a non-profit,
              family-friendly celebration of creativity, innovation, and hands-on
              invention. Since its Indian debut in 2019, SMF has grown into one of
              the most dynamic gatherings of tech enthusiasts, artists, scientists,
              and makers.
              <br /><br />
              SMF 2020 and 2021 went digital amid global challenges. 2022 made a hybrid comeback. SMF 2023 expanded its reach, and SMF 2024 was a record-breaking event in Kolkata.
              <br /><br />
              Now, <strong className="text-[#00BFFF]">SMART Maker Festival 2025</strong> returns grander than ever — with science exhibitions, project competitions, quizzes, photography, food stalls, handicrafts, and expert discussions.
              <br /><br />
              <strong>&quot;THE ANTICIPATION ENDS HERE!!!&quot;</strong> — The festival is back to empower tomorrow’s creators.
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
};
