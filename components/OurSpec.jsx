"use client";
import React from "react";
import { ourSpecsData } from "@/assets/assets";

const OurSpecs = () => {
  return (
    <div className="px-6 my-20 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-green-700 mb-2">আমাদের সুবিধাসমূহ</h2>
      <p className="text-slate-600 max-w-2xl mx-auto mb-10">
        কৃষকের সুবিধার জন্য চাষী ভাই দিচ্ছে নির্ভরযোগ্য সেবা ও সাশ্রয়ী কেনাকাটার সুযোগ।
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10">
        {ourSpecsData.map((spec, index) => (
          <div
            key={index}
            className="relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg group shadow-sm"
            style={{
              borderColor: spec.accent + "30",
              backgroundColor: spec.accent + "0A",
            }}
          >
            <div
              className="absolute -top-5 text-white size-10 flex items-center justify-center rounded-md group-hover:scale-105 transition"
              style={{ backgroundColor: spec.accent }}
            >
              <spec.icon size={20} />
            </div>
            <h3 className="text-slate-800 font-semibold mt-4">{spec.title}</h3>
            <p className="text-sm text-slate-600 mt-3">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecs;
