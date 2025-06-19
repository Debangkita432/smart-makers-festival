import localFont from "next/font/local";

// src/lib/fonts.ts
import { Orbitron } from "next/font/google";

export const orbitronFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // add more weights if needed
  display: "swap",
});

export const tiaraFont = localFont({
  src: "../../fonts/SAMAN___.ttf",
  display: "swap",
});

export const basementFont = localFont({
  src: "../../fonts/basement.woff2",
  display: "swap",
});
