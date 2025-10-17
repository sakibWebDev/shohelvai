// components/EmergencyHelp.jsx
import React from 'react';

const EmergencyHelp = () => {
  const emergencyContacts = [
    { name: "কৃষি পরামর্শক", number: "16123", icon: "👨‍🌾" },
    { name: "কৃষি বিপর্যয়", number: "1090", icon: "🚨" },
    { name: "সার বিষক্রিয়া", number: "01700000000", icon: "⚠️" },
    { name: "কৃষি ঋণ", number: "01711111111", icon: "💰" }
  ];

  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-red-500 text-white p-2 rounded-full">
          <span className="text-xl">🆘</span>
        </div>
        <h2 className="text-2xl font-bold text-red-800">জরুরী সাহায্য</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="bg-white rounded-xl p-4 border border-red-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{contact.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                  <p className="text-red-600 font-bold text-lg">{contact.number}</p>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full">
                📞
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-red-100 rounded-lg">
        <p className="text-red-800 text-sm text-center">
          যেকোনো জরুরী অবস্থায় উপরের নম্বরগুলোতে যোগাযোগ করুন
        </p>
      </div>
    </div>
  );
};

export default EmergencyHelp;