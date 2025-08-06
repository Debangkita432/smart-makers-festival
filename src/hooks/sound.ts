// hooks/sound.ts
"use client";
import { useRef } from "react";

export default function useSound(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (!audioRef.current) {
      const audio = new Audio(src);
      audio.preload = "auto";
      audioRef.current = audio;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 1;
    audioRef.current
      .play()
      .catch((err) => console.warn("Playback blocked until user interaction:", err));
  };

  return play;
}
