"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";

const images = [
  {
    src: "/maths.webp",
    alt: "Student Maths",
    bgClass: "bg-[#7BBD8B]/20",
    rotateClass: "rotate-[-3deg]",
    delay: 0,
  },
  {
    src: "/yoga.webp",
    alt: "Student Yoga",
    bgClass: "bg-[#FF7F32]/10",
    rotateClass: "rotate-0 z-20",
    delay: 0.2,
  },
  {
    src: "/sanskrit.webp",
    alt: "Student Sanskrit",
    bgClass: "bg-[#F9D048]/20",
    rotateClass: "rotate-[3deg]",
    delay: 0.4,
  },
];

export default function HeroImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualChange = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-end max-w-5xl mx-auto relative px-2 sm:px-4">
      {/* Mobile Slideshow */}
      <div className="md:hidden relative aspect-[4/5] w-full mt-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className={`w-full h-full relative rounded-[48px] sm:rounded-[56px] overflow-hidden ${img.bgClass} border-4 border-white shadow-2xl`}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
        ))}
        {/* Arrows */}
        <button 
          onClick={() => handleManualChange((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center text-[#FF7F32] z-20 shadow-md hover:scale-110 transition-transform"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => handleManualChange((currentIndex + 1) % images.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center text-[#FF7F32] z-20 shadow-md hover:scale-110 transition-transform"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualChange(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                idx === currentIndex ? "bg-[#FF7F32]" : "bg-[#FF7F32]/30 hover:bg-[#FF7F32]/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      {images.map((img, idx) => (
        <FadeIn key={idx} direction={idx === 0 ? "right" : idx === 1 ? "up" : "left"} delay={img.delay} className="hidden md:block">
          <div className={`relative aspect-[4/5] rounded-[60px] overflow-hidden ${img.bgClass} border-4 border-white shadow-2xl ${img.rotateClass}`}>
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover"
              sizes="33vw"
              priority
            />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
