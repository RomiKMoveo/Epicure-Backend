import mongoose, { Schema, Document, Model, } from "mongoose";
import { UserRole } from "../../utils/UserRole";

export interface IUser extends Document {
  name: string;
  surname: string
  email: string;
  password: string;
  role: UserRole;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER, required: true },
  token: { type: String }
});

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// UserSchema.methods.comparePassword = async function (enteredPassword: string) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// UserSchema.methods.createJWT = function () {
//   return 1
// };

export const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema);