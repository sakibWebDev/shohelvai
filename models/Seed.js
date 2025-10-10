						
import mongoose from "mongoose";						
						
const seedSchema = new mongoose.Schema({						
id: { type: String, required: true, unique: true, trim: true },						
name: { type: String, required: true, trim: true },						
name_en: { type: String, required: true, trim: true },						
scientific_name: { type: String, required: true, trim: true },						
season_id: { type: String, required: true, ref: "seasons", index: true }, // FIXED here						
benefits: { type: String, required: true },						
special_notes: { type: String, required: true },						
icon: { type: String, required: true, trim: true },						
germination_time: { type: String, required: true },						
maturity_time: { type: String, required: true },						
spacing: { type: String, required: true },						
depth: { type: String, required: true },						
sunlight: { type: String, required: true, enum: ["পূর্ণ সূর্যালোক", "আংশিক ছায়া", "ছায়া"] },						
watering: { type: String, required: true, enum: ["কম", "মাঝারি", "বেশি", "বন্যা সেচ"] },						
difficulty: { type: String, required: true, enum: ["সহজ", "মধ্যম", "কঠিন"] }						
}, {						
timestamps: true,						
toJSON: { virtuals: true },						
toObject: { virtuals: true }						
});						
						
seedSchema.virtual("season_details", {						
ref: "seasons", // FIXED here						
localField: "season_id",						
foreignField: "id",						
justOne: true						
});						
						
const Seed = mongoose.models.seeds || mongoose.model("seeds", seedSchema);						
						
export default Seed;						