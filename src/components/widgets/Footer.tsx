import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import EmailIcon from "../icons/EmailIcon";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full text-white px-6 md:px-12 pt-16 pb-10 bg-transparent">
      {/* Title */}
      <h2
        className={cn(
          "text-4xl sm:text-5xl text-center mb-14 tracking-wider",
          orbitronFont.className
        )}
      >
        Contact Us
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12 max-w-6xl mx-auto">
        {/* General Convenors */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 text-white text-center">
            Technical Team
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center">
            <li>ABC : +91 1000000000</li>
            <li>ABC : +91 1000000000</li>
            <li>ABC : +91 1000000000</li>
          </ul>
        </div>

        {/* Finance Convenors */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 text-white text-center">
            Event Heads
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center">
            <li>ABC : +91 1000000000</li>
            <li>ABC : +91 1000000000</li>
          </ul>
        </div>

        {/* Event Coordinators */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 text-white text-center">
            Faculty Head
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center">
            <li>ABC : +91 1000000000</li>
            <li>ABC : +91 1000000000</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © 2025 Smart Maker Festival
        </p>

        <div className="flex gap-5">
          <a
            href="https://www.instagram.com/fetsu_presents_sanskriti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/fetsanskritiju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
          >
            <FiFacebook className="w-6 h-6" />
          </a>
          <a
            href="mailto:ju.fetsanskriti@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
