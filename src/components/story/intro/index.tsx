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
          <div className="text-left text-white space-y-1 px-4 md:px-12">
            <h2
              style={{ fontWeight: 100 }}
              className={cn(
                s.title,
                "tracking-widest text-[10px] md:text-sm lg:text-base",
                orbitronFont.className
              )}
            >
              Unveiling the
            </h2>
            <h2
              style={{ fontWeight: 100 }}
              className={cn(
                s.title,
                "tracking-widest text-[10px] md:text-sm lg:text-base",
                orbitronFont.className
              )}
            >
              Smart Maker Festival
            </h2>
          </div>
        </Parallax>

        {/* Image + Description */}
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
                "md:text-left text-center text-xs md:text-2xl leading-relaxed text-white font-normal"
              )}
            >
              The <strong className="text-[#00BFFF]">SMART Maker Festival 2025</strong> is a non-profit,
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
              Now, <strong className="text-[#00BFFF]">SMART Maker Festival 2025</strong> returns grander than
              ever with science exhibitions, innovative project competitions,
              quizzes, photography and filmmaking contests, food stalls,
              handicrafts, and expert panel discussions. It continues to be a
              platform for showcasing ideas, learning, and collaboration.
              <strong>&quot;THE ANTICIPATION ENDS HERE!!!&quot;</strong>
              — the <strong className="text-[#00BFFF]">SMART Maker Festival 2025</strong> is back to empower the creators of
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
};
