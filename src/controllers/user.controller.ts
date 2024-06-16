import { Request, Response } from "express";
import login from "../utils/login";
import * as UserHandler from '../DAL/user.handler';
import { err, ok } from "../utils/response";

const NAMESPACE = "Controllers restaurant.ts";

export const authenticateUser = async (req: Request, res: Response) => {
    login.info(NAMESPACE, "authenticateUser function called");
    const { email, password } = req.body;
    
    const results = await UserHandler.authenticateUser(email, password);
    if (results.error) {
      err(res, results.error, results.code)
    }
    else {
      const user = {
        name: results.success.name,
        surname: results.success.surname,
        email: results.success.email,
        _id: results.success._id,
        token: results.success.token,
      };
      ok(res, user );
    }
  };

  export const logoutUser = (req: Request, res: Response) => {

  res.status(200).json({ message: "User logged out" });
};



