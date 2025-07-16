import "@/app/globals.css";
import PrelineScript from "@/components/shared/preline";
import { TailwindIndicator } from "@/components/shared/tailwind";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { orbitronFont } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Smart Maker Festival 2025",
  description: "Smart Maker Festival 2025",
  icons: {
    icon: "/COMING.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased", inter.variable)}>
        <TooltipProvider>{children}</TooltipProvider>
        <PrelineScript />
        <Toaster />
        <TailwindIndicator />
        <Analytics />
        <SpeedInsights />
        <Script src="https://checkout.razorpay.com/v2/checkout.js" />
      </body>
    </html>
  );
}
