"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

export const LabIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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

      {/* Portrait Video Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-16 mb-12 px-6">
        <div className="relative flex justify-center">
          {/* Video with poster thumbnail */}
          <video
            ref={videoRef}
            src="/video/recap.mp4"
            className="object-contain rounded-lg shadow-lg w-[300px] h-[500px] md:w-[360px] md:h-[640px] bg-black"
            controls={isPlaying}
            onPause={() => setIsPlaying(false)}
            poster="/video/recap-thumbnail.jpg" // Thumbnail before play
          />

          {/* Overlay (shown until play) */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/50 rounded-lg flex flex-col items-center justify-center text-white transition-opacity duration-300">
              {/* REC text with dot */}
              <div className="absolute top-4 left-4 text-sm flex items-center gap-2">
                <span className="font-bold">REC</span>
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </div>

              {/* Flashback Text */}
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-center">
                FLASHBACK 2024
              </h1>

              {/* Frame Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white"></div>

              {/* Play Button */}
              <button
                onClick={handlePlay}
                className="mt-6 bg-white text-black p-5 rounded-full shadow-lg hover:scale-110 transition"
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
