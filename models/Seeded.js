// models/Seeded.js
import mongoose from "mongoose";

const cultivationMethodSchema = new mongoose.Schema({
  land_preparation: { type: String, required: true },
  sowing_time: { type: String, required: true },
  seed_quantity: { type: String, required: true },
  fertilizer_application: { type: String, required: true },
  irrigation: { type: String, required: true },
  harvesting: { type: String, required: true },
});

const diseaseManagementSchema = new mongoose.Schema({
  blast: { type: String },
  stem_rot: { type: String },
  leaf_blight: { type: String },
  yellow_mosaic: { type: String },
  powdery_mildew: { type: String },
  bacterial_blight: { type: String },
});

const pestManagementSchema = new mongoose.Schema({
  stem_borer: { type: String },
  aphids: { type: String },
  armyworm: { type: String },
  thrips: { type: String },
  pod_borer: { type: String },
});

const seedDataSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    name_en: { type: String, required: true, trim: true },
    scientific_name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },

    season_id: { type: String, required: true, ref: "Season", index: true }, // ref corrected

    image: { type: String, required: true },
    cultivation_season: { type: String, required: true },
    soil_type: { type: String, required: true },
    temperature: { type: String, required: true },
    rainfall: { type: String, required: true },
    maturity_time: { type: String, required: true },
    yield_per_hectare: { type: String, required: true },

    cultivation_method: cultivationMethodSchema,
    disease_management: diseaseManagementSchema,
    pest_management: pestManagementSchema,

    benefits: { type: [String], required: true },
    precautions: { type: [String], required: true },

    icon: { type: String, required: true, trim: true },
    special_notes: { type: String, required: true },
    germination_time: { type: String, required: true },
    spacing: { type: String, required: true },
    depth: { type: String, required: true },
    sunlight: { type: String, required: true },
    watering: { type: String, required: true },
    difficulty: { type: String, required: true },
    ph_range: { type: String, required: true },
    harvest_method: { type: String, required: true },
    storage: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // ✅ enable virtuals
    toObject: { virtuals: true }, // ✅ enable virtuals
  }
);

// Virtual populate
seedDataSchema.virtual("season_details", {
  ref: "Season", // must match the model name
  localField: "season_id",
  foreignField: "id",
  justOne: true,
});

const Seeded = mongoose.models.seededs || mongoose.model("seededs", seedDataSchema);
export default Seeded;
