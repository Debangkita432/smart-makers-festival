"use client";

import { orbitronFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import SoundLink from "@/components/widgets/soundlink";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useSound from "@/hooks/sound";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const playMenuSound = useSound("/sound/smf.mp3");

  const navItems = [
    { label: "home", href: "/" },
    { label: "events", href: "/events" },
    { label: "gallery", href: "/about" },
  ];

  const registerFormLink = "https://forms.gle/WGzAWP7i4f4G3y6C8";

  const handleToggle = () => {
    playMenuSound();
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-[9999] w-full flex justify-center pt-4 px-2 sm:px-4">
      <nav className="relative w-full max-w-[95vw] md:max-w-6xl shadow backdrop-blur-xl bg-white/10 rounded-[50px] py-4 px-4 sm:px-6 flex items-center justify-between overflow-hidden">
        
        {/* Logo */}
        <SoundLink
          href="/"
          className="flex flex-row items-center leading-none justify-center gap-2"
        >
          <Image
            src="/smart.png"
            alt="Smart Logo"
            width={100}
            height={50}
            className="rounded-lg" // <-- Rounded corners
          />
          <div className="flex flex-col items-start">
            <h1 className={cn("text-base md:text-xl text-white", orbitronFont.className)}>SMF</h1>
            <span className={cn("text-[#4da6ff] text-xs md:text-sm -mt-1", orbitronFont.className)}>2025</span>
          </div>
        </SoundLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <SoundLink
              key={idx}
              href={item.href}
              className={cn(
                "capitalize no-underline text-white transition-colors duration-300 hover:text-[#4da6ff]",
                orbitronFont.className
              )}
            >
              {item.label}
            </SoundLink>
          ))}
          <Button
            asChild
            className={cn(
              "px-8 py-3 text-lg font-semibold rounded-[1rem]",
              "bg-[#001f4d] text-white hover:bg-[#000d26]",
              "shadow-[0_0_15px_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.4)]",
              orbitronFont.className
            )}
          >
            <SoundLink href={registerFormLink} target="_blank" rel="noopener noreferrer">
              Register Now
            </SoundLink>
          </Button>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <Button
            type="button"
            size="icon"
            className="rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-md w-12 h-12 flex items-center justify-center"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            {isOpen ? <Cross1Icon className="w-6 h-6 text-white" /> : <HamburgerMenuIcon className="w-6 h-6 text-white" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="md:hidden fixed inset-0 bg-black/50 z-[9998]" onClick={() => setIsOpen(false)} />
          <div className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-xl border border-white/20 rounded-l p-4 shadow-2xl max-w-[280px] w-full mx-4 z-[9999]">
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-3">
                <div className="flex flex-col items-start">
                  <h2 className={cn("text-white text-base font-bold", orbitronFont.className)}>Smart Makers Festival</h2>
                  <span className={cn("text-[#4da6ff] text-xs", orbitronFont.className)}>2025</span>
                </div>
                <Button
                  type="button"
                  size="icon"
                  className="rounded-full bg-gray-700 hover:bg-gray-600 w-7 h-7 flex items-center justify-center"
                  onClick={handleToggle}
                >
                  <Cross1Icon className="w-3 h-3 text-white" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 w-full mb-3">
                {navItems.map((item, idx) => (
                  <SoundLink
                    key={idx}
                    href={item.href}
                    className={cn(
                      "capitalize no-underline transition-colors duration-300 text-sm text-white text-center py-1 hover:text-[#4da6ff]",
                      orbitronFont.className
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </SoundLink>
                ))}
              </div>

              {/* Register Button */}
              <Button
                asChild
                className={cn(
                  "px-4 py-2 text-xs font-semibold rounded-lg w-full",
                  "bg-[#001f4d] text-white hover:bg-[#000d26]",
                  "shadow-[0_0_15px_4px_rgba(0,31,77,0.3)] hover:shadow-[0_0_25px_6px_rgba(0,31,77,0.6)]",
                  orbitronFont.className
                )}
                onClick={() => setIsOpen(false)}
              >
                <SoundLink href={registerFormLink} target="_blank" rel="noopener noreferrer">
                  Register Now
                </SoundLink>
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
