'use client'
import Image from 'next/image';

export default function FarmerBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center p-8">
        {/* Left Side - Text Content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-white text-green-600 px-4 py-2 rounded-lg inline-block">
            চাষীভাই.
          </h1>
          
          <div className="space-y-4 text-lg">
            <p className="flex items-start gap-2">
              <span className="text-2xl">🌾</span>
              <span className="flex-1">চাষী ভাই-এ স্বাগতম! এখানে আপনি উন্নতমানের বীজ ও কৃষি পণ্য পাবেন।</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="text-2xl">⭐</span>
              <span className="flex-1">আপনার ফসলের জন্য সেরা গুণগত মান আমরা নিশ্চিত করি।</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="text-2xl">🔬</span>
              <span className="flex-1">আমাদের পণ্য বৈজ্ঞানিকভাবে নির্বাচিত, যাতে আপনার ফসল বেশি উৎপাদনশীল ও সুস্থ থাকে।</span>
            </p>
            
            <p className="flex items-start gap-2">
              <span className="text-2xl">🌱</span>
              <span className="flex-1 font-semibold text-yellow-200">চাষী ভাই — আপনার কৃষির সেরা সহচর।</span>
            </p>
          </div>
        </div>

        {/* Right Side - Visual Elements */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">🌾</div>
            <p className="text-white text-sm text-center font-semibold">উন্নত বীজ</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">💧</div>
            <p className="text-white text-sm text-center font-semibold">কৃষি পণ্য</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-white text-sm text-center font-semibold">বেশি উৎপাদন</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">🌿</div>
            <p className="text-white text-sm text-center font-semibold">সুস্থ ফসল</p>
          </div>
        </div>
      </div>
    </div>
  );
}
