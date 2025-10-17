// components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold mb-2">আজকের আবহাওয়া</h3>
          <p className="text-3xl font-bold">{weatherData.temperature}°C</p>
          <p className="text-blue-100">{weatherData.condition}</p>
        </div>
        <div className="text-4xl">
          {weatherData.icon}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4 text-center">
        <div className="bg-white/20 rounded-lg p-2">
          <p className="text-sm">বৃষ্টির সম্ভাবনা</p>
          <p className="font-bold">{weatherData.rainChance}%</p>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <p className="text-sm">আদ্রতা</p>
          <p className="font-bold">{weatherData.humidity}%</p>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <p className="text-sm">বাতাস</p>
          <p className="font-bold">{weatherData.windSpeed} km/h</p>
        </div>
      </div>

      {/* Farming Recommendation */}
      <div className="mt-4 p-3 bg-white/20 rounded-lg">
        <p className="text-sm font-semibold">কৃষি পরামর্শ:</p>
        <p className="text-blue-100 text-sm">{weatherData.farmingAdvice}</p>
      </div>
    </div>
  );
};

export default WeatherCard;