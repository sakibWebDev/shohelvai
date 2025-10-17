import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Seeded from "@/models/Seeded";
import Season from "@/models/Season";

export async function GET() {
  try {
    await connectDB();

    // ✅ populate সঠিকভাবে ব্যবহার করুন
    const seedsWithSeasons = await Seeded.find({})
      .populate({
        path: "season_id",
        model: "Season"
      });

    const seasons = await Season.find({});

    return NextResponse.json({ 
      success: true, 
      seeds: seedsWithSeasons, 
      seasons 
    });
  } catch (error) {
    console.error("❌ Error fetching seeds:", error);
    return NextResponse.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}