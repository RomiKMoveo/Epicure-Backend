import mongoose, { Schema, Document, Model } from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' },
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
