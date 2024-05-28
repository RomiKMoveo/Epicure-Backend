import mongoose, { Schema, Document, Model, } from "mongoose";

export interface IRestaurant extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  image: string;
  stars: number;
  chef: Schema.Types.ObjectId;
  dishes: Schema.Types.ObjectId[];
}

const RestaurantSchema: Schema = new Schema({
  _id: {type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  stars: {type: Number, min: 1, max: 5, default: 0},
  chef: { type: Schema.Types.ObjectId, ref: 'Chef' },
  dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
});

export const RestaurantModel: Model<IRestaurant> = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);