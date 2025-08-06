"use client";

import Image from "next/image";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { useState } from "react";
import useSound from "@/hooks/sound"; // <-- Import sound hook

const facultyMembers = [
  { name: "Prof. Dr. Banani Chakraborty", role: "President of IEM", image: "/banani_maam.png" },
  { name: "Prof. Dr. Satyajit Chakrabarti", role: "Director of IEM", image: "/satyajit sir.jpeg" },
  { name: "Prof. Dibakar Roy Choudhury", role: "Faculty Head", image: "/dibakar sir.jpeg" },
];

const teamMembers = [
  { 
    name: "Debangkita Saha", 
    linkedin: "https://www.linkedin.com/in/debangkita-saha-304a3b290/", 
    mail: "mailto:debangkitasaha21jan2005@gmail.com", 
    image: "/debangkita.jpeg" 
  },
  { 
    name: "Debangshu Chatterjee", 
    linkedin: "https://www.linkedin.com/in/debangshu-chatterjee-858859282", 
    mail: "mailto:debangshuchatterjee2005@gmail.com", 
    image: "/debangshu.jpeg" 
  },
  { 
    name: "Arpan Kumar Sahoo", 
    linkedin: "https://www.linkedin.com/in/arpan-kumar-sahoo-668145322", 
    mail: "mailto:Arpansahoo413@gmail.com", 
    image: "/arpan.jpeg" 
  },
  { 
    name: "Iman Datta", 
    linkedin: "https://www.linkedin.com/in/iman-datta-161615307/", 
    mail: "mailto:dattaiman56@gmail.com", 
    image: "/iman.jpeg" 
  },
];

// Reusable Card Component
function MemberCard({ member, showIcons = false }: { member: any; showIcons?: boolean }) {
  const [active, setActive] = useState(false);
  const playClickSound = useSound("/sound/smf.mp3"); // <-- Sound for clicks

  const handleClick = () => {
    playClickSound(); // <-- Play sound on card click
    setActive(true);
    setTimeout(() => setActive(false), 1500);
  };

  return (
    <div
      className="relative w-[150px] sm:w-[180px] aspect-square group cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Container */}
      <div
        className={`absolute inset-0 z-20 border border-white rounded-lg overflow-hidden transition-transform duration-500 ease-in-out 
          ${active ? "-translate-y-12 -translate-x-2" : ""}
          sm:group-hover:-translate-y-12 sm:group-hover:-translate-x-2`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-end p-3 pb-6 rounded-lg bg-gradient-to-t from-white/90 via-white/30 to-transparent transition-transform duration-500 ease-in-out 
          ${active ? "translate-y-12 translate-x-2" : ""}
          sm:group-hover:translate-y-12 sm:group-hover:translate-x-2`}
      >
        <h2 className="text-sm font-semibold text-black drop-shadow-lg text-center">{member.name}</h2>
        {member.role && <p className="text-blue-800 text-xs mt-1 text-center">{member.role}</p>}
        {showIcons && (
          <div className="flex gap-3 mt-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
              onClick={playClickSound} // <-- Play sound on icon click
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={member.mail}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
              onClick={playClickSound} // <-- Play sound on icon click
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function Team() {
  return (
    <div className="h-fit w-full px-4 sm:px-10">
      {/* Faculty Section */}
      <div className="text-center pt-20">
        <h1 className={cn("text-3xl sm:text-5xl text-white", orbitronFont.className)}>
          Faculty Team
        </h1>
      </div>
      <div className="glassmorphic-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10 mt-6">
        {facultyMembers.map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}
      </div>

      {/* Technical Team Section */}
      <div className="text-center pt-10">
        <h1 className={cn("text-3xl sm:text-5xl text-white", orbitronFont.className)}>
          Technical Team
        </h1>
      </div>
      <div className="glassmorphic-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center py-10 mt-6">
        {teamMembers.map((member, i) => (
          <MemberCard key={i} member={member} showIcons />
        ))}
      </div>

      {/* Glassmorphic style */}
      <style jsx>{`
        .glassmorphic-container {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 28px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
}
