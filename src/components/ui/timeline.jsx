"use client";

import { orbitronFont } from "@/lib/fonts";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "event 1",
    date: "5th september,2025",
    description:"coming soon..",
    location: "IEM",
  },
  {
    title: "event 2",
    date: "6th september,2025",
    description: "coming soon..",
    location: "IEM",
  },
  {
    title: "students performance",
    date: "6th september,2025",
    description: "coming soon..",
    location: "IEM",
  },
  {
    title: "dance night",
    date: "7th september,2025",
    description: "coming soon..",
    location: "IEM",
  },
];

export default function Timeline() {
  return (
    <div className="w-full mt-24 2xl:w-11/12 mx-auto px-6">


      <div className="space-y-14">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="group relative w-full border-b border-white/20 py-8 cursor-default transition-all duration-500"
          >
            <h3
              className={`
                text-4xl sm:text-5xl text-white font-bold
                transition-all duration-700 ease-in-out
                group-hover:scale-[1.03] group-hover:text-[#00bfff]
                group-hover:drop-shadow-[0_0_10px_#00bfff]
                ${orbitronFont.className}
              `}
            >
              {item.title}
            </h3>
            <p className="text-white/70 mt-2 text-base sm:text-lg">
              {item.description}
            </p>
            <p className="text-white/40 text-sm sm:text-base mt-1">
              {item.date}. {item.location}
            </p>

            <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
