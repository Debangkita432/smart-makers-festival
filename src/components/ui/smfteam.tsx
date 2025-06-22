"use client";

import Image from "next/image";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// Teacher Coordinator (single card)
const coordinators = [
  { name: "Dr. Sudipta Roy", role: "Faculty Head", image: "" },
];

// Technical Team (2 rows x 5 = 10 people)
const teamMembers = Array.from({ length: 10 }).map((_, i) => ({
  name: `Team Member ${i + 1}`,
  role: "Technical Team",
  image: "",
}));

export function Team() {
  return (
    <div className="h-fit">
      {[
        {
          title: "Teacher coordinator",
          data: coordinators,
          gridClass: "grid-cols-1",
        },
        {
          title: "Core team",
          data: teamMembers,
          gridClass: "grid-cols-2 lg:grid-cols-5",
        },
      ].map(({ title, data, gridClass }, sectionIndex) => (
        <div key={sectionIndex} className="mb-20">
          {/* Section Heading */}
          <div className="flex justify-center items-center pt-20 z-50">
            <div
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-widest text-white",
                orbitronFont.className
              )}
            >
              <h1>{title}</h1>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="w-full flex justify-center px-4 sm:px-10">
            <div
              className={cn(
                "p-6 sm:p-10 grid max-w-[1400px] w-full",
                "gap-x-4 gap-y-10 place-items-center",
                gridClass
              )}
            >
              {data.map((person, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-[140px] sm:max-w-[180px] h-[200px] sm:h-[220px] group"
                >
                  {/* Front Image */}
                  <div className="absolute inset-0 z-20 transition-transform duration-500 ease-in-out group-hover:-translate-x-4 group-hover:-translate-y-6">
                    <Image
                      src={person.image || "/coming.png"}
                      alt={person.name}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>

                  {/* Reveal Content */}
                  <div className="absolute inset-0 z-10 bg-white rounded-xl flex items-end p-3 sm:p-4 transition-transform duration-500 ease-in-out group-hover:translate-x-4 group-hover:translate-y-8">
                    <div className="text-center w-full">
                      <h2 className="text-sm font-bold text-black">{person.name}</h2>
                      <p className="text-[#1c58b3] text-xs">{person.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
