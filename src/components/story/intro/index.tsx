"use client";

import clsx from "clsx";
import { Root, Parallax, Animation } from "@bsmnt/scrollytelling";
import Image from "next/image";

import s from "./intro.module.scss";
import { cn } from "@/lib/utils";
import { orbitronFont } from "@/lib/fonts";

export const LabIntro = () => {
  return (
    <Root start="top bottom" end="bottom top" scrub={1.1}>
      <div className={s.container}>
        <Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: 40, unit: "px" },
          }}
        >
          <svg
            width="732"
            height="301"
            viewBox="0 0 732 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.backgroundSvg}
          >
            <path
              d="M628.193 67.9406C563.929 76.1379 499.499 80.8854 435.955 96.0051C305.698 126.998 179.75 177.007 51.0966 215.747..."
              stroke="#FF4D00"
              strokeWidth="1.15257"
              strokeLinecap="round"
              strokeDasharray="7 7"
            />
          </svg>
        </Parallax>

        <Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: -40, unit: "px" },
          }}
        >
          <h2 className={cn(s.title, "tracking-widest text-lg md:text-2xl", orbitronFont.className)}>
             what is Smart Maker Festival ? 
          </h2>
        </Parallax>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 mb-12 px-4">
          <div className="flex-shrink-0">
            <Image
              src="/smf2025.png"
              alt="Smart Maker Festival 2025 Logo"
              width={700}
              height={700}
              className="object-contain"
              priority
            />
          </div>

          <div className="md:max-w-4xl">
            <p
              className={cn(
                "md:text-left text-center text-xs md:text-2xl leading-relaxed",
                orbitronFont.className
              )}
            >
              The <strong>SMART Maker Festival 2025</strong> is a non-profit,
              family-friendly celebration of creativity, innovation, and hands-on
              invention. Since its Indian debut in 2019, SMF has grown into one of
              the most dynamic gatherings of tech enthusiasts, artists, scientists,
              and makers. SMF 2020 and 2021 saw a digital transformation amid global
              challenges, hosting virtual showcases and workshops. In 2022, the
              festival made a hybrid comeback, reigniting the spirit of innovation.
              SMF 2023 expanded its reach with greater participation, while SMF 2024
              was a record-breaking event in Kolkata, drawing thousands to celebrate
              science, art, and technology.
              <br />
              <br />
              Now, <strong>SMART Maker Festival 2025</strong> returns grander than
              ever with science exhibitions, innovative project competitions,
              quizzes, photography and filmmaking contests, food stalls,
              handicrafts, and expert panel discussions. It continues to be a
              platform for showcasing ideas, learning, and collaboration.
              <span className="text-tiara_red font-bold">
                "THE ANTICIPATION ENDS HERE!!!"
              </span>{" "}
              — the SMART Maker Festival 2025 is back to empower the creators of
              tomorrow.
            </p>
          </div>
        </div>

        {/* Optional Marquee can be added later */}
      </div>
    </Root>
  );
};
