import bcrypt from "bcrypt";
import jwt, { verify } from "jsonwebtoken";
import { Error } from 'mongoose';
import User from './models/user.models';
import { TokenModel } from "./models/token.midels";
import auth from "../middleeware/auth";

export default interface IHandlerResults {
    success?: any;
    error?: Error;
    code?: number;
}

export const authenticateUser = async ( email: string, password: string ): Promise<IHandlerResults> => {
  const user = await User.findOne({ email });
  if (user) {
    if (password !== user.password) {
      return {
        error: new Error("Please check if email or passowrd is correct."),
        code: 400
      };
    } else {
      const token = jwt.sign({ _id: user._id }, auth.jwtSecret, { expiresIn: "1w" });
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
    }
  } else {
      return{
        error: new Error("Please check if email or passowrd is correct."),
          code: 400
      }
    }
};
  

    

  export const refresh = async (
    refreshToken: string
  ): Promise<IHandlerResults> => {
    try {
      const payload = verify(refreshToken, auth.jwtSecret);
      if (!payload)
        return {
          error: new Error("Unauthenticated."),
          code: 401,
        };
  
      const refreshTokenDb = await TokenModel.findOne({
        userId: payload,
        expiredAt: { $gte: new Date() },
      });
      if (!refreshTokenDb?._id)
        return {
          error: new Error("Unauthenticated."),
          code: 401,
        };
  
      const accessToken = jwt.sign({ _id: payload }, auth.jwtSecret, {
        expiresIn: "30s",
      });
  
      return {
        success: {
          accessToken,
        },
      };
    } catch (error: any) {
      return {
        error,
        code: 401,
      };
    }
  };
