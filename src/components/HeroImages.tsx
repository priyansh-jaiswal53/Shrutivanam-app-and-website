"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const images = [
  {
    src: "/maths.webp",
    alt: "Student Maths",
    label: "Vedic Maths",
    bgClass: "bg-[#7BBD8B]/20",
    desktopRotate: "sm:-rotate-3",
    delay: 0,
  },
  {
    src: "/yoga.webp",
    alt: "Student Yoga",
    label: "Yoga",
    bgClass: "bg-[#FF7F32]/10",
    desktopRotate: "sm:rotate-0",
    delay: 0.2,
  },
  {
    src: "/sanskrit.webp",
    alt: "Student Sanskrit",
    label: "Sanskrit",
    bgClass: "bg-[#F9D048]/20",
    desktopRotate: "sm:rotate-3",
    delay: 0.4,
  },
];

export default function HeroImages() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Rotate the collage every 3 seconds
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-8 sm:mt-0">
      
      {/* Mobile Rotating Collage */}
      <div className="sm:hidden relative w-full h-[320px]">
        {images.map((img, idx) => {
          const posIndex = (idx + offset) % 3;
          
          let positionClasses = "";
          if (posIndex === 0) {
            // Left Back
            positionClasses = "left-0 translate-x-0 top-6 w-[55%] -rotate-6 z-10 opacity-80 brightness-90";
          } else if (posIndex === 1) {
            // Center Front
            positionClasses = "left-1/2 -translate-x-1/2 top-0 w-[60%] rotate-0 z-30 opacity-100 shadow-2xl brightness-100";
          } else if (posIndex === 2) {
            // Right Back
            positionClasses = "left-[100%] -translate-x-full top-6 w-[55%] rotate-6 z-20 opacity-80 brightness-90";
          }

          return (
            <div 
              key={idx} 
              className={`absolute transition-all duration-700 ease-in-out ${positionClasses}`}
            >
              <div className={`relative aspect-[4/5] rounded-[32px] overflow-hidden ${img.bgClass} border-4 border-white shadow-xl`}>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 640px) 60vw, 33vw"
                  priority
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-800 px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  {img.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Grid (Static) */}
      <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8 sm:items-end relative">
        {images.map((img, idx) => (
          <FadeIn key={idx} direction={idx === 0 ? "right" : idx === 1 ? "up" : "left"} delay={img.delay}>
            <div className={`relative aspect-[4/5] rounded-[60px] overflow-hidden ${img.bgClass} border-4 border-white shadow-2xl ${img.desktopRotate} transition-transform hover:scale-105 duration-300`}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover"
                sizes="33vw"
                priority
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-sm font-bold text-slate-800 px-5 py-2 rounded-full shadow-xl whitespace-nowrap">
                {img.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </div>
  );
}
