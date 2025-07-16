"use client";
import { useRouter } from "next/navigation";
import { orbitronFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white relative overflow-hidden">
      {/* Spacey background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <Image src="/COMING.png" alt="Coming Soon" fill className="object-cover" priority />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="z-10 flex flex-col items-center justify-center px-6 py-12">
        <h1 className={cn("text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-center tracking-widest", orbitronFont.className)}>
          COMING SOON
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-center max-w-xl text-blue-200">
          The registration portal for Smart Maker Festival 2025 will open soon.<br />Stay tuned for updates!
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-400 text-white font-semibold text-lg shadow-lg transition-all duration-200"
        >
          Back to Home
        </button>
      </div>
      {/* Some floating stars or sparkles for space effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
