// components/DetailedCropCard.jsx
import React from "react";

const DetailedCropCard = ({ crop }) => {
  const formatKey = (key) =>
    key
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();

  const renderKeyValueSection = (data, title, icon) => {
    if (!data || Object.keys(data).length === 0) return null;
    return (
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
          <span>{icon}</span> {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data).map(([key, value]) => (
            <div
              key={key}
              className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-yellow-400 hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-500 text-sm">{formatKey(key)}</p>
              <p className="text-gray-800 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderListSection = (items, title, icon, color = "yellow") => {
    if (!items || items.length === 0) return null;
    const colors = {
      yellow: "bg-yellow-100 text-yellow-800",
      green: "bg-green-100 text-green-800",
      red: "bg-red-100 text-red-800",
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800",
    };
    return (
      <div className="mb-6">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
          <span>{icon}</span> {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <span
              key={idx}
              className={`${colors[color]} px-3 py-1 rounded-full font-medium shadow-sm`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl shadow-xl p-5 max-w-5xl mx-auto hover:scale-105 transition-transform duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl relative shadow-md">
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
          #{crop.id}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{crop.icon || "🌱"}</span>
          <div>
            <h1 className="text-3xl font-bold">{crop.name}</h1>
            <p className="italic">{crop.name_en}</p>
            <p className="text-sm mt-1">{crop.scientific_name}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { label: "বিভাগ", value: crop.category },
            { label: "চাষের মৌসুম", value: crop.cultivation_season },
            { label: "মাটির ধরন", value: crop.soil_type },
            { label: "তাপমাত্রা", value: crop.temperature },
            { label: "বৃষ্টিপাত", value: crop.rainfall },
            { label: "পরিপক্কতা সময়", value: crop.maturity_time },
            { label: "উৎপাদন (প্রতি হেক্টর)", value: crop.yield_per_hectare },
            { label: "অঙ্কুরোদগম সময়", value: crop.germination_time },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 p-4 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-gray-800 font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Cultivation / Disease / Pest */}
        {renderKeyValueSection(crop.cultivation_method, "চাষ পদ্ধতি", "🌱")}
        {renderKeyValueSection(crop.disease_management, "রোগ ব্যবস্থাপনা", "💊")}
        {renderKeyValueSection(crop.pest_management, "পোকা দমন", "🐛")}

        {/* Benefits / Precautions / Notes */}
        {renderListSection(crop.benefits, "সুবিধা", "⭐", "green")}
        {renderListSection(crop.precautions, "সতর্কতা", "⚠️", "red")}

        {crop.special_notes && (
          <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded-xl shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-2">📝 বিশেষ নোট</h3>
            <p className="text-gray-700">{crop.special_notes}</p>
          </div>
        )}

        {/* Season Details */}
        {crop.season_details && (
          <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🌦️ মৌসুমের বিবরণ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-medium">মৌসুমের নাম </p>
                <p className="text-gray-800 font-semibold">
                  {crop.season_details.title}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">বাংলা  মাস</p>
                <p className="text-gray-800 font-semibold">
                  {crop.season_details.bengali_months.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">রোপণের মাস</p>
                <p className="text-gray-800 font-semibold">
                  {crop.season_details.planting_months.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">ফসল সংগ্রহ সময়</p>
                <p className="text-gray-800 font-semibold">
                  {crop.season_details.harvesting_period}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedCropCard;
