"use client";

import { orbitronFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "home", href: "/" },
    { label: "events", href: "/events" },
    { label: "gallery", href: "/about" },
  ];

  return (
    <header className="fixed top-0 z-[9999] w-full flex justify-center pt-4">
      <nav
        className="relative w-full max-w-[95vw] md:max-w-6xl shadow backdrop-blur-xl bg-white/10 rounded-[50px] py-4 px-4 sm:px-6 flex items-center justify-between"
        aria-label="Global"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-start leading-none justify-center"
        >
          <h1 className={cn("text-base md:text-xl text-white", orbitronFont.className)}>SMF</h1>
          <span
            className={cn(
              "text-[#4da6ff] text-xs md:text-sm -mt-1",
              orbitronFont.className
            )}
          >
            2025
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={cn(
                "capitalize no-underline text-white transition-colors duration-300 hover:text-[#4da6ff]",
                orbitronFont.className
              )}
            >
              {item.label}
            </a>
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
            <Link href="/register">Register Now</Link>
          </Button>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <Button
            type="button"
            size="icon"
            className="rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-md w-12 h-12 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <Cross1Icon className="w-6 h-6 text-white" />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={cn(
                    "capitalize no-underline transition-colors duration-300 hover:text-blue-400 text-lg text-white",
                    orbitronFont.className
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className={cn(
                  "px-8 py-4 text-base font-semibold rounded-[1rem] w-full",
                  "bg-[#001f4d] text-white hover:bg-[#000d26]",
                  "shadow-[0_0_15px_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.4)]",
                  orbitronFont.className
                )}
                onClick={() => setIsOpen(false)}
              >
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
