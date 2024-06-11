import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";
import { IUser } from "./user.models";

export interface IToken extends Document {
  userId: IUser;
  token: string;
  expiredAt: Date;
}

const TokenSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    token: { type: String },
    expiredAt: { type: Date },
  },
  { timestamps: true }
);

export const TokenModel: Model<IToken> = mongoose.model<IToken>('Token', TokenSchema);