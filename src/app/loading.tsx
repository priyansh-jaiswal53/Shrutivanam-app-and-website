import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center w-full">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-orange-100 flex items-center justify-center animate-pulse">
          <Image
            src="/shrutivanam.logo.png"
            alt="Loading..."
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
        <p className="mt-4 text-[#FF7F32] font-bold text-sm tracking-widest uppercase animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
