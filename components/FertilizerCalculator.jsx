"use client";  // 👈 add this line at the very top

import { useState } from "react";

const FertilizerCalculator = () => {
  const [area, setArea] = useState('');
  const [crop, setCrop] = useState('');
  const [soilType, setSoilType] = useState('');

  const calculateFertilizer = () => {
    // Example calculation logic (can be improved later)
    return {
      urea: "150 kg",
      tsp: "100 kg", 
      mop: "50 kg",
      gypsum: "75 kg"
    };
  };

  const results = calculateFertilizer();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">সার ক্যালকুলেটর</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Area input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            জমির পরিমাণ (একর)
          </label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="জমির পরিমাণ লিখুন"
          />
        </div>

        {/* Crop selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ফসল নির্বাচন করুন
          </label>
          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">ফসল নির্বাচন করুন</option>
            <option value="rice">ধান</option>
            <option value="wheat">গম</option>
            <option value="corn">ভুট্টা</option>
          </select>
        </div>

        {/* Soil type selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            মাটির ধরন
          </label>
          <select
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">মাটির ধরন</option>
            <option value="sandy">বালু মাটি</option>
            <option value="loamy">দোআঁশ মাটি</option>
            <option value="clay">এটেল মাটি</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {area && crop && soilType && (
        <div className="bg-green-50 rounded-xl p-4">
          <h3 className="font-semibold text-green-800 mb-3">সার এর পরিমাণ:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(results).map(([key, value]) => (
              <div key={key} className="text-center bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-600">{key.toUpperCase()}</p>
                <p className="font-bold text-lg text-green-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FertilizerCalculator;
