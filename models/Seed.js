import mongoose from "mongoose";
const seedSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },              // Bangla
  name_en: { type: String, required: true, trim: true },           // English
  scientific_name: { type: String, required: true, trim: true },
  season_id: { type: String, required: true, ref: "seasons", index: true }, // Relation
  benefits: { type: [String], required: true },                    // English
  special_notes: { type: String, required: true },                // Bangla
  icon: { type: String, required: true, trim: true },
  germination_time: { type: String, required: true },
  maturity_time: { type: String, required: true },
  spacing: { type: String, required: true },
  depth: { type: String, required: true },
  sunlight: { type: String, required: true, enum: ["পূর্ণ সূর্যালোক", "আংশিক ছায়া", "ছায়া"] },
  watering: { type: String, required: true, enum: ["কম", "মাঝারি", "বেশি", "বন্যা সেচ"] },
  difficulty: { type: String, required: true, enum: ["সহজ", "মধ্যম", "কঠিন"] },
  crop_details: {                                                // Detailed crop info
    চাষের_মৌসুম: String,
    মাটি: String,
    তাপমাত্রা: String,
    বৃষ্টিপাত: String,
    পরিপক্কতা_সময়: String,
    উৎপাদন: String,
    চাষ_পদ্ধতি: {
      জমি_প্রস্তুতি: String,
      বীজ_বপনের_সময়: String,
      বীজের_পরিমাণ: String,
      সার_প্রয়োগ: String,
      সেচ: String,
      ফসল_তোলা: String
    },
    রোগ_ব্যবস্থাপনা: Object,
    পোকা_দমন: Object,
    সুবিধা: [String],          // English
    সতর্কতা: [String]          // English
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual to populate season details
seedSchema.virtual("season_details", {
  ref: "seasons",
  localField: "season_id",
  foreignField: "id",
  justOne: true
});

const Seed = mongoose.models.seeds || mongoose.model("seeds", seedSchema);
export default Seed;
