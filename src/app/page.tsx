import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, BookOpen, Users, Sparkles, Globe, 
  Target, Zap, Trophy, Heart, Star, CheckCircle
} from "lucide-react";
import { courses } from "@/data/courses";
import { teachers } from "@/data/teachers";
import CourseCard from "@/components/CourseCard";
import WhatsAppStrip from "@/components/WhatsAppStrip";
import FadeIn from "@/components/FadeIn";
import HeroImages from "@/components/HeroImages";
import VedicCampSection from "@/components/VedicCampSection";

export const metadata: Metadata = {
  title: { absolute: "Shrutivanam" },
  description:
    "Discover authentic Vedic education at Shrutivanam. Courses in Vedic Mathematics, Yoga, Sanskrit, and Vedic Wisdom.",
};

const whyPoints = [
  {
    icon: BookOpen,
    title: "Authentic Knowledge",
    titleHi: "प्रामाणिक ज्ञान",
    desc: "Rooted in unbroken Vedic tradition, taught with fidelity to original texts and time-tested methods.",
  },
  {
    icon: Users,
    title: "Expert Teachers",
    titleHi: "विशेषज्ञ शिक्षक",
    desc: "Our faculty hold degrees from India's premier institutions — IISc Bangalore, IIT Guwahati — combined with deep spiritual study.",
  },
  {
    icon: Sparkles,
    title: "Ancient Wisdom",
    titleHi: "प्राचीन विद्या",
    desc: "We bring you knowledge from the Vedas, Upanishads, Yoga Sutras, and Bhagavad Gita in its purest, undiluted form.",
  },
  {
    icon: Globe,
    title: "Modern Accessibility",
    titleHi: "आधुनिक सुलभता",
    desc: "Learn from anywhere. Our structured online format makes ancient wisdom available to every sincere seeker.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-0 flex flex-col items-center overflow-hidden">
        {/* Floating Background Icons */}
        <div className="absolute top-20 left-[10%] floating-element opacity-20 text-[#FF7F32] hidden sm:block">
          <Zap size={48} fill="currentColor" />
        </div>
        <div className="absolute top-40 right-[15%] floating-element delay-200 opacity-20 text-[#7BBD8B] hidden sm:block">
          <Heart size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-40 left-[15%] floating-element delay-400 opacity-20 text-[#F9D048] hidden sm:block">
          <Star size={56} fill="currentColor" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#EBDBCD] shadow-sm mb-6 sm:mb-8">
              <Image 
                src="/shrutivanam.logo.png" 
                alt="Shrutivanam Logo" 
                width={20} 
                height={20} 
                className="w-5 h-5 object-contain"
              />
              <span className="text-[#FF7F32] font-black text-[10px] sm:text-sm tracking-widest uppercase">
                Welcome to Shrutivanam
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#3B2E2A] leading-tight mb-5 sm:mb-6">
              Putting your <span className="title-underline">Tradition</span> in <br className="hidden md:block" />
              great motion
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm font-bold text-[#635A56]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                No Prerequisites
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Authentic Texts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Expert Guidance
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex items-center justify-center mb-12 sm:mb-16 w-full">
              <Link href="/register" className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg shadow-2xl shadow-orange-200 text-center">
                Start Learning Now
              </Link>
            </div>
          </FadeIn>

          {/* Hero Images Slideshow & Grid */}
          <HeroImages />
        </div>


      </section>

      {/* VEDIC SUMMER CAMP */}
      <VedicCampSection />

      {/* ABOUT SECTION */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
            <FadeIn direction="right" className="relative">
              <div className="relative w-full aspect-square rounded-[72px] sm:rounded-[100px] overflow-hidden bg-white p-3 sm:p-4 shadow-xl">
                 <div className="absolute inset-0 bg-[#F9D048]/10 rounded-[72px] sm:rounded-[100px]" />
                 <Image 
                  src="/sanskrit.webp" 
                  alt="Our Mission" 
                  fill 
                  className="object-cover rounded-[56px] sm:rounded-[80px]"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-[#FF7F32] p-5 sm:p-8 rounded-[32px] sm:rounded-[40px] shadow-2xl text-white">
                <p className="text-3xl sm:text-5xl font-black mb-1">10+</p>
                <p className="text-xs sm:text-sm font-bold opacity-80 uppercase tracking-widest">Years Exp</p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="text-[#FF7F32] font-black uppercase tracking-widest text-xs sm:text-sm mb-4">Shaping the future of kids</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3B2E2A] mb-6 sm:mb-8 leading-tight">
                Authentic Vedic Wisdom <br />
                for the <span className="text-[#FF7F32]">Modern Mind</span>
              </h2>
              <div className="space-y-5 sm:space-y-6 text-[#635A56] text-base sm:text-lg font-medium leading-relaxed mb-8 sm:mb-10">
                <p>
                  We focus on one impactful lesson at a time. Shrutivanam brings you the treasures of ancient Indian knowledge — pure, undiluted, and structured for today.
                </p>
                <p>
                  Our ecosystem is built for sincere seekers who want to explore Vedic Maths, Sanskrit, and Philosophy with academic rigor and spiritual depth.
                </p>
              </div>
              <Link href="/about" className="btn-outline w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base text-center inline-block">
                Discover Our Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FEF7ED]">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16">
           <p className="text-[#F9D048] font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Why Shrutivanam</p>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3B2E2A]">Learning that sticks</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {whyPoints.map((point, i) => {
            const Icon = point.icon;
            const colors = ['bg-orange-100 text-orange-600', 'bg-green-100 text-green-600', 'bg-yellow-100 text-yellow-600', 'bg-blue-100 text-blue-600'];
            return (
              <FadeIn key={i} delay={i * 0.15} direction="up">
                <div className="bg-white p-6 sm:p-10 rounded-[28px] sm:rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full border border-transparent hover:border-[#FF7F32]/10 group">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-transform group-hover:scale-110 ${colors[i % 4]}`}>
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={32} className="hidden sm:block" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#3B2E2A] mb-3 sm:mb-4">{point.title}</h3>
                  <p className="text-[#635A56] font-semibold text-sm leading-relaxed">{point.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* TEACHERS PREVIEW */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-[#FF7F32] font-black uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Our Gurus</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3B2E2A] mb-3 sm:mb-4">Learn from the Best</h2>
              <p className="text-[#635A56] text-base sm:text-lg font-medium">
                Learn from teachers graduated from leading institutes and rooted in authentic Vedic traditions.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-white border border-[#EBDBCD] shadow-sm p-6 sm:p-8">
              <p className="text-[#3B2E2A] text-xs font-black uppercase tracking-widest mb-6">
                Faculty Backgrounds
              </p>
              <ul className="space-y-4">
                {Array.from(new Set(teachers.map((teacher) => teacher.credentials))).map((credential) => (
                  <li key={credential} className="text-[#635A56] text-sm md:text-base font-semibold flex items-center gap-3">
                    <CheckCircle className="text-[#7BBD8B] shrink-0" size={18} />
                    {credential}
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </section>

      {/* WHATSAPP STRIP */}
      <WhatsAppStrip />
    </>
  );
}
