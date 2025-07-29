"use client";

import Image from "next/image";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const facultyMembers = [
  { name: "Dr. Sudipta Roy", role: "Faculty Head", image: "/coming.png" },
  { name: "Prof. Sanchita Paul", role: "Faculty Advisor", image: "/coming.png" },
  { name: "Prof. Amitava Das", role: "Tech Mentor", image: "/coming.png" },
];

const teamMembers = [
  { name: "Team Member 1", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 2", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 3", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 4", role: "Technical Team", image: "/coming.png" },
  { name: "Teaadm Member 5", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 6", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 7", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 8", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 9", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 10", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 11", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 12", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 13", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 14", role: "Technical Team", image: "/coming.png" },
  { name: "Team Member 15", role: "Technical Team", image: "/coming.png" },
];

const alumniMembers = [
  { name: "Alumni 1", role: "Former Member", image: "/coming.png" },
  { name: "Alumni 2", role: "Former Member", image: "/coming.png" },
];

export function Team() {
  return (
    <div className="h-fit w-full px-4 sm:px-10">
      {/* Faculty Section */}
      <div className="text-center pt-20">
        <h1 className={cn("text-3xl sm:text-5xl text-white", orbitronFont.className)}>
          Faculty Team
        </h1>
      </div>
      <div className="glassmorphic-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center py-10 mt-6">
        {facultyMembers.map((member, i) => (
          <div key={i} className="relative w-[160px] sm:w-[200px] h-[200px] group">
            <div className="absolute inset-0 z-20 border border-white transition-transform duration-500 ease-in-out group-hover:-translate-x-6 group-hover:-translate-y-6 rounded-lg overflow-hidden">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 z-10 bg-white flex items-end p-3 transition-transform duration-500 ease-in-out group-hover:translate-x-6 group-hover:translate-y-6 rounded-lg">
              <div className="text-center w-full">
                <h2 className="text-sm font-semibold text-black">{member.name}</h2>
                <p className="text-blue-800 text-xs">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Core Team Section */}
      <div className="text-center pt-10">
        <h1 className={cn("text-3xl sm:text-5xl text-white", orbitronFont.className)}>
          Core Team
        </h1>
      </div>
      <div className="glassmorphic-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center py-10 mt-6">
        {teamMembers.map((member, i) => (
          <div key={i} className="relative w-[160px] sm:w-[200px] h-[200px] group">
            <div className="absolute inset-0 z-20 border border-white transition-transform duration-500 ease-in-out group-hover:-translate-x-6 group-hover:-translate-y-6 rounded-lg overflow-hidden">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 z-10 bg-white flex items-end p-3 transition-transform duration-500 ease-in-out group-hover:translate-x-6 group-hover:translate-y-6 rounded-lg">
              <div className="text-center w-full">
                <h2 className="text-sm font-semibold text-black">{member.name}</h2>
                <p className="text-blue-800 text-xs">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alumni Section */}
      <div className="text-center pt-10">
        <h1 className={cn("text-3xl sm:text-5xl text-white", orbitronFont.className)}>
          Alumni Team
        </h1>
      </div>
      <div className="glassmorphic-container flex flex-col sm:flex-row sm:justify-center sm:gap-12 gap-6 items-center py-10 mt-6">
        {alumniMembers.map((member, i) => (
          <div key={i} className="relative w-[160px] sm:w-[200px] h-[200px] group">
            <div className="absolute inset-0 z-20 border border-white transition-transform duration-500 ease-in-out group-hover:-translate-x-6 group-hover:-translate-y-6 rounded-lg overflow-hidden">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 z-10 bg-white flex items-end p-3 transition-transform duration-500 ease-in-out group-hover:translate-x-6 group-hover:translate-y-6 rounded-lg">
              <div className="text-center w-full">
                <h2 className="text-sm font-semibold text-black">{member.name}</h2>
                <p className="text-blue-800 text-xs">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Glassmorphic style */}
      <style jsx>{`
        .glassmorphic-container {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 28px;
          padding: 32px;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>
  );
}
