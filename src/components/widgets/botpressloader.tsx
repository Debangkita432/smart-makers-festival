"use client";
import { useEffect } from "react";
import ChatBot from "@/components/widgets/chatbot";

export default function BotpressLoader() {
  useEffect(() => {
    console.log("Injecting Botpress scripts...");
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.async = true;

    script.onload = () => {
      console.log("✅ Botpress script loaded. Initializing manually...");
      window.botpressWebChat = window.botpressWebChat || {};
      window.botpressWebChat.init?.({
        botId: "111ee683-b451-406b-aa99-710466056791",
        clientId: "dc2a8746-d5a2-4b30-8e51-a6225563b36b",
        hostUrl: "https://cdn.botpress.cloud/webchat/v3.2",
        messagingUrl: "https://messaging.botpress.cloud",
        hideWidget: false, // <-- Mount immediately
        theme: "dark",
        themeColor: "#4da6ff",
        showPoweredBy: false,
        zIndex: 10000,
      });

      console.log("✅ Botpress chat container mounted.");
    };

    document.body.appendChild(script);
  }, []);

  return <ChatBot />;
}
