// app/seed/[id]/page.js
"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function SeedDetailPage({ params }) {
  const router = useRouter();
  const [seed, setSeed] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
 const seedsData = useSelector((state) => state.seeds.list.seeds); 
  const seasonsData = useSelector((state) => state.seeds.list.seasons);

  console.log("Seeds:", seedsData);
  console.log("Seasons:", seasonsData);

  
  useEffect(() => {
    if (params.id) {
      let foundSeed = null;
      let foundCategory = null;
      
      categories.forEach(cat => {
        const seedInCategory = cat.seeds.find(s => 
          s.name.replace(/\s+/g, '-').toLowerCase() === params.id
        );
        if (seedInCategory) {
          foundSeed = seedInCategory;
          foundCategory = cat;
        }
      });
      
      if (foundSeed) {
        setSeed(foundSeed);
        setCategory(foundCategory);
      } else {
        router.push('/');
      }
      setLoading(false);
    }
  }, [params.id, router]);

  const colorClasses = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-800" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-800" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800" },
    pink: { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-800" }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌱</div>
          <p className="text-xl text-gray-600">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!seed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-xl text-gray-600">বীজটি পাওয়া যায়নি</p>
          <button 
            onClick={() => router.push('/')}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            হোম পেজে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  const color = colorClasses[category?.color] || colorClasses.emerald;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 py-4 md:py-8 px-3 md:px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-green-600 hover:text-green-800 mb-4 md:mb-6 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-semibold">পিছনে যান</span>
        </button>

        <div className={`${color.bg} ${color.text} rounded-2xl shadow-lg p-4 md:p-6 mb-6`}>
          <div className="flex items-center space-x-4">
            <span className="text-4xl md:text-5xl">{seed.icon}</span>
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold">{seed.name}</h1>
              <p className="text-lg md:text-xl opacity-90">{seed.name_en}</p>
              <p className="text-sm md:text-base opacity-80 mt-1">{seed.scientific_name}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">📋 মৌলিক তথ্য</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                    <h3 className="font-semibold text-blue-800 text-sm md:text-base mb-1">🔬 বৈজ্ঞানিক নাম</h3>
                    <p className="text-blue-700 text-sm md:text-base">{seed.scientific_name}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 md:p-4">
                    <h3 className="font-semibold text-green-800 text-sm md:text-base mb-1">💚 স্বাস্থ্য উপকারিতা</h3>
                    <p className="text-green-700 text-sm md:text-base">{seed.benefits}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3 md:p-4">
                    <h3 className="font-semibold text-purple-800 text-sm md:text-base mb-1">📝 বিশেষ নির্দেশনা</h3>
                    <p className="text-purple-700 text-sm md:text-base">{seed.special_notes}</p>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-3 md:p-4">
                    <h3 className="font-semibold text-amber-800 text-sm md:text-base mb-1">⏰ চাষের সময়</h3>
                    <p className="text-amber-700 text-sm md:text-base">{category?.season}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">🌱 বিস্তারিত চাষ পদ্ধতি</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-3">
                      <h3 className="font-semibold text-gray-700">মাটির প্রস্তুতি</h3>
                      <p className="text-sm text-gray-600 mt-1">দো-আঁশ মাটি ভালো করে চাষ ও মই দিয়ে প্রস্তুত করুন, জৈব সার মিশান</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-3">
                      <h3 className="font-semibold text-gray-700">বীজ বপন</h3>
                      <p className="text-sm text-gray-600 mt-1">সঠিক গভীরতায় ও দূরত্বে বীজ বপন করুন, সারি করে বপন করা ভাল</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-3">
                      <h3 className="font-semibold text-gray-700">পানি সেচ</h3>
                      <p className="text-sm text-gray-600 mt-1">মাটির আর্দ্রতা অনুযায়ী নিয়মিত সেচ দিন, অতিরিক্ত পানি এড়িয়ে চলুন</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-3">
                      <h3 className="font-semibold text-gray-700">ফসল সংগ্রহ</h3>
                      <p className="text-sm text-gray-600 mt-1">সঠিক সময়ে ও সতর্কতার সাথে ফসল সংগ্রহ করুন, সকাল বেলা সংগ্রহ করা ভাল</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📊 দ্রুত তথ্য</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">রোপণের সময়</h4>
                  <p className="text-gray-600 text-sm">{category?.planting_months?.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">সংগ্রহের সময়</h4>
                  <p className="text-gray-600 text-sm">{category?.harvesting_period}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">তাপমাত্রা</h4>
                  <p className="text-gray-600 text-sm">{category?.temperature_range}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-sm">পানি প্রয়োজন</h4>
                  <p className="text-gray-600 text-sm">{category?.water_requirements}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🔗 সম্পর্কিত বীজ</h3>
              <div className="space-y-2">
                {category?.seeds
                  ?.filter(s => s.name !== seed.name)
                  .slice(0, 3)
                  .map((relatedSeed, index) => (
                    <div
                      key={index}
                      onClick={() => router.push(`/seed/${relatedSeed.name.replace(/\s+/g, '-').toLowerCase()}`)}
                      className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors flex items-center space-x-3"
                    >
                      <span className="text-xl">{relatedSeed.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{relatedSeed.name}</p>
                        <p className="text-xs text-gray-600">{relatedSeed.name_en}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}