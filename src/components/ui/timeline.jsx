"use client";

import { orbitronFont } from "@/lib/fonts";
import { motion } from "framer-motion";

const timelineData = [
  { title: "event 1", date: "5th September, 2025", description: "coming soon..", location: "IEM" },
  { title: "event 2", date: "6th September, 2025", description: "coming soon..", location: "IEM" },
  { title: "event 3", date: "6th September, 2025", description: "coming soon..", location: "IEM" },
  { title: "event 4", date: "7th September, 2025", description: "coming soon..", location: "IEM" },
];

export default function Timeline() {
  return (
    <div className="w-full mt-24 2xl:w-11/12 mx-auto px-6">
      <div className="space-y-14">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 14,
              delay: index * 0.04,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative w-full border-b border-white/20 py-8 px-4 cursor-pointer transition-all duration-300 rounded-xl hover:shadow-[0_0_20px_rgba(0,191,255,0.3)]"
          >
            <h3
              className={`
                text-4xl sm:text-5xl text-white font-bold
                transition duration-300 ease-in-out
                group-hover:text-[#00bfff]
                group-hover:drop-shadow-[0_0_15px_#00bfff]
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
