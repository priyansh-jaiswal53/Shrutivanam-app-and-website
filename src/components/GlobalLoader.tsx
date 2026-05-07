"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if it's the first visit in this session
    const hasVisited = sessionStorage.getItem("shrutivanam_visited");

    if (!hasVisited) {
      // First visit: show loader, then fade out
      sessionStorage.setItem("shrutivanam_visited", "true");
      
      const fadeTimer = setTimeout(() => {
        setFading(true);
      }, 1500); // 1.5 seconds loading time

      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 0.5s fade out

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    } else {
      // Already visited, skip loader
      setLoading(false);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FEF7ED] transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full animate-ping bg-[#FF7F32]/20 opacity-75"></div>
        <div className="absolute -inset-4 rounded-full animate-pulse bg-[#FF7F32]/10 opacity-50"></div>
        
        {/* Logo */}
        <div className="relative z-10 w-24 h-24 rounded-3xl bg-white shadow-2xl shadow-orange-200 flex items-center justify-center animate-bounce">
          <Image
            src="/shrutivanam.logo.png"
            alt="Shrutivanam"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
