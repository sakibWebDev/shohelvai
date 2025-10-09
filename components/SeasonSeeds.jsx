"use client";
import React, { useState, useEffect } from "react";

const categories = [
  {
    id: "baromashi",
    title: "বারোমাসি বীজ",
    title_en: "All Season Seeds",
    description: "সারা বছর চাষযোগ্য বীজসমূহ",
    description_en: "Seeds suitable for cultivation throughout the year",
    season: "সারা বছর (All Year Round)",
    planting_months: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    harvesting_period: "বপন থেকে ৩০-৬০ দিন",
    soil_type: "দো-আঁশ মাটি, জৈব পদার্থ সমৃদ্ধ",
    water_requirements: "মাঝারি, নিয়মিত সেচ",
    icon: "🌿",
    color: "emerald",
    seeds: [
      {
        name: "লালশাক",
        name_en: "Red Amaranth",
        scientific_name: "Amaranthus cruentus",
        benefits: "আয়রন, ক্যালসিয়াম ও ভিটামিন সমৃদ্ধ",
        special_notes: "দ্রুত বৃদ্ধি, পুষ্টিগুণে ভরপুর",
        icon: "🍃"
      },
      {
        name: "পুঁইশাক",
        name_en: "Malabar Spinach",
        scientific_name: "Basella alba",
        benefits: "ভিটামিন এ, সি এবং আয়রন সমৃদ্ধ",
        special_notes: "লতা জাতীয় গাছ, বারান্দায় চাষযোগ্য",
        icon: "🌱"
      },
      {
        name: "ঢেঁড়স",
        name_en: "Okra/Lady's Finger",
        scientific_name: "Abelmoschus esculentus",
        benefits: "ফাইবার, ভিটামিন সি এবং ফলিক অ্যাসিড সমৃদ্ধ",
        special_notes: "গরম আবহাওয়া উপযোগী",
        icon: "🥬"
      },
      {
        name: "টমেটো",
        name_en: "Tomato",
        scientific_name: "Solanum lycopersicum",
        benefits: "লাইকোপেন, ভিটামিন সি এবং পটাসিয়াম সমৃদ্ধ",
        special_notes: "রোদযুক্ত স্থানে ভাল জন্মে",
        icon: "🍅"
      },
      {
        name: "মরিচ",
        name_en: "Chili Pepper",
        scientific_name: "Capsicum annuum",
        benefits: "ভিটামিন সি এবং ক্যাপসাইসিন সমৃদ্ধ",
        special_notes: "মাঝারি থেকে বেশি রোদ প্রয়োজন",
        icon: "🌶️"
      },
      {
        name: "বেগুন",
        name_en: "Brinjal/Eggplant",
        scientific_name: "Solanum melongena",
        benefits: "আঁশ, পটাসিয়াম এবং ভিটামিন সমৃদ্ধ",
        special_notes: "উষ্ণ আবহাওয়া উপযোগী",
        icon: "🍆"
      }
    ]
  },
  {
    id: "shitkalin",
    title: "শীতকালীন বীজ",
    title_en: "Winter Season Seeds",
    description: "শীত মৌসুমে চাষের উপযুক্ত ফসল",
    description_en: "Crops suitable for cultivation in winter season",
    season: "হেমন্ত ও শীতকাল (Late October to February)",
    bengali_months: ["কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ"],
    planting_months: ["অক্টোবর", "নভেম্বর", "ডিসেম্বর", "জানুয়ারি"],
    temperature_range: "১৫°C - ২৫°C",
    harvesting_period: "বপন থেকে ৬০-৯০ দিন",
    soil_type: "বলদুআশ থেকে এটেল দোআঁশ মাটি",
    water_requirements: "কম থেকে মাঝারি সেচ",
    icon: "❄️",
    color: "blue",
    seeds: [
      {
        name: "কপি",
        name_en: "Cabbage",
        scientific_name: "Brassica oleracea",
        benefits: "ভিটামিন কে, সি এবং ফাইবার সমৃদ্ধ",
        special_notes: "শীতের শুরুতে চারা রোপণ করা ভাল",
        icon: "🥬"
      },
      {
        name: "মূলা",
        name_en: "Radish",
        scientific_name: "Raphanus sativus",
        benefits: "ভিটামিন সি, ফোলেট এবং পটাসিয়াম সমৃদ্ধ",
        special_notes: "দ্রুত বৃদ্ধি, ৩০-৪০ দিনে সংগ্রহযোগ্য",
        icon: "🌰"
      },
      {
        name: "গাজর",
        name_en: "Carrot",
        scientific_name: "Daucus carota",
        benefits: "বিটা-ক্যারোটিন, ভিটামিন এ এবং ফাইবার সমৃদ্ধ",
        special_notes: "গভীর ও নরম মাটি প্রয়োজন",
        icon: "🥕"
      },
      {
        name: "লেটুস",
        name_en: "Lettuce",
        scientific_name: "Lactuca sativa",
        benefits: "ভিটামিন কে, এ এবং ফোলেট সমৃদ্ধ",
        special_notes: "হালকা শীতে ভাল জন্মে",
        icon: "🥗"
      },
      {
        name: "ফুলকপি",
        name_en: "Cauliflower",
        scientific_name: "Brassica oleracea var. botrytis",
        benefits: "ভিটামিন সি, কে এবং ফাইবার সমৃদ্ধ",
        special_notes: "শীতের মাঝামাঝি সময় পর্যন্ত চাষযোগ্য",
        icon: "🥦"
      },
      {
        name: "ব্রোকলি",
        name_en: "Broccoli",
        scientific_name: "Brassica oleracea var. italica",
        benefits: "ভিটামিন সি, কে এবং অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ",
        special_notes: "হালকা ঠান্ডা আবহাওয়া উপযোগী",
        icon: "🥦"
      },
      {
        name: "পালং শাক",
        name_en: "Spinach",
        scientific_name: "Spinacia oleracea",
        benefits: "আয়রন, ক্যালসিয়াম এবং ভিটামিন সমৃদ্ধ",
        special_notes: "হিম সহনশীল",
        icon: "🍃"
      }
    ]
  },
  {
    id: "grishmakalin",
    title: "গ্রীষ্মকালীন বীজ",
    title_en: "Summer Season Seeds",
    description: "গরমে চাষের উপযুক্ত ফসল",
    description_en: "Crops suitable for cultivation in hot summer",
    season: "বসন্ত ও গ্রীষ্মকাল (March to June)",
    bengali_months: ["ফাল্গুন", "চৈত্র", "বৈশাখ", "জ্যৈষ্ঠ"],
    planting_months: ["মার্চ", "এপ্রিল", "মে", "জুন"],
    temperature_range: "২৫°C - ৩৫°C",
    harvesting_period: "বপন থেকে ৪৫-৭৫ দিন",
    soil_type: "বলদুআশ মাটি, ভাল জলনিকাশ যুক্ত",
    water_requirements: "নিয়মিত ও বেশি সেচ প্রয়োজন",
    icon: "☀️",
    color: "orange",
    seeds: [
      {
        name: "লাউ",
        name_en: "Bottle Gourd",
        scientific_name: "Lagenaria siceraria",
        benefits: "জলীয় অংশ বেশি, ভিটামিন সি সমৃদ্ধ",
        special_notes: "লতানো গাছ, পর্যাপ্ত জায়গা প্রয়োজন",
        icon: "🎃"
      },
      {
        name: "ঝিঙা",
        name_en: "Ridge Gourd",
        scientific_name: "Luffa acutangula",
        benefits: "ফাইবার, ভিটামিন সি এবং আয়রন সমৃদ্ধ",
        special_notes: "খাড়া মাচা প্রয়োজন",
        icon: "🥒"
      },
      {
        name: "করলা",
        name_en: "Bitter Gourd",
        scientific_name: "Momordica charantia",
        benefits: "অ্যান্টিঅক্সিডেন্ট, রক্তের শর্করা নিয়ন্ত্রণে সহায়ক",
        special_notes: "তিক্ত স্বাদের জন্য পরিচিত",
        icon: "🥒"
      },
      {
        name: "কুমড়া",
        name_en: "Pumpkin",
        scientific_name: "Cucurbita maxima",
        benefits: "বিটা-ক্যারোটিন, ভিটামিন এ এবং পটাসিয়াম সমৃদ্ধ",
        special_notes: "লতানো গাছ, ব্যাপক জায়গা প্রয়োজন",
        icon: "🎃"
      },
      {
        name: "চালকুমড়া",
        name_en: "Ash Gourd",
        scientific_name: "Benincasa hispida",
        benefits: "ক্যালসিয়াম, ফসফরাস এবং ভিটামিন সমৃদ্ধ",
        special_notes: "দীর্ঘ সময় সংরক্ষণযোগ্য",
        icon: "🍈"
      },
      {
        name: "শসা",
        name_en: "Cucumber",
        scientific_name: "Cucumis sativus",
        benefits: "জলীয় অংশ বেশি, ভিটামিন কে সমৃদ্ধ",
        special_notes: "দ্রুত বৃদ্ধি, নিয়মিত পানি প্রয়োজন",
        icon: "🥒"
      },
      {
        name: "তরমুজ",
        name_en: "Watermelon",
        scientific_name: "Citrullus lanatus",
        benefits: "লাইকোপেন, সিট্রুলিন এবং জলীয় অংশ সমৃদ্ধ",
        special_notes: "বড় জায়গা এবং বেশি রোদ প্রয়োজন",
        icon: "🍉"
      }
    ]
  },
  {
    id: "borshakalin",
    title: "বর্ষাকালীন বীজ",
    title_en: "Monsoon Season Seeds",
    description: "বর্ষাকালে চাষের উপযুক্ত ফসল",
    description_en: "Crops suitable for cultivation in rainy season",
    season: "বর্ষাকাল (July to October)",
    bengali_months: ["আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন"],
    planting_months: ["জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর"],
    temperature_range: "২৪°C - ৩২°C",
    harvesting_period: "বপন থেকে ৯০-১২০ দিন",
    soil_type: "এটেল মাটি, জল ধারণ ক্ষমতা বেশি",
    water_requirements: "প্রাকৃতিক বৃষ্টির উপর নির্ভরশীল",
    icon: "🌧️",
    color: "indigo",
    seeds: [
      {
        name: "ধান",
        name_en: "Paddy/Rice",
        scientific_name: "Oryza sativa",
        benefits: "কার্বোহাইড্রেট, ভিটামিন বি এবং মিনারেল সমৃদ্ধ",
        special_notes: "বাংলাদেশের প্রধান খাদ্য শস্য",
        icon: "🌾"
      },
      {
        name: "তিল",
        name_en: "Sesame",
        scientific_name: "Sesamum indicum",
        benefits: "ক্যালসিয়াম, ম্যাগনেসিয়াম এবং স্বাস্থ্যকর ফ্যাট সমৃদ্ধ",
        special_notes: "শুকনা মাটি পছন্দ করে",
        icon: "⚪"
      },
      {
        name: "তরমুজ",
        name_en: "Watermelon",
        scientific_name: "Citrullus lanatus",
        benefits: "জলীয় অংশ বেশি, অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ",
        special_notes: "বর্ষার শুরুতে বপন করা হয়",
        icon: "🍉"
      },
      {
        name: "শিম",
        name_en: "Hyacinth Bean",
        scientific_name: "Lablab purpureus",
        benefits: "প্রোটিন, ফাইবার এবং আয়রন সমৃদ্ধ",
        special_notes: "লতা জাতীয়, মাচা প্রয়োজন",
        icon: "🫘"
      },
      {
        name: "মুগ ডাল",
        name_en: "Mung Bean",
        scientific_name: "Vigna radiata",
        benefits: "প্রোটিন, ফাইবার এবং অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ",
        special_notes: "স্বল্প সময়ের ফসল",
        icon: "🫘"
      },
      {
        name: "আখ",
        name_en: "Sugarcane",
        scientific_name: "Saccharum officinarum",
        benefits: "শর্করা, ক্যালসিয়াম এবং আয়রন সমৃদ্ধ",
        special_notes: "দীর্ঘমেয়াদী ফসল",
        icon: "🎋"
      },
      {
        name: "পাট",
        name_en: "Jute",
        scientific_name: "Corchorus capsularis",
        benefits: "প্রাকৃতিক আঁশ, পরিবেশ বান্ধব",
        special_notes: "বাংলাদেশের সোনালি আঁশ",
        icon: "🌿"
      }
    ]
  },
  {
    id: "hemonto",
    title: "হেমন্তকালীন বীজ",
    title_en: "Late Autumn Seeds",
    description: "হেমন্তকালে চাষের উপযুক্ত ফসল",
    description_en: "Crops suitable for cultivation in late autumn",
    season: "হেমন্তকাল (Mid October to December)",
    bengali_months: ["কার্তিক", "অগ্রহায়ণ"],
    planting_months: ["অক্টোবর", "নভেম্বর"],
    temperature_range: "১৮°C - ২৮°C",
    harvesting_period: "বপন থেকে ৫০-৮০ দিন",
    soil_type: "দো-আঁশ মাটি, নরম ও উর্বর",
    water_requirements: "মাঝারি সেচ",
    icon: "🍂",
    color: "amber",
    seeds: [
      {
        name: "মটরশুটি",
        name_en: "Green Pea",
        scientific_name: "Pisum sativum",
        benefits: "প্রোটিন, ফাইবার এবং ভিটামিন সি সমৃদ্ধ",
        special_notes: "হালকা ঠান্ডা আবহাওয়া উপযোগী",
        icon: "🫛"
      },
      {
        name: "ব্রকলি",
        name_en: "Broccoli",
        scientific_name: "Brassica oleracea var. italica",
        benefits: "ভিটামিন সি, কে এবং ক্যালসিয়াম সমৃদ্ধ",
        special_notes: "হিম পড়ার আগে সংগ্রহ করতে হয়",
        icon: "🥦"
      },
      {
        name: "বিট",
        name_en: "Beetroot",
        scientific_name: "Beta vulgaris",
        benefits: "ফোলেট, ম্যাঙ্গানিজ এবং পটাসিয়াম সমৃদ্ধ",
        special_notes: "মাটির নিচের অংশ খাওয়া হয়",
        icon: "🍠"
      },
      {
        name: "শালগম",
        name_en: "Turnip",
        scientific_name: "Brassica rapa",
        benefits: "ভিটামিন সি, ফাইবার এবং ক্যালসিয়াম সমৃদ্ধ",
        special_notes: "মূল এবং পাতা উভয়ই খাওয়া যায়",
        icon: "🥬"
      }
    ]
  },
  {
    id: "bashonto",
    title: "বসন্তকালীন বীজ",
    title_en: "Spring Season Seeds",
    description: "বসন্তকালে চাষের উপযুক্ত ফসল",
    description_en: "Crops suitable for cultivation in spring season",
    season: "বসন্তকাল (February to April)",
    bengali_months: ["ফাল্গুন", "চৈত্র"],
    planting_months: ["ফেব্রুয়ারি", "মার্চ"],
    temperature_range: "২০°C - ৩০°C",
    harvesting_period: "বপন থেকে ৪০-৭০ দিন",
    soil_type: "উর্বর দো-আঁশ মাটি",
    water_requirements: "নিয়মিত সেচ",
    icon: "🌸",
    color: "pink",
    seeds: [
      {
        name: "ভুট্টা",
        name_en: "Corn/Maize",
        scientific_name: "Zea mays",
        benefits: "কার্বোহাইড্রেট, ফাইবার এবং ভিটামিন বি সমৃদ্ধ",
        special_notes: "পরাগায়নের জন্য বাতাস প্রয়োজন",
        icon: "🌽"
      },
      {
        name: "সয়াবিন",
        name_en: "Soybean",
        scientific_name: "Glycine max",
        benefits: "উচ্চ প্রোটিন, ফাইবার এবং আইসোফ্লাভোন সমৃদ্ধ",
        special_notes: "তৈলবীজ ফসল",
        icon: "🫘"
      },
      {
        name: "সূর্যমুখী",
        name_en: "Sunflower",
        scientific_name: "Helianthus annuus",
        benefits: "ভিটামিন ই, সেলেনিয়াম এবং স্বাস্থ্যকর ফ্যাট সমৃদ্ধ",
        special_notes: "পর্যাপ্ত সূর্যালোক প্রয়োজন",
        icon: "🌻"
      },
      {
        name: "বিন্স",
        name_en: "Beans",
        scientific_name: "Phaseolus vulgaris",
        benefits: "প্রোটিন, ফাইবার এবং আয়রন সমৃদ্ধ",
        special_notes: "লতা জাতীয়, মাচা প্রয়োজন",
        icon: "🫘"
      }
    ]
  }
];

