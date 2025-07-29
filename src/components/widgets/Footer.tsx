import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import EmailIcon from "../icons/EmailIcon";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
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

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 text-center md:text-left mb-4 md:mb-8 lg:mb-12 max-w-6xl mx-auto">
        
        {/* Faculty Head */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 text-white text-center">
            Faculty Head
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center">
            <li>ABC : +91 1000000000</li>
            <li>ABC : +91 1000000000</li>
          </ul>
        </div>

        {/* Event Heads */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 text-white text-center">
            Event Heads
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center">
            <li>ABC : +91 1000000000</li>
            <li>ABC : +91 1000000000</li>
          </ul>
        </div>

        {/* Technical Team */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline underline-offset-4 text-white text-center">
            Technical Team
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { name: "Debangkita Saha", linkedin: "https://www.linkedin.com/in/debangkita-saha-304a3b290/", mail: "mailto:debangkitasaha21jan2005@gmail.com" },
              { name: "Debangshu Chatterjee", linkedin: "#", mail: "mailto:def@example.com" },
              { name: "Arpan Kumar Sahoo", linkedin: "https://www.linkedin.com/in/arpan-kumar-sahoo-668145322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", mail: "mailto:Arpansahoo413@gmail.com" },
              { name: "Iman Datta", linkedin: "https://www.linkedin.com/in/iman-datta-161615307/", mail: "mailto:dattaiman56@gmail.com" },
            ].map((member, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-white font-medium min-w-[200px] text-left">
                  {member.name}
                </span>
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tiara_red transition"
                  >
                    <FiLinkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={member.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tiara_red transition"
                  >
                    <EmailIcon className="w-5 h-5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
          >
            <InstagramIcon className="w-6 h-6" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/smartmakerfestival"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
          >
            <FiFacebook className="w-6 h-6" />
          </a>



          {/* Email */}
          <a
            href="mailto:smartmakerfestival2k25@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tiara_red transition"
          >
            <EmailIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
