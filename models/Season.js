// models/Season.js
import mongoose from "mongoose";

const seasonSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    title_en: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    description_en: { type: String, required: true },
    season: { type: String, required: true },
    bengali_months: [String],
    planting_months: [String],
    harvesting_period: { type: String, required: true },
    soil_type: { type: String, required: true },
    water_requirements: { type: String, required: true },
    icon: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Season = mongoose.models.Season || mongoose.model("Season", seasonSchema);
export default Season;
