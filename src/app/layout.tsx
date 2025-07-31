import "@/app/globals.css";
import AppWrapper from "@/components/widgets/AppWrapper";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Smart Maker Festival 2025",
  description: "Smart Maker Festival 2025",
  icons: { icon: "/coming.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased", inter.variable)}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}