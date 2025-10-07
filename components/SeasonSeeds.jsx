"use client";
import React, { useState } from "react";

const categories = [
  {
    id: "baromashi",
    title: "বারোমাসি বীজ",
    description: "সারা বছর চাষযোগ্য বীজসমূহ",
    seeds: ["লালশাক", "পুঁইশাক", "ঢেঁড়স", "টমেটো"],
  },
  {
    id: "shitkalin",
    title: "শীতকালীন বীজ",
    description: "শীত মৌসুমে চাষের উপযুক্ত ফসল",
    seeds: ["কপি", "মূলা", "গাজর", "লেটুস"],
  },
  {
    id: "grishmakalin",
    title: "গ্রীষ্মকালীন বীজ",
    description: "গরমে চাষের উপযুক্ত ফসল",
    seeds: ["লাউ", "ঝিঙা", "করলা", "কুমড়া"],
  },
  {
    id: "borshakalin",
    title: "বর্ষাকালীন বীজ",
    description: "বর্ষাকালে চাষের উপযুক্ত ফসল",
    seeds: ["ধান", "তিল", "তরমুজ", "শিম"],
  },
];

const SeasonSeeds = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        মৌসুমি বীজের সংগ্রহ 🌾
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() =>
              setSelected(selected === cat.id ? null : cat.id)
            }
            className={`cursor-pointer p-5 rounded-2xl shadow-md border transition-all duration-300 ${
              selected === cat.id
                ? "bg-green-200 border-green-600 scale-105"
                : "bg-white hover:shadow-lg hover:scale-105"
            }`}
          >
            <h3 className="text-xl font-semibold text-green-800">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{cat.description}</p>

            {selected === cat.id && (
              <ul className="mt-4 space-y-1 text-green-700 font-medium">
                {cat.seeds.map((seed, i) => (
                  <li key={i}>🌱 {seed}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonSeeds;
