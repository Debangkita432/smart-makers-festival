"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ChatBotProps {
  className?: string;
}

export default function ChatBot({ className }: ChatBotProps) {
  const [isBotpressReady, setIsBotpressReady] = useState(false);

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.botpressWebChat?.mergeConfig) {
        setIsBotpressReady(true);
        clearInterval(checkReady);
        console.log("✅ Botpress is ready for interaction");
      }
    }, 500);
    return () => clearInterval(checkReady);
  }, []);

  const handleChatClick = () => {
    if (!isBotpressReady || !window.botpressWebChat?.mergeConfig) {
      console.warn("Botpress is not ready yet.");
      return;
    }
    console.log("📩 Toggling Botpress Chat");
    window.botpressWebChat.mergeConfig({ hideWidget: false }); // Show chat
  };

  return (
    <div className={cn("fixed bottom-6 right-6 z-[9999] flex flex-col items-end", className)}>
      <button
        onClick={handleChatClick}
        className={cn(
          "relative focus:outline-none",
          !isBotpressReady && "opacity-50 cursor-not-allowed"
        )}
        disabled={!isBotpressReady}
      >
        <Image
          src="/chatbot.png"
          alt="Open Chatbot"
          width={90}
          height={90}
          className={cn(
            "object-contain drop-shadow-lg transition-transform hover:scale-105 rounded-full",
            !isBotpressReady && "animate-pulse"
          )}
          priority
        />
        <div
          className={cn(
            "absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white",
            isBotpressReady ? "bg-green-500" : "bg-gray-400"
          )}
        />
      </button>
    </div>
  );
}
