"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

export const LabIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="intro_container__2gK1r">
      {/* Heading */}
      <div className="text-center text-white space-y-1 px-4 md:px-12">
        <h2
          className={cn(
            "tracking-widest text-lg md:text-2xl lg:text-3xl font-bold",
            orbitronFont.className
          )}
        >
          Unveiling the
        </h2>
        <h2
          className={cn(
            "tracking-widest text-lg md:text-2xl lg:text-3xl font-bold",
            orbitronFont.className
          )}
        >
          Smart Maker Festival
        </h2>
      </div>

      {/* Video + Description */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-16 mb-12 px-6 pb-28 relative z-10">
        <div className="relative flex justify-center">
          {isPlaying ? (
            <div className="w-[300px] h-[500px] md:w-[360px] md:h-[640px] rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Mwr9iYDwBd8?autoplay=1&mute=1"
                title="Flashback 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ) : (
            <div className="relative w-[300px] h-[500px] md:w-[360px] md:h-[640px] bg-black rounded-lg shadow-lg overflow-hidden mt-4">
              {/* <img
                src="/video/recap-thumbnail.jpg"
                alt="Flashback 2024"
                className="w-full h-full object-cover object-center opacity-60"
              /> */}

              <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col items-center justify-center text-white px-4 text-center">
                <div className="absolute top-4 left-4 text-sm flex items-center gap-2">
                  <span className="font-bold">REC</span>
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold mb-4 drop-shadow-md tracking-wider">
                  FLASHBACK 2024
                </h1>

                <button
                  onClick={() => setIsPlaying(true)}
                  className="mt-2 bg-white text-black p-5 rounded-full shadow-lg hover:scale-110 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
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
