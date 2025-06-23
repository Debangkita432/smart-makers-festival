"use client";

import { orbitronFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex fixed top-0 z-50 w-full justify-center text-white text-sm transition-transform duration-300 pt-4">
      <nav
        className="relative max-w-[80rem] w-full shadow backdrop-blur-xl bg-white/10 rounded-[50px] mx-2 py-4 px-6 lg:px-10 xl:mx-auto overflow-visible"
        aria-label="Global"
      >
        {/* Desktop layout: Logo + Nav aligned in same row */}
        <div className="flex items-center justify-between w-full">
          {/* Logo (always left) */}
          <Link href="/" className="flex flex-col items-start leading-none">
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
          <div className="md:hidden">
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="rounded-2xl shadow"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <Cross1Icon className="size-4" />
              ) : (
                <HamburgerMenuIcon className="size-4" />
              )}
            </Button>
          </div>

          {/* Navigation + Register: mobile toggle or desktop flex */}
          <div
            className={cn(
              "absolute left-0 top-full mt-4 w-full md:static md:mt-0 md:w-auto",
              isOpen ? "block" : "hidden",
              "md:flex md:items-center md:gap-10 md:justify-end"
            )}
          >
            <div className="flex flex-col items-start gap-4 text-xl px-4 md:flex-row md:items-center md:gap-10 md:px-0">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={cn(
                    "capitalize no-underline hover:no-underline focus:no-underline active:no-underline",
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
                <Link href="/coming.png" target="_blank">
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
