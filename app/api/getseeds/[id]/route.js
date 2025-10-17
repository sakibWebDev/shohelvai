import { connectDB } from "@/lib/mongodb";
import Seeded from "@/models/Seeded";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { id } = params;

    // convert string to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid ID" }),
        { status: 400 }
      );
    }

    const seed = await Seeded.findById(id).populate("season_details");

    if (!seed) {
      return new Response(
        JSON.stringify({ success: false, message: "Seed not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ success: true, data: seed }), { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching seed:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
}
