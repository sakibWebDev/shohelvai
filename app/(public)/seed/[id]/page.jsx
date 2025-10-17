"use client";

import React, { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import DetailedCropCard from "@/components/CropCard";

export default function SeedDetailPage({ params }) {
  const router = useRouter();

  // ✅ unwrap params promise
  const { id } = use(params);

  const [seed, setSeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seasonData, setseasonData]= useState(null);
console.log(seasonData, "kkdkfjfj", seed);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(`/api/getseeds/${id}`);
      if (res.data.success) 
        {
          setSeed(res.data.data);
          setseasonData(res.data.data.season_details);
        }

      else console.warn("Seed not found");
    } catch (error) {
      console.error("❌ Error fetching seed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!seed) return <p>Seed not found</p>;

  return (
   <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {seasonData?.title} ({seed?.name}) চাষ পদ্ধতি
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          আধুনিক ও বিজ্ঞানসম্মত কৃষি পদ্ধতির নির্দেশিকা
        </p>
      </div>
      
      <DetailedCropCard crop={seed} />
    </div>
  );
}
