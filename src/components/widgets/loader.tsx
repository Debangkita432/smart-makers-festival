"use client";
import React, { useState, useEffect, useRef } from "react";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [showSkip, setShowSkip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 12000); // Show skip button after 12s
    return () => clearTimeout(timer);
  }, []);

  const finishLoader = () => {
    setFadeOut(true);
    setTimeout(() => onFinish(), 800); // wait for fade-out
  };

  const handleVideoEnd = () => finishLoader();
  const handleSkip = () => {
    if (videoRef.current) videoRef.current.pause();
    finishLoader();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
      >
        <source
          src={
            typeof window !== "undefined" && window.innerWidth <= 768
              ? "/loader-mobile.mp4"
              : "/loader-desktop.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {showSkip && (
        <button
          onClick={handleSkip}
          className="absolute bottom-10 px-6 py-2 rounded-full 
                     bg-white/20 backdrop-blur-md border border-white/30
                     text-white font-semibold shadow-lg 
                     hover:bg-white/30 transition"
        >
          Skip Now
        </button>
      )}
    </div>
  );
};

export default Loader;