const SeasonSeeds = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
    }
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
        <option value="">মৌসুম নির্বাচন করুন</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.icon} {cat.title}
          </option>
        ))}
      </select>
    </div>
  );

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
                  {categories.map((cat) => {
                    const color = colorClasses[cat.color];
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id === selectedCategory ? null : cat.id);
                          setSelectedSeed(null);
                        }}
                        className={`w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${
                          selectedCategory === cat.id
                            ? `${color.bg} ${color.border} ${color.text} border-2 scale-105 shadow-md`
                            : `bg-white border-gray-200 text-gray-700 hover:shadow-md ${color.hover}`
                        }`}
                      >
                        <div className="flex items-center space-x-2 md:space-x-3">
                          <span className="text-xl md:text-2xl">{cat.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base md:text-lg truncate">{cat.title}</h3>
                            <p className="text-xs md:text-sm opacity-75 truncate">{cat.title_en}</p>
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
                {categories
                  .filter((cat) => cat.id === selectedCategory)
                  .map((category) => {
                    const color = colorClasses[category.color];
                    return (
                      <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Category Header - Mobile Optimized */}
                        <div className={`${color.bg} ${color.text} p-4 md:p-6`}>
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <h2 className="text-xl md:text-2xl font-bold truncate">{category.title}</h2>
                              <p className="text-sm md:text-lg opacity-90 truncate">{category.title_en}</p>
                            </div>
                            <span className="text-3xl md:text-4xl flex-shrink-0 ml-3">{category.icon}</span>
                          </div>
                          <p className="mt-2 text-xs md:text-sm opacity-80">{category.description}</p>
                        </div>

                        {/* Category Info Grid - Mobile Optimized */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 p-3 md:p-6">
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">🌡️ তাপমাত্রা</h4>
                            <p className="text-xs">{category.temperature_range}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">📅 রোপণের সময়</h4>
                            <p className="text-xs line-clamp-2">{category.planting_months.slice(0, 2).join(", ")}...</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">🕒 সংগ্রহ সময়</h4>
                            <p className="text-xs">{category.harvesting_period}</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4">
                            <h4 className="font-semibold text-gray-700 text-xs md:text-sm mb-1 md:mb-2">💧 পানি প্রয়োজন</h4>
                            <p className="text-xs line-clamp-2">{category.water_requirements}</p>
                          </div>
                        </div>

                        {/* Seeds Grid - Mobile Optimized */}
                        <div className="p-3 md:p-6">
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">বীজের তালিকা</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {category.seeds.map((seed, index) => (
                              <div
                                key={index}
                                onClick={() => setSelectedSeed(seed)}
                                className={`border-2 rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-300 hover:shadow-md active:scale-95 ${
                                  selectedSeed?.name === seed.name
                                    ? `${color.border} ${color.bg} border-2`
                                    : "border-gray-200 bg-white"
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
                              </div>
                            ))}
                          </div>
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
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm md:text-base mb-1 md:mb-2">📝 বিশেষ নির্দেশনা</h4>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{selectedSeed.special_notes}</p>

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

                        <div className="mt-6 flex justify-end sticky bottom-0 bg-white pt-4 md:pt-0 md:static">
                          <button
                            onClick={() => setSelectedSeed(null)}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full md:w-auto text-base md:text-sm"
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
                    {categories.map((cat) => {
                      const color = colorClasses[cat.color];
                      return (
                        <div 
                          onClick={() => {
                            setSelectedCategory(cat.id === selectedCategory ? null : cat.id);
                            setSelectedSeed(null);
                          }} 
                          key={cat.id} 
                          className={`text-center cursor-pointer p-3 md:p-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md border-2 ${
                            selectedCategory === cat.id 
                              ? `${color.bg} ${color.border} border-2 shadow-md` 
                              : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <span className="text-2xl md:text-3xl block mb-1 md:mb-2">{cat.icon}</span>
                          <p className={`font-semibold text-xs md:text-sm ${
                            selectedCategory === cat.id ? color.text : "text-gray-700"
                          }`}>
                            {cat.title}
                          </p>
                          <p className={`text-xs ${
                            selectedCategory === cat.id ? "opacity-90" : "text-gray-500"
                          }`}>
                            {cat.title_en}
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