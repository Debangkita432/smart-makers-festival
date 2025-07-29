"use client";
import React, { useState, useEffect } from "react";
import Loader from "./loader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Detect navigation type
    let navType = "navigate";
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (navEntries && navEntries.length > 0) {
      navType = navEntries[0].type;
    } else if ((performance as any).navigation) {
      // Fallback for older browsers
      const legacyNav = (performance as any).navigation.type;
      navType = legacyNav === 1 ? "reload" : "navigate";
    }

    // Show loader only on first load or refresh
    if ((navType === "reload" || navType === "navigate") && !sessionStorage.getItem("loaderPlayed")) {
      setShowLoader(true);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("loaderPlayed", "true");
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <Loader onFinish={handleFinish} />}
      {!showLoader && children}
    </>
  );
}
