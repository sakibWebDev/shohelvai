// components/MarketPrice.jsx
import React from 'react';

const MarketPrice = ({ prices }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">আজকের বাজার দর</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 font-semibold text-gray-700">ফসল</th>
              <th className="text-right p-3 font-semibold text-gray-700">ইউনিট</th>
              <th className="text-right p-3 font-semibold text-gray-700">দর (টাকা)</th>
              <th className="text-right p-3 font-semibold text-gray-700">পরিবর্তন</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.crop}</span>
                  </div>
                </td>
                <td className="p-3 text-right text-gray-600">{item.unit}</td>
                <td className="p-3 text-right font-semibold">{item.price}</td>
                <td className="p-3 text-right">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                    item.change >= 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.change >= 0 ? '↑' : '↓'} {Math.abs(item.change)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center">
        <button className="text-green-600 hover:text-green-700 font-semibold text-sm">
          সব বাজার দর দেখুন →
        </button>
      </div>
    </div>
  );
};

export default MarketPrice;