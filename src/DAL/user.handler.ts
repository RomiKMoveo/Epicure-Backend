import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Error } from 'mongoose';
import { UserModel } from './models/user.models';
import { TokenModel } from "./models/token.midels";
import auth from "../utils/auth";

export default interface IHandlerResults {
    success?: any;
    error?: Error;
    code?: number;
}

export const authenticateUser = async ( email: string, password: string ): Promise<IHandlerResults> => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user?._id) {
        return {
            error: new Error("Please check if email or passowrd is correct."),
            code: 400,
          };
    }

    //const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (password !== user.password)
      return {
        error: new Error("Please check if email or passowrd is correct."),
      };

      const token = jwt.sign({ _id: user._id }, auth.jwtSecret, {
        expiresIn: "1w",
      });
  
      const date = new Date();
      date.setDate(date.getDate() + 7);
  
      await TokenModel.create({
        userId: user._id,
        token: token,
        expiredAt: date,
      });
      console.log("token expires at:", date);
  
      return {
        success: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          _id: user._id,
          token: token
        },
      };
    } catch (error: any) {
      return { error };
    }
  }



