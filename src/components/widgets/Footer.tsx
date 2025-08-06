"use client";

import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import EmailIcon from "../icons/EmailIcon";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FiFacebook } from "react-icons/fi";
import useSound from "@/hooks/sound"; // <-- Correct import

const Footer = () => {
  const playSound = useSound("/sound/smf.mp3"); // <-- Works now

  return (
    <footer className="w-full text-white px-6 md:px-12 pt-2 md:pt-6 lg:pt-8 pb-6 md:pb-10 bg-transparent">
      {/* Title */}
      <h2
        className={cn(
          "text-4xl sm:text-5xl text-center mb-4 sm:mb-6 lg:mb-14 tracking-wider",
          orbitronFont.className
        )}
      >
        Contact Us
      </h2>

      {/* Centered Contact List */}
      <div className="flex justify-center mb-4 md:mb-8 lg:mb-12">
        <ul className="space-y-5 text-gray-300 text-lg font-semibold text-center">
          <li>PRIYANSHU PATHAK (MANAGEMENT BUILDING): +91 9609569944</li>
          <li>ARANYA RATH (GURUKUL CAMPUS): +91 8274090864</li>
          <li>SOUMYAJEET CHOUDHURY (ASHRAM CAMPUS): +91 7980045149</li>
          <li>AYUSH DUBEY (UEM KOLKATA): +91 9874861855</li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © 2025 Smart Maker Festival
        </p>

        <div className="flex gap-5">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/smartmakerfestival2k25?igsh=bHZrb2lvNDFkaTM2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
            onClick={playSound}
          >
            <InstagramIcon className="w-6 h-6" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/smartmakerfestival"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
            onClick={playSound}
          >
            <FiFacebook className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:smartmakerfestival2k25@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
            onClick={playSound}
          >
            <EmailIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
