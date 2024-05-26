import mongoose, { Schema, Document, Model } from "mongoose";

const ChefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
});

module.exports = mongoose.model('Chef', ChefSchema);
