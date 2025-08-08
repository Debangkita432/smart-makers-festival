import "@/app/globals.css";
import AppWrapper from "@/components/widgets/AppWrapper";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { orbitronFont } from "@/lib/fonts";
import { Header } from "@/components/widgets/Header";
import Footer from "@/components/widgets/Footer";
import { StarsCanvas } from "@/components/ui/Stars";

export const metadata = {
  title: "Smart Maker Festival 2025",
  description: "Smart Maker Festival 2025",
  icons: { icon: "/logo.png" },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased", inter.variable, orbitronFont.variable)}>
        <StarsCanvas />
        <AppWrapper>
          <Header />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
