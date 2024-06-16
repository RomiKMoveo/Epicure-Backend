import mongoose, { Model } from "mongoose";
import { hash } from "bcrypt";
import { compare } from "bcrypt";

export interface IUser {
  name: string;
  surname: string;
  password: string;
  email: string;
  role: string;
}

interface UserMethods {
  isValidPassword: (password: string) => Promise<boolean>;
}
type UserModel = Model<IUser, {}, UserMethods>;

const UserSchema = new mongoose.Schema<IUser, UserModel, UserMethods>({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;

  next();
});

UserSchema.pre("save", async function (next) {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;

  next();
});

UserSchema.methods.isValidPassword = async function (password: string) {
  const isValid = await compare(password, this.password);
  return isValid;
};

const User = mongoose.model("User", UserSchema);

export default User;
