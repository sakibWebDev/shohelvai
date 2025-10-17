// pages/Dashboard.jsx
import React from 'react';
import WeatherCard from '@/components/WeatherCard';
import QuickActions from '@/components/QuickActions';
import CropSuggestion from '@/components/CropSuggestion';
import MarketPrice from '@/components/MarketPrice';
import FertilizerCalculator from '@/components/FertilizerCalculator';
import EmergencyHelp from '@/components/EmergencyHelp';

const Dashboard = () => {
 
  const weatherData = {
    temperature: 28,
    condition: "আংশিক মেঘলা",
    icon: "⛅",
    rainChance: 30,
    humidity: 65,
    windSpeed: 12,
    farmingAdvice: "আজ ধান ক্ষেতে সেচ দেওয়ার উপযুক্ত সময়"
  };

  const cropSuggestions = {
    season: "রবি মৌসুম",
    crops: [
      {
        icon: "🌾",
        name: "গম",
        name_en: "Wheat",
        plantingTime: "নভেম্বর-ডিসেম্বর",
        harvestTime: "মার্চ-এপ্রিল",
        expectedYield: "৩-৪ টন/হেক্টর"
      },
      {
        icon: "🥔",
        name: "আলু",
        name_en: "Potato", 
        plantingTime: "অক্টোবর-নভেম্বর",
        harvestTime: "জানুয়ারি-ফেব্রুয়ারি",
        expectedYield: "২৫-৩০ টন/হেক্টর"
      },
      {
        icon: "🍅",
        name: "টমেটো",
        name_en: "Tomato",
        plantingTime: "নভেম্বর-ডিসেম্বর",
        harvestTime: "ফেব্রুয়ারি-মার্চ", 
        expectedYield: "৪০-৫০ টন/হেক্টর"
      }
    ]
  };

  const marketPrices = [
    { icon: "🌾", crop: "ধান", unit: "কেজি", price: "৩৫", change: 2.5 },
    { icon: "🥔", crop: "আলু", unit: "কেজি", price: "২০", change: -1.2 },
    { icon: "🍅", crop: "টমেটো", unit: "কেজি", price: "৪০", change: 5.7 },
    { icon: "🌽", crop: "ভুট্টা", unit: "কেজি", price: "২৫", change: 0.8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-6">
        {/* Weather Section */}
        <div className="mb-6">
          <WeatherCard weatherData={weatherData} />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Crop Suggestions */}
        <CropSuggestion suggestions={cropSuggestions} />

        {/* Market Prices */}
        <MarketPrice prices={marketPrices} />

        {/* Fertilizer Calculator */}
        <FertilizerCalculator />

        {/* Emergency Help */}
        <EmergencyHelp />
      </div>
    </div>
  );
};

export default Dashboard;