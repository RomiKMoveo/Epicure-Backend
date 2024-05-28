import mongoose, { Schema, Document, Model, } from "mongoose";

import { IconMeaning } from "../../utils/IconMeaning";
import { IRestaurant } from "./restaurant.models";

export interface IDish extends Document {
  id: Schema.Types.ObjectId;
  title: string;
  image: string;
  price: string;
  ingredients: String;
  tag: IconMeaning,
  restaurant?: IRestaurant;
  isSignature: Boolean;

}

const DishSchema = new Schema({
  id: {type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true},
  price: { type: Number, required: true },
  ingredients: { type: String, required: true},
  tag: { type: String, enum: Object.values(IconMeaning), required: true },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  isSignature: { type: Boolean, default:false}
});

export const DishModel: Model<IDish> = mongoose.model<IDish>('Dish', DishSchema);
