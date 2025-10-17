// app/api/seeds/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Seeded from "@/models/Seeded";
import Season from "@/models/Season";

export async function GET() {
  try {
    await connectDB();

    // Populate virtual field season_details
    const seeds = await Seeded.find({}).populate("season_details");
    const seasons = await Season.find({});

    return NextResponse.json({ success: true, seeds, seasons });
  } catch (error) {
    console.error("❌ Error fetching seeds:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
