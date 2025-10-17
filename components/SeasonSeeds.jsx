"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { setSeeds } from "@/lib/features/seeds/seedSlice";
import Link from "next/link"; // ✅ Correct import
import { useRouter } from "next/navigation"; // For navigation

const SeasonSeeds = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const dispatch = useDispatch();
  const seedsData = useSelector(state => state.seeds);
  
  // Use data from Redux or local state
  const seasons = seedsData.seasons || [];
  const seeds = seedsData.list || [];
  console.log("i loved you ", seeds, seasons);
  

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/getseeds');
      console.log('API Response:', response.data); // Debug log
      
      if (response.data.success) {
        // Check different possible response structures
        const responseData = response.data.data || response.data;
        const seedsData = responseData.seeds || responseData.data?.seeds || [];
        const seasonsData = responseData.seasons || responseData.data?.seasons || [];
        dispatch(setSeeds({
          seeds: seedsData,
          seasons: seasonsData
        }));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch data if not already in Redux store
    if (seeds.length === 0 || seasons.length === 0) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const colorClasses = {
  emerald: { 
    bg: "bg-emerald-50", 
    border: "border-emerald-200", 
    text: "text-emerald-800", 
    hover: "hover:bg-emerald-100",
    darkBg: "bg-emerald-100"
  },
  blue: { 
    bg: "bg-blue-50", 
    border: "border-blue-200", 
    text: "text-blue-800", 
    hover: "hover:bg-blue-100",
    darkBg: "bg-blue-100"
  },
  orange: { 
    bg: "bg-orange-50", 
    border: "border-orange-200", 
    text: "text-orange-800", 
    hover: "hover:bg-orange-100",
    darkBg: "bg-orange-100"
  },
  indigo: { 
    bg: "bg-indigo-50", 
    border: "border-indigo-200", 
    text: "text-indigo-800", 
    hover: "hover:bg-indigo-100",
    darkBg: "bg-indigo-100"
  },
  amber: { 
    bg: "bg-amber-50", 
    border: "border-amber-200", 
    text: "text-amber-800", 
    hover: "hover:bg-amber-100",
    darkBg: "bg-amber-100"
  },
  pink: { 
    bg: "bg-pink-50", 
    border: "border-pink-200", 
    text: "text-pink-800", 
    hover: "hover:bg-pink-100",
    darkBg: "bg-pink-100"
  },
  sky: { 
    bg: "bg-sky-50", 
    border: "border-sky-200", 
    text: "text-sky-800", 
    hover: "hover:bg-sky-100",
    darkBg: "bg-sky-100"
  }
};

 const getSeedsBySeason = (seasonId) => {
  console.log("Seeds array:", seeds[0]);
console.log("Filtering seasonId:", seasonId);
console.log("Filtered seeds:", seeds.filter(seed => seed.season_id == seasonId));

  if (!seeds || seeds.length === 0) return [];
  return seeds.filter(seed => seed.season_id == seasonId); // loose equality
};


  // Handle seed click for navigation
 const handleSeedClick = (seed) => {
  const seeds = seed.name.replace(/\s+/g, '-').toLowerCase();
  const season = seed.season_id.replace(/\s+/g, '-').toLowerCase();
 // router.push(`/seed/${seedSeason}/${seedSlug}`);
    router.push(`/seed/${seed._id}`);
};


  // Mobile category selector
  const MobileCategorySelector = () => (
    <div className="md:hidden mb-4">
      <select 
        value={selectedCategory || ""}
        onChange={(e) => {
          setSelectedCategory(e.target.value || null);
          setSelectedSeed(null);
        }}
        className="w-full p-4 text-lg border-2 border-green-300 rounded-xl bg-white focus:outline-none focus:border-green-500"
      >
        <option value="">মৌসুম নির্বাচন করুন kksdksdjfjf</option>
        {seasons.map((season) => (
          <option key={season.id} value={season.id}>
            {season.icon} {season.title}
          </option>
        ))}
      </select>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">বীজের তথ্য লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 py-4 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Header - Optimized for Mobile */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-3 md:mb-4 px-2">
            🌾 মৌসুমি বীজের সংগ্রহ
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            বাংলাদেশের ষড়ঋতু অনুযায়ী উপযুক্ত কৃষি বীজের সম্পূর্ণ সংগ্রহশালা
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 md:gap-6">
          {/* Categories Sidebar - Hidden on mobile, shown as dropdown */}
          {!isMobile && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 sticky top-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">মৌসুম নির্বাচন</h2>
                <div className="space-y-2 md:space-y-3">
                  {seasons.map((season) => {
                    const color = colorClasses[season.color] || colorClasses.emerald;
                    return (
                      <button
                        key={season.id}
                        onClick={() => {
                          setSelectedCategory(season.id === selectedCategory ? null : season.id);
                          setSelectedSeed(null);
                        }}
                        className={`w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedCategory === season.id
                            ? `${color.bg} ${color.border} ${color.text} border-2 scale-105 shadow-md`
                            : `bg-white border-gray-200 text-gray-700 hover:shadow-md ${color.hover}`
                        }`}
                      >
                        <div className="flex items-center space-x-2 md:space-x-3">
                          <span className="text-xl md:text-2xl">{season.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base md:text-lg truncate">{season.title}</h3>
                            <p className="text-xs md:text-sm opacity-75 truncate">{season.title_en}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Category Selector */}
          {isMobile && <MobileCategorySelector />}

          {/* Main Content */}
          <div className="lg:col-span-3">
            {selectedCategory ? (
              <div className="space-y-4 md:space-y-6">
                {/* Category Details */}
                {seasons
                  .filter((season) => season.id === selectedCategory)
                  .map((season) => {
                    const color = colorClasses[season.color];
                    const seasonSeeds = getSeedsBySeason(season.id);
                    
                    return (
                      <div key={season.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Category Header - Mobile Optimized */}
                        <div className={`${color.bg} ${color.text} p-4 md:p-6`}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <h2 className="text-xl md:text-2xl font-bold truncate">{season.title}</h2>
                              <p className="text-sm md:text-lg opacity-90 truncate">{season.title_en}</p>
                            </div>
                            <span className="text-3xl md:text-4xl flex-shrink-0 ml-3">{season.icon}</span>
                          </div>
                          <p className="mt-2 text-xs md:text-sm opacity-80">{season.description}</p>
                        </div>

                        {/* Category Info Grid - Mobile Optimized */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 p-3 md:p-6">
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">🌡️ তাপমাত্রা</h4>
                            <p className="text-xs">{season.temperature_range || "সাধারণ তাপমাত্রা"}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">📅 রোপণের সময়</h4>
                            <p className="text-xs line-clamp-2">
                              {season.planting_months?.slice(0, 2).join(", ") || "সারা বছর"}...
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">🕒 সংগ্রহ সময়</h4>
                            <p className="text-xs">{season.harvesting_period}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">💧 পানি প্রয়োজন</h4>
                            <p className="text-xs line-clamp-2">{season.water_requirements}</p>
                          </div>
                        </div>

                        {/* Seeds Grid - Mobile Optimized */}
                        <div className="p-3 md:p-6">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                            বীজের তালিকা ({seasonSeeds.length})
                          </h3>
                          {seasonSeeds.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                              {seasonSeeds.map((seed, index) => (
                                <div
                                  key={seed.id || index}
                                  onClick={() => handleSeedClick(seed)}
                                  className={`border-2 rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-300 hover:shadow-md active:scale-95 ${
                                    selectedSeed?.id === seed.id
                                      ? `${color.border} ${color.bg} border-2`
                                      : "border-gray-200 bg-white hover:bg-gray-50"
                                  }`}
                                >
                                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                                    <span className="text-xl md:text-2xl flex-shrink-0">{seed.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-semibold text-gray-800 text-sm md:text-base truncate">{seed.name}</h4>
                                      <p className="text-xs text-gray-600 truncate">{seed.name_en}</p>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 mb-1 md:mb-2 line-clamp-1">{seed.scientific_name}</p>
                                  <p className="text-xs md:text-sm text-gray-700 line-clamp-2">{seed.benefits}</p>
                                  
                                  {/* Quick Info Badges */}
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                      {seed.difficulty}
                                    </span>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                      {seed.maturity_time}
                                    </span>
                                  </div>
                                  <p className="text-xs text-green-600 mt-2">🔍 বিস্তারিত দেখতে ক্লিক করুন</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <p className="text-gray-500">এই মৌসুমের জন্য কোন বীজ পাওয়া যায়নি</p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                {/* Seed Details Modal - Mobile Optimized */}
                {selectedSeed && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center p-0 md:p-4 z-50">
                    <div className="bg-white rounded-t-2xl md:rounded-2xl w-full md:max-w-2xl md:max-h-[90vh] overflow-y-auto h-[90vh] md:h-auto">
                      <div className="p-4 md:p-6">
                        {/* Sticky Header for Mobile */}
                        <div className="flex justify-between items-start mb-4 sticky top-0 bg-white pb-4 md:pb-0 md:static">
                          <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                            <span className="text-2xl md:text-3xl flex-shrink-0">{selectedSeed.icon}</span>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl md:text-2xl font-bold text-gray-800 truncate">{selectedSeed.name}</h3>
                              <p className="text-sm md:text-lg text-gray-600 truncate">{selectedSeed.name_en}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedSeed(null)}
                            className="text-gray-500 hover:text-gray-700 text-2xl md:text-2xl flex-shrink-0 ml-2"
                          >
                            ×
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm md:text-base mb-1 md:mb-2">🔬 বৈজ্ঞানিক নাম</h4>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedSeed.scientific_name}</p>

                            <h4 className="font-semibold text-gray-700 text-sm md:text-base mb-1 md:mb-2">💚 স্বাস্থ্য উপকারিতা</h4>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedSeed.benefits}</p>

                            <h4 className="font-semibold text-gray-700 text-sm md:text-base mb-1 md:mb-2">🌱 অঙ্কুরোদগম সময়</h4>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedSeed.germination_time}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm md:text-base mb-1 md:mb-2">📝 বিশেষ নির্দেশনা</h4>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedSeed.special_notes}</p>

                            <h4 className="font-semibold text-gray-700 text-sm md:text-base mb-1 md:mb-2">⏰ পরিপক্কতা সময়</h4>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedSeed.maturity_time}</p>

                            <div className="bg-green-50 rounded-lg p-3 md:p-4">
                              <h4 className="font-semibold text-green-800 text-sm md:text-base mb-2">🌱 চাষের টিপস</h4>
                              <ul className="text-xs md:text-sm text-green-700 space-y-1">
                                <li>• পর্যাপ্ত সূর্যালোক নিশ্চিত করুন</li>
                                <li>• নিয়মিত পানি ও সার দিন</li>
                                <li>• সময়মতো সংগ্রহ করুন</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex space-x-3 justify-end sticky bottom-0 bg-white pt-4 md:pt-0 md:static">
                          <button
                            onClick={() => handleSeedClick(selectedSeed)}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-base md:text-sm"
                          >
                            বিস্তারিত দেখুন
                          </button>
                          <button
                            onClick={() => setSelectedSeed(null)}
                            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-base md:text-sm"
                          >
                            বন্ধ করুন
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Welcome Screen - Mobile Optimized
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="text-4xl md:text-6xl mb-4 md:mb-6">🌱</div>
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 px-2">
                    বাংলাদেশের মৌসুমি বীজ সংগ্রহশালায় স্বাগতম
                  </h2>
                  <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6 px-2">
                    {isMobile 
                      ? "উপরে থেকে মৌসুম নির্বাচন করুন এবং বীজ সম্পর্কে জানুন"
                      : "বাম পাশ থেকে আপনার পছন্দের মৌসুম নির্বাচন করুন এবং সেই মৌসুমে চাষযোগ্য বিভিন্ন ধরনের বীজ সম্পর্কে বিস্তারিত জানুন।"
                    }
                  </p>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6 md:mt-8">
                    {seasons.map((season) => {
                      const color = colorClasses[season.color];
                      return (
                        <div 
                          onClick={() => {
                            setSelectedCategory(season.id === selectedCategory ? null : season.id);
                            setSelectedSeed(null);
                          }} 
                          key={season.id} 
                          className={`text-center cursor-pointer p-3 md:p-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md border-2 ${
                            selectedCategory === season.id 
                              ? `${color.bg} ${color.border} border-2 shadow-md` 
                              : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <span className="text-2xl md:text-3xl block mb-1 md:mb-2">{season.icon}</span>
                          <p className={`font-semibold text-xs md:text-sm ${
                            selectedCategory === season.id ? color.text : "text-gray-700"
                          }`}>
                            {season.title}
                          </p>
                          <p className={`text-xs ${
                            selectedCategory === season.id ? "opacity-90" : "text-gray-500"
                          }`}>
                            {season.title_en}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonSeeds;