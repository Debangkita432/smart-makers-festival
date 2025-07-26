"use client";

import Container from "@/components/shared/container";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import PictureGallery from "@/components/ui/picture";

export default function About() {
  return (
    <Container className="mx-auto px-4 sm:px-8">
      {/* Heading: Responsive, always visible */}
      <h1
        id="about"
        className={cn(
          "text-xl sm:text-3xl md:text-5xl lg:text-6xl text-white text-center leading-snug break-words pt-24 sm:pt-28 lg:pt-36 mb-8",
          orbitronFont.className
        )}
      >
        Glimpses from Previous Editions
      </h1>

      {/* Picture Gallery right below heading */}
      <PictureGallery />

      {/* Optional maps section */}
      {/*
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
      */}
    </Container>
  );
}
