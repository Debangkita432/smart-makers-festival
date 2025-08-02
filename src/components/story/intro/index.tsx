"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

export const LabIntro = () => {
  return (
    <div className="intro_container__2gK1r">
      {/* Heading */}
      <div className="text-center text-white space-y-1 px-4 md:px-12">
        <h2
          className={cn(
            "intro_title__0zIrm tracking-widest text-lg md:text-2xl lg:text-3xl font-bold",
            orbitronFont.className
          )}
          style={{ fontWeight: 700 }}
        >
          Unveiling the
        </h2>
        <h2
          className={cn(
            "intro_title__0zIrm tracking-widest text-lg md:text-2xl lg:text-3xl font-bold",
            orbitronFont.className
          )}
          style={{ fontWeight: 700 }}
        >
          Smart Maker Festival
        </h2>
      </div>

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
            <br />
            <br />
            SMF 2020 and 2021 went digital amid global challenges. 2022 made a hybrid comeback. SMF 2023 expanded its reach, and SMF 2024 was a record-breaking event in Kolkata.
            <br />
            <br />
            Now, <strong className="text-[#00BFFF]">SMART Maker Festival 2025</strong> returns grander than ever — with science exhibitions, project competitions, quizzes, photography, food stalls, handicrafts, and expert discussions.
            <br />
            <br />
            <strong>&quot;THE ANTICIPATION ENDS HERE!!!&quot;</strong> — The festival is back to empower tomorrow&apos;s creators.
          </p>
        </div>
      </div>
    </div>
  );
};
