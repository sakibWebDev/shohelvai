// components/QuickActions.jsx
import React from 'react';

const QuickActions = () => {
  const actions = [
    { icon: "🌱", label: "বীজ কিনুন", color: "bg-green-500" },
    { icon: "💧", label: "সেচ সময়", color: "bg-blue-500" },
    { icon: "🐛", label: "পোকা দমন", color: "bg-red-500" },
    { icon: "💰", label: "বাজার দর", color: "bg-yellow-500" },
    { icon: "📚", label: "শিখুন", color: "bg-purple-500" },
    { icon: "📞", label: "সহায়তা", color: "bg-orange-500" }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">দ্রুত একশনস</h2>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2`}
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="font-semibold text-sm">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;