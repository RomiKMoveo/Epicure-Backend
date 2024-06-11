import { Request, Response } from "express";
import login from "../utils/login";
import * as UserHandler from '../DAL/user.handler';
import { err, ok } from "../utils/response";

const NAMESPACE = "Controllers restaurant.ts";

export const authenticateUser = async (req: Request, res: Response) => {
    login.info(NAMESPACE, "getUser function called");
    const { email, password } = req.body;
    
    const results = await UserHandler.authenticateUser(email, password);
    if (results.error) err(res, results.error, results.code);
    else {
      res.cookie("refreshToken", results.success.refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      }); // 7 days
  
      const user = {
        firstName: results.success.firstName,
        lastName: results.success.lastName,
        email: results.success.email,
        _id: results.success._id,
        token: results.success.accessToken,
      };
      ok(res, { user });
    }
  };

  export const logoutUser = (req: Request, res: Response) => {
  //clearToken(res);
  res.status(200).json({ message: "User logged out" });
};


