"use client";

import Image from "next/image";
import { CheckCircle2, Calendar, Clock, Users, Laptop, Phone } from "lucide-react";
import FadeIn from "./FadeIn";

const SUBJECTS = [
  {
    title: "Vedic Wisdom",
    icon: "🪔",
    points: [
      "Learn & Chant powerful Sanskrit Shlokas.",
      "Timeless Life Lessons from Vedic scriptures.",
      "Spiritual Games, Art and craft.",
      "Bhajans and Musical instruments.",
    ]
  },
  {
    title: "Yoga",
    icon: "🧘‍♀️",
    points: [
      "Yoga for Body & Mind.",
      "Asanas & Pranayama.",
      "Build focus, calmness & strength.",
      "Concentration & Mantra Meditation.",
    ]
  },
  {
    title: "Vedic Maths",
    icon: "🧮",
    points: [
      "Think Faster, Solve Smarter.",
      "Boost mental calculation speed.",
      "Solve complex problems quickly & accurately.",
      "Fun & powerful Ancient techniques.",
    ]
  },
  {
    title: "Samskritam",
    icon: "🕉️",
    points: [
      "Learn world's oldest scientific language.",
      "Sentence Formation and Sutras.",
      "Improve articulation and clarity of speech.",
      "Begin conversation in Sanskrit.",
    ]
  }
];

export default function VedicCampSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#FEF7ED] to-white">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#7BBD8B] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#FF7F32] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-[#FF7F32] font-black text-sm tracking-widest uppercase mb-3 block">
              ॥ श्रुतिवनम् गुरुकुलम् ॥ presents
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B2E2A] mb-4" style={{ fontFamily: "var(--font-cinzel)" }}>
              Vedic Summer Camp <span className="text-[#FF7F32]">2026</span>
            </h2>
            <p className="text-lg md:text-xl text-[#635A56] font-semibold tracking-wide mb-8">
              JOY • WISDOM • CHARACTER
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-[#EBDBCD]">
                <Calendar className="text-[#FF7F32]" size={20} />
                <span className="font-bold text-[#3B2E2A]">May 5th - May 15th</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-[#EBDBCD]">
                <Users className="text-[#FF7F32]" size={20} />
                <span className="font-bold text-[#3B2E2A]">Kids & Teens (5-16 Yrs)</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-[#EBDBCD]">
                <Clock className="text-[#FF7F32]" size={20} />
                <span className="font-bold text-[#3B2E2A]">4:30 PM - 6:30 PM</span>
              </div>
            </div>
            
            <div className="mt-6 inline-block bg-[#7BBD8B]/10 text-[#2C6B3A] px-6 py-2 rounded-full font-bold border border-[#7BBD8B]/30">
              ✓ Certification for All
            </div>
          </FadeIn>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Left: Subjects Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {SUBJECTS.map((subject, idx) => (
              <FadeIn key={subject.title} delay={idx * 0.1} direction="up">
                <div className="bg-white rounded-3xl p-6 border border-[#EBDBCD] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                  <div className="flex items-center gap-3 mb-5 border-b border-[#FEF7ED] pb-4">
                    <span className="text-3xl">{subject.icon}</span>
                    <h3 className="text-xl font-bold text-[#3B2E2A]">{subject.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {subject.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="text-[#7BBD8B] shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-[#635A56] font-medium leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right: Registration Card */}
          <div className="lg:col-span-1">
            <FadeIn direction="left" delay={0.4}>
              <div className="bg-gradient-to-b from-[#FF7F32] to-[#E86D24] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10" />
                
                <h3 className="text-2xl font-bold mb-2 relative z-10" style={{ fontFamily: "var(--font-cinzel)" }}>Secure Your Spot</h3>
                <p className="text-white/80 text-sm mb-8 relative z-10">Enroll Today & Gift Your Child a Vedic Foundation.</p>
                
                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/20 mb-8 relative z-10">
                  <p className="text-xs uppercase tracking-widest text-white/70 mb-1 font-bold">Nominal Contribution</p>
                  <p className="text-4xl font-black mb-2">₹51 <span className="text-lg font-normal opacity-80">/student</span></p>
                  
                  <div className="space-y-3 mt-5">
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <Laptop className="text-white" size={18} />
                      <span>Mode: <strong className="text-white">Online</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <Phone className="text-white" size={18} />
                      <span>Queries: <strong>9039457108</strong></span>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="bg-white rounded-2xl p-4 text-center relative z-10 shadow-inner">
                  <div className="relative aspect-square w-48 mx-auto bg-slate-50 rounded-xl overflow-hidden mb-3 border-2 border-slate-100">
                    <Image
                      src="/qr.jpeg"
                      alt="UPI QR Code"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-[#3B2E2A] text-sm font-bold">To Register Scan This</p>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

        {/* Explore More Courses */}
        <div className="mt-16 text-center">
          <p className="text-[#635A56] font-medium mb-4">Looking for something else?</p>
          <a href="/courses" className="btn-outline px-8 py-3 rounded-full text-sm font-semibold tracking-wider inline-flex items-center gap-2">
            Explore Our Regular Courses
          </a>
        </div>
      </div>
    </section>
  );
}
