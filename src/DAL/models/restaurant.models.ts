import mongoose, { Schema, Document, Model, } from "mongoose";
import { IChef } from "./chef.models";
import { IDish } from "./dish.models";

export interface IRestaurant extends Document {
  title: string;
  image: string;
  stars: number;
  chef: IChef;
  dishes: IDish[];
  isPopular: boolean;
}

const RestaurantSchema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  stars: {type: Number, min: 1, max: 5, default: 0},
  chef: { type: Schema.Types.ObjectId, ref: 'Chef' },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  isPopular: { type: Boolean, default: false }
});

export const RestaurantModel: Model<IRestaurant> = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);