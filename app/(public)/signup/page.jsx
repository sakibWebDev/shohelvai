// app/signup/page.tsx
'use client'
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("লোড হচ্ছে...");
    setIsLoading(true);

    try {
      const res = await axios.post("/api/auth/signup", form);

      if (res.status === 200) {
        setMessage("✅ সাইনআপ সফল!");
        toast.success("সাইনআপ সফল!");
        setForm({ name: "", email: "", password: "" });
      } else {
        setMessage("❌ সাইনআপ ব্যর্থ হয়েছে");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ " + (err.response?.data?.error || "Network error"));
    }

    setIsLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8">
          
          {/* Left Side - Banner Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-white text-green-600 px-4 py-2 rounded-lg inline-block">
              চাষীভাই.
            </h1>
            <div className="space-y-4 text-lg">
              <p className="flex items-start gap-2"><span className="text-2xl">🌾</span>চাষী ভাই-এ স্বাগতম! এখানে আপনি উন্নতমানের বীজ ও কৃষি পণ্য পাবেন।</p>
              <p className="flex items-start gap-2"><span className="text-2xl">⭐</span>আপনার ফসলের জন্য সেরা গুণগত মান আমরা নিশ্চিত করি।</p>
              <p className="flex items-start gap-2"><span className="text-2xl">🔬</span>আমাদের পণ্য বৈজ্ঞানিকভাবে নির্বাচিত, যাতে আপনার ফসল বেশি উৎপাদনশীল ও সুস্থ থাকে।</p>
              <p className="flex items-start gap-2"><span className="text-2xl">🌱</span><span className="flex-1 font-semibold text-yellow-200">চাষী ভাই — আপনার কৃষির সেরা সহচর।</span></p>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">সাইন আপ</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-2">আপনার নতুন অ্যাকাউন্ট তৈরি করুন</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">নাম</label>
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল</label>
                <input
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">পাসওয়ার্ড</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 pr-12 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "সাইন আপ হচ্ছে..." : "সাইন আপ"}
            </button>

            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">লগইন করুন</Link>
              </p>
            </div>

            {message && (
              <div className={`text-center mt-4 p-3 rounded-lg ${
                message.includes("✅") ? "bg-green-50 text-green-800 border border-green-200" :
                "bg-red-50 text-red-800 border border-red-200"
              }`}>
                <p className="text-sm font-medium">{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
