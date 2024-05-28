import mongoose, { Schema, Document, Model } from "mongoose";
import { IRestaurant } from "./restaurant.models";

export interface IChef extends Document {
  id: Schema.Types.ObjectId;
  title: string;
  image: string;
  description: string;
  restaurants?: IRestaurant[];
  chefOfTheWeek?: Boolean;
}

const ChefSchema = new mongoose.Schema({
  id: {type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
  chefOfTheWeek: { type: Boolean, default: false }
});

export const ChefModel: Model<IChef> = mongoose.model<IChef>('Chef', ChefSchema);