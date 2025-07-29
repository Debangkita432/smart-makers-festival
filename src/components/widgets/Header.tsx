"use client";

import { orbitronFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "home", href: "/" },
  { label: "events", href: "/events" },
  { label: "gallery", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex fixed top-0 z-[9999] w-full justify-center text-white text-sm transition-transform duration-300 pt-4">
      <nav
        className="relative w-full shadow backdrop-blur-xl bg-white/10 rounded-[50px] mx-2 py-4 px-6 lg:px-10 xl:mx-auto overflow-visible
        max-w-[80rem]
        md:rounded-[50px] md:mx-2 md:px-6
        sm:max-w-[95vw] sm:mx-auto sm:px-4 sm:rounded-[2rem]"
        aria-label="Global"
      >
        {/* Desktop layout: Logo + Nav aligned in same row */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-start leading-none justify-center min-h-[44px]"
          >
            <h1 className={cn("text-base md:text-xl", orbitronFont.className)}>SMF</h1>
            <span
              className={cn(
                "text-[#4da6ff] text-xs md:text-sm -mt-1",
                orbitronFont.className
              )}
            >
              2025
            </span>
          </Link>

          {/* Hamburger: only on mobile */}
          <div className="md:hidden flex items-center justify-center min-h-[44px]">
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="rounded-2xl shadow min-w-[44px] min-h-[44px] flex items-center justify-center mr-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <Cross1Icon className="size-5" />
              ) : (
                <HamburgerMenuIcon className="size-5" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation + Register */}
          <div className="hidden md:flex md:items-center md:gap-10 md:justify-end">
            <div className="flex items-center gap-10">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={cn(
                    "capitalize no-underline transition-colors duration-300 hover:text-[#4da6ff]",
                    orbitronFont.className
                  )}
                >
                  {item.label}
                </a>
              ))}

              {/* CTA Button */}
              <Button
                asChild
                className={cn(
                  "px-12 py-5 text-lg font-semibold rounded-[1rem]",
                  "bg-[#001f4d] text-white hover:bg-[#000d26]",
                  "shadow-[0_0_15px_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_6px_rgba(255,255,255,0.4)]",
                  orbitronFont.className
                )}
              >
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={cn(
                    "capitalize no-underline transition-colors duration-300 hover:text-blue-700 text-lg",
                    orbitronFont.className
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile CTA Button */}
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
