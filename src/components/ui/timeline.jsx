"use client";

import { orbitronFont } from "@/lib/fonts";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const timelineData = [
  { title: "Maker's Workshop", date: "5th September, 2025", location: "IEM" },
  { title: "Project XPO", date: "6th - 7th September, 2025", location: "IEM" },
  { title: "Think-a-thon", date: "6th September, 2025", location: "IEM" },
  { title: "CTRL+ Play ", date: "6th September, 2025", location: "IEM" },
  { title: "Artisans Alley", date: "6th September, 2025", location: "IEM" },
  { title: "The LEGO Land -Up", date: "6th September, 2025", location: "IEM" },
  { title: "Reelvolution", date: "6th-7th September, 2025", location: "IEM" },
  { title: "Smart Make-a-thon", date: "6th-7th September, 2025", location: "IEM" },
  { title: "Smart Power Talk", date: "6th-7th September, 2025", location: "IEM" },
  { title: "Visual Vortex", date: "6th-7th September, 2025", location: "IEM" },
  { title: "Flavour Fiesta", date: "6th-7th September, 2025", location: "IEM" },
  { title: "The Virtual Arena", date: "7th September, 2025", location: "IEM" },
];

export default function Timeline() {
  const router = useRouter();

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
            className="group relative w-full border-b border-white/20 py-8 px-4 cursor-pointer transition-all duration-300 rounded-xl 
                       hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] 
                       hover:bg-gradient-to-r hover:from-[#001F3F]/40 hover:to-[#00bfff]/10"
            onClick={() => router.push('/register')}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`
                    text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,191,255,0.4)]
                    transition duration-300 ease-in-out
                    group-hover:text-[#00bfff]
                    group-hover:drop-shadow-[0_0_20px_#00bfff]
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
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <ChevronRightIcon className="w-6 h-6 text-white/50 group-hover:text-[#00bfff] transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
