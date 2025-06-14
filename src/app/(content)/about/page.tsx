"use client";

import Container from "@/components/shared/container";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <Container className="mx-auto">
      <div className="py-4 mx-6 sm:mx-12 space-y-4 pt-32">
        <h1
          id="about"
          className={cn("text-6xl text-center", tiaraFont.className)}
        >
          About Smart Makers Festival
        </h1>

        <p className="text-center text-lg leading-relaxed">
          The <strong>SMART Maker Festival 2025</strong> is a non-profit,
          family-friendly celebration of creativity, innovation, and hands-on
          invention. Since its Indian debut in 2019, SMF has grown into one of
          the most dynamic gatherings of tech enthusiasts, artists, scientists,
          and makers. SMF 2020 and 2021 saw a digital transformation amid global
          challenges, hosting virtual showcases and workshops. In 2022, the
          festival made a hybrid comeback, reigniting the spirit of innovation.
          SMF 2023 expanded its reach with greater participation, while SMF
          2024 was a record-breaking event in Kolkata, drawing thousands to
          celebrate science, art, and technology. Now, <strong>SMART Maker Festival 2025</strong> returns
          grander than ever with science exhibitions, innovative project
          competitions, quizzes, photography and filmmaking contests, food
          stalls, handicrafts, and expert panel discussions. It continues to be
          a platform for showcasing ideas, learning, and collaboration.{" "}
          <br />
          <br />
          <strong>"THE ANTICIPATION ENDS HERE!!!"</strong> — the SMART Maker
          Festival 2025 is back to empower the creators of tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 px-6 sm:px-12">
  <iframe
    className="w-full h-[450px] rounded-xl shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.895617438381!2d88.42738317598728!3d22.5676041794975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a91031a813%3A0x103edacdfb7580e7!2sIEM%20Management%20Building!5e0!3m2!1sen!2sin!4v1718287159983!5m2!1sen!2sin"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  <iframe
    className="w-full h-[450px] rounded-xl shadow-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.625543945749!2d88.4312934759876!3d22.574518579480113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e0!3m2!1sen!2sin!4v1718287214395!5m2!1sen!2sin"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </Container>
  );
}
