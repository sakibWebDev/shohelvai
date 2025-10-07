"use client";
import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
  return (
    <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group sm:my-20">
      {/* বাম দিকের গ্রেডিয়েন্ট */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* মারকুই */}
      <div className="flex min-w-[200%] animate-[marqueeScroll_25s_linear_infinite] group-hover:[animation-play-state:paused] gap-4">
        {[...categories, ...categories].map((cat, index) => (
          <button
            key={index}
            className="px-5 py-2 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-600 hover:text-white active:scale-95 transition-all duration-300 shadow-sm"
          >
            🌾 {cat}
          </button>
        ))}
      </div>

      {/* ডান দিকের গ্রেডিয়েন্ট */}
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default CategoriesMarquee;
