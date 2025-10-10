import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Seed from "@/models/Seed";
import Season from "@/models/Season"; // ✅ Corrected

export async function GET() {
  try {
    await connectDB();

    const seeds = await Seed.find({}).populate("season_details");
    const seasons = await Season.find({});

    return NextResponse.json({ success: true, seeds, seasons });
  } catch (error) {
    console.error("❌ Error fetching seeds:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
