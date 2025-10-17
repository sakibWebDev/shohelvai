// components/CropSuggestion.jsx
import React from 'react';

const CropSuggestion = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">এই মৌসুমের ফসল</h2>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
          {suggestions.season}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.crops.map((crop, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{crop.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-800">{crop.name}</h3>
                <p className="text-sm text-gray-600">{crop.name_en}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">রোপণের সময়:</span>
                <span className="font-semibold">{crop.plantingTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">উৎপাদন সময়:</span>
                <span className="font-semibold">{crop.harvestTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">আনুমানিক আয়:</span>
                <span className="font-semibold text-green-600">{crop.expectedYield}</span>
              </div>
            </div>

            <button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
              বিস্তারিত জানুন
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropSuggestion;