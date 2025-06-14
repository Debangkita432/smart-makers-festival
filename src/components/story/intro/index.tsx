"use client";

import clsx from "clsx";
import { Root, Parallax, Animation } from "@bsmnt/scrollytelling";
import Image from "next/image";

import s from "./intro.module.scss";
import { cn } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";

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
              d="M628.193 67.9406C563.929 76.1379 499.499 80.8854 435.955 96.0051C305.698 126.998 179.75 177.007 51.0966 215.747C34.6395 220.702 18.1584 225.379 1.76567 230.636C-1.91449 231.817 8.67902 226.737 12.1913 224.946C45.404 208.006 78.9877 192.231 112.379 175.833C199.078 133.255 284.291 86.7261 369.968 41.2015C398.131 26.2371 431.344 45.0069 460 31.6905C473.381 25.4724 427.33 8.36477 413.578 13.215C358.347 32.6947 302.314 50.0199 247.976 73.0858C237.151 77.6805 246.928 71.8535 250.963 68.5643C267.595 55.0097 284.224 41.5293 302.074 30.4434C319.353 19.7126 337.563 11.1069 356.237 4.79568C359.563 3.67159 362.932 2.68719 366.344 2.0672C367.541 1.84983 370.219 0.850123 369.968 2.30107C369.551 4.71396 367.028 5.67547 365.454 7.21234C362.024 10.5639 358.396 13.605 354.965 16.9569C301.888 68.8149 252.906 130.958 223.882 207.171C216.075 227.674 201.661 266.424 209.452 290.741C215.687 310.204 244.734 293.52 252.998 289.805C346.865 247.615 434.589 183.803 521.012 122.978C525.943 119.508 530.874 116.038 535.824 112.61C539.753 109.889 550.214 100.266 547.839 104.97C544.42 111.743 537.95 115.301 532.964 120.406C518.223 135.498 511.105 143.302 494.821 157.981C465.725 184.208 434.916 206.569 401.245 222.919C375.388 235.474 345.128 247.895 316.823 247.475C296.913 247.18 306.308 232.553 317.331 222.763C366.433 179.154 426.957 148.469 482.234 120.094C546.383 87.1639 611.846 57.9003 679.939 39.8762C694.7 35.969 711.518 32.9041 726.855 31.6908C757.409 29.2734 665.67 34.8845 635.058 35.6665"
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
          <h2 className={cn(s.title, "tracking-widest", tiaraFont.className)}>
            : what is Smart Maker Festival ? :
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
                tiaraFont.className
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
              science, art, and technology. <br /> <br />
              Now, <strong>SMART Maker Festival 2025</strong> returns grander than
              ever with science exhibitions, innovative project competitions,
              quizzes, photography and filmmaking contests, food stalls,
              handicrafts, and expert panel discussions. It continues to be a
              platform for showcasing ideas, learning, and collaboration.{" "}
              <span className="text-tiara_red font-bold">
                "THE ANTICIPATION ENDS HERE!!!"
              </span>{" "}
              — the SMART Maker Festival 2025 is back to empower the creators of
              tomorrow.
            </p>
          </div>
        </div>

        <div className={s.marquees}>
          <Marquee className={s.marquee1} orange />
          <Marquee className={s.marquee2} reverse />
          <Animation
            tween={[
              {
                start: 0,
                end: 100,
                target: `.${s.marquee1} [data-marquee-animation-container]`,
                to: { x: -1000, ease: "linear" },
              },
              {
                start: 0,
                end: 100,
                target: `.${s.marquee2} [data-marquee-animation-container]`,
                to: { x: 1000, ease: "linear" },
              },
            ]}
          />
        </div>
      </div>
    </Root>
  );
};

const Marquee = ({
  reverse,
  orange,
  className,
}: {
  reverse?: boolean;
  orange?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={clsx(s.marqueeContainer, className)}
      style={{
        ["--marquee-color" as string]: orange
          ? "var(--color-orange)"
          : "var(--color-white)",
      }}
    >
      <div
        className={clsx(s.marqueeAnimationContainer, reverse && s.reverse)}
        data-marquee-animation-container
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={cn(
              s.marqueeItem,
              "tracking-widest",
              tiaraFont.className
            )}
          >
            SMART<span className="text-tiara_red">MAKER</span>{" "}
            <span className="text-tiara_red">'25</span>
          </div>
        ))}
      </div>
    </div>
  );
};
